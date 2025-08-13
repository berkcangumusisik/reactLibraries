'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import SubcategoryCard from './SubcategoryCard';

interface Library {
  name: string;
  description: string;
  github: string;
  demo: string;
  docs: string;
  npm: string;
  tags: string[];
}

interface Subcategory {
  id: string;
  name: string;
  description: string;
  libraries: Library[];
}

interface Category {
  id: string;
  name: string;
  description: string;
  subcategories: Subcategory[];
}

interface CategoryCardProps {
  category: Category;
  index: number;
  viewMode: 'grid' | 'list';
}

export default function CategoryCard({ category, index, viewMode }: CategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const totalLibraries = category.subcategories.reduce((total, sub) => total + sub.libraries.length, 0);
  const totalTags = category.subcategories.reduce((total, sub) => 
    total + sub.libraries.reduce((libTotal, lib) => libTotal + lib.tags.length, 0), 0
  );
  const averageLibraries = Math.round(totalLibraries / category.subcategories.length);

  return (
    <div className="mb-12 sm:mb-16">
      {/* Main Category Card - Clickable */}
      <button
        onClick={toggleExpanded}
        className="w-full text-left relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl overflow-hidden hover:border-white/30 transition-all duration-500 cursor-pointer group"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Decorative Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Category Icon & Number */}
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-black text-xl sm:text-2xl lg:text-3xl">{index + 1}</span>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            {/* Category Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white group-hover:text-blue-200 transition-colors duration-300">
                  {category.name}
                </h2>
                <div className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full">
                  <span className="text-white font-bold text-xs sm:text-sm">Kategori {index + 1}</span>
                </div>
              </div>
              <p className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl group-hover:text-gray-100 transition-colors duration-300">
                {category.description}
              </p>
            </div>
            
            {/* Expand/Collapse Icon */}
            <div className="lg:ml-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {isExpanded ? (
                  <ChevronUpIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                )}
              </div>
            </div>
          </div>
          
          {/* Enhanced Category Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="group bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl font-black text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">
                {category.subcategories.length}
              </div>
              <div className="text-blue-100 font-semibold text-sm sm:text-base">Alt Kategori</div>
              <div className="text-blue-200/60 text-xs sm:text-sm mt-1">Organize edilmiş</div>
            </div>
            
            <div className="group bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl font-black text-indigo-300 mb-2 group-hover:text-indigo-200 transition-colors">
                {totalLibraries}
              </div>
              <div className="text-indigo-100 font-semibold text-sm sm:text-base">Kütüphane</div>
              <div className="text-indigo-200/60 text-xs sm:text-sm mt-1">Hazır çözümler</div>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl font-black text-purple-300 mb-2 group-hover:text-purple-200 transition-colors">
                {totalTags}
              </div>
              <div className="text-purple-100 font-semibold text-sm sm:text-base">Toplam Tag</div>
              <div className="text-purple-200/60 text-xs sm:text-sm mt-1">Kategorize edilmiş</div>
            </div>
            
            <div className="group bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl font-black text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">
                {averageLibraries}
              </div>
              <div className="text-cyan-100 font-semibold text-sm sm:text-base">Ortalama</div>
              <div className="text-cyan-200/60 text-xs sm:text-sm mt-1">Alt kategori başına</div>
            </div>
          </div>
        </div>
      </button>
      
      {/* Expandable Subcategories */}
      {isExpanded && (
        <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8 animate-in slide-in-from-top-4 duration-500">
          {category.subcategories.map((subcategory, subIndex) => (
            <SubcategoryCard 
              key={subcategory.id} 
              subcategory={subcategory} 
              subIndex={subIndex}
              viewMode={viewMode}
            />
          ))}
        </div>
      )}
    </div>
  );
}
