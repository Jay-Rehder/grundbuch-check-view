
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';

interface ResultsDisplayProps {
  results: {
    compliant: number;
    warning: number;
    nonCompliant: number;
    details: Array<{
      section: string;
      status: 'compliant' | 'warning' | 'non-compliant';
      description: string;
    }>;
  };
}

export const ResultsDisplay = ({ results }: ResultsDisplayProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant':
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-orange-400" />;
      case 'non-compliant':
        return <XCircle className="h-5 w-5 text-red-400" />;
      default:
        return <Info className="h-5 w-5 text-blue-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant':
        return 'bg-green-500';
      case 'warning':
        return 'bg-orange-500';
      case 'non-compliant':
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Analyse-Ergebnisse</h3>
          <Alert className="bg-blue-900/50 border-blue-700 w-auto">
            <Info className="h-4 w-4 text-blue-400" />
            <AlertDescription className="text-blue-300">
              Vorherige Tabelle wird angezeigt. Klicken Sie 'Auswerten' für eine neue Analyse.
            </AlertDescription>
          </Alert>
        </div>
        
        <div className="flex h-8 rounded-lg overflow-hidden">
          <div 
            className="bg-green-500 flex items-center justify-center text-white text-sm font-medium"
            style={{ width: `${results.compliant}%` }}
          >
            {results.compliant}%
          </div>
          <div 
            className="bg-orange-500 flex items-center justify-center text-white text-sm font-medium"
            style={{ width: `${results.warning}%` }}
          >
            {results.warning}%
          </div>
          <div 
            className="bg-red-500 flex items-center justify-center text-white text-sm font-medium"
            style={{ width: `${results.nonCompliant}%` }}
          >
            {results.nonCompliant}%
          </div>
        </div>
      </div>

      {/* Document View */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
        <div className="bg-white rounded-lg p-6 min-h-96 relative">
          <div className="space-y-4">
            {results.details.map((detail, index) => (
              <div key={index} className="border-l-4 border-gray-300 pl-4">
                <div className="flex items-start space-x-3">
                  {getStatusIcon(detail.status)}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{detail.section}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {detail.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Sample document content */}
          <div className="absolute bottom-4 right-4 text-xs text-gray-500">
            Seite 1 von 3
          </div>
        </div>
      </div>
    </div>
  );
};
