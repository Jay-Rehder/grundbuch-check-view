
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface AnalysisButtonProps {
  canAnalyze: boolean;
  isAnalyzing: boolean;
  onAnalyze: () => void;
}

export const AnalysisButton = ({ canAnalyze, isAnalyzing, onAnalyze }: AnalysisButtonProps) => {
  return (
    <div className="flex justify-center py-8">
      <Button
        onClick={onAnalyze}
        disabled={!canAnalyze || isAnalyzing}
        className="bg-gradient-to-r from-blue-300 to-purple-300 hover:from-blue-400 hover:to-purple-400 text-white px-16 py-4 text-lg font-medium rounded-2xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
      >
        {isAnalyzing ? (
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            <span>Analysiere...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <Search className="h-6 w-6" />
            <span>Auswerten</span>
          </div>
        )}
      </Button>
    </div>
  );
};
