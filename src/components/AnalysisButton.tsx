
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
    navigate('/analysis');
  };

  return (
    <div className="flex justify-center">
      <Button
        onClick={handleClick}
        className="bg-blue-300 hover:bg-blue-400 text-white px-12 py-3 text-base font-medium rounded-xl shadow-sm transition-all duration-200"
      >
        <div className="flex items-center space-x-3">
          <Search className="h-5 w-5" />
          <span>Auswerten</span>
        </div>
      </Button>
    </div>
  );
};
