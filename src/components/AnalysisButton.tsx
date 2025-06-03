
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface AnalysisButtonProps {
  canAnalyze: boolean;
  isAnalyzing: boolean;
  onAnalyze: () => void;
}

export const AnalysisButton = ({ canAnalyze, isAnalyzing, onAnalyze }: AnalysisButtonProps) => {
  return (
    <div className="flex justify-center">
      <Button
        onClick={onAnalyze}
        disabled={!canAnalyze || isAnalyzing}
        className="bg-blue-300 hover:bg-blue-400 text-white px-12 py-3 text-base font-medium rounded-xl shadow-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isAnalyzing ? (
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Analysiere...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <Search className="h-5 w-5" />
            <span>Auswerten</span>
          </div>
        )}
      </Button>
    </div>
  );
};
