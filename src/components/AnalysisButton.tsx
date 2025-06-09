
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AnalysisButtonProps {
  canAnalyze: boolean;
  isAnalyzing: boolean;
  onAnalyze: () => void;
}

export const AnalysisButton = ({ canAnalyze, isAnalyzing, onAnalyze }: AnalysisButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (canAnalyze) {
      onAnalyze();
      navigate('/analysis');
    }
  };

  return (
    <div className="flex justify-center">
      <Button
        onClick={handleClick}
        disabled={!canAnalyze || isAnalyzing}
        size="lg"
        className="disabled:opacity-50 disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-400"
      >
        <div className="flex items-center space-x-3">
          <Search className="h-5 w-5" />
          <span>{isAnalyzing ? 'Analysiere...' : 'Auswerten'}</span>
        </div>
      </Button>
    </div>
  );
};
