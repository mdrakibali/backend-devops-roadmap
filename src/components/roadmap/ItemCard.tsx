import React from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import { RoadmapItem, MasteryLevel, MASTERY_LEVELS } from '../../types';
import { Check, Edit3, Clock, Calendar, CheckSquare2, Square } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface ItemCardProps {
  item: RoadmapItem;
  onOpenNotes: (item: RoadmapItem) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, onOpenNotes }) => {
  const {
    state,
    toggleItemCompleted,
    setItemStatus,
    setItemMastery,
    toggleTodayFocus,
    t
  } = useRoadmap();

  const progress = state.items[item.id];
  const isCompleted = progress?.status === 'completed';
  const isInProgress = progress?.status === 'in_progress';
  const hasNotes = Boolean(progress?.notes && progress.notes.trim().length > 0);
  const isTodayFocus = state.todayFocusItemIds.includes(item.id);
  const mastery = progress?.masteryLevel || (isCompleted ? 'L2' : 'L1');

  // Format completed date
  const completedDateFormatted = progress?.completedAt
    ? new Date(progress.completedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    : null;

  return (
    <div
      className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
        isCompleted
          ? 'bg-neutral-50/80 dark:bg-neutral-900/40 border-neutral-300 dark:border-neutral-800/80 text-neutral-600 dark:text-neutral-400'
          : isInProgress
          ? 'bg-white dark:bg-neutral-900 border-black/60 dark:border-white/60 shadow-xs text-neutral-900 dark:text-neutral-100'
          : 'bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800/60 hover:border-neutral-400 dark:hover:border-neutral-700 text-neutral-800 dark:text-neutral-200'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        {/* Checkbox + Title */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <button
            onClick={() => toggleItemCompleted(item.id)}
            className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center transition-all flex-shrink-0 ${
              isCompleted
                ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                : 'border-neutral-400 dark:border-neutral-600 hover:border-black dark:hover:border-white bg-transparent'
            }`}
            title={isCompleted ? t.markUncompleted : t.markCompleted}
            aria-label={`Toggle completion for ${item.title}`}
          >
            {isCompleted && <Check className="w-3.5 h-3.5 stroke-[3]" />}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span
                className={`text-xs sm:text-sm font-medium tracking-tight ${
                  isCompleted ? 'line-through opacity-75' : ''
                }`}
              >
                {item.title}
              </span>
            </div>

            {/* Badges row */}
            <div className="flex items-center gap-1.5 flex-wrap text-[11px] font-mono text-neutral-500">
              <Badge variant="outline" size="sm">
                {item.level}
              </Badge>
              <Badge variant="subtle" size="sm">
                {item.technologyTitle}
              </Badge>

              {isCompleted && (
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-700 dark:text-neutral-300 font-medium">
                  • {mastery} ({MASTERY_LEVELS[mastery]?.name})
                </span>
              )}

              {completedDateFormatted && (
                <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
                  • {completedDateFormatted}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Quick action buttons: Mastery, Notes, Focus */}
        <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
          {/* Status cycle button */}
          <button
            onClick={() => {
              if (isCompleted) setItemStatus(item.id, 'not_started');
              else if (isInProgress) setItemStatus(item.id, 'completed');
              else setItemStatus(item.id, 'in_progress');
            }}
            className={`px-2 py-1 rounded text-[10px] sm:text-[11px] font-mono font-medium border transition-colors ${
              isCompleted
                ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700'
                : isInProgress
                ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                : 'border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
            title="Cycle status (Not Started → In Progress → Completed)"
          >
            {isCompleted ? 'Done' : isInProgress ? 'In Progress' : 'Start'}
          </button>

          {/* Today Focus Toggle */}
          <button
            onClick={() => toggleTodayFocus(item.id)}
            className={`p-1.5 rounded border transition-colors ${
              isTodayFocus
                ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                : 'border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
            title={isTodayFocus ? "Remove from Today's Target" : "Add to Today's Learning Target"}
          >
            <Clock className="w-3.5 h-3.5" />
          </button>

          {/* Personal Notes Button */}
          <button
            onClick={() => onOpenNotes(item)}
            className={`p-1.5 rounded border transition-colors relative ${
              hasNotes
                ? 'border-black dark:border-white text-black dark:text-white bg-neutral-100 dark:bg-neutral-800'
                : 'border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
            title={hasNotes ? 'View/Edit Personal Notes' : 'Add Personal Note'}
          >
            <Edit3 className="w-3.5 h-3.5" />
            {hasNotes && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-black dark:bg-white" />
            )}
          </button>
        </div>
      </div>

      {/* Snippet of personal notes if present */}
      {hasNotes && (
        <div
          onClick={() => onOpenNotes(item)}
          className="mt-2.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/80 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 truncate cursor-pointer hover:underline flex items-center gap-1.5"
        >
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">Note:</span>
          <span className="truncate">{progress?.notes}</span>
        </div>
      )}
    </div>
  );
};
