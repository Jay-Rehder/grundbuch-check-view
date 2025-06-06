
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  name: string;
  status: 'green' | 'orange' | 'red';
  description: string;
}

interface ProjectsOverviewProps {
  projects: Project[];
}

export const ProjectsOverview = ({ projects }: ProjectsOverviewProps) => {
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
  );
};
