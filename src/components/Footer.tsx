
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16 py-12 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo und Schriftzug */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-200 dark:bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-300 font-bold text-sm">📄</span>
              </div>
              <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">DORA KI</span>
              <div className="flex space-x-1">
                <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 text-xs rounded">OCR</span>
                <span className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 text-xs rounded">KI</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs">
              Intelligente Dokumentenanalyse für maximale Compliance und Effizienz.
            </p>
          </div>

          {/* Kontaktdaten */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-800 dark:text-white">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@doraki.de</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+49 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Musterstraße 123, 12345 Berlin</span>
              </div>
            </div>
          </div>

          {/* Zusätzliche Informationen */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-800 dark:text-white">Über uns</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              DORA KI revolutioniert die Art, wie Unternehmen ihre Dokumente analysieren und Compliance sicherstellen.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            © 2024 DORA KI. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};
