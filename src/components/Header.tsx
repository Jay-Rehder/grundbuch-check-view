
import { FileText } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-300 to-purple-300 p-3 rounded-2xl shadow-md">
              <FileText className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-3xl font-light text-slate-800">Grundbuch-Check</h1>
          </div>
          <div className="flex space-x-3">
            <div className="bg-gradient-to-r from-green-200 to-emerald-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              OCR
            </div>
            <div className="bg-gradient-to-r from-pink-200 to-rose-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              KI
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
