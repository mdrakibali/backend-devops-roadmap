import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import {
  AppStateData,
  ItemProgress,
  ItemStatus,
  MasteryLevel,
  RoadmapItem,
  TechMasteryProgress
} from '../types';
import { ROADMAP_PHASES } from '../data/roadmapData';
import { PRODUCTION_PROJECTS } from '../data/projectsData';
import { storageRepository } from '../repositories/storageRepository';
import { translations } from '../i18n/translations';

export type TabId =
  | 'roadmap'
  | 'projects';

interface ToastMessage {
  id: string;
  text: string;
}

interface RoadmapContextType {
  state: AppStateData;
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  selectedPhaseIdFilter: string | null;
  setSelectedPhaseIdFilter: (phaseId: string | null) => void;
  searchModalOpen: boolean;
  setSearchModalOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toasts: ToastMessage[];
  addToast: (text: string) => void;

  // Actions
  toggleItemCompleted: (itemId: string) => void;
  setItemStatus: (itemId: string, status: ItemStatus) => void;
  setItemMastery: (itemId: string, mastery: MasteryLevel) => void;
  setItemNotes: (itemId: string, notes: string) => void;
  toggleTodayFocus: (itemId: string) => void;
  
  // Projects
  toggleProjectChecklist: (projectId: string, checklistId: string) => void;
  setProjectStatus: (projectId: string, status: 'not_started' | 'in_progress' | 'completed') => void;
  setProjectNotes: (projectId: string, notes: string) => void;

  // Self Assessment
  updateTechAssessment: (techName: string, updates: Partial<TechMasteryProgress>) => void;

  // Today Tracker & Timer
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  addStudyMinutes: (mins: number) => void;
  saveDailyNotes: (notes: string) => void;

  // Global Settings & Theme
  t: typeof translations.en;
  toggleTheme: () => void;
  toggleAiFreeMode: () => void;
  exportData: () => string;
  importData: (json: string) => boolean;
  resetAllProgress: () => void;

  // Computed data
  allRoadmapItems: RoadmapItem[];
  itemMap: Map<string, RoadmapItem>;
  totalItemsCount: number;
  completedItemsCount: number;
  inProgressItemsCount: number;
  remainingItemsCount: number;
  overallProgressPercent: number;
  phaseStats: Record<string, { total: number; completed: number; inProgress: number; percent: number }>;
  todayStats: { completedToday: number; remainingToday: number; studyFormatted: string };
}

const RoadmapContext = createContext<RoadmapContextType | undefined>(undefined);

