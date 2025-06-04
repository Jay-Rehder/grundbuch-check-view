
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';

const Analysis = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const toggleSection = (index: number) => {
    setExpandedSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const sections = [
    {
      title: "Seite 1 - Deckblatt",
      content: null
    },
    {
      title: "Seite 2 - Inhaltsverzeichnis",
      content: null
    },
    {
      title: "Seite 3 - Vorwort",
      content: null
    },
    {
      title: "Seite 4 - Vertragsteil",
      content: {
        description: "Vereinbarung (1) Der Lizenzgeber stellt an den Lizenznehmer für Objekte/Cloud-Dienste der Vertragssoftware in Objektcode-Form zur Verfügung. Die Leistung des Vertragsprogramms an den Unternehmer erfolgt durch die Bewertstellung zum Download über die Factoren Internetseite entsprechend dem Leistungsumfang und bei Funktionsumsatz und abweichend von § 3 Abs. 2 der Allgemeinen Geschäftsbedingungen in Anlage 1 Beschreibung. (2) [...]",
        json: `{
  "type": "text",
  "alignment": "left",
  "text": "Lizenzierung BaIT-Waldmasse",
  "page": 1,
  "font_size": 12,
  "encoding_box": [
    { "x": 0.25883756343, "y": 0.86635030319 },
    { "visible": true }
  ],
  "height": 13.866592036134,
  "y_references": [
    { "text": 640, "ref": 640 }
  ],
  "text": 12
},
{
  "checkboxes": [
    { "checked_box_name": false, "checkbox_value": true }
  ]
}`
      }
    }
  ];

  const analysisResults = {
    compliant: 19.7,
    warning: 8.5,
    nonCompliant: 71.8
  };

  if (isLoading) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#F1F7FE' }}>
        <Header />
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-12 shadow-sm text-center">
              <h2 className="text-2xl font-medium text-gray-800 mb-8">Analyse läuft...</h2>
              <div className="space-y-4">
                <Progress value={progress} className="h-3" />
                <p className="text-gray-600">{progress}% abgeschlossen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F1F7FE' }}>
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Textanalyse Section */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-medium">Textanalyse</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sections.map((section, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="font-medium text-gray-800">{section.title}</span>
                    {expandedSections.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedSections.includes(index) && section.content && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-3">Beschreibung</h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {section.content.description}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-3">JSON Ausgabe</h4>
                          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
                            {section.content.json}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Inhaltsanalyse Section */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-medium">Inhaltsanalyse</CardTitle>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-lg mb-2">
                      <span className="font-medium text-blue-800">Nr.</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 p-3 rounded-lg mb-2">
                      <span className="font-medium">Problemstellung</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 p-3 rounded-lg mb-2">
                      <span className="font-medium">Art. § Abs. § BTS</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 p-3 rounded-lg mb-2">
                      <span className="font-medium">Status</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-4 gap-4 items-center p-3 border border-gray-200 rounded-lg">
                    <div className="text-center font-medium">1</div>
                    <div className="text-sm">
                      Die Löhnung erstehen einer neuen Vertragssammlerregeln der Zustellungen werden bei der Vereinspreis-Software aufgrund der...
                    </div>
                    <div className="text-center text-sm">3 Angaben</div>
                    <div className="text-center">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Nicht konform</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 items-center p-3 border border-gray-200 rounded-lg">
                    <div className="text-center font-medium">2</div>
                    <div className="text-sm">
                      Die Löhnung erstehen einer neuen Vertragssammlerregeln der Zustellungen werden bei der Vereinspreis-Software aufgrund der...
                    </div>
                    <div className="text-center text-sm">10 Angaben</div>
                    <div className="text-center">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Nicht konform</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Score Section */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-medium">Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <div className="flex h-8 rounded-lg overflow-hidden">
                  <div 
                    className="bg-green-500 flex items-center justify-center text-white text-sm font-medium"
                    style={{ width: `${analysisResults.compliant}%` }}
                  >
                    {analysisResults.compliant}%
                  </div>
                  <div 
                    className="bg-orange-400 flex items-center justify-center text-white text-sm font-medium"
                    style={{ width: `${analysisResults.warning}%` }}
                  >
                    {analysisResults.warning}%
                  </div>
                  <div 
                    className="bg-red-500 flex items-center justify-center text-white text-sm font-medium"
                    style={{ width: `${analysisResults.nonCompliant}%` }}
                  >
                    {analysisResults.nonCompliant}%
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Aufteilung</h3>
              </div>

              <div className="grid grid-cols-4 gap-8">
                {[
                  { color: 'bg-green-500', label: 'Aufteilung' },
                  { color: 'bg-orange-400', label: 'Aufteilung' },
                  { color: 'bg-red-500', label: 'Aufteilung' },
                  { color: 'bg-red-500', label: 'Aufteilung' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-medium mb-4">{item.label}</h4>
                    <div className="relative w-24 h-24 mx-auto">
                      <div className={`w-full h-full rounded-full ${item.color} opacity-80`}></div>
                      <div className="absolute inset-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="px-8"
            >
              Zurück zur Startseite
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
