import React, { useState } from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import { PRODUCTION_PROJECTS } from '../../data/projectsData';
import { ProductionProject } from '../../types';
import { ProgressBar } from '../ui/ProgressBar';
import { Badge } from '../ui/Badge';
import {
  FolderGit2,
  CheckCircle2,
  Clock,
  Circle,
  FileCode2,
  Edit3,
  Layers,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Save
} from 'lucide-react';

export const ProjectsView: React.FC = () => {
  const {
    state,
    toggleProjectChecklist,
    setProjectStatus,
    setProjectNotes
  } = useRoadmap();

  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    'project-1': true,
    'project-2': true,
    'project-3': false,
    'project-4': false,
    'project-5': false,
    'project-6': false
  });

  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [projectNoteText, setProjectNoteText] = useState<string>('');

  const toggleExpand = (id: string) => {
    setExpandedProjects(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOpenNotes = (project: ProductionProject) => {
    setEditingNotesId(project.id);
    setProjectNoteText(state.projects[project.id]?.notes || '');
  };

  const handleSaveNotes = (projectId: string) => {
    setProjectNotes(projectId, projectNoteText);
    setEditingNotesId(null);
  };

  // Overall projects count
  const completedProjectsCount = PRODUCTION_PROJECTS.filter(
    p => state.projects[p.id]?.status === 'completed'
  ).length;

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="filled" size="sm">
                PRODUCTION CAPSTONES
              </Badge>
              <span className="text-xs font-mono text-neutral-500 font-bold">
                {completedProjectsCount} of 6 Completed
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight mt-1">
              Production Projects Ladder
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5 max-w-2xl">
              "Theory without building is illusion. These 6 projects prove production mastery from single service to distributed Kubernetes platforms."
            </p>
          </div>

          <div className="w-full sm:w-64 p-3.5 rounded-lg bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800 flex-shrink-0">
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span className="text-neutral-500">Capstone Ladder</span>
              <span className="font-bold text-black dark:text-white">
                {Math.round((completedProjectsCount / 6) * 100)}%
              </span>
            </div>
            <ProgressBar percent={(completedProjectsCount / 6) * 100} height="sm" />
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {PRODUCTION_PROJECTS.map(project => {
          const prog = state.projects[project.id] || {
            projectId: project.id,
            status: 'not_started',
            completedChecklistIds: [],
            notes: ''
          };

          const totalChecklist = project.checklist.length;
          const completedChecklist = prog.completedChecklistIds.length;
          const projectPercent = totalChecklist > 0 ? Math.round((completedChecklist / totalChecklist) * 100) : 0;
          const isExpanded = expandedProjects[project.id] ?? true;
          const isDone = prog.status === 'completed';
          const isInProgress = prog.status === 'in_progress';

          return (
            <div
              key={project.id}
              className={`bg-white dark:bg-neutral-900 border rounded-xl overflow-hidden shadow-xs transition-all ${
                isDone
                  ? 'border-neutral-300 dark:border-neutral-700'
                  : isInProgress
                  ? 'border-black/50 dark:border-white/50'
                  : 'border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {/* Project Header Bar */}
              <div
                onClick={() => toggleExpand(project.id)}
                className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none hover:bg-neutral-50/60 dark:hover:bg-neutral-800/30 transition-colors"
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <button className="p-1 rounded text-neutral-400 hover:text-black dark:hover:text-white mt-0.5">
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-neutral-400">
                        PROJECT {project.number}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-black dark:text-white tracking-tight">
                        {project.title}
                      </h3>
                      <Badge
                        variant={isDone ? 'filled' : isInProgress ? 'default' : 'subtle'}
                        size="sm"
                      >
                        {isDone ? 'COMPLETED' : isInProgress ? 'IN PROGRESS' : 'NOT STARTED'}
                      </Badge>
                    </div>
                    <p className="text-xs font-mono text-neutral-500 mt-1">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0 md:ml-auto">
                  <div className="w-32 hidden sm:block text-right">
                    <div className="text-[11px] font-mono text-neutral-500 mb-1">
                      {completedChecklist}/{totalChecklist} Tasks ({projectPercent}%)
                    </div>
                    <ProgressBar percent={projectPercent} height="sm" />
                  </div>

                  {/* Status Toggle Quick Buttons */}
                  <div
                    onClick={e => e.stopPropagation()}
                    className="flex items-center gap-1.5"
                  >
                    <select
                      value={prog.status}
                      onChange={e => setProjectStatus(project.id, e.target.value as any)}
                      className="text-xs font-mono p-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white focus:outline-hidden"
                    >
                      <option value="not_started">Not Started</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Project Body */}
              {isExpanded && (
                <div className="p-5 sm:p-6 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/30 dark:bg-black/30 space-y-6">
                  {/* Description & Tech Stack */}
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap pt-1">
                      <span className="text-xs font-mono text-neutral-500 uppercase">Core Stack:</span>
                      {project.stack.map(tech => (
                        <Badge key={tech} variant="outline" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Diagram */}
                  {project.architectureDiagram && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300">
                        <FileCode2 className="w-4 h-4" />
                        <span>System Architecture Blueprint</span>
                      </div>
                      <div className="p-4 rounded-xl bg-black text-white dark:bg-black dark:text-white border border-neutral-800 font-mono text-xs overflow-x-auto shadow-inner">
                        <pre className="leading-relaxed whitespace-pre font-mono text-[11px] sm:text-xs">
                          {project.architectureDiagram}
                        </pre>
                      </div>
                    </div>
                  )}

                  {/* Interactive Checklist */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase text-neutral-700 dark:text-neutral-300">
                        Implementation & Validation Checklist ({completedChecklist}/{totalChecklist})
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        Click tasks to check off as you build
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {project.checklist.map(item => {
                        const isChecked = prog.completedChecklistIds.includes(item.id);
                        return (
                          <div
                            key={item.id}
                            onClick={() => toggleProjectChecklist(project.id, item.id)}
                            className={`p-3 rounded-lg border flex items-start gap-3 cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-neutral-100 dark:bg-neutral-800/80 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400'
                                : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white text-neutral-800 dark:text-neutral-200'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}}
                              className="mt-0.5 rounded border-neutral-400 text-black dark:text-white focus:ring-0"
                            />
                            <span
                              className={`text-xs font-mono leading-relaxed ${
                                isChecked ? 'line-through opacity-75' : ''
                              }`}
                            >
                              {item.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Notes & Reflections */}
                  <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-black dark:text-white">
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Project Architecture Notes & Post-Mortem</span>
                      </div>
                      {editingNotesId !== project.id && (
                        <button
                          onClick={() => handleOpenNotes(project)}
                          className="text-xs font-mono text-neutral-500 hover:text-black dark:hover:text-white underline"
                        >
                          {prog.notes ? 'Edit Notes' : 'Add Notes'}
                        </button>
                      )}
                    </div>

                    {editingNotesId === project.id ? (
                      <div className="space-y-2">
                        <textarea
                          rows={4}
                          value={projectNoteText}
                          onChange={e => setProjectNoteText(e.target.value)}
                          placeholder="Document your GitHub repo URL, benchmarks, load test metrics, memory profiling findings, failure scenarios observed..."
                          className="w-full p-3 text-xs font-mono rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-black text-black dark:text-white focus:outline-hidden"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setEditingNotesId(null)}
                            className="px-3 py-1.5 rounded text-xs font-mono border border-neutral-300 dark:border-neutral-700"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleSaveNotes(project.id)}
                            className="px-3 py-1.5 rounded text-xs font-mono bg-black text-white dark:bg-white dark:text-black flex items-center gap-1"
                          >
                            <Save className="w-3 h-3" />
                            <span>Save Project Notes</span>
                          </button>
                        </div>
                      </div>
                    ) : prog.notes ? (
                      <p className="text-xs font-mono text-neutral-600 dark:text-neutral-300 whitespace-pre-wrap">
                        {prog.notes}
                      </p>
                    ) : (
                      <p className="text-xs font-mono text-neutral-400 italic">
                        No project notes recorded yet.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
