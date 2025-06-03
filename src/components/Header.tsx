
import { FileText, User } from 'lucide-react';
import { HamburgerMenu } from './HamburgerMenu';

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* User Icon */}
          <div className="flex items-center">
            <div className="bg-gray-100 p-2 rounded-full">
              <User className="h-6 w-6 text-gray-600" />
            </div>
          </div>
          
          {/* Center - Logo and Tags */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-200 p-2 rounded-xl">
                <FileText className="h-6 w-6 text-blue-700" />
              </div>
              <h1 className="text-2xl font-medium text-gray-800">DORA KI</h1>
            </div>
            <div className="flex space-x-2">
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                OCR
              </div>
              <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                KI
              </div>
            </div>
          </div>
          
          {/* Hamburger Menu */}
          <div className="flex items-center">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
