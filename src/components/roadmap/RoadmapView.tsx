import React, { useState, useMemo } from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import { ROADMAP_PHASES } from '../../data/roadmapData';
import { RoadmapItem, DifficultyLevel, ItemStatus } from '../../types';
import { ItemCard } from './ItemCard';
import { ItemNotesModal } from './ItemNotesModal';
import { ProgressBar } from '../ui/ProgressBar';
import { Badge } from '../ui/Badge';
import {
  ChevronDown,
  ChevronRight,
  Filter,
  Search,
  CheckCircle2,
  Clock,
  Sparkles,
  FlaskConical,
  AlertTriangle,
  FileCode2,
  SlidersHorizontal,
  ChevronUp,
  RotateCcw
} from 'lucide-react';

export const RoadmapView: React.FC = () => {
  const {
    state,
    selectedPhaseIdFilter,
    setSelectedPhaseIdFilter,
    phaseStats,
    overallProgressPercent,
    resetAllProgress,
    t
  } = useRoadmap();

  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<string>('all');
  const [localSearchQuery, setLocalSearchQuery] = useState<string>('');
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({
    'phase-1': true,
    'phase-2': true,
    'phase-3': false,
    'phase-4': false,
    'phase-5': false,
    'phase-6': false,
    'phase-7': false
  });
  const [activeNotesItem, setActiveNotesItem] = useState<RoadmapItem | null>(null);

  // If selectedPhaseIdFilter was triggered externally, expand that phase
  React.useEffect(() => {
    if (selectedPhaseIdFilter) {
      setExpandedPhases(prev => ({ ...prev, [selectedPhaseIdFilter]: true }));
    }
  }, [selectedPhaseIdFilter]);

  const togglePhaseExpand = (phaseId: string) => {
    setExpandedPhases(prev => ({ ...prev, [phaseId]: !prev[phaseId] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    ROADMAP_PHASES.forEach(p => (all[p.id] = true));
    setExpandedPhases(all);
  };

  const collapseAll = () => {
    const all: Record<string, boolean> = {};
    ROADMAP_PHASES.forEach(p => (all[p.id] = false));
    setExpandedPhases(all);
  };

  // Filter logic
  const filteredPhases = useMemo(() => {
    return ROADMAP_PHASES.filter(phase => {
      if (selectedPhaseIdFilter && phase.id !== selectedPhaseIdFilter) {
        return false;
      }
      return true;
    }).map(phase => {
      const filteredTechs = phase.technologies.map(tech => {
        const filteredLevels = tech.levels.map(lvl => {
          const filteredItems = lvl.items.filter(item => {
            // Level filter
            if (selectedLevelFilter !== 'all') {
              if (selectedLevelFilter === 'Basic' && item.level !== 'Basic' && item.level !== 'Foundation') return false;
              if (selectedLevelFilter === 'Intermediate' && item.level !== 'Intermediate') return false;
              if (selectedLevelFilter === 'Advanced' && item.level !== 'Advanced') return false;
              if (selectedLevelFilter === 'Production' && item.level !== 'Production') return false;
            }

            // Status filter
            const itemStatus = state.items[item.id]?.status || 'not_started';
            if (selectedStatusFilter !== 'all' && itemStatus !== selectedStatusFilter) {
              return false;
            }

            // Search query
            if (localSearchQuery.trim()) {
              const q = localSearchQuery.toLowerCase();
              const match =
                item.title.toLowerCase().includes(q) ||
                item.technologyTitle.toLowerCase().includes(q) ||
                item.level.toLowerCase().includes(q);
              if (!match) return false;
            }

            return true;
          });

          return { ...lvl, items: filteredItems };
        }).filter(lvl => lvl.items.length > 0);

        return { ...tech, levels: filteredLevels };
      }).filter(tech => tech.levels.length > 0);

      return { ...phase, technologies: filteredTechs };
    }).filter(phase => phase.technologies.length > 0 || (!localSearchQuery.trim() && selectedStatusFilter === 'all' && selectedLevelFilter === 'all'));
  }, [selectedPhaseIdFilter, selectedLevelFilter, selectedStatusFilter, localSearchQuery, state.items]);

  const isFiltering = Boolean(
    localSearchQuery.trim().length > 0 ||
    selectedStatusFilter !== 'all' ||
    selectedLevelFilter !== 'all' ||
    selectedPhaseIdFilter !== null
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Top Banner / Filter Controls */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-black dark:text-white tracking-tight">
              {t.curriculumTitle}
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
              {t.curriculumSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={expandAll}
              className="px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {t.expandAll}
            </button>
            <button
              onClick={collapseAll}
              className="px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {t.collapseAll}
            </button>
            <button
              onClick={() => {
                if (window.confirm(t.resetConfirm)) {
                  resetAllProgress();
                }
              }}
              className="px-2.5 py-1.5 rounded-lg border border-red-200 dark:border-red-950/60 text-xs font-mono text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 flex items-center gap-1.5"
              title={t.resetConfirm}
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.resetZero}</span>
            </button>
          </div>
        </div>

        {/* Filter controls row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
          {/* Phase selector */}
          <div>
            <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
              {t.phaseFilter}
            </label>
            <select
              value={selectedPhaseIdFilter || 'all'}
              onChange={e => setSelectedPhaseIdFilter(e.target.value === 'all' ? null : e.target.value)}
              className="w-full text-xs font-mono p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-black text-black dark:text-white focus:outline-hidden"
            >
              <option value="all">{t.allPhases}</option>
              {ROADMAP_PHASES.map(p => (
                <option key={p.id} value={p.id}>
                  {t.phaseTitles[p.id] || p.title}
                </option>
              ))}
            </select>
          </div>

          {/* Status filter */}
          <div>
            <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
              {t.statusFilter}
            </label>
            <select
              value={selectedStatusFilter}
              onChange={e => setSelectedStatusFilter(e.target.value)}
              className="w-full text-xs font-mono p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-black text-black dark:text-white focus:outline-hidden"
            >
              <option value="all">{t.allStatuses}</option>
              <option value="not_started">{t.notStarted}</option>
              <option value="in_progress">{t.inProgress}</option>
              <option value="completed">{t.completed}</option>
            </select>
          </div>

          {/* Level filter */}
          <div>
            <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
              {t.depthLevel}
            </label>
            <select
              value={selectedLevelFilter}
              onChange={e => setSelectedLevelFilter(e.target.value)}
              className="w-full text-xs font-mono p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-black text-black dark:text-white focus:outline-hidden"
            >
              <option value="all">{t.allLevels}</option>
              <option value="Basic">{t.basicLevel}</option>
              <option value="Intermediate">{t.intermediateLevel}</option>
              <option value="Advanced">{t.advancedLevel}</option>
              <option value="Production">{t.productionLevel}</option>
            </select>
          </div>

          {/* Quick search input */}
          <div>
            <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">
              {t.filterTopics}
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder={t.filterTopicsPlaceholder}
                value={localSearchQuery}
                onChange={e => setLocalSearchQuery(e.target.value)}
                className="w-full text-xs font-mono pl-7 pr-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-black text-black dark:text-white focus:outline-hidden"
              />
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-2.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Phases Accordions */}
      <div className="space-y-6">
        {filteredPhases.map(phase => {
          const stats = phaseStats[phase.id] || { total: 0, completed: 0, inProgress: 0, percent: 0 };
          const isExpanded = isFiltering ? true : (expandedPhases[phase.id] ?? true);

          return (
            <div
              key={phase.id}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-xs transition-colors"
            >
              {/* Phase Header */}
              <div
                onClick={() => togglePhaseExpand(phase.id)}
                className="p-4 sm:p-5 flex items-center justify-between cursor-pointer select-none hover:bg-neutral-50/70 dark:hover:bg-neutral-800/40 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <button className="p-1 rounded text-neutral-500 hover:text-black dark:hover:text-white">
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-black dark:text-white tracking-tight">
                        {t.phaseTitles[phase.id] || phase.title}
                      </h3>
                      <Badge variant="filled" size="sm">
                        {stats.percent}% {t.completed}
                      </Badge>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
                      {t.phaseDescriptions[phase.id] || phase.subtitle}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end gap-1.5 w-44 flex-shrink-0">
                  <div className="text-[11px] font-mono text-neutral-500">
                    {stats.completed}/{stats.total} Completed
                  </div>
                  <ProgressBar percent={stats.percent} height="sm" />
                </div>
              </div>

              {/* Phase Content */}
              {isExpanded && (
                <div className="p-4 sm:p-6 border-t border-neutral-100 dark:border-neutral-800 space-y-8 bg-neutral-50/40 dark:bg-black/30">
                  {phase.technologies.length === 0 ? (
                    <div className="py-8 text-center text-xs font-mono text-neutral-500">
                      No topics match current filters in this phase.
                    </div>
                  ) : (
                    phase.technologies.map((tech, techIdx) => (
                      <div
                        key={tech.id}
                        className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 sm:p-5 space-y-5"
                      >
                        {/* Technology Title & Tier */}
                        <div className="flex items-start justify-between flex-wrap gap-2 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs text-neutral-400 font-bold">
                                {String(techIdx + 1).padStart(2, '0')}.
                              </span>
                              <h4 className="text-sm sm:text-base font-bold text-black dark:text-white tracking-tight">
                                {tech.title}
                              </h4>
                              <Badge variant="outline" size="sm">
                                {tech.tier}
                              </Badge>
                            </div>
                            {tech.description && (
                              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-mono">
                                {tech.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Technology Levels & Item Cards */}
                        <div className="space-y-5">
                          {tech.levels.map(lvl => (
                            <div key={lvl.level} className="space-y-2.5">
                              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                                <span>{lvl.level}</span>
                                <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
                                <span className="text-[10px] text-neutral-400 font-normal">
                                  {lvl.items.length} items
                                </span>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                {lvl.items.map(item => (
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

                        {/* Hands-on Labs / Deep Diagnostics / Diagrams */}
                        {tech.handsOnLab && (
                          <div className="mt-4 p-3.5 rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950/80 text-xs font-mono text-neutral-700 dark:text-neutral-300 space-y-1">
                            <div className="flex items-center gap-1.5 font-bold text-black dark:text-white">
                              <FlaskConical className="w-4 h-4" />
                              <span>Hands-On Engineering Lab</span>
                            </div>
                            <p className="leading-relaxed">{tech.handsOnLab}</p>
                          </div>
                        )}

                        {tech.masteryTest && (
                          <div className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/60 text-xs font-mono text-neutral-700 dark:text-neutral-300 space-y-1">
                            <div className="flex items-center gap-1.5 font-bold text-black dark:text-white">
                              <AlertTriangle className="w-4 h-4" />
                              <span>L5 Production Mastery Test</span>
                            </div>
                            <p className="leading-relaxed">{tech.masteryTest}</p>
                          </div>
                        )}

                        {tech.diagram && (
                          <div className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-black text-white dark:bg-black dark:text-white font-mono text-xs space-y-2 overflow-x-auto">
                            <div className="flex items-center gap-1.5 font-bold text-neutral-300">
                              <FileCode2 className="w-4 h-4" />
                              <span>Architecture Diagram Challenge</span>
                            </div>
                            <pre className="text-[11px] leading-relaxed opacity-90">{tech.diagram}</pre>
                          </div>
                        )}

                        {tech.coreProject && (
                          <div className="p-3.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs font-mono space-y-2">
                            <div className="flex items-center gap-1.5 font-bold text-black dark:text-white">
                              <FileCode2 className="w-4 h-4" />
                              <span>Core Mini-Project: {tech.coreProject.title}</span>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400">{tech.coreProject.description}</p>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {tech.coreProject.features.map(f => (
                                <Badge key={f} variant="subtle" size="sm">
                                  ✓ {f}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Personal Notes Modal */}
      <ItemNotesModal
        item={activeNotesItem}
        onClose={() => setActiveNotesItem(null)}
      />
    </div>
  );
};
