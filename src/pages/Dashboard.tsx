
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { Button } from '@/components/ui/button';
import { Play, Pause, Clock, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { currentScheme } = useColorScheme();

  // Mock data für Projekte im Grid
  const projects = [
    { id: 1, name: 'Projekt Beta', status: 'green', description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 2, name: 'Projekt Beta', status: 'orange', description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 3, name: 'Projekt Beta', status: 'green', description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 4, name: 'Projekt Beta', status: 'green', description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 5, name: 'Projekt Beta', status: 'red', description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 6, name: 'Projekt Beta', status: 'green', description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 7, name: 'Projekt Beta', status: 'red', description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 8, name: 'Projekt Beta', status: 'orange', description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 9, name: 'Projekt Beta', status: 'red', description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 10, name: 'Projekt Beta', status: 'green', description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 11, name: 'Projekt Beta', status: 'orange', description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
    { id: 12, name: 'Projekt Beta', status: 'green', description: 'Lorem ipsum dolor siet amet. Lorem ipsum dolor met.' },
  ];

  // Mock data für aktive Auswertungen
  const activeEvaluations = [
    { id: 1, name: 'Projekt Alpha', progress: 91, status: 'running' },
    { id: 2, name: 'Projekt Beta', progress: 0, status: 'paused' },
    { id: 3, name: 'Projekt Gamma', progress: 0, status: 'queued' },
    { id: 4, name: 'Projekt Zeta', progress: 0, status: 'queued' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'green':
        return 'border-green-500';
      case 'orange':
        return 'border-orange-500';
      case 'red':
        return 'border-red-500';
      default:
        return 'border-gray-500';
    }
  };

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
                  
                  {/* Row 1: Übersicht */}
                  <div className="flex-1 mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold text-gray-800">Übersicht</h2>
                      <Link to="/">
                        <Button className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300">
                          Dokument hochladen
                        </Button>
                      </Link>
                    </div>
                    
                    {/* Projects Grid - 4 Spalten x 3 Zeilen */}
                    <div className="grid grid-cols-4 gap-6 h-80">
                      {projects.map((project) => (
                        <div key={project.id} className="flex flex-col items-center text-center">
                          <div className={`w-16 h-16 rounded-full border-4 ${getStatusColor(project.status)} mb-2 relative`}>
                            <div className="absolute inset-2 rounded-full bg-current opacity-20"></div>
                          </div>
                          <h3 className="font-medium text-gray-800 text-sm mb-1">{project.name}</h3>
                          <p className="text-xs text-gray-600 leading-tight">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Row 2: Projekte - Verteilung */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Projekte - Verteilung</h3>
                    <div className="flex rounded-lg overflow-hidden h-10">
                      <div className="bg-green-500 flex items-center justify-center text-white text-sm font-medium" style={{ flex: '124' }}>
                        124
                      </div>
                      <div className="bg-orange-500 flex items-center justify-center text-white text-sm font-medium" style={{ flex: '15' }}>
                        15
                      </div>
                      <div className="bg-red-500 flex items-center justify-center text-white text-sm font-medium" style={{ flex: '3' }}>
                        3
                      </div>
                    </div>
                  </div>

                </div>

                {/* Col-5 equivalent (41.67%) */}
                <div className="w-5/12 flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Aktive Auswertungen</h2>
                  
                  <div className="flex-1 space-y-6">
                    {activeEvaluations.map((evaluation) => (
                      <div key={evaluation.id} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-medium text-gray-800">{evaluation.name}</h3>
                          <div className="flex items-center space-x-2">
                            {evaluation.status === 'running' && <Play className="h-4 w-4 text-green-500" />}
                            {evaluation.status === 'paused' && <Pause className="h-4 w-4 text-orange-500" />}
                            {evaluation.status === 'queued' && <Clock className="h-4 w-4 text-gray-500" />}
                            <Settings className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                        
                        {/* Progress Circle */}
                        <div className="flex justify-center">
                          <div className="relative w-20 h-20">
                            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 24 24">
                              <circle 
                                cx="12" 
                                cy="12" 
                                r="9" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                fill="none" 
                                className="text-gray-200"
                              />
                              <circle 
                                cx="12" 
                                cy="12" 
                                r="9" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                fill="none" 
                                strokeDasharray={`${evaluation.progress * 0.565} 56.5`}
                                className={`${
                                  evaluation.status === 'running' ? 'text-blue-500' :
                                  evaluation.status === 'paused' ? 'text-orange-500' :
                                  'text-gray-400'
                                }`}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-lg font-semibold text-gray-800">{evaluation.progress}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Right Button */}
                  <div className="mt-8 flex justify-end">
                    <Button className="bg-blue-100 hover:bg-blue-200 text-blue-800 border border-blue-300">
                      Projekte anzeigen
                    </Button>
                  </div>
                </div>
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
