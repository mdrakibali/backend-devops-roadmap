import React from 'react';

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
