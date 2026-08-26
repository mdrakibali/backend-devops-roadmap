import React, { useState } from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import { Badge } from '../ui/Badge';
import {
  Download,
  Upload,
  RotateCcw,
  Sun,
  Moon,
  Shield,
  Database,
  Check,
  Copy,
  AlertTriangle,
  FileJson,
  HardDrive
} from 'lucide-react';

export const SettingsView: React.FC = () => {
  const {
    state,
    exportData,
    importData,
    resetAllProgress,
    toggleTheme,
    toggleAiFreeMode,
    addToast
  } = useRoadmap();

  const [importJsonText, setImportJsonText] = useState('');
  const [copied, setCopied] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleDownload = () => {
    const dataStr = exportData();
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backend-devops-mastery-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    addToast('Backup JSON downloaded successfully');
  };

  const handleCopy = () => {
    const dataStr = exportData();
    navigator.clipboard.writeText(dataStr);
    setCopied(true);
    addToast('Backup JSON copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      const content = event.target?.result as string;
      if (content) {
        setImportJsonText(content);
      }
    };
    reader.readAsText(file);
  };

  const handleApplyImport = () => {
    if (!importJsonText.trim()) return;
    const ok = importData(importJsonText);
    if (ok) {
      setImportJsonText('');
    }
  };

  const handleExecuteReset = () => {
    resetAllProgress();
    setShowResetConfirm(false);
  };

  // Local storage size approximation
  const storageBytes = JSON.stringify(state).length;
  const storageKb = (storageBytes / 1024).toFixed(2);

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-7 shadow-xs">
        <div className="flex items-center gap-2">
          <Badge variant="filled" size="sm">
            SYSTEM CONFIGURATION
          </Badge>
          <span className="text-xs font-mono text-neutral-500">v1.0.0</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight mt-1">
          Settings, Storage & Data Portability
        </h2>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
          Manage your local persistence, JSON data export/import, visual theme, and AI-free protocol.
        </p>
      </div>

      {/* Preferences Block */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-5">
        <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider font-mono">
          Visual & Behavioral Preferences
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Theme Switch */}
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-sm font-semibold text-black dark:text-white flex items-center gap-2">
                {state.theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <span>Monochrome Theme</span>
              </div>
              <div className="text-xs font-mono text-neutral-500">
                Current: {state.theme === 'dark' ? 'Dark (Night)' : 'Light (Day)'}
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs font-mono text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700"
            >
              Toggle
            </button>
          </div>

          {/* AI Free Mode */}
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-sm font-semibold text-black dark:text-white flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>AI-Free Protocol Banner</span>
              </div>
              <div className="text-xs font-mono text-neutral-500">
                {state.aiFreeModeActive ? 'Active (Reminders visible)' : 'Hidden'}
              </div>
            </div>
            <button
              onClick={toggleAiFreeMode}
              className="px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs font-mono text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700"
            >
              {state.aiFreeModeActive ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>
      </div>

      {/* Export & Backup */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider font-mono flex items-center gap-2">
          <Download className="w-4 h-4" />
          <span>Export Roadmap Progress</span>
        </h3>
        <p className="text-xs font-mono text-neutral-500">
          Save your completed topics, project checklists, mastery evaluations, and personal notes into a self-contained JSON file.
        </p>

        <div className="flex items-center gap-3 flex-wrap pt-1">
          <button
            onClick={handleDownload}
            className="px-4 py-2.5 rounded-lg bg-black text-white dark:bg-white dark:text-black text-xs font-mono font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download JSON Backup</span>
          </button>

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs font-mono text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2 transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy JSON String'}</span>
          </button>
        </div>
      </div>

      {/* Import & Restore */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider font-mono flex items-center gap-2">
          <Upload className="w-4 h-4" />
          <span>Import / Restore Progress</span>
        </h3>
        <p className="text-xs font-mono text-neutral-500">
          Upload or paste a previously exported JSON backup to restore your roadmap tracking state.
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <label className="px-3.5 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-xs font-mono text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer flex items-center gap-2">
              <FileJson className="w-4 h-4" />
              <span>Choose File (.json)</span>
              <input
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          <textarea
            rows={4}
            value={importJsonText}
            onChange={e => setImportJsonText(e.target.value)}
            placeholder="Or paste JSON backup string here..."
            className="w-full p-3 text-xs font-mono rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-black text-black dark:text-white focus:outline-hidden"
          />

          {importJsonText.trim() && (
            <button
              onClick={handleApplyImport}
              className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg text-xs font-mono font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200"
            >
              Apply Restored Data
            </button>
          )}
        </div>
      </div>

      {/* Storage Diagnostics */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider font-mono flex items-center gap-2">
          <HardDrive className="w-4 h-4" />
          <span>Storage Diagnostics</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="text-neutral-500">Storage Engine</div>
            <div className="font-bold text-black dark:text-white mt-1">Browser LocalStorage</div>
          </div>
          <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="text-neutral-500">State Payload Size</div>
            <div className="font-bold text-black dark:text-white mt-1">{storageKb} KB</div>
          </div>
          <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="text-neutral-500">Schema Version</div>
            <div className="font-bold text-black dark:text-white mt-1">{state.version}</div>
          </div>
        </div>
      </div>

      {/* Danger Zone: Reset */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider font-mono flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
          <span>Danger Zone: Reset All Progress</span>
        </h3>
        <p className="text-xs font-mono text-neutral-500">
          Wipe all completed roadmap items, stopwatch study time, notes, and capstone checklists back to initial blank state.
        </p>

        {showResetConfirm ? (
          <div className="p-4 rounded-lg border border-black dark:border-white bg-neutral-100 dark:bg-neutral-800 space-y-3">
            <div className="text-xs font-mono font-bold text-black dark:text-white">
              Are you absolutely sure? This cannot be undone unless you have a JSON backup.
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-3 py-1.5 rounded text-xs font-mono border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black text-black dark:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleExecuteReset}
                className="px-3 py-1.5 rounded text-xs font-mono bg-black text-white dark:bg-white dark:text-black font-bold"
              >
                Yes, Reset All Progress
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-xs font-mono text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset All Progress...</span>
          </button>
        )}
      </div>
    </div>
  );
};
