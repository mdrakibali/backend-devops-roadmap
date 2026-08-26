import React from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import { ShieldCheck, ChevronRight, X } from 'lucide-react';

export const AiFreeBanner: React.FC = () => {
  const { state, toggleAiFreeMode } = useRoadmap();

  if (!state.aiFreeModeActive) return null;

  const steps = ['Think', 'Read Docs', 'Design', 'Build', 'Test', 'Debug'];

  return (
    <div className="w-full bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 font-mono font-medium text-neutral-900 dark:text-neutral-100">
          <ShieldCheck className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
          <span className="tracking-wide">AI-FREE DISCIPLINE:</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-xs font-mono text-neutral-600 dark:text-neutral-400 overflow-x-auto py-0.5">
          {steps.map((step, idx) => (
            <React.Fragment key={step}>
              <span className="px-1.5 py-0.5 rounded bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium whitespace-nowrap">
                {step}
              </span>
              {idx < steps.length - 1 && (
                <ChevronRight className="w-3 h-3 text-neutral-400 dark:text-neutral-600 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <span className="hidden md:inline text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
            First principles mastery
          </span>
          <button
            onClick={toggleAiFreeMode}
            title="Dismiss banner"
            className="p-1 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
