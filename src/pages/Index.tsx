
import { useState } from 'react';
import { FileUpload } from '@/components/FileUpload';
import { ServiceSelector } from '@/components/ServiceSelector';
import { DocumentSelector } from '@/components/DocumentSelector';
import { CriticalServiceSelector } from '@/components/CriticalServiceSelector';
import { AnalysisButton } from '@/components/AnalysisButton';
import { ResultsDisplay } from '@/components/ResultsDisplay';
import { ExportButton } from '@/components/ExportButton';
import { Header } from '@/components/Header';

const Index = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);
  const [isCriticalService, setIsCriticalService] = useState<boolean>(true);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalysis = async () => {
    if (!uploadedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis process
    setTimeout(() => {
      setAnalysisResults({
        compliant: 19.7,
        warning: 8.5,
        nonCompliant: 71.8,
        details: [
          {
            section: "Allgemeine Sicherheitsanforderungen",
            status: "compliant",
            description: "Der Vertrag enthält allgemeine Sicherheitsanforderungen, da er die Implementierung eines Informationssicherheitsmanagement-Systems (ISMS) beschreibt, das nach ISO 27001 zertifiziert ist."
          },
          {
            section: "Spezifische Sicherheitsmaßnahmen",
            status: "warning",
            description: "Es werden spezifische Sicherheitsmaßnahmen wie Virenschutz, Client-Security und Netzwerk-Security erwähnt."
          },
          {
            section: "Data Protection Management",
            status: "non-compliant",
            description: "Zudem wird auf ein Data Protection Management System (DPMS) verwiesen, das nach dem Muster der ISO 27001 aufgebaut ist."
          }
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const canAnalyze = uploadedFile && selectedService && selectedDocuments.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* File Upload Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <FileUpload 
              onFileUpload={setUploadedFile}
              uploadedFile={uploadedFile}
            />
          </div>

          {/* Configuration Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ServiceSelector 
              selectedService={selectedService}
              onServiceChange={setSelectedService}
            />
            
            <DocumentSelector 
              selectedDocuments={selectedDocuments}
              onDocumentsChange={setSelectedDocuments}
            />
            
            <CriticalServiceSelector 
              isCritical={isCriticalService}
              onCriticalChange={setIsCriticalService}
            />
          </div>

          {/* Analysis Button */}
          <AnalysisButton 
            canAnalyze={canAnalyze}
            isAnalyzing={isAnalyzing}
            onAnalyze={handleAnalysis}
          />

          {/* Results Section */}
          {analysisResults && (
            <div className="space-y-6">
              <ResultsDisplay results={analysisResults} />
              <div className="flex justify-end">
                <ExportButton results={analysisResults} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
