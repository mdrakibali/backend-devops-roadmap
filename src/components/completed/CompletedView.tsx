import React, { useState, useMemo } from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import { ItemCard } from '../roadmap/ItemCard';
import { ItemNotesModal } from '../roadmap/ItemNotesModal';
import { RoadmapItem } from '../../types';
import { ROADMAP_PHASES } from '../../data/roadmapData';
import { CheckCircle2, Trophy, Filter, Search, BookOpen } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const CompletedView: React.FC = () => {
  const { allRoadmapItems, state, completedItemsCount, overallProgressPercent } = useRoadmap();
  const [activeNotesItem, setActiveNotesItem] = useState<RoadmapItem | null>(null);
  const [phaseFilter, setPhaseFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const completedItems = useMemo(() => {
    return allRoadmapItems.filter(item => {
      const isDone = state.items[item.id]?.status === 'completed';
      if (!isDone) return false;

      if (phaseFilter !== 'all' && item.phaseId !== phaseFilter) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.technologyTitle.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [allRoadmapItems, state.items, phaseFilter, searchQuery]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header Banner */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="filled" size="sm">
              ACCOMPLISHED ARCHIVE
            </Badge>
            <span className="text-xs font-mono text-neutral-500 font-bold">
              {completedItemsCount} Completed ({overallProgressPercent}%)
            </span>
          </div>
          <h2 className="text-xl font-bold text-black dark:text-white tracking-tight mt-1">
            Mastered Concepts Archive
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
            Every topic built, tested, and validated without AI dependency
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-3 flex-wrap">
          <select
            value={phaseFilter}
            onChange={e => setPhaseFilter(e.target.value)}
            className="text-xs font-mono p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-black text-black dark:text-white focus:outline-hidden"
          >
            <option value="all">All Phases</option>
            {ROADMAP_PHASES.map(p => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>

          <div className="relative">
            <input
              type="text"
              placeholder="Search completed..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="text-xs font-mono pl-7 pr-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-black text-black dark:text-white focus:outline-hidden"
            />
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-2.5" />
          </div>
        </div>
      </div>

      {/* Grid of completed items */}
      {completedItems.length === 0 ? (
        <div className="py-16 text-center border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl p-6 text-xs font-mono text-neutral-500 space-y-3 bg-white dark:bg-neutral-900">
          <Trophy className="w-8 h-8 mx-auto text-neutral-400" />
          <p className="text-sm font-medium text-black dark:text-white">
            {completedItemsCount === 0
              ? 'No completed topics yet. Mark topics done as you implement and master them.'
              : 'No completed topics match the current filter.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {completedItems.map(item => (
            <ItemCard
              key={item.id}
              item={item}
              onOpenNotes={setActiveNotesItem}
            />
          ))}
        </div>
      )}

      {/* Notes modal */}
      <ItemNotesModal
        item={activeNotesItem}
        onClose={() => setActiveNotesItem(null)}
      />
    </div>
  );
};
