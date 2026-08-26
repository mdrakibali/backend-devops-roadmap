import React, { useState, useEffect } from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import { X, Save, FileText, CheckCircle2, Clock } from 'lucide-react';
import { RoadmapItem, MASTERY_LEVELS, MasteryLevel } from '../../types';

interface ItemNotesModalProps {
  item: RoadmapItem | null;
  onClose: () => void;
}

export const ItemNotesModal: React.FC<ItemNotesModalProps> = ({ item, onClose }) => {
  const { state, setItemNotes, setItemMastery, toggleItemCompleted, toggleTodayFocus } = useRoadmap();
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (item) {
      setNotes(state.items[item.id]?.notes || '');
    }
  }, [item, state.items]);

  if (!item) return null;

  const currentProgress = state.items[item.id];
  const isCompleted = currentProgress?.status === 'completed';
  const isInProgress = currentProgress?.status === 'in_progress';
  const currentMastery = currentProgress?.masteryLevel || 'L1';
  const isTodayFocus = state.todayFocusItemIds.includes(item.id);

  const handleSave = () => {
    setItemNotes(item.id, notes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="w-full max-w-xl bg-white dark:bg-neutral-900 rounded-xl border border-neutral-300 dark:border-neutral-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-colors"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-start justify-between gap-3">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
              {item.phaseTitle} → {item.technologyTitle} ({item.level})
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mt-1">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black dark:hover:text-white rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 space-y-4 overflow-y-auto">
          {/* Status & Mastery Controls */}
          <div className="bg-neutral-50 dark:bg-neutral-800/50 p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-700 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-mono text-neutral-500 uppercase">Topic Status:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleItemCompleted(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                    isCompleted
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
                </button>

                <button
                  onClick={() => toggleTodayFocus(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                    isTodayFocus
                      ? 'bg-neutral-800 text-neutral-100 dark:bg-neutral-200 dark:text-neutral-900'
                      : 'border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>{isTodayFocus ? "In Today's Focus" : "Focus Today"}</span>
                </button>
              </div>
            </div>

            {/* Mastery Level Selector (L1 - L5) */}
            <div>
              <span className="text-xs font-mono text-neutral-500 uppercase block mb-1.5">
                Mastery Evaluation Level:
              </span>
              <div className="grid grid-cols-5 gap-1.5">
                {(['L1', 'L2', 'L3', 'L4', 'L5'] as MasteryLevel[]).map(lvl => {
                  const def = MASTERY_LEVELS[lvl];
                  const isSelected = currentMastery === lvl;
                  return (
                    <button
                      key={lvl}
                      onClick={() => setItemMastery(item.id, lvl)}
                      className={`p-2 rounded-md text-center border text-xs font-mono transition-all ${
                        isSelected
                          ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white font-bold'
                          : 'border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      }`}
                      title={`${def.name}: ${def.question}`}
                    >
                      <div className="font-bold">{lvl}</div>
                      <div className="text-[9px] opacity-80 truncate">{def.name}</div>
                    </button>
                  );
                })}
              </div>
              <div className="text-[11px] font-mono text-neutral-500 mt-1.5">
                Current: <span className="font-semibold text-black dark:text-white">{MASTERY_LEVELS[currentMastery].name}</span> — {MASTERY_LEVELS[currentMastery].question}
              </div>
            </div>
          </div>

          {/* Personal Notes Textarea */}
          <div>
            <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5 flex items-center justify-between">
              <span>Personal Engineering Notes & Takeaways:</span>
              <span className="text-[10px] text-neutral-400 font-normal">Stored in LocalStorage</span>
            </label>
            <textarea
              rows={6}
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="Write mental models, failure scenarios, key commands, architectural trade-offs, or things you need to review without looking at AI..."
              className="w-full p-3 text-xs sm:text-sm font-mono rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-hidden focus:ring-1 focus:ring-black dark:focus:ring-white transition-colors"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-xs font-mono font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 flex items-center gap-1.5"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Notes</span>
          </button>
        </div>
      </div>
    </div>
  );
};
