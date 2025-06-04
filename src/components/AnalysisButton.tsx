
import { Button } from '@/components/ui/button';
import { Search, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

interface AnalysisButtonProps {
  canAnalyze: boolean;
  isAnalyzing: boolean;
  onAnalyze: () => void;
}

export const AnalysisButton = ({ canAnalyze, isAnalyzing, onAnalyze }: AnalysisButtonProps) => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf') {
        // Store file in sessionStorage for the analysis page
        const reader = new FileReader();
        reader.onload = () => {
          sessionStorage.setItem('uploadedFile', JSON.stringify({
            name: file.name,
            size: file.size,
            type: file.type
          }));
          navigate('/analysis');
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div className="flex justify-center">
      <Button
        onClick={handleClick}
        className="bg-blue-300 hover:bg-blue-400 text-white px-12 py-3 text-base font-medium rounded-xl shadow-sm transition-all duration-200"
      >
        <div className="flex items-center space-x-3">
          <Upload className="h-5 w-5" />
          <span>Auswerten</span>
        </div>
      </Button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
};
