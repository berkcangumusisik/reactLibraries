'use client';

import { SparklesIcon, CodeBracketIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-t border-white/20 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl">
                <SparklesIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">React Libraries</h3>
                <div className="text-blue-300 font-medium text-sm sm:text-base">Ekosistem Keşfi</div>
              </div>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-4 sm:mb-6">
              React ekosistemindeki en iyi kütüphaneleri keşfedin. Modern web geliştirme için 
              güçlü araçlar ve çözümler sunuyoruz.
            </p>
                         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
               <a 
                 href="https://github.com/berkcangumusisik/reactLibraries" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg sm:rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base text-center"
               >
                 GitHub&apos;ı Ziyaret Et
               </a>
             </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <CodeBracketIcon className="w-4 h-4" />
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#search" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <CodeBracketIcon className="w-4 h-4" />
                  Keşfet
                </a>
              </li>
              <li>
                <a href="#stats" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <CodeBracketIcon className="w-4 h-4" />
                  İstatistikler
                </a>
              </li>
              <li>
                <a href="#libraries" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <CodeBracketIcon className="w-4 h-4" />
                  Kütüphaneler
                </a>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Kategoriler</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  UI Components
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  UI Frameworks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  State Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Development Tools
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-black text-blue-300 mb-2">25+</div>
            <div className="text-blue-100 font-semibold text-sm sm:text-base">Kütüphane</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-black text-indigo-300 mb-2">5</div>
            <div className="text-indigo-100 font-semibold text-sm sm:text-base">Kategori</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-black text-purple-300 mb-2">12</div>
            <div className="text-purple-100 font-semibold text-sm sm:text-base">Alt Kategori</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-black text-cyan-300 mb-2">100%</div>
            <div className="text-cyan-100 font-semibold text-sm sm:text-base">Açık Kaynak</div>
          </div>
        </div>
        
                {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
              <span>Made with</span>
              <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 animate-pulse" />
              <span>by React Libraries Team</span>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="https://github.com/berkcangumusisik/reactLibraries" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base">
                <StarIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                GitHub
              </a>
              <a href="https://github.com/berkcangumusisik/reactLibraries" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base">
                <CodeBracketIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                Dokümantasyon
              </a>
              <a href="https://github.com/berkcangumusisik/reactLibraries" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base">
                <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                Hakkında
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Bu proje açık kaynak olarak geliştirilmektedir. Katkıda bulunmak için 
              <a href="https://github.com/berkcangumusisik/reactLibraries" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors duration-300">
                GitHub&apos;ı ziyaret edin
              </a>.
              React ekosistemindeki en iyi kütüphaneleri keşfetmeye devam edin.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
