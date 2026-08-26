import React from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import { ROADMAP_PHASES } from '../../data/roadmapData';
import { PRODUCTION_PROJECTS } from '../../data/projectsData';
import { ProgressBar } from '../ui/ProgressBar';
import { Badge } from '../ui/Badge';
import {
  CheckCircle2,
  Clock,
  ListFilter,
  Flame,
  ArrowRight,
  TrendingUp,
  FolderGit2,
  Award,
  Terminal,
  ShieldAlert,
  Play
} from 'lucide-react';

import { ItemProgress, MasteryLevel } from '../../types';

export const DashboardView: React.FC = () => {
  const {
    totalItemsCount,
    completedItemsCount,
    inProgressItemsCount,
    remainingItemsCount,
    overallProgressPercent,
    phaseStats,
    todayStats,
    state,
    setActiveTab,
    setSelectedPhaseIdFilter,
    allRoadmapItems
  } = useRoadmap();

  // Find recent in-progress items to showcase as current active learning focus
  const activeLearningItems = allRoadmapItems.filter(
    item => state.items[item.id]?.status === 'in_progress'
  ).slice(0, 4);

  // Compute completed projects
  const completedProjectsCount = PRODUCTION_PROJECTS.filter(
    p => state.projects[p.id]?.status === 'completed'
  ).length;

  // Compute mastery counts across items
  const masteryCounts = {
    L1: 0,
    L2: 0,
    L3: 0,
    L4: 0,
    L5: 0
  };

  (Object.values(state.items) as ItemProgress[]).forEach(item => {
    if (item.masteryLevel && masteryCounts[item.masteryLevel] !== undefined) {
      masteryCounts[item.masteryLevel]++;
    }
  });

  const handleNavigateToPhase = (phaseId: string) => {
    setSelectedPhaseIdFilter(phaseId);
    setActiveTab('roadmap');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Hero Overview Block */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <Badge variant="filled" size="sm">
                ENGINEERING PROGRESSION
              </Badge>
              <span className="text-xs font-mono text-neutral-500">v1.0.0</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white tracking-tight">
              Backend + DevOps Mastery
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-mono max-w-2xl leading-relaxed">
              "Master the fundamentals → build real systems → break them → debug them → deploy them → monitor them → scale them → recover them."
            </p>
          </div>

          {/* Large Overall Progress Dial / Box */}
          <div className="lg:w-72 p-4 rounded-xl bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 flex-shrink-0">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-xs font-mono text-neutral-500 uppercase">Overall Progress</span>
              <span className="text-2xl font-bold font-mono text-black dark:text-white">
                {overallProgressPercent}%
              </span>
            </div>
            <ProgressBar percent={overallProgressPercent} height="md" />
            <div className="mt-3 pt-2.5 border-t border-neutral-200 dark:border-neutral-800 flex justify-between text-xs font-mono text-neutral-500">
              <span>{completedItemsCount} of {totalItemsCount} Topics</span>
              <span>{remainingItemsCount} Left</span>
            </div>
          </div>
        </div>

        {/* 4 Quick Stat Metric Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
          <div
            onClick={() => setActiveTab('roadmap')}
            className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 hover:border-black dark:hover:border-white transition-all cursor-pointer"
          >
            <div className="text-[11px] font-mono text-neutral-500 uppercase flex items-center justify-between">
              <span>Total Items</span>
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <div className="text-2xl font-bold text-black dark:text-white font-mono mt-1">
              {totalItemsCount}
            </div>
            <div className="text-[10px] font-mono text-neutral-400 mt-0.5">Across 7 phases</div>
          </div>

          <div
            onClick={() => setActiveTab('completed')}
            className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 hover:border-black dark:hover:border-white transition-all cursor-pointer"
          >
            <div className="text-[11px] font-mono text-neutral-500 uppercase flex items-center justify-between">
              <span>Completed</span>
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
            <div className="text-2xl font-bold text-black dark:text-white font-mono mt-1">
              {completedItemsCount}
            </div>
            <div className="text-[10px] font-mono text-neutral-400 mt-0.5">{overallProgressPercent}% Mastered</div>
          </div>

          <div
            onClick={() => setActiveTab('in-progress')}
            className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 hover:border-black dark:hover:border-white transition-all cursor-pointer"
          >
            <div className="text-[11px] font-mono text-neutral-500 uppercase flex items-center justify-between">
              <span>In Progress</span>
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div className="text-2xl font-bold text-black dark:text-white font-mono mt-1">
              {inProgressItemsCount}
            </div>
            <div className="text-[10px] font-mono text-neutral-400 mt-0.5">Active concepts</div>
          </div>

          <div
            onClick={() => setActiveTab('remaining')}
            className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 hover:border-black dark:hover:border-white transition-all cursor-pointer"
          >
            <div className="text-[11px] font-mono text-neutral-500 uppercase flex items-center justify-between">
              <span>Remaining</span>
              <ListFilter className="w-3.5 h-3.5" />
            </div>
            <div className="text-2xl font-bold text-black dark:text-white font-mono mt-1">
              {remainingItemsCount}
            </div>
            <div className="text-[10px] font-mono text-neutral-400 mt-0.5">To be completed</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Phase Progress Breakdown + Current Learning Focus */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Phase Progress Breakdown */}
        <div className="lg:col-span-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-black dark:text-white tracking-tight">
                Curriculum by Phase
              </h3>
              <p className="text-xs font-mono text-neutral-500">
                Click any phase to navigate and view individual learning items
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedPhaseIdFilter(null);
                setActiveTab('roadmap');
              }}
              className="text-xs font-mono text-neutral-600 dark:text-neutral-300 hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3 pt-2">
            {ROADMAP_PHASES.map(phase => {
              const stats = phaseStats[phase.id] || { total: 0, completed: 0, inProgress: 0, percent: 0 };
              return (
                <div
                  key={phase.id}
                  onClick={() => handleNavigateToPhase(phase.id)}
                  className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/40 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-black dark:hover:border-white transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="min-w-0 pr-2">
                      <div className="font-semibold text-xs sm:text-sm text-black dark:text-white truncate">
                        {phase.title}
                      </div>
                      <div className="text-[11px] font-mono text-neutral-500 truncate">
                        {phase.subtitle}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs font-bold font-mono text-black dark:text-white">
                        {stats.percent}%
                      </span>
                      <div className="text-[10px] font-mono text-neutral-400">
                        {stats.completed}/{stats.total}
                      </div>
                    </div>
                  </div>
                  <ProgressBar percent={stats.percent} height="sm" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 1 Col: Today Focus & Mastery Radar */}
        <div className="space-y-6">
          {/* Today Session Card */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-xs space-y-3.5">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-black dark:text-white flex items-center gap-2">
                <Flame className="w-4 h-4" />
                <span>Today's Learning Session</span>
              </h4>
              <button
                onClick={() => setActiveTab('today')}
                className="text-[11px] font-mono text-neutral-500 hover:text-black dark:hover:text-white"
              >
                Manage →
              </button>
            </div>

            <div className="p-3 rounded-lg bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 text-xs font-mono space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Study Time Today:</span>
                <span className="font-bold text-black dark:text-white">{todayStats.studyFormatted}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Completed Today:</span>
                <span className="font-bold text-black dark:text-white">{todayStats.completedToday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Pending Targets:</span>
                <span className="font-bold text-black dark:text-white">{todayStats.remainingToday}</span>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('today')}
              className="w-full py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-xs font-mono font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Open Daily Study Workspace</span>
            </button>
          </div>

          {/* Mastery Level Distribution (L1-L5) */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-black dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Mastery Model (L1 → L5)</span>
              </h4>
              <button
                onClick={() => setActiveTab('assessment')}
                className="text-[11px] font-mono text-neutral-500 hover:text-black dark:hover:text-white"
              >
                Self Exam →
              </button>
            </div>

            <div className="space-y-2 font-mono text-xs">
              {[
                { level: 'L1', name: 'Recall', count: masteryCounts.L1, desc: 'Explain without AI' },
                { level: 'L2', name: 'Implement', count: masteryCounts.L2, desc: 'Build from blank canvas' },
                { level: 'L3', name: 'Debug', count: masteryCounts.L3, desc: 'Diagnose failures' },
                { level: 'L4', name: 'Design', count: masteryCounts.L4, desc: 'System trade-offs' },
                { level: 'L5', name: 'Production', count: masteryCounts.L5, desc: 'Deploy & recover' }
              ].map(m => (
                <div
                  key={m.level}
                  className="flex items-center justify-between p-2 rounded border border-neutral-100 dark:border-neutral-800"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-black dark:text-white">{m.level}</span>
                    <span className="text-neutral-500 text-[11px]">{m.name}</span>
                  </div>
                  <span className="font-semibold text-black dark:text-white">{m.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Capstone Projects Summary */}
          <div
            onClick={() => setActiveTab('projects')}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-xs space-y-3 cursor-pointer hover:border-black dark:hover:border-white transition-colors"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-black dark:text-white flex items-center gap-2">
                <FolderGit2 className="w-4 h-4" />
                <span>Production Projects</span>
              </h4>
              <span className="text-xs font-mono font-bold text-black dark:text-white">
                {completedProjectsCount}/6 Built
              </span>
            </div>
            <p className="text-xs font-mono text-neutral-500 leading-relaxed">
              REST API, E-commerce, Video Processing, Multi-tenant SaaS, Distributed Orders, Capstone Platform.
            </p>
            <ProgressBar percent={(completedProjectsCount / 6) * 100} height="sm" />
          </div>
        </div>
      </div>

      {/* Active In-Progress Quick Cards */}
      {activeLearningItems.length > 0 && (
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-black dark:text-white flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Currently In Progress</span>
            </h3>
            <button
              onClick={() => setActiveTab('in-progress')}
              className="text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:underline"
            >
              View all active ({inProgressItemsCount}) →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {activeLearningItems.map(item => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedPhaseIdFilter(item.phaseId);
                  setActiveTab('roadmap');
                }}
                className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 hover:border-black dark:hover:border-white transition-all cursor-pointer space-y-1.5"
              >
                <Badge variant="outline" size="sm">
                  {item.technologyTitle}
                </Badge>
                <div className="text-xs font-semibold text-black dark:text-white line-clamp-2">
                  {item.title}
                </div>
                <div className="text-[10px] font-mono text-neutral-400">
                  {item.level} Level
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
