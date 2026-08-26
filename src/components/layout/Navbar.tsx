import React from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import {
  Terminal,
  FolderGit2,
  Sun,
  Moon,
  Binary
} from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';

export const Navbar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    state,
    toggleTheme,
    overallProgressPercent,
    completedItemsCount,
    totalItemsCount
  } = useRoadmap();

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Left: Brand Logo & Navigation */}
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-mono font-bold text-sm shadow-xs">
                <Binary className="w-4 h-4" />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-sm text-black dark:text-white tracking-tight leading-none">
                  MASTERY.SYS
                </div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-0.5">
                  Backend + DevOps
                </div>
              </div>
            </div>

            {/* Navigation Tabs (Roadmap / Projects) */}
            <nav className="flex items-center bg-neutral-100 dark:bg-neutral-900 p-1 rounded-xl border border-neutral-200/80 dark:border-neutral-800">
              <button
                onClick={() => setActiveTab('roadmap')}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'roadmap'
                    ? 'bg-white dark:bg-neutral-800 text-black dark:text-white shadow-xs font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Roadmap</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                    activeTab === 'roadmap'
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {completedItemsCount}/{totalItemsCount}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'projects'
                    ? 'bg-white dark:bg-neutral-800 text-black dark:text-white shadow-xs font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <FolderGit2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Projects</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                    activeTab === 'projects'
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  6 Capstones
                </span>
              </button>
            </nav>
          </div>

          {/* Right: Progress Indicator & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Overall Progress Widget */}
            <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <div className="flex flex-col gap-1 w-24 sm:w-32">
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 uppercase">
                  <span>Progress</span>
                  <span className="font-bold text-black dark:text-white">{overallProgressPercent}%</span>
                </div>
                <ProgressBar percent={overallProgressPercent} height="xs" />
              </div>
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
      </div>
    </header>
  );
};
