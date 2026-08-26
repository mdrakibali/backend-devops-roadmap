import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import { Search, X, Layers, Code, CheckCircle, Clock, BookOpen } from 'lucide-react';
import { PRODUCTION_PROJECTS } from '../../data/projectsData';

export const GlobalSearchModal: React.FC = () => {
  const {
    searchModalOpen,
    setSearchModalOpen,
    allRoadmapItems,
    state,
    setActiveTab,
    setSelectedPhaseIdFilter,
    toggleItemCompleted
  } = useRoadmap();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchModalOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [searchModalOpen]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();

    // Match roadmap items
    const matchedItems = allRoadmapItems
      .filter(item => {
        return (
          item.title.toLowerCase().includes(q) ||
          item.technologyTitle.toLowerCase().includes(q) ||
          item.phaseTitle.toLowerCase().includes(q) ||
          item.level.toLowerCase().includes(q)
        );
      })
      .map(item => ({
        type: 'item' as const,
        id: item.id,
        title: item.title,
        subtitle: `${item.phaseTitle} → ${item.technologyTitle} (${item.level})`,
        status: state.items[item.id]?.status || 'not_started',
        item
      }));

    // Match projects
    const matchedProjects = PRODUCTION_PROJECTS
      .filter(p => {
        return (
          p.title.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.stack.some(s => s.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q)
        );
      })
      .map(p => ({
        type: 'project' as const,
        id: p.id,
        title: p.title,
        subtitle: `Project ${p.number} • Stack: ${p.stack.join(', ')}`,
        status: state.projects[p.id]?.status || 'not_started',
        project: p
      }));

    return [...matchedProjects, ...matchedItems].slice(0, 30);
  }, [query, allRoadmapItems, state.items, state.projects]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSearchModalOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1 < searchResults.length ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 >= 0 ? prev - 1 : searchResults.length - 1));
    } else if (e.key === 'Enter' && searchResults[selectedIndex]) {
      e.preventDefault();
      handleSelect(searchResults[selectedIndex]);
    }
  };

  const handleSelect = (result: typeof searchResults[0]) => {
    if (result.type === 'project') {
      setActiveTab('projects');
    } else {
      setSelectedPhaseIdFilter(result.item.phaseId);
      setActiveTab('roadmap');
    }
    setSearchModalOpen(false);
  };

  if (!searchModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs transition-opacity">
      <div
        className="w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-xl border border-neutral-300 dark:border-neutral-700 shadow-2xl overflow-hidden flex flex-col max-h-[80vh] transition-colors"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-200 dark:border-neutral-800 gap-3">
          <Search className="w-5 h-5 text-neutral-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search technologies, concepts, projects, Linux, PostgreSQL, Redis..."
            className="w-full bg-transparent border-none outline-hidden text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-500">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 flex-1 divide-y divide-neutral-100 dark:divide-neutral-800/60">
          {searchResults.length === 0 ? (
            <div className="py-12 text-center text-sm text-neutral-500 font-mono">
              {query ? 'No matching topics or projects found.' : 'Type to search the entire Backend & DevOps Roadmap.'}
            </div>
          ) : (
            searchResults.map((res, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={`${res.type}-${res.id}`}
                  onClick={() => handleSelect(res)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`p-3 rounded-lg flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white'
                      : 'text-neutral-800 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/40'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-md bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {res.type === 'project' ? (
                        <Code className="w-4 h-4" />
                      ) : (
                        <BookOpen className="w-4 h-4" />
                      )}
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-medium truncate">{res.title}</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono truncate">
                        {res.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {res.status === 'completed' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-800 px-2 py-0.5 rounded">
                        <CheckCircle className="w-3 h-3" /> Done
                      </span>
                    ) : res.status === 'in_progress' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-900 dark:text-neutral-100 bg-neutral-200 dark:bg-neutral-700 px-2 py-0.5 rounded">
                        <Clock className="w-3 h-3" /> Active
                      </span>
                    ) : null}
                    <span className="text-[11px] font-mono text-neutral-400">↵ Jump</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-2.5 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-500 flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>{searchResults.length} results</span>
        </div>
      </div>
    </div>
  );
};
