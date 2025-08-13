'use client';

import { SparklesIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

interface HeroProps {
  totalLibraries?: number;
  totalCategories?: number;
  totalSubcategories?: number;
}

export default function Hero({ totalLibraries = 25, totalCategories = 5, totalSubcategories = 12 }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 sm:top-16 sm:left-16 lg:top-20 lg:left-20 animate-float" style={{ animationDelay: '0s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <CodeBracketIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-300" />
          </div>
        </div>
        <div className="absolute top-20 right-16 sm:top-32 sm:right-24 lg:top-40 lg:right-32 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <RocketLaunchIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-300" />
          </div>
        </div>
        <div className="absolute bottom-16 left-16 sm:bottom-24 sm:left-24 lg:bottom-32 lg:left-32 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-cyan-300" />
          </div>
        </div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 leading-tight">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl block mb-2 sm:mb-3">React Ekosisteminde</span>
            <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Keşfedilecek Kütüphaneler
            </span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
          Modern web geliştirme için en güncel ve güçlü React kütüphanelerini keşfedin. 
          <span className="text-blue-300 font-semibold"> Projelerinizi hızlandırın</span> ve 
          <span className="text-indigo-300 font-semibold"> kullanıcı deneyimini geliştirin</span>.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
          <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-base sm:text-lg rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
            <span className="flex items-center gap-2 sm:gap-3 justify-center">
              <RocketLaunchIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
              Keşfetmeye Başla
            </span>
          </button>
          <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-base sm:text-lg rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2 sm:gap-3 justify-center">
              <CodeBracketIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
              Daha Fazla Bilgi
            </span>
          </button>
        </div>
        
        {/* Enhanced Stats Preview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
          <div className="group bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-4 sm:p-6 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">
              {totalLibraries}+
            </div>
            <div className="text-blue-100 font-bold text-sm sm:text-base lg:text-lg">Kütüphane</div>
            <div className="text-blue-200/60 text-xs sm:text-sm mt-2">Hazır çözümler</div>
            <div className="mt-2 sm:mt-3">
              <span className="inline-flex items-center px-2 py-1 bg-blue-500/30 text-blue-200 text-xs font-medium rounded-full">
                +12% bu ay
              </span>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-2xl p-4 sm:p-6 border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-indigo-300 mb-2 group-hover:text-indigo-200 transition-colors">
              {totalCategories}
            </div>
            <div className="text-indigo-100 font-bold text-sm sm:text-base lg:text-lg">Kategori</div>
            <div className="text-indigo-200/60 text-xs sm:text-sm mt-2">Ana kategoriler</div>
            <div className="mt-2 sm:mt-3">
              <span className="inline-flex items-center px-2 py-1 bg-indigo-500/30 text-indigo-200 text-xs font-medium rounded-full">
                +2 yeni
              </span>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-4 sm:p-6 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-purple-300 mb-2 group-hover:text-purple-200 transition-colors">
              {totalSubcategories}
            </div>
            <div className="text-purple-100 font-bold text-sm sm:text-base lg:text-lg">Alt Kategori</div>
            <div className="text-purple-200/60 text-xs sm:text-sm mt-2">Detaylı sınıflandırma</div>
            <div className="mt-2 sm:mt-3">
              <span className="inline-flex items-center px-2 py-1 bg-purple-500/30 text-purple-200 text-xs font-medium rounded-full">
                +5 yeni
              </span>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl p-4 sm:p-6 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-300 mb-2 group-hover:text-emerald-200 transition-colors">
              100%
            </div>
            <div className="text-emerald-100 font-bold text-sm sm:text-base lg:text-lg">Açık Kaynak</div>
            <div className="text-emerald-200/60 text-xs sm:text-sm mt-2">Topluluk destekli</div>
            <div className="mt-2 sm:mt-3">
              <span className="inline-flex items-center px-2 py-1 bg-emerald-500/30 text-emerald-200 text-xs font-medium rounded-full">
                Aktif geliştirme
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
