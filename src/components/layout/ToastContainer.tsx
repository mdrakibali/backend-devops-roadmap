import React from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import { CheckCircle2 } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts } = useRoadmap();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="bg-black text-white dark:bg-white dark:text-black px-4 py-2.5 rounded-lg shadow-lg border border-neutral-800 dark:border-neutral-200 text-xs font-mono flex items-center gap-2.5 transition-all transform translate-y-0"
        >
          <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-white dark:text-black" />
          <span className="truncate">{toast.text}</span>
        </div>
      ))}
    </div>
  );
};
