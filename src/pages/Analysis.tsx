
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
  const [expandedSections, setExpandedSections] = useState<number[]>([3]); // Section 4 expanded by default

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

  if (isLoading) {
    return (
      <div className="min-h-screen dark:bg-gray-900" style={{ backgroundColor: '#F1F7FE' }}>
        <Header />
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-12 shadow-sm text-center">
              <h2 className="text-2xl font-medium text-gray-800 dark:text-white mb-8">Analyse läuft...</h2>
              <div className="space-y-4">
                <Progress value={progress} className="h-3" />
                <p className="text-gray-600 dark:text-gray-400">{progress}% abgeschlossen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-gray-900" style={{ backgroundColor: '#F1F7FE' }}>
      <Header />
      
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        
        {/* Element 1: Textanalyse */}
        <Card className="bg-white dark:bg-gray-800 shadow-sm border-gray-200 dark:border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-medium text-gray-800 dark:text-white">Textanalyse</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left: Accordion */}
              <div className="space-y-4">
                {sections.map((section, index) => (
                  <div key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0">
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <span className="font-medium text-gray-800 dark:text-white">{section.title}</span>
                      {expandedSections.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      )}
                    </button>
                    
                    {expandedSections.includes(index) && section.content && (
                      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-medium mb-3 text-gray-800 dark:text-white">Beschreibung</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                              {section.content.description}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-3 text-gray-800 dark:text-white">JSON Ausgabe</h4>
                            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
                              {section.content.json}
                            </pre>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right: Document Preview */}
              <div className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">2</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-white">Vertragssoftware</span>
                  </div>
                  <div className="border-2 border-blue-400 rounded-lg p-6 bg-blue-50 dark:bg-blue-900/20 min-h-96">
                    <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                      <p>
                        Vertragssoftware ist eine computerprinzip, definiert als dem Lizenznehmer die Vereinspraxis-Software und Computerprogrammmodul, welche zusammenhängend Zugangsdefinitions. Die Lizensierung des Vertragspartners zu einen Gültigkeitsschranken und den gesamten der Vertragssoftware erfolgt der Vertragsspartner ist auf Vertragsabschluss gerichtet und der der Vertragssoftware durch den 31 Abs. 1 der Allgemeinen Geschäftsbedingungen in Ablagen 1 beschrieben. (2) [...]
                      </p>
                      
                      <div className="space-y-2">
                        <p className="font-medium text-gray-800 dark:text-white">Die Vertragssoftware ist eine für die Projektsteuerungsarbeit eines rechtlichen Software</p>
                        <p className="font-medium text-gray-800 dark:text-white">Die Vertragssoftware ist zur Nutzung auf einer Besitzrechtsschranken zwischen den den Keywords</p>
                        <p className="font-medium text-gray-800 dark:text-white">genutztheitlich für die Übermittlung der Vertragsnamen von einer Vertragssoftware definiert und dann den den Downlod, den Betriebssicherheit wird für solche QOG-Treffen nicht angeführt.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Element 2: Inhaltsanalyse */}
        <Card className="bg-white dark:bg-gray-800 shadow-sm border-gray-200 dark:border-gray-700 mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-medium text-gray-800 dark:text-white">Inhaltsanalyse</CardTitle>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <div className="text-center font-medium text-gray-800 dark:text-white">Nr.</div>
                <div className="text-center font-medium text-gray-800 dark:text-white">Problemstellung</div>
                <div className="text-center font-medium text-gray-800 dark:text-white">Art. § Abs. § BTS</div>
                <div className="text-center font-medium text-gray-800 dark:text-white">Status</div>
              </div>
              
              {/* Table Rows */}
              <div className="divide-y divide-gray-200 dark:divide-gray-600">
                <div className="grid grid-cols-4 gap-4 items-center p-4">
                  <div className="text-center font-medium text-gray-800 dark:text-white">1</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    Die Löhnung erstehen einer neuen Vertragssammlerregeln der Zustellungen werden bei der Vereinspreis-Software aufgrund der...
                  </div>
                  <div className="text-center text-sm text-gray-700 dark:text-gray-300">3 Angaben</div>
                  <div className="text-center">
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">Nicht konform</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 items-center p-4">
                  <div className="text-center font-medium text-gray-800 dark:text-white">2</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    Die Löhnung erstehen einer neuen Vertragssammlerregeln der Zustellungen werden bei der Vereinspreis-Software aufgrund der...
                  </div>
                  <div className="text-center text-sm text-gray-700 dark:text-gray-300">10 Angaben</div>
                  <div className="text-center">
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">Nicht konform</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Element 3: Score */}
        <Card className="bg-white dark:bg-gray-800 shadow-sm border-gray-200 dark:border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-medium text-gray-800 dark:text-white">Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Progress Bar */}
              <div>
                <div className="flex h-6 rounded-full overflow-hidden shadow-sm">
                  <div className="bg-green-500 flex items-center justify-center text-white text-sm font-medium" style={{ width: '15.7%' }}>
                    15.7%
                  </div>
                  <div className="bg-orange-400 flex items-center justify-center text-white text-sm font-medium" style={{ width: '11.5%' }}>
                    11.5%
                  </div>
                  <div className="bg-red-500 flex items-center justify-center text-white text-sm font-medium" style={{ width: '72.8%' }}>
                    72.8%
                  </div>
                </div>
              </div>

              {/* Circular Charts */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-6">Aufteilung</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {/* Green Circle */}
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3"
                          strokeDasharray="15.7, 100"
                        />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-800 dark:text-white">Aufteilung</h4>
                  </div>

                  {/* Orange Circle */}
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="3"
                          strokeDasharray="11.5, 100"
                        />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-800 dark:text-white">Aufteilung</h4>
                  </div>

                  {/* Red Circle 1 */}
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="3"
                          strokeDasharray="36.4, 100"
                        />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-800 dark:text-white">Aufteilung</h4>
                  </div>

                  {/* Red Circle 2 */}
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#dc2626"
                          strokeWidth="3"
                          strokeDasharray="36.4, 100"
                        />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-800 dark:text-white">Aufteilung</h4>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8">
          <Button 
            onClick={() => navigate('/')}
            variant="outline"
            className="px-8 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Zurück zur Startseite
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
