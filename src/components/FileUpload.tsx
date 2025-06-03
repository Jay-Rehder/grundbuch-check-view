
import { useState, useRef } from 'react';
import { Upload, File, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileUploadProps {
  onFileUpload: (file: File | null) => void;
  uploadedFile: File | null;
}

export const FileUpload = ({ onFileUpload, uploadedFile }: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf' && file.size <= 1024 * 1024 * 1024) { // 1GB limit
        onFileUpload(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf' && file.size <= 1024 * 1024 * 1024) {
        onFileUpload(file);
      }
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    onFileUpload(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium text-gray-800 mb-6">Vertragsdokument hochladen</h2>
      
      {!uploadedFile ? (
        <div
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
            isDragging 
              ? 'border-blue-400 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-700 text-lg font-medium mb-1">Dateien hier ablegen</p>
          <p className="text-gray-500 text-sm mb-6">Limit 1GB pro Datei • PDF</p>
          
          <Button 
            onClick={handleBrowseClick}
            className="bg-blue-300 hover:bg-blue-400 text-white font-medium px-6 py-2 rounded-lg shadow-sm transition-all duration-200"
          >
            Dateien durchsuchen
          </Button>
          
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      ) : (
        <div className="bg-green-50 rounded-xl p-6 flex items-center justify-between border border-green-200">
          <div className="flex items-center space-x-4">
            <File className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-gray-800 font-medium">{uploadedFile.name}</p>
              <p className="text-gray-600 text-sm">
                {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>
          <Button
            onClick={handleRemoveFile}
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-red-500 hover:bg-red-50"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
