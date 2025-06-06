
import { Play, Pause, Clock, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Evaluation {
  id: number;
  name: string;
  progress: number;
  status: 'running' | 'paused' | 'queued';
}

interface ActiveEvaluationsProps {
  evaluations: Evaluation[];
}

export const ActiveEvaluations = ({ evaluations }: ActiveEvaluationsProps) => {
  return (
    <div className="w-5/12 flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Aktive Auswertungen</h2>
      
      <div className="flex-1 space-y-6">
        {evaluations.map((evaluation) => (
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
  );
};
