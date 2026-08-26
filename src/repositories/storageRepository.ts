import { AppStateData, ItemProgress, TechMasteryProgress, ProjectProgress } from '../types';
import { ROADMAP_PHASES, SELF_ASSESSMENT_TECHNOLOGIES } from '../data/roadmapData';
import { PRODUCTION_PROJECTS } from '../data/projectsData';

const STORAGE_KEY = 'backend_devops_mastery_v4_clean';

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

  // Populate all roadmap items strictly in not_started (0% progress) state
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

  // Initialize self assessment technologies in clean state
  SELF_ASSESSMENT_TECHNOLOGIES.forEach(techName => {
    techMastery[techName] = {
      technologyId: techName,
      level: 'None',
      masteryL: 'L1',
      answers: {
        q1_explain: false,
        q2_implement: false,
        q3_debug: false,
        q4_design: false,
        q5_production: false
      }
    };
  });

  // Initialize projects strictly in not_started state
  PRODUCTION_PROJECTS.forEach(project => {
    projects[project.id] = {
      projectId: project.id,
      status: 'not_started',
      completedChecklistIds: [],
      notes: ''
    };
  });

  return {
    version: '4.0.0',
    items,
    techMastery,
    projects,
    dailySessions: {},
    todayFocusItemIds: [],
    todayStudySeconds: 0,
    isTimerRunning: false,
    aiFreeModeActive: false,
    theme: 'dark',
    language: 'en',
    lastActiveTab: 'roadmap'
  };
}

export class LocalStorageRepository implements IStorageRepository {
  loadState(): AppStateData {
    if (typeof window === 'undefined') {
      return getInitialDefaultState();
    }
    try {
      // Clear legacy storage keys
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && key.startsWith('backend_devops_') && key !== STORAGE_KEY) {
          localStorage.removeItem(key);
        }
      }

      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        const defaultState = getInitialDefaultState();
        this.saveState(defaultState);
        return defaultState;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== '4.0.0' || !parsed.items) {
        const defaultState = getInitialDefaultState();
        this.saveState(defaultState);
        return defaultState;
      }

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
    this.saveState(defaultState);
    return defaultState;
  }
}

export const storageRepository: IStorageRepository = new LocalStorageRepository();
