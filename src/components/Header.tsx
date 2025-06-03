
import { FileText } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Grundbuch-Check</h1>
          </div>
          <div className="flex space-x-2">
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              OCR
            </div>
            <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-medium">
              KI
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
