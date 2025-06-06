import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { Button } from '@/components/ui/button';
import { Upload, Play, Pause, Clock, Settings } from 'lucide-react';
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

  const getStatusFillColor = (status: string) => {
    switch (status) {
      case 'green':
        return 'bg-green-500';
      case 'orange':
        return 'bg-orange-500';
      case 'red':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 transition-colors" style={{ backgroundColor: currentScheme.color }}>
      <Header />
      
      <div className="flex-1 pt-20 pb-8">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Layout Container */}
            <div className="bg-white rounded-lg border-2 border-blue-300 p-8 min-h-[600px] relative">
              
              {/* Layout Grid */}
              <div className="grid grid-cols-4 gap-8 h-full">
                
                {/* Left Section - Übersicht */}
                <div className="col-span-3 border-r border-gray-300 pr-8 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-semibold text-gray-800">Übersicht</h2>
                    <Link to="/">
                      <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-400">
                        Dokument hochladen
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Projects Grid */}
                  <div className="grid grid-cols-4 gap-6 mb-12 flex-1">
                    {projects.map((project) => (
                      <div key={project.id} className="flex items-start space-x-3">
                        <div className={`w-12 h-12 rounded-full border-4 ${getStatusColor(project.status)} flex-shrink-0`}>
                          <div className={`w-full h-full rounded-full ${getStatusFillColor(project.status)} opacity-20`}></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-800 text-sm mb-1">{project.name}</h3>
                          <p className="text-xs text-gray-600 leading-tight">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Projekte - Verteilung */}
                  <div className="mt-auto">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Projekte - Verteilung</h3>
                    <div className="flex rounded-lg overflow-hidden h-8">
                      <div className="bg-green-500 flex-1 flex items-center justify-center text-white text-sm font-medium" style={{ flexBasis: '75%' }}>
                        124
                      </div>
                      <div className="bg-orange-500 flex items-center justify-center text-white text-sm font-medium" style={{ flexBasis: '20%' }}>
                        15
                      </div>
                      <div className="bg-red-500 flex items-center justify-center text-white text-sm font-medium" style={{ flexBasis: '5%' }}>
                        3
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Aktive Auswertungen */}
                <div className="col-span-1 flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-800 mb-8">Aktive Auswertungen</h2>
                  
                  <div className="space-y-6 flex-1">
                    {activeEvaluations.map((evaluation) => (
                      <div key={evaluation.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-medium text-gray-800 text-sm">{evaluation.name}</h3>
                          <div className="flex items-center space-x-2">
                            {evaluation.status === 'running' && <Play className="h-3 w-3 text-green-500" />}
                            {evaluation.status === 'paused' && <Pause className="h-3 w-3 text-orange-500" />}
                            {evaluation.status === 'queued' && <Clock className="h-3 w-3 text-gray-500" />}
                            <Settings className="h-3 w-3 text-gray-400" />
                          </div>
                        </div>
                        
                        {/* Progress Circle */}
                        <div className="flex justify-center">
                          <div className="relative w-16 h-16">
                            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 24 24">
                              <circle 
                                cx="12" 
                                cy="12" 
                                r="10" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                fill="none" 
                                className="text-gray-200"
                              />
                              <circle 
                                cx="12" 
                                cy="12" 
                                r="10" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                fill="none" 
                                strokeDasharray={`${evaluation.progress * 0.628} 62.8`}
                                className={`${
                                  evaluation.status === 'running' ? 'text-blue-500' :
                                  evaluation.status === 'paused' ? 'text-orange-500' :
                                  'text-gray-400'
                                }`}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-sm font-medium text-gray-800">{evaluation.progress}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Separated Projekte anzeigen Button */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 border border-blue-300">
                      Projekte anzeigen
                    </Button>
                  </div>
                </div>
              </div>

              {/* Blue border indicator at bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-500 text-white px-3 py-1 text-xs rounded">
                8362 x 4816
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
