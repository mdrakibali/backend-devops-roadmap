import React, { useState } from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import { ItemCard } from '../roadmap/ItemCard';
import { ItemNotesModal } from '../roadmap/ItemNotesModal';
import { RoadmapItem } from '../../types';
import {
  Play,
  Pause,
  RotateCcw,
  Plus,
  Clock,
  CheckCircle2,
  Calendar,
  Save,
  BookOpen,
  HelpCircle,
  FileEdit,
  History
} from 'lucide-react';
import { Badge } from '../ui/Badge';

export const TodayView: React.FC = () => {
  const {
    state,
    todayStats,
    startTimer,
    pauseTimer,
    resetTimer,
    addStudyMinutes,
    saveDailyNotes,
    toggleTodayFocus,
    allRoadmapItems,
    itemMap,
    setActiveTab
  } = useRoadmap();

  const [activeNotesItem, setActiveNotesItem] = useState<RoadmapItem | null>(null);
  const todayStr = new Date().toISOString().split('T')[0];
  const [dailyNoteText, setDailyNoteText] = useState(
    state.dailySessions[todayStr]?.notes || ''
  );

  // Format today's human-readable date
  const todayDateFormatted = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const todayFocusItems = state.todayFocusItemIds
    .map(id => itemMap.get(id))
    .filter((item): item is RoadmapItem => Boolean(item));

  // Quick suggestions from In Progress
  const inProgressSuggestions = allRoadmapItems.filter(
    item => state.items[item.id]?.status === 'in_progress' && !state.todayFocusItemIds.includes(item.id)
  );

  const handleSaveNotes = () => {
    saveDailyNotes(dailyNoteText);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Top Banner: Date & Active Study Timer */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="filled" size="sm">
                DAILY MASTERY DISCIPLINE
              </Badge>
              <span className="text-xs font-mono text-neutral-500">{todayDateFormatted}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight">
              Today's Engineering Session
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-1">
              Track focused, uninterrupted engineering practice without relying on AI code generation.
            </p>
          </div>

          {/* Stopwatch Timer Block */}
          <div className="p-4 rounded-xl bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <div className="text-center sm:text-left">
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                Active Study Timer
              </div>
              <div className="text-3xl font-bold font-mono text-black dark:text-white tracking-tight">
                {todayStats.studyFormatted}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {state.isTimerRunning ? (
                <button
                  onClick={pauseTimer}
                  className="p-2.5 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 font-mono text-xs flex items-center gap-1.5 transition-colors"
                  title="Pause timer"
                >
                  <Pause className="w-4 h-4" />
                  <span>Pause</span>
                </button>
              ) : (
                <button
                  onClick={startTimer}
                  className="p-2.5 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 font-mono text-xs flex items-center gap-1.5 transition-colors"
                  title="Start study session timer"
                >
                  <Play className="w-4 h-4" />
                  <span>Start Session</span>
                </button>
              )}

              <button
                onClick={resetTimer}
                className="p-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                title="Reset timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => addStudyMinutes(30)}
                className="px-2.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                title="Add 30 minutes manually"
              >
                +30m
              </button>
            </div>
          </div>
        </div>

        {/* 3 Quick Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
          <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-neutral-500 uppercase">Target Topics Today</span>
              <div className="text-xl font-bold font-mono text-black dark:text-white mt-0.5">
                {todayFocusItems.length}
              </div>
            </div>
            <Clock className="w-4 h-4 text-neutral-400" />
          </div>

          <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-neutral-500 uppercase">Completed Today</span>
              <div className="text-xl font-bold font-mono text-black dark:text-white mt-0.5">
                {todayStats.completedToday}
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-neutral-400" />
          </div>

          <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-neutral-500 uppercase">Remaining Today</span>
              <div className="text-xl font-bold font-mono text-black dark:text-white mt-0.5">
                {todayStats.remainingToday}
              </div>
            </div>
            <Calendar className="w-4 h-4 text-neutral-400" />
          </div>
        </div>
      </div>

      {/* Main Section: Today's Target List & Weekly Routine Guide */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Today's Selected Topics */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-black dark:text-white tracking-tight">
                  Today's Learning Focus Checklist
                </h3>
                <p className="text-xs font-mono text-neutral-500">
                  Targeted roadmap concepts scheduled for deep implementation today
                </p>
              </div>
              <button
                onClick={() => setActiveTab('roadmap')}
                className="text-xs font-mono text-neutral-600 dark:text-neutral-300 hover:underline flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add from Roadmap</span>
              </button>
            </div>

            {todayFocusItems.length === 0 ? (
              <div className="py-12 text-center border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl p-6 text-xs font-mono text-neutral-500 space-y-3">
                <BookOpen className="w-8 h-8 mx-auto text-neutral-400" />
                <p>No topics selected for today's focus yet.</p>
                <button
                  onClick={() => setActiveTab('roadmap')}
                  className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg text-xs font-mono"
                >
                  Browse Roadmap & Select Topics
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {todayFocusItems.map(item => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    onOpenNotes={setActiveNotesItem}
                  />
                ))}
              </div>
            )}

            {/* Quick Add Suggestions from In-Progress */}
            {inProgressSuggestions.length > 0 && (
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <div className="text-xs font-mono text-neutral-500 uppercase mb-2">
                  Quick Add from In Progress Topics:
                </div>
                <div className="flex flex-wrap gap-2">
                  {inProgressSuggestions.slice(0, 5).map(item => (
                    <button
                      key={item.id}
                      onClick={() => toggleTodayFocus(item.id)}
                      className="px-2.5 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-mono hover:border-black dark:hover:border-white transition-colors flex items-center gap-1.5"
                    >
                      <Plus className="w-3 h-3" />
                      <span>{item.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Daily Learning Reflections / Notes */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-black dark:text-white flex items-center gap-2">
                <FileEdit className="w-4 h-4" />
                <span>Today's Daily Engineering Log & Reflections</span>
              </h3>
              <button
                onClick={handleSaveNotes}
                className="px-3 py-1.5 rounded-lg bg-black text-white dark:bg-white dark:text-black text-xs font-mono font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Log</span>
              </button>
            </div>
            <textarea
              rows={5}
              value={dailyNoteText}
              onChange={e => setDailyNoteText(e.target.value)}
              placeholder="What did you build today? What broke? What error did you diagnose with Linux/Postgres/Node commands without asking AI? Write down your findings..."
              className="w-full p-3.5 text-xs sm:text-sm font-mono rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-black text-black dark:text-white focus:outline-hidden focus:ring-1 focus:ring-black dark:focus:ring-white transition-colors"
            />
          </div>
        </div>

        {/* Right 1 Col: Weekly 2-4h System Protocol Guide */}
        <div className="space-y-6">
          {/* Weekly Learning System Guide Card */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-xs space-y-4">
            <h4 className="text-sm font-bold text-black dark:text-white flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Weekly Learning Protocol</span>
            </h4>
            <p className="text-xs font-mono text-neutral-500 leading-relaxed">
              If dedicating 2–4 hours daily, structure your session using this cadence:
            </p>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/40">
                <div className="font-bold text-black dark:text-white">30 min — Theory & Docs</div>
                <div className="text-[11px] text-neutral-500">Official documentation & mental models</div>
              </div>
              <div className="p-2.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/40">
                <div className="font-bold text-black dark:text-white">90 min — Implementation</div>
                <div className="text-[11px] text-neutral-500">Building from blank canvas without AI</div>
              </div>
              <div className="p-2.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/40">
                <div className="font-bold text-black dark:text-white">30 min — Break & Debug</div>
                <div className="text-[11px] text-neutral-500">Intentionally trigger errors & diagnose root cause</div>
              </div>
              <div className="p-2.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/40">
                <div className="font-bold text-black dark:text-white">30 min — Notes & Testing</div>
                <div className="text-[11px] text-neutral-500">Write unit tests & record takeaways</div>
              </div>
            </div>
          </div>

          {/* AI-Free 3-Phase Protocol Card */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-xs space-y-3">
            <h4 className="text-sm font-bold text-black dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              <span>When Stuck: 3-Phase Rule</span>
            </h4>
            <div className="text-xs font-mono space-y-2 text-neutral-600 dark:text-neutral-400">
              <div>
                <strong className="text-black dark:text-white">1. Isolate the Layer:</strong> Application? Database? Network? OS? Config?
              </div>
              <div>
                <strong className="text-black dark:text-white">2. Ask:</strong> What do I expect vs What is actually happening?
              </div>
              <div>
                <strong className="text-black dark:text-white">3. If consulting AI:</strong> Ask for reasoning critique or test cases—never copy-paste solutions.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Item Notes Modal */}
      <ItemNotesModal
        item={activeNotesItem}
        onClose={() => setActiveNotesItem(null)}
      />
    </div>
  );
};
