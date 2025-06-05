
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Upload, FileText, BarChart3, Clock, Play, Pause, Settings, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const { currentScheme } = useColorScheme();

  // Mock data for documents
  const documents = [
    { id: 1, name: 'Vertrag_A.pdf', status: 'Analysiert', score: 85, date: '2024-01-15', result: 'compliant' },
    { id: 2, name: 'Vertrag_B.pdf', status: 'Analysiert', score: 72, date: '2024-01-14', result: 'warning' },
    { id: 3, name: 'Vertrag_C.pdf', status: 'Analysiert', score: 94, date: '2024-01-13', result: 'compliant' },
    { id: 4, name: 'Vertrag_D.pdf', status: 'Analysiert', score: 68, date: '2024-01-12', result: 'non-compliant' },
    { id: 5, name: 'Vertrag_E.pdf', status: 'Analysiert', score: 91, date: '2024-01-11', result: 'compliant' },
    { id: 6, name: 'Vertrag_F.pdf', status: 'Analysiert', score: 55, date: '2024-01-10', result: 'non-compliant' },
  ];

  // Mock data for project distribution
  const projectData = [
    { name: 'Compliant', value: 124, fill: '#10B981' },
    { name: 'Warning', value: 15, fill: '#F59E0B' },
    { name: 'Non-Compliant', value: 3, fill: '#EF4444' },
  ];

  // Mock data for active evaluations
  const activeEvaluations = [
    { id: 1, name: 'Projekt Alpha', progress: 91, status: 'running' },
    { id: 2, name: 'Projekt Beta', progress: 65, status: 'running' },
    { id: 3, name: 'Projekt Gamma', progress: 28, status: 'paused' },
    { id: 4, name: 'Projekt Zeta', progress: 0, status: 'queued' },
  ];

  const getStatusIcon = (result: string) => {
    switch (result) {
      case 'compliant':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      case 'non-compliant':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 transition-colors" style={{ backgroundColor: currentScheme.color }}>
      <Header />
      
      <div className="flex-1 pt-20 pb-8">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Dashboard</h1>

            {/* Übersicht - Documents Overview */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white flex items-center space-x-2">
                    <FileText className="h-6 w-6" />
                    <span>Übersicht</span>
                  </CardTitle>
                  <Link to="/">
                    <Button className="bg-blue-300 hover:bg-blue-400 text-white">
                      <Upload className="h-4 w-4 mr-2" />
                      Dokument hochladen
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Dokument</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Datum</TableHead>
                      <TableHead>Ergebnis</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {documents.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-medium">{doc.name}</TableCell>
                        <TableCell>{doc.status}</TableCell>
                        <TableCell className={`font-semibold ${getScoreColor(doc.score)}`}>{doc.score}%</TableCell>
                        <TableCell>{doc.date}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(doc.result)}
                            <span className="capitalize">{doc.result.replace('-', ' ')}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Projekte - Verteilung */}
              <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white flex items-center space-x-2">
                    <BarChart3 className="h-6 w-6" />
                    <span>Projekte - Verteilung</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ChartContainer config={{
                      compliant: { label: "Compliant", color: "#10B981" },
                      warning: { label: "Warning", color: "#F59E0B" },
                      nonCompliant: { label: "Non-Compliant", color: "#EF4444" }
                    }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={projectData}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="value" fill="var(--color-primary)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                  <div className="flex justify-center mt-4 space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">124 Compliant</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">15 Warning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">3 Non-Compliant</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Aktive Auswertungen */}
              <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white flex items-center space-x-2">
                    <Clock className="h-6 w-6" />
                    <span>Aktive Auswertungen</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeEvaluations.map((evaluation) => (
                      <div key={evaluation.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-medium text-gray-800 dark:text-white">{evaluation.name}</h3>
                          <div className="flex items-center space-x-2">
                            {evaluation.status === 'running' && <Play className="h-4 w-4 text-green-500" />}
                            {evaluation.status === 'paused' && <Pause className="h-4 w-4 text-orange-500" />}
                            {evaluation.status === 'queued' && <Clock className="h-4 w-4 text-gray-500" />}
                            <Settings className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-300">Fortschritt</span>
                            <span className="font-medium text-gray-800 dark:text-white">{evaluation.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-300 ${
                                evaluation.status === 'running' ? 'bg-blue-500' :
                                evaluation.status === 'paused' ? 'bg-orange-500' :
                                'bg-gray-400'
                              }`}
                              style={{ width: `${evaluation.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