export const RoadmapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppStateData>(() => storageRepository.loadState());
  const [activeTab, setActiveTabState] = useState<TabId>(() => {
    const saved = storageRepository.loadState()?.lastActiveTab as TabId;
    return saved === 'projects' ? 'projects' : 'roadmap';
  });
  const [selectedPhaseIdFilter, setSelectedPhaseIdFilter] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync with localStorage on state changes
  useEffect(() => {
    storageRepository.saveState(state);
  }, [state]);

  // Sync theme class with HTML document
  useEffect(() => {
    const root = document.documentElement;
    if (state.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [state.theme]);

  // Active study timer interval
  useEffect(() => {
    let interval: any = null;
    if (state.isTimerRunning) {
      interval = setInterval(() => {
        setState(prev => ({
          ...prev,
          todayStudySeconds: prev.todayStudySeconds + 1
        }));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [state.isTimerRunning]);

  const addToast = useCallback((text: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev.slice(-3), { id, text }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  }, []);

  const setActiveTab = useCallback((tab: TabId) => {
    setActiveTabState(tab);
    setState(prev => ({ ...prev, lastActiveTab: tab }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Compute flattened roadmap items list
  const allRoadmapItems = useMemo(() => {
    const list: RoadmapItem[] = [];
    ROADMAP_PHASES.forEach(phase => {
      phase.technologies.forEach(tech => {
        tech.levels.forEach(level => {
          level.items.forEach(item => {
            list.push(item);
          });
        });
      });
    });
    return list;
  }, []);

  const itemMap = useMemo(() => {
    const map = new Map<string, RoadmapItem>();
    allRoadmapItems.forEach(item => map.set(item.id, item));
    return map;
  }, [allRoadmapItems]);

  const totalItemsCount = allRoadmapItems.length;

  const completedItemsCount = useMemo(() => {
    return (Object.values(state.items) as ItemProgress[]).filter(i => i.status === 'completed').length;
  }, [state.items]);

  const inProgressItemsCount = useMemo(() => {
    return (Object.values(state.items) as ItemProgress[]).filter(i => i.status === 'in_progress').length;
  }, [state.items]);

  const remainingItemsCount = useMemo(() => {
    return totalItemsCount - completedItemsCount;
  }, [totalItemsCount, completedItemsCount]);

  const overallProgressPercent = useMemo(() => {
    if (totalItemsCount === 0) return 0;
    return Math.round((completedItemsCount / totalItemsCount) * 100);
  }, [completedItemsCount, totalItemsCount]);

  const phaseStats = useMemo(() => {
    const stats: Record<string, { total: number; completed: number; inProgress: number; percent: number }> = {};
    ROADMAP_PHASES.forEach(phase => {
      let total = 0;
      let completed = 0;
      let inProgress = 0;
      phase.technologies.forEach(tech => {
        tech.levels.forEach(level => {
          level.items.forEach(item => {
            total++;
            const itemProgress = state.items[item.id];
            if (itemProgress?.status === 'completed') {
              completed++;
            } else if (itemProgress?.status === 'in_progress') {
              inProgress++;
            }
          });
        });
      });
      const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
      stats[phase.id] = { total, completed, inProgress, percent };
    });
    return stats;
  }, [state.items]);

  // Today stats
  const todayStats = useMemo(() => {
    const todayStr = new Date().toISOString().split('T')[0];
    const focusIds = state.todayFocusItemIds || [];
    let completedToday = 0;
    let remainingToday = 0;

    focusIds.forEach(id => {
      if (state.items[id]?.status === 'completed') {
        completedToday++;
      } else {
        remainingToday++;
      }
    });

    const hours = Math.floor(state.todayStudySeconds / 3600);
    const mins = Math.floor((state.todayStudySeconds % 3600) / 60);
    const studyFormatted = `${hours}h ${mins}m`;

    return {
      completedToday,
      remainingToday,
      studyFormatted
    };
  }, [state.todayFocusItemIds, state.items, state.todayStudySeconds]);

  // Item modifications
  const toggleItemCompleted = useCallback((itemId: string) => {
    setState(prev => {
      const current = prev.items[itemId];
      const nextStatus: ItemStatus = current?.status === 'completed' ? 'not_started' : 'completed';
      const now = new Date().toISOString();
      const updatedItem: ItemProgress = {
        itemId,
        status: nextStatus,
        masteryLevel: nextStatus === 'completed' ? (current?.masteryLevel || 'L2') : undefined,
        notes: current?.notes || '',
        completedAt: nextStatus === 'completed' ? now : undefined,
        updatedAt: now
      };

      const title = itemMap.get(itemId)?.title || 'Topic';
      if (nextStatus === 'completed') {
        addToast(`Completed: ${title}`);
      } else {
        addToast(`Marked uncompleted: ${title}`);
      }

      return {
        ...prev,
        items: {
          ...prev.items,
          [itemId]: updatedItem
        }
      };
    });
  }, [itemMap, addToast]);

  const setItemStatus = useCallback((itemId: string, status: ItemStatus) => {
    setState(prev => {
      const current = prev.items[itemId];
      const now = new Date().toISOString();
      const title = itemMap.get(itemId)?.title || 'Topic';
      addToast(`Status updated: ${title} → ${status.replace('_', ' ')}`);

      return {
        ...prev,
        items: {
          ...prev.items,
          [itemId]: {
            itemId,
            status,
            masteryLevel: status === 'completed' ? (current?.masteryLevel || 'L2') : (status === 'in_progress' ? 'L1' : undefined),
            notes: current?.notes || '',
            completedAt: status === 'completed' ? now : undefined,
            updatedAt: now
          }
        }
      };
    });
  }, [itemMap, addToast]);

  const setItemMastery = useCallback((itemId: string, mastery: MasteryLevel) => {
    setState(prev => {
      const current = prev.items[itemId];
      const now = new Date().toISOString();
      const title = itemMap.get(itemId)?.title || 'Topic';
      addToast(`Mastery set to ${mastery}: ${title}`);

      return {
        ...prev,
        items: {
          ...prev.items,
          [itemId]: {
            itemId,
            status: current?.status || 'in_progress',
            masteryLevel: mastery,
            notes: current?.notes || '',
            completedAt: current?.completedAt,
            updatedAt: now
          }
        }
      };
    });
  }, [itemMap, addToast]);

  const setItemNotes = useCallback((itemId: string, notes: string) => {
    setState(prev => {
      const current = prev.items[itemId];
      const now = new Date().toISOString();
      return {
        ...prev,
        items: {
          ...prev.items,
          [itemId]: {
            itemId,
            status: current?.status || 'not_started',
            masteryLevel: current?.masteryLevel,
            notes,
            completedAt: current?.completedAt,
            updatedAt: now
          }
        }
      };
    });
    addToast('Note saved');
  }, [addToast]);

  const toggleTodayFocus = useCallback((itemId: string) => {
    setState(prev => {
      const exists = prev.todayFocusItemIds.includes(itemId);
      const updated = exists
        ? prev.todayFocusItemIds.filter(id => id !== itemId)
        : [...prev.todayFocusItemIds, itemId];
      
      const title = itemMap.get(itemId)?.title || 'Topic';
      if (!exists) {
        addToast(`Added to Today's Focus: ${title}`);
      } else {
        addToast(`Removed from Today's Focus: ${title}`);
      }

      return {
        ...prev,
        todayFocusItemIds: updated
      };
    });
  }, [itemMap, addToast]);

  // Project modifications
  const toggleProjectChecklist = useCallback((projectId: string, checklistId: string) => {
    setState(prev => {
      const current = prev.projects[projectId] || {
        projectId,
        status: 'not_started',
        completedChecklistIds: []
      };
      const exists = current.completedChecklistIds.includes(checklistId);
      const nextChecklist = exists
        ? current.completedChecklistIds.filter(id => id !== checklistId)
        : [...current.completedChecklistIds, checklistId];

      const projDef = PRODUCTION_PROJECTS.find(p => p.id === projectId);
      const totalChecklist = projDef?.checklist.length || 1;
      let nextStatus = current.status;
      if (nextChecklist.length === totalChecklist) {
        nextStatus = 'completed';
      } else if (nextChecklist.length > 0) {
        nextStatus = 'in_progress';
      } else {
        nextStatus = 'not_started';
      }

      addToast(`Project checklist updated (${nextChecklist.length}/${totalChecklist})`);

      return {
        ...prev,
        projects: {
          ...prev.projects,
          [projectId]: {
            ...current,
            completedChecklistIds: nextChecklist,
            status: nextStatus
          }
        }
      };
    });
  }, [addToast]);

  const setProjectStatus = useCallback((projectId: string, status: 'not_started' | 'in_progress' | 'completed') => {
    setState(prev => {
      const current = prev.projects[projectId] || {
        projectId,
        status: 'not_started',
        completedChecklistIds: []
      };
      addToast(`Project status: ${status.replace('_', ' ')}`);
      return {
        ...prev,
        projects: {
          ...prev.projects,
          [projectId]: {
            ...current,
            status
          }
        }
      };
    });
  }, [addToast]);

  const setProjectNotes = useCallback((projectId: string, notes: string) => {
    setState(prev => {
      const current = prev.projects[projectId] || {
        projectId,
        status: 'not_started',
        completedChecklistIds: []
      };
      return {
        ...prev,
        projects: {
          ...prev.projects,
          [projectId]: {
            ...current,
            notes
          }
        }
      };
    });
    addToast('Project notes saved');
  }, [addToast]);

  // Assessment modifications
  const updateTechAssessment = useCallback((techName: string, updates: Partial<TechMasteryProgress>) => {
    setState(prev => {
      const current = prev.techMastery[techName] || {
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
      return {
        ...prev,
        techMastery: {
          ...prev.techMastery,
          [techName]: {
            ...current,
            ...updates,
            answers: {
              ...current.answers,
              ...(updates.answers || {})
            }
          }
        }
      };
    });
    addToast(`Assessment updated for ${techName}`);
  }, [addToast]);

  // Timer controls
  const startTimer = useCallback(() => {
    setState(prev => ({ ...prev, isTimerRunning: true }));
    addToast('Study session timer started');
  }, [addToast]);

  const pauseTimer = useCallback(() => {
    setState(prev => ({ ...prev, isTimerRunning: false }));
    addToast('Study session timer paused');
  }, [addToast]);

  const resetTimer = useCallback(() => {
    setState(prev => ({ ...prev, isTimerRunning: false, todayStudySeconds: 0 }));
    addToast('Study session timer reset');
  }, [addToast]);

  const addStudyMinutes = useCallback((mins: number) => {
    setState(prev => ({ ...prev, todayStudySeconds: prev.todayStudySeconds + mins * 60 }));
    addToast(`Added +${mins}m to study time`);
  }, [addToast]);

  const saveDailyNotes = useCallback((notes: string) => {
    const todayStr = new Date().toISOString().split('T')[0];
    setState(prev => ({
      ...prev,
      dailySessions: {
        ...prev.dailySessions,
        [todayStr]: {
          date: todayStr,
          minutesSpent: Math.round(prev.todayStudySeconds / 60),
          completedItemIds: prev.todayFocusItemIds.filter(id => prev.items[id]?.status === 'completed'),
          focusItemIds: prev.todayFocusItemIds,
          notes
        }
      }
    }));
    addToast('Daily study log saved');
  }, [addToast]);

  // Theme
  const toggleTheme = useCallback(() => {
    setState(prev => {
      const nextTheme = prev.theme === 'dark' ? 'light' : 'dark';
      addToast(`Theme switched to ${nextTheme} mode`);
      return { ...prev, theme: nextTheme };
    });
  }, [addToast]);

  const t = translations.en;

  const toggleAiFreeMode = useCallback(() => {
    setState(prev => {
      const next = !prev.aiFreeModeActive;
      addToast(next ? 'AI-Free Protocol Active' : 'AI-Free Reminder Hidden');
      return { ...prev, aiFreeModeActive: next };
    });
  }, [addToast]);

  const exportData = useCallback(() => {
    return storageRepository.exportJson();
  }, []);

  const importData = useCallback((json: string) => {
    const ok = storageRepository.importJson(json);
    if (ok) {
      setState(storageRepository.loadState());
      addToast('Progress successfully restored from JSON!');
      return true;
    } else {
      addToast('Failed to import: Invalid JSON file');
      return false;
    }
  }, [addToast]);

  const resetAllProgress = useCallback(() => {
    const cleared = storageRepository.resetAll();
    setState(cleared);
    addToast('All progress has been reset to 0%.');
  }, [addToast]);

  // Keyboard shortcut for search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <RoadmapContext.Provider
      value={{
        state,
        activeTab,
        setActiveTab,
        selectedPhaseIdFilter,
        setSelectedPhaseIdFilter,
        searchModalOpen,
        setSearchModalOpen,
        searchQuery,
        setSearchQuery,
        toasts,
        addToast,
        toggleItemCompleted,
        setItemStatus,
        setItemMastery,
        setItemNotes,
        toggleTodayFocus,
        toggleProjectChecklist,
        setProjectStatus,
        setProjectNotes,
        updateTechAssessment,
        startTimer,
        pauseTimer,
        resetTimer,
        addStudyMinutes,
        saveDailyNotes,
        t,
        toggleTheme,
        toggleAiFreeMode,
        exportData,
        importData,
        resetAllProgress,
        allRoadmapItems,
        itemMap,
        totalItemsCount,
        completedItemsCount,
        inProgressItemsCount,
        remainingItemsCount,
        overallProgressPercent,
        phaseStats,
        todayStats
      }}
    >
      {children}
    </RoadmapContext.Provider>
  );
};

export const useRoadmap = () => {
  const context = useContext(RoadmapContext);
  if (!context) {
    throw new Error('useRoadmap must be used within a RoadmapProvider');
  }
  return context;
};
