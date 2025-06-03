
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
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-orange-400" />;
      case 'non-compliant':
        return <XCircle className="h-5 w-5 text-red-400" />;
      default:
        return <Info className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-light text-slate-800">Analyse-Ergebnisse</h3>
          <Alert className="bg-blue-50 border-blue-200 w-auto rounded-xl">
            <Info className="h-4 w-4 text-blue-500" />
            <AlertDescription className="text-blue-700 text-sm">
              Vorherige Tabelle wird angezeigt. Klicken Sie 'Auswerten' für eine neue Analyse.
            </AlertDescription>
          </Alert>
        </div>
        
        <div className="flex h-10 rounded-2xl overflow-hidden shadow-inner">
          <div 
            className="bg-gradient-to-r from-green-300 to-emerald-300 flex items-center justify-center text-white text-sm font-medium"
            style={{ width: `${results.compliant}%` }}
          >
            {results.compliant}%
          </div>
          <div 
            className="bg-gradient-to-r from-orange-300 to-yellow-300 flex items-center justify-center text-white text-sm font-medium"
            style={{ width: `${results.warning}%` }}
          >
            {results.warning}%
          </div>
          <div 
            className="bg-gradient-to-r from-red-300 to-pink-300 flex items-center justify-center text-white text-sm font-medium"
            style={{ width: `${results.nonCompliant}%` }}
          >
            {results.nonCompliant}%
          </div>
        </div>
      </div>

      {/* Document View */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-lg">
        <div className="bg-white rounded-2xl p-8 min-h-96 relative shadow-inner">
          <div className="space-y-6">
            {results.details.map((detail, index) => (
              <div key={index} className="border-l-4 border-slate-200 pl-6 py-2">
                <div className="flex items-start space-x-4">
                  {getStatusIcon(detail.status)}
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3 text-lg">{detail.section}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {detail.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Sample document content */}
          <div className="absolute bottom-6 right-6 text-xs text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
            Seite 1 von 3
          </div>
        </div>
      </div>
    </div>
  );
};
