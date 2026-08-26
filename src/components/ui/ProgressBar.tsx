import React from 'react';

interface ProgressBarProps {
  percent: number;
  height?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  height = 'md',
  showLabel = false,
  className = ''
}) => {
  const clamped = Math.min(100, Math.max(0, Math.round(percent)));
  
  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-1.5">
          <span>Progress</span>
          <span className="font-semibold text-black dark:text-white">{clamped}%</span>
        </div>
      )}
      <div className={`w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden ${heightClasses[height]}`}>
        <div
          className="h-full bg-neutral-900 dark:bg-white transition-all duration-300 ease-out rounded-full"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
};

export const Badge: React.FC<{
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'filled' | 'subtle';
  size?: 'sm' | 'md';
  className?: string;
}> = ({ children, variant = 'default', size = 'sm', className = '' }) => {
  const sizeCls = size === 'sm' ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1';
  
  const variantCls = {
    default: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700',
    outline: 'border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 bg-transparent',
    filled: 'bg-black text-white dark:bg-white dark:text-black font-medium',
    subtle: 'bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400'
  }[variant];

  return (
    <span className={`inline-flex items-center gap-1 font-mono rounded-md font-medium tracking-tight whitespace-nowrap select-none ${sizeCls} ${variantCls} ${className}`}>
      {children}
    </span>
  );
};
