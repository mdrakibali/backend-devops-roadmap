import { AppStateData, ItemProgress, TechMasteryProgress, ProjectProgress, DailyStudySession } from '../types';
import { ROADMAP_PHASES, SELF_ASSESSMENT_TECHNOLOGIES } from '../data/roadmapData';
import { PRODUCTION_PROJECTS } from '../data/projectsData';

const STORAGE_KEY = 'backend_devops_mastery_state_v1';

export interface IStorageRepository {
  loadState(): AppStateData;
  saveState(state: AppStateData): void;
  exportJson(): string;
  importJson(jsonString: string): boolean;
  resetAll(): AppStateData;
}

export function getInitialDefaultState(): AppStateData {
  const items: Record<string, ItemProgress> = {};
  const techMastery: Record<string, TechMasteryProgress> = {};
  const projects: Record<string, ProjectProgress> = {};
  const now = new Date().toISOString();

  // Populate all roadmap items
  ROADMAP_PHASES.forEach(phase => {
    phase.technologies.forEach(tech => {
      tech.levels.forEach(level => {
        level.items.forEach(item => {
          items[item.id] = {
            itemId: item.id,
            status: 'not_started',
            masteryLevel: undefined,
            notes: '',
            updatedAt: now
          };
        });
      });
    });
  });

  // Seed a realistic initial progression so the dashboard is immediately interactive and inspiring
  // Phase 1 foundations
  const initialCompletedIds = [
    'linux-terminal', 'linux-fs', 'linux-paths', 'linux-perms', 'linux-env', 'linux-pkg',
    'net-ip', 'net-ports', 'net-tcp-udp', 'net-http-req', 'net-dns-basic',
    'git-core-commands', 'git-branching', 'git-remotes',
    'jsts-scope', 'jsts-promises', 'jsts-error-handling', 'jsts-modules',
    'node-fs-path', 'node-http-module', 'node-events',
    'exp-routing', 'exp-middleware-basic', 'exp-controller-pattern',
    'api-rest-principles', 'api-crud-json'
  ];

  const initialInProgressIds = [
    'linux-systemd', 'linux-systemctl', 'linux-signals',
    'net-tcp-handshake', 'net-http-methods', 'net-status-codes',
    'jsts-eventloop', 'node-loop-phases',
    'pg-tables-types', 'pg-crud-ops', 'pg-joins-all'
  ];

  initialCompletedIds.forEach(id => {
    if (items[id]) {
      items[id].status = 'completed';
      items[id].completedAt = new Date(Date.now() - 86400000 * 3).toISOString();
      items[id].masteryLevel = 'L2';
    }
  });

  initialInProgressIds.forEach(id => {
    if (items[id]) {
      items[id].status = 'in_progress';
      items[id].masteryLevel = 'L1';
    }
  });

  // Initialize self assessment technologies
  SELF_ASSESSMENT_TECHNOLOGIES.forEach(techName => {
    techMastery[techName] = {
      technologyId: techName,
      level: techName === 'Linux' || techName === 'Git' || techName === 'JavaScript/TypeScript' ? 'Basic' : 'None',
      masteryL: techName === 'Linux' ? 'L2' : 'L1',
      answers: {
        q1_explain: techName === 'Linux' || techName === 'Git',
        q2_implement: techName === 'Linux',
        q3_debug: false,
        q4_design: false,
        q5_production: false
      }
    };
  });

  // Initialize projects
  PRODUCTION_PROJECTS.forEach(project => {
    projects[project.id] = {
      projectId: project.id,
      status: project.id === 'proj-1' ? 'in_progress' : 'not_started',
      completedChecklistIds: project.id === 'proj-1' ? ['p1-auth', 'p1-crud'] : [],
      notes: ''
    };
  });

  const todayStr = new Date().toISOString().split('T')[0];
  const initialDailySessions: Record<string, DailyStudySession> = {
    [todayStr]: {
      date: todayStr,
      minutesSpent: 90,
      completedItemIds: ['linux-env', 'linux-pkg'],
      focusItemIds: ['linux-systemd', 'linux-systemctl', 'net-tcp-handshake'],
      notes: 'Focused on Linux systemd unit files and TCP 3-way handshake mechanics. Ready for lab practice.'
    }
  };

  return {
    version: '1.0.0',
    items,
    techMastery,
    projects,
    dailySessions: initialDailySessions,
    todayFocusItemIds: ['linux-systemd', 'linux-systemctl', 'net-tcp-handshake'],
    todayStudySeconds: 5400, // 1h 30m
    isTimerRunning: false,
    aiFreeModeActive: true,
    theme: 'light',
    lastActiveTab: 'dashboard'
  };
}

export class LocalStorageRepository implements IStorageRepository {
  loadState(): AppStateData {
    if (typeof window === 'undefined') {
      return getInitialDefaultState();
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        const defaultState = getInitialDefaultState();
        this.saveState(defaultState);
        return defaultState;
      }
      const parsed = JSON.parse(raw);
      // Merge with default to ensure any new items from roadmap are preserved
      const base = getInitialDefaultState();
      return {
        ...base,
        ...parsed,
        items: { ...base.items, ...(parsed.items || {}) },
        techMastery: { ...base.techMastery, ...(parsed.techMastery || {}) },
        projects: { ...base.projects, ...(parsed.projects || {}) },
        dailySessions: { ...base.dailySessions, ...(parsed.dailySessions || {}) }
      };
    } catch (e) {
      console.error('Failed to load state from localStorage:', e);
      return getInitialDefaultState();
    }
  }

  saveState(state: AppStateData): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state to localStorage:', e);
    }
  }

  exportJson(): string {
    const state = this.loadState();
    return JSON.stringify(state, null, 2);
  }

  importJson(jsonString: string): boolean {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || !parsed.items) {
        return false;
      }
      this.saveState(parsed);
      return true;
    } catch (e) {
      console.error('Invalid JSON import:', e);
      return false;
    }
  }

  resetAll(): AppStateData {
    const defaultState = getInitialDefaultState();
    // Reset all items to not started
    Object.keys(defaultState.items).forEach(k => {
      defaultState.items[k].status = 'not_started';
      defaultState.items[k].masteryLevel = undefined;
      defaultState.items[k].completedAt = undefined;
      defaultState.items[k].notes = '';
    });
    Object.keys(defaultState.projects).forEach(k => {
      defaultState.projects[k].status = 'not_started';
      defaultState.projects[k].completedChecklistIds = [];
    });
    defaultState.todayFocusItemIds = [];
    defaultState.todayStudySeconds = 0;
    this.saveState(defaultState);
    return defaultState;
  }
}

export const storageRepository: IStorageRepository = new LocalStorageRepository();
