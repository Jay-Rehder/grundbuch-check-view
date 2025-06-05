
import { useState } from 'react';
import { FileUpload } from '@/components/FileUpload';
import { ServiceSelector } from '@/components/ServiceSelector';
import { DocumentSelector } from '@/components/DocumentSelector';
import { CriticalServiceSelector } from '@/components/CriticalServiceSelector';
import { AnalysisButton } from '@/components/AnalysisButton';
import { ResultsDisplay } from '@/components/ResultsDisplay';
import { ExportButton } from '@/components/ExportButton';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useColorScheme } from '@/contexts/ColorSchemeContext';

const Index = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);
  const [isCriticalService, setIsCriticalService] = useState<boolean>(true);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { currentScheme } = useColorScheme();

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
    <div className="min-h-screen flex flex-col dark:bg-gray-900 transition-colors" style={{ backgroundColor: currentScheme.color }}>
      <Header />
      
      <div className="flex-1 pt-20 pb-8">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Configuration and Analysis */}
              <div className="space-y-6">
                {/* Configuration Section */}
                <div className="space-y-6">
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
                <div className="pt-4">
                  <AnalysisButton 
                    canAnalyze={canAnalyze}
                    isAnalyzing={isAnalyzing}
                    onAnalyze={handleAnalysis}
                    uploadedFile={uploadedFile}
                  />
                </div>
              </div>

              {/* Right Column - File Upload */}
              <div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm transition-colors">
                  <FileUpload 
                    onFileUpload={setUploadedFile}
                    uploadedFile={uploadedFile}
                  />
                </div>
              </div>
            </div>

            {/* Results Section - Full Width */}
            {analysisResults && (
              <div className="mt-12 space-y-6">
                <ResultsDisplay results={analysisResults} />
                <div className="flex justify-end">
                  <ExportButton results={analysisResults} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
