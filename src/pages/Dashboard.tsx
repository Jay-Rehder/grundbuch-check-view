
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { ProjectsOverview } from '@/components/dashboard/ProjectsOverview';
import { ProjectsDistribution } from '@/components/dashboard/ProjectsDistribution';
import { ActiveEvaluations } from '@/components/dashboard/ActiveEvaluations';

const Dashboard = () => {
  const { currentScheme } = useColorScheme();

  // Mock data für Projekte im Grid
  const projects = [
    { id: 1, name: 'Projekt Beta', status: 'green' as const, description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 2, name: 'Projekt Beta', status: 'orange' as const, description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 3, name: 'Projekt Beta', status: 'green' as const, description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 4, name: 'Projekt Beta', status: 'green' as const, description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 5, name: 'Projekt Beta', status: 'red' as const, description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 6, name: 'Projekt Beta', status: 'green' as const, description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 7, name: 'Projekt Beta', status: 'red' as const, description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 8, name: 'Projekt Beta', status: 'orange' as const, description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 9, name: 'Projekt Beta', status: 'red' as const, description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 10, name: 'Projekt Beta', status: 'green' as const, description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 11, name: 'Projekt Beta', status: 'orange' as const, description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 12, name: 'Projekt Beta', status: 'green' as const, description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
  ];

  // Mock data für aktive Auswertungen
  const activeEvaluations = [
    { id: 1, name: 'Projekt Alpha', progress: 91, status: 'running' as const },
    { id: 2, name: 'Projekt Beta', progress: 0, status: 'paused' as const },
    { id: 3, name: 'Projekt Gamma', progress: 0, status: 'queued' as const },
    { id: 4, name: 'Projekt Zeta', progress: 0, status: 'queued' as const },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: currentScheme.color }}>
      <Header />
      
      <div className="flex-1 pt-20 pb-8">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Haupt Container - Bootstrap-ähnliche Struktur */}
            <div className="bg-white rounded-lg shadow-lg p-8 min-h-[700px]">
              <div className="flex gap-8 h-full">
                
                {/* Col-7 equivalent (58.33%) */}
                <div className="w-7/12 flex flex-col">
                  <ProjectsOverview projects={projects} />
                  <ProjectsDistribution />
                </div>

                {/* Col-5 equivalent (41.67%) */}
                <ActiveEvaluations evaluations={activeEvaluations} />
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
