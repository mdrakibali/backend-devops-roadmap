import React, { useState } from 'react';
import { useRoadmap } from '../../context/RoadmapContext';
import {
  ALL_TECHNOLOGIES,
  NON_NEGOTIABLE_MASTERY_RULES,
  MasteryLevel,
  MASTERY_LEVELS,
  TechMasteryProgress
} from '../../types';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import {
  Award,
  CheckCircle2,
  HelpCircle,
  ShieldAlert,
  Search,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Layers,
  Flame
} from 'lucide-react';

export const SelfAssessmentView: React.FC = () => {
  const { state, updateTechAssessment } = useRoadmap();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'matrix' | 'rules'>('matrix');

  const filteredTechs = ALL_TECHNOLOGIES.filter(tech =>
    tech.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  // Compute mastery counts across self assessments
  const totalEvaluated = (Object.values(state.techMastery) as TechMasteryProgress[]).filter(
    m => m.level !== 'None'
  ).length;

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="filled" size="sm">
                ENGINEERING AUDIT
              </Badge>
              <span className="text-xs font-mono text-neutral-500 font-bold">
                {totalEvaluated} of {ALL_TECHNOLOGIES.length} Technologies Assessed
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight mt-1">
              Technology Self-Assessment & Mastery Matrix
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5 max-w-2xl">
              Honest self-evaluation of your practical depth across all 29 technologies using the L1–L5 framework.
            </p>
          </div>

          {/* Sub-Tabs: Matrix vs 12 Rules */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 flex-shrink-0">
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all ${
                activeTab === 'matrix'
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
              }`}
            >
              29 Technologies Matrix
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all ${
                activeTab === 'rules'
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
              }`}
            >
              12 Non-Negotiable Rules
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'matrix' ? (
        <div className="space-y-6">
          {/* L1-L5 Guide Legend */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-xs">
            <div className="text-xs font-mono font-bold uppercase text-neutral-600 dark:text-neutral-300 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>The 5 Levels of Mastery Definition</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs font-mono">
              {(['L1', 'L2', 'L3', 'L4', 'L5'] as MasteryLevel[]).map(lvl => (
                <div
                  key={lvl}
                  className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 space-y-1"
                >
                  <div className="font-bold text-black dark:text-white">
                    {lvl} — {MASTERY_LEVELS[lvl].name}
                  </div>
                  <div className="text-[11px] text-neutral-500 leading-snug">
                    {MASTERY_LEVELS[lvl].question}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Filter from the 29 technologies (e.g. PostgreSQL, Redis, Kubernetes, Docker, Linux, Kafka)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full text-xs sm:text-sm font-mono pl-9 pr-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white focus:outline-hidden"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
          </div>

          {/* 29 Technologies Matrix Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredTechs.map(tech => {
              const current = state.techMastery[tech] || {
                technologyId: tech,
                level: 'None',
                masteryL: 'L1',
                answers: {
                  q1_explain: false,
                  q2_implement: false,
                  q3_debug: false,
                  q4_design: false,
                  q5_production: false
                }
              };

              const answersCount = Object.values(current.answers).filter(Boolean).length;

              return (
                <div
                  key={tech}
                  className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-xs space-y-4"
                >
                  {/* Tech Name & Quick Level Dropdown */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-black dark:text-white">
                        {tech}
                      </h3>
                      <Badge variant="outline" size="sm">
                        {answersCount}/5 Criteria
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Depth Level */}
                      <select
                        value={current.level}
                        onChange={e =>
                          updateTechAssessment(tech, { level: e.target.value as any })
                        }
                        className="text-xs font-mono p-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-black text-black dark:text-white"
                      >
                        <option value="None">None</option>
                        <option value="Basic">Basic</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Production">Production</option>
                      </select>

                      {/* Mastery L1-L5 */}
                      <select
                        value={current.masteryL}
                        onChange={e =>
                          updateTechAssessment(tech, { masteryL: e.target.value as any })
                        }
                        className="text-xs font-mono p-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-black text-black dark:text-white font-bold"
                      >
                        <option value="L1">L1 - Recall</option>
                        <option value="L2">L2 - Implement</option>
                        <option value="L3">L3 - Debug</option>
                        <option value="L4">L4 - Design</option>
                        <option value="L5">L5 - Production</option>
                      </select>
                    </div>
                  </div>

                  {/* 5 Checklist Questions */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase text-neutral-500">
                      The 5 Self-Audit Questions:
                    </div>

                    {[
                      {
                        key: 'q1_explain' as const,
                        label: '1. Can I explain this concept without looking at AI?'
                      },
                      {
                        key: 'q2_implement' as const,
                        label: '2. Can I write the core code/config from scratch on a blank screen?'
                      },
                      {
                        key: 'q3_debug' as const,
                        label: '3. If this breaks in production at 2 AM, do I know where to look?'
                      },
                      {
                        key: 'q4_design' as const,
                        label: '4. Can I explain why I chose this tool over its alternatives?'
                      },
                      {
                        key: 'q5_production' as const,
                        label: '5. Have I built a complete project using this technology?'
                      }
                    ].map(q => {
                      const isChecked = Boolean(current.answers[q.key]);
                      return (
                        <div
                          key={q.key}
                          onClick={() =>
                            updateTechAssessment(tech, {
                              answers: { [q.key]: !isChecked } as any
                            })
                          }
                          className={`p-2 rounded-lg border text-xs font-mono flex items-start gap-2.5 cursor-pointer transition-colors ${
                            isChecked
                              ? 'bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-black dark:text-white font-medium'
                              : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="mt-0.5 rounded border-neutral-400 text-black dark:text-white focus:ring-0"
                          />
                          <span className="leading-snug">{q.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* The 12 Non-Negotiable Mastery Rules */
        <div className="space-y-4">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-xs space-y-2">
            <h3 className="text-base font-bold text-black dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
              <span>The 12 Non-Negotiable Rules of Real Engineering</span>
            </h3>
            <p className="text-xs font-mono text-neutral-500">
              Directly extracted from backend-devops-master-roadmap.md. You do NOT master a technology until you satisfy these criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {NON_NEGOTIABLE_MASTERY_RULES.map((rule, idx) => (
              <div
                key={rule.technology}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      RULE {String(idx + 1).padStart(2, '0')}
                    </span>
                    <Badge variant="filled" size="sm">
                      {rule.technology}
                    </Badge>
                  </div>
                </div>
                <div className="font-bold text-sm text-black dark:text-white mt-1">
                  {rule.rule}
                </div>
                <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 pt-1 leading-relaxed border-t border-neutral-100 dark:border-neutral-800">
                  <strong className="text-black dark:text-white">Validation Criterion:</strong> {rule.requirement}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
