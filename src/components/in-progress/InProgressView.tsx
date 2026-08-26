import React, { useState } from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import { ItemCard } from '../roadmap/ItemCard';
import { ItemNotesModal } from '../roadmap/ItemNotesModal';
import { RoadmapItem } from '../../types';
import { Clock, Plus, BookOpen, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const InProgressView: React.FC = () => {
  const { allRoadmapItems, state, inProgressItemsCount, setActiveTab } = useRoadmap();
  const [activeNotesItem, setActiveNotesItem] = useState<RoadmapItem | null>(null);

  const inProgressItems = allRoadmapItems.filter(
    item => state.items[item.id]?.status === 'in_progress'
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="filled" size="sm">
              ACTIVE STUDY QUEUE
            </Badge>
            <span className="text-xs font-mono text-neutral-500 font-bold">
              {inProgressItemsCount} Topics in Progress
            </span>
          </div>
          <h2 className="text-xl font-bold text-black dark:text-white tracking-tight mt-1">
            Currently In Progress
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
            Active concepts being implemented and tested
          </p>
        </div>

        <button
          onClick={() => setActiveTab('roadmap')}
          className="px-3.5 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-xs font-mono font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center gap-1.5 flex-shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add More from Roadmap</span>
        </button>
      </div>

      {/* Item List */}
      {inProgressItems.length === 0 ? (
        <div className="py-16 text-center border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl p-6 text-xs font-mono text-neutral-500 space-y-3 bg-white dark:bg-neutral-900">
          <BookOpen className="w-8 h-8 mx-auto text-neutral-400" />
          <p className="text-sm font-medium text-black dark:text-white">
            No topics currently marked as in progress.
          </p>
          <p className="text-xs text-neutral-400">
            Pick a technology from the roadmap to start learning.
          </p>
          <button
            onClick={() => setActiveTab('roadmap')}
            className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg text-xs font-mono inline-flex items-center gap-1.5"
          >
            <span>Explore All Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {inProgressItems.map(item => (
            <ItemCard
              key={item.id}
              item={item}
              onOpenNotes={setActiveNotesItem}
            />
          ))}
        </div>
      )}

      {/* Notes Modal */}
      <ItemNotesModal
        item={activeNotesItem}
        onClose={() => setActiveNotesItem(null)}
      />
    </div>
  );
};
