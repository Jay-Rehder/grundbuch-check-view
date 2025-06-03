
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface ExportButtonProps {
  results: any;
}

export const ExportButton = ({ results }: ExportButtonProps) => {
  const handleExport = () => {
    // Create a simple report
    const report = {
      timestamp: new Date().toISOString(),
      results: results,
      summary: `Analyse abgeschlossen: ${results.compliant}% konform, ${results.warning}% Warnungen, ${results.nonCompliant}% nicht konform`
    };
    
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'grundbuch-analyse-bericht.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      onClick={handleExport}
      className="bg-gradient-to-r from-green-300 to-emerald-300 hover:from-green-400 hover:to-emerald-400 text-white px-8 py-3 rounded-xl font-medium shadow-lg transition-all duration-200 hover:scale-105"
    >
      <Download className="h-4 w-4 mr-2" />
      Export
    </Button>
  );
};
