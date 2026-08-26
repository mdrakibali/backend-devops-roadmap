import React from 'react';
import { useRoadmap, TabId } from '../../context/RoadmapContext';
import {
  Menu,
  Search,
  Sun,
  Moon,
  Shield,
  Terminal,
  Layers,
  Calendar,
  Clock,
  CheckCircle2,
  ListTodo,
  FolderGit2,
  Award,
  Settings
} from 'lucide-react';

interface HeaderProps {
  onOpenMobileMenu: () => void;
}

const TAB_TITLES: Record<TabId, { title: string; icon: React.ComponentType<{ className?: string }> }> = {
  dashboard: { title: 'Engineering Dashboard', icon: Layers },
  roadmap: { title: 'Master Roadmap', icon: Terminal },
  today: { title: "Today's Study Session", icon: Calendar },
  'in-progress': { title: 'In Progress Topics', icon: Clock },
  completed: { title: 'Completed Mastery Archive', icon: CheckCircle2 },
  remaining: { title: 'Remaining Curriculum', icon: ListTodo },
  projects: { title: 'Production Projects Ladder', icon: FolderGit2 },
  assessment: { title: 'Technology Self-Assessment', icon: Award },
  settings: { title: 'System Settings & Data', icon: Settings }
};

export const Header: React.FC<HeaderProps> = ({ onOpenMobileMenu }) => {
  const {
    activeTab,
    state,
    toggleTheme,
    setSearchModalOpen,
    toggleAiFreeMode,
    overallProgressPercent
  } = useRoadmap();

  const currentTabInfo = TAB_TITLES[activeTab] || { title: 'Dashboard', icon: Layers };
  const IconComponent = currentTabInfo.icon;

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left: Mobile Menu & Current Page Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
            aria-label="Open Navigation Drawer"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-black dark:text-white">
              <IconComponent className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                Backend + DevOps Mastery
              </div>
              <h1 className="text-sm sm:text-base font-semibold text-black dark:text-white tracking-tight">
                {currentTabInfo.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Right: Quick Search Button, AI-Free Toggle, Theme Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Bar / Trigger */}
          <button
            onClick={() => setSearchModalOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-600 text-xs font-mono transition-all"
            title="Global search (Ctrl+K / ⌘K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search roadmap...</span>
            <kbd className="hidden sm:inline-flex items-center text-[10px] bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 text-neutral-500">
              ⌘K
            </kbd>
          </button>

          {/* AI-Free Mode Button */}
          <button
            onClick={toggleAiFreeMode}
            className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-all ${
              state.aiFreeModeActive
                ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white font-medium'
                : 'border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
            title="Toggle AI-Free learning protocol banner"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>AI-FREE</span>
          </button>

          {/* Progress pill indicator */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono">
            <span className="text-neutral-500">Total:</span>
            <span className="font-semibold text-black dark:text-white">{overallProgressPercent}%</span>
          </div>

          {/* Theme Toggle (Sun / Moon) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title={state.theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {state.theme === 'dark' ? (
              <Sun className="w-4 h-4 text-neutral-200" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
