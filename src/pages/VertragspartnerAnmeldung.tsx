
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trash2, Building, Mail, Phone, MapPin } from 'lucide-react';

interface Vertragspartner {
  id: string;
  name: string;
  email: string;
  telefon: string;
  adresse: string;
  beschreibung: string;
  status: 'aktiv' | 'inaktiv';
  erstelltAm: string;
}

const VertragspartnerAnmeldung = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    adresse: '',
    beschreibung: ''
  });

  const [vertragspartner, setVertragspartner] = useState<Vertragspartner[]>([
    {
      id: '1',
      name: 'Muster GmbH',
      email: 'kontakt@muster.de',
      telefon: '+49 123 456789',
      adresse: 'Musterstraße 1, 12345 Musterstadt',
      beschreibung: 'Technologie-Dienstleister für innovative Lösungen',
      status: 'aktiv',
      erstelltAm: '2024-01-15'
    },
    {
      id: '2',
      name: 'Digital Solutions AG',
      email: 'info@digital-solutions.de',
      telefon: '+49 987 654321',
      adresse: 'Digitalweg 5, 54321 Tech City',
      beschreibung: 'Spezialist für digitale Transformation',
      status: 'aktiv',
      erstelltAm: '2024-02-20'
    }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const neuerVertragspartner: Vertragspartner = {
      id: Date.now().toString(),
      ...formData,
      status: 'aktiv',
      erstelltAm: new Date().toLocaleDateString('de-DE')
    };

    setVertragspartner(prev => [neuerVertragspartner, ...prev]);
    
    // Form zurücksetzen
    setFormData({
      name: '',
      email: '',
      telefon: '',
      adresse: '',
      beschreibung: ''
    });
  };

  const handleDelete = (id: string) => {
    setVertragspartner(prev => prev.filter(vp => vp.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header/>
      
      <main className="pt-20 px-6 py-8">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Vertragspartner Anmeldung
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Linke Seite - Anmeldeformular */}
            <div>
              <Card className="shadow-lg border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Building className="h-6 w-6" />
                    Neuen Vertragspartner anlegen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Firmenname *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="z.B. Muster GmbH"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        E-Mail Adresse *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="kontakt@beispiel.de"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Telefonnummer
                      </label>
                      <Input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        value={formData.telefon}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="+49 123 456789"
                      />
                    </div>

                    <div>
                      <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Adresse
                      </label>
                      <Input
                        id="adresse"
                        name="adresse"
                        type="text"
                        value={formData.adresse}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Straße, PLZ Ort"
                      />
                    </div>

                    <div>
                      <label htmlFor="beschreibung" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Beschreibung
                      </label>
                      <Textarea
                        id="beschreibung"
                        name="beschreibung"
                        value={formData.beschreibung}
                        onChange={handleInputChange}
                        className="w-full"
                        rows={4}
                        placeholder="Kurze Beschreibung der Tätigkeit..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      Vertragspartner anlegen
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Rechte Seite - Listenansicht */}
            <div className="row">
              <Card className="shadow-lg border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    Registrierte Vertragspartner
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {vertragspartner.length} Vertragspartner registriert
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="row item-wrapper space-y-4 max-h-[600px] overflow-y-auto">
                    {vertragspartner.map((vp) => (
                      <div 
                        key={vp.id} 
                        className="col-12 col-lg-6 col-xxl-4 item p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-white/50 dark:bg-gray-700/50"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {vp.name}
                            </h3>
                            <Badge 
                              variant={vp.status === 'aktiv' ? 'default' : 'secondary'}
                              className="mt-1"
                            >
                              {vp.status}
                            </Badge>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(vp.id)}
                            className="text-red-600 hover:text-red-800 hover:bg-red-100 dark:hover:bg-red-900/20"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>{vp.email}</span>
                          </div>
                          
                          {vp.telefon && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              <span>{vp.telefon}</span>
                            </div>
                          )}
                          
                          {vp.adresse && (
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{vp.adresse}</span>
                            </div>
                          )}
                          
                          {vp.beschreibung && (
                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                              {vp.beschreibung}
                            </p>
                          )}
                          
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            Registriert am: {vp.erstelltAm}
                          </p>
                        </div>
                      </div>
                    ))}
                    
                    {vertragspartner.length === 0 && (
                      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                        Noch keine Vertragspartner registriert
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
</div>
);
};

export default VertragspartnerAnmeldung;
