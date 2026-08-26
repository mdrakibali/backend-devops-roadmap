import React from 'react';
import { useRoadmap, TabId } from '../../context/RoadmapContext';
import {
  Terminal,
  FolderGit2,
  X,
  Flame,
  Binary
} from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';

interface SidebarProps {
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

interface NavItem {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number | string;
}

export const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, onCloseMobile }) => {
  const {
    activeTab,
    setActiveTab,
    totalItemsCount,
    completedItemsCount,
    inProgressItemsCount,
    remainingItemsCount,
    overallProgressPercent,
    todayStats
  } = useRoadmap();

  const navItems: NavItem[] = [
    { id: 'roadmap', label: 'Roadmap', icon: Terminal, badge: `${completedItemsCount}/${totalItemsCount}` },
    { id: 'projects', label: 'Projects', icon: FolderGit2, badge: '6 Capstones' }
  ];

  const handleSelectTab = (tab: TabId) => {
    setActiveTab(tab);
    onCloseMobile();
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-neutral-50 dark:bg-black border-r border-neutral-200 dark:border-neutral-800 transition-colors">
      {/* Brand Header */}
      <div className="p-4 sm:p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-mono font-bold text-sm shadow-xs">
            <Binary className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-sm text-black dark:text-white tracking-tight">
              MASTERY.SYS
            </div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
              Backend + DevOps
            </div>
          </div>
        </div>

        {/* Mobile close button */}
        <button
          onClick={onCloseMobile}
          className="lg:hidden p-1.5 text-neutral-500 hover:text-black dark:hover:text-white rounded-md"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Summary Card */}
      <div className="p-4 mx-3 my-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl">
        <div className="flex items-center justify-between text-xs font-mono mb-2">
          <span className="text-neutral-500 uppercase">Overall Progress</span>
          <span className="font-bold text-black dark:text-white">{overallProgressPercent}%</span>
        </div>
        <ProgressBar percent={overallProgressPercent} height="sm" />
        <div className="flex justify-between items-center text-[11px] font-mono text-neutral-500 mt-2.5 pt-2 border-t border-neutral-100 dark:border-neutral-800">
          <span>{completedItemsCount}/{totalItemsCount} Topics</span>
          <span>{remainingItemsCount} Left</span>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
        {navItems.map(item => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleSelectTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-xs'
                  : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-900'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </div>
              {item.badge !== undefined && (
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors ${
                    isActive
                      ? 'bg-neutral-800 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-800'
                      : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer Philosophy Reminder */}
      <div className="p-3.5 m-3 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-lg bg-neutral-100/50 dark:bg-neutral-900/50 text-[11px] font-mono text-neutral-600 dark:text-neutral-400">
        <div className="flex items-center gap-1.5 font-semibold text-black dark:text-white mb-1">
          <Flame className="w-3.5 h-3.5" />
          <span>Core Discipline</span>
        </div>
        <p className="leading-relaxed">
          Learn → Build → Break → Debug → Deploy → Monitor → Scale → Recover.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 xl:w-72 h-full flex-shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          {/* Drawer Content */}
          <div className="relative w-72 max-w-[80vw] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
