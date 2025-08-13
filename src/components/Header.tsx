'use client';

import { useState } from 'react';
import { SparklesIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
         <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-950/95 via-blue-950/95 to-slate-950/95 backdrop-blur-xl border-b border-white/20 shadow-2xl px-4 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <SparklesIcon className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-1 -right-1 w-2 h-2 lg:w-3 lg:h-3 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-black text-lg lg:text-2xl">React Libraries</span>
              <div className="text-blue-300 text-xs lg:text-sm font-medium">Ekosistem Keşfi</div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a 
              href="#hero" 
              className="group relative px-2 lg:px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base"
            >
              <span className="relative z-10">Ana Sayfa</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#search" 
              className="group relative px-2 lg:px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base"
            >
              <span className="relative z-10">Keşfet</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#libraries" 
              className="group relative px-2 lg:px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base"
            >
              <span className="relative z-10">Kütüphaneler</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://github.com/berkcangumusisik/reactLibraries" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              <StarIcon className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href="https://buymeacoffee.com/gumusisikbv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
            >
              <HeartIcon className="w-4 h-4" />
              Buy Me a Coffee
            </a>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Başla
            </button>
          </div>

                     {/* Mobile Menu Button */}
           <button
             onClick={toggleMobileMenu}
             className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
           >
             {isMobileMenuOpen ? (
               <XMarkIcon className="w-6 h-6 text-white" />
             ) : (
               <Bars3Icon className="w-6 h-6 text-white" />
             )}
           </button>
        </div>

                 {/* Mobile Menu Overlay */}
         {isMobileMenuOpen && (
           <div className="md:hidden">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={toggleMobileMenu}
            />
            
                         {/* Mobile Menu */}
             <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-slate-950/98 via-blue-950/98 to-slate-950/98 backdrop-blur-xl border-b border-white/20 shadow-2xl z-50">
              <div className="px-4 py-6 space-y-6">
                {/* Navigation Links */}
                <div className="space-y-4">
                  <a 
                    href="#hero" 
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    Ana Sayfa
                  </a>
                  <a 
                    href="#search" 
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    Keşfet
                  </a>
                  <a 
                    href="#libraries" 
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    Kütüphaneler
                  </a>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20"></div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a 
                    href="https://github.com/berkcangumusisik/reactLibraries" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={toggleMobileMenu}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <StarIcon className="w-4 h-4" />
                    GitHub
                  </a>
                  <a 
                    href="https://buymeacoffee.com/gumusisikbv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={toggleMobileMenu}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
                  >
                    <HeartIcon className="w-4 h-4" />
                    Buy Me a Coffee
                  </a>
                  <button 
                    onClick={toggleMobileMenu}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Başla
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
