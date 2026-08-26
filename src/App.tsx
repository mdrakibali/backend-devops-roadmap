import React, { useState } from 'react';
import { RoadmapProvider, useRoadmap } from './context/RoadmapContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { AiFreeBanner } from './components/layout/AiFreeBanner';
import { GlobalSearchModal } from './components/layout/GlobalSearchModal';
import { ToastContainer } from './components/layout/ToastContainer';

import { DashboardView } from './components/dashboard/DashboardView';
import { RoadmapView } from './components/roadmap/RoadmapView';
import { TodayView } from './components/today/TodayView';
import { InProgressView } from './components/in-progress/InProgressView';
import { CompletedView } from './components/completed/CompletedView';
import { RemainingView } from './components/remaining/RemainingView';
import { ProjectsView } from './components/projects/ProjectsView';
import { SelfAssessmentView } from './components/assessment/SelfAssessmentView';
import { SettingsView } from './components/settings/SettingsView';

const AppContent: React.FC = () => {
  const { activeTab } = useRoadmap();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'roadmap':
        return <RoadmapView />;
      case 'today':
        return <TodayView />;
      case 'in-progress':
        return <InProgressView />;
      case 'completed':
        return <CompletedView />;
      case 'remaining':
        return <RemainingView />;
      case 'projects':
        return <ProjectsView />;
      case 'assessment':
        return <SelfAssessmentView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-black text-neutral-900 dark:text-neutral-100 flex flex-col font-sans antialiased transition-colors selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-black">
      {/* Top Banner (AI-Free Discipline Protocol) */}
      <AiFreeBanner />

      <div className="flex-1 flex overflow-hidden">
        {/* Responsive Sidebar */}
        <Sidebar
          mobileOpen={mobileMenuOpen}
          onCloseMobile={() => setMobileMenuOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />

          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            {renderActiveView()}
          </main>
        </div>
      </div>

      {/* Global Modals & Notifications */}
      <GlobalSearchModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <RoadmapProvider>
      <AppContent />
    </RoadmapProvider>
  );
}
