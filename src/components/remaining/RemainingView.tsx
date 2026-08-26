import React, { useState, useMemo } from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import { ItemCard } from '../roadmap/ItemCard';
import { ItemNotesModal } from '../roadmap/ItemNotesModal';
import { RoadmapItem } from '../../types';
import { ROADMAP_PHASES } from '../../data/roadmapData';
import { ListFilter, Search, CheckCircle, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const RemainingView: React.FC = () => {
  const { allRoadmapItems, state, remainingItemsCount, totalItemsCount } = useRoadmap();
  const [activeNotesItem, setActiveNotesItem] = useState<RoadmapItem | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const remainingGrouped = useMemo(() => {
    // Filter remaining items
    const remainingItems = allRoadmapItems.filter(item => {
      const isDone = state.items[item.id]?.status === 'completed';
      if (isDone) return false;

      if (selectedPhase !== 'all' && item.phaseId !== selectedPhase) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.technologyTitle.toLowerCase().includes(q) ||
          item.level.toLowerCase().includes(q)
        );
      }

      return true;
    });

    // Group by Phase
    const groups: { phaseTitle: string; phaseId: string; items: RoadmapItem[] }[] = [];
    ROADMAP_PHASES.forEach(phase => {
      const phaseItems = remainingItems.filter(i => i.phaseId === phase.id);
      if (phaseItems.length > 0) {
        groups.push({
          phaseTitle: phase.title,
          phaseId: phase.id,
          items: phaseItems
        });
      }
    });

    return groups;
  }, [allRoadmapItems, state.items, selectedPhase, searchQuery]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="filled" size="sm">
              PENDING CURRICULUM
            </Badge>
            <span className="text-xs font-mono text-neutral-500 font-bold">
              {remainingItemsCount} of {totalItemsCount} Topics Remaining
            </span>
          </div>
          <h2 className="text-xl font-bold text-black dark:text-white tracking-tight mt-1">
            Remaining Roadmap
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
            Organized by engineering phase for methodical step-by-step completion
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 flex-wrap">
          <select
            value={selectedPhase}
            onChange={e => setSelectedPhase(e.target.value)}
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
              placeholder="Search remaining..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="text-xs font-mono pl-7 pr-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-black text-black dark:text-white focus:outline-hidden"
            />
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-2.5" />
          </div>
        </div>
      </div>

      {/* Grouped lists */}
      {remainingGrouped.length === 0 ? (
        <div className="py-16 text-center border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl p-6 text-xs font-mono text-neutral-500 space-y-3 bg-white dark:bg-neutral-900">
          <CheckCircle className="w-8 h-8 mx-auto text-neutral-400" />
          <p className="text-sm font-bold text-black dark:text-white">
            {remainingItemsCount === 0
              ? 'Congratulations! You have completed the entire Backend + DevOps Mastery Roadmap!'
              : 'No remaining topics match your filter.'}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {remainingGrouped.map(group => (
            <div
              key={group.phaseId}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-black dark:text-white">
                    {group.phaseTitle}
                  </h3>
                  <Badge variant="outline" size="sm">
                    {group.items.length} items left
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {group.items.map(item => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    onOpenNotes={setActiveNotesItem}
                  />
                ))}
              </div>
            </div>
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
