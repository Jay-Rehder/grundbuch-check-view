
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from './HamburgerMenu';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left - User Icon */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-gray-600" />
          </div>
        </div>

        {/* Center - Logo as Link */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">📄</span>
          </div>
          <span className="font-semibold text-lg text-gray-800">DORA KI</span>
          <div className="flex space-x-1">
            <span className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded">OCR</span>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 text-xs rounded">KI</span>
          </div>
        </Link>

        {/* Right - Hamburger Menu */}
        <div className="flex items-center">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};
