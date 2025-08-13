'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import LibraryCard from './LibraryCard';

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

interface SubcategoryCardProps {
  subcategory: Subcategory;
  subIndex: number;
  viewMode: 'grid' | 'list';
}

export default function SubcategoryCard({ subcategory, subIndex, viewMode }: SubcategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      {/* Subcategory Header - Clickable */}
      <button
        onClick={toggleExpanded}
        className="w-full text-left relative bg-gradient-to-br from-white/8 via-white/5 to-white/8 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/15 overflow-hidden hover:border-white/25 transition-all duration-500 cursor-pointer group"
      >
        {/* Subcategory Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border border-white/20 rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6">
            {/* Subcategory Icon */}
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                <CodeBracketIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* Subcategory Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-sky-200 transition-colors duration-300">
                  {subcategory.name}
                </h3>
                <div className="px-2 sm:px-3 py-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full">
                  <span className="text-white font-medium text-xs sm:text-sm">Alt Kategori {subIndex + 1}</span>
                </div>
              </div>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-4xl group-hover:text-gray-100 transition-colors duration-300">
                {subcategory.description}
              </p>
            </div>
            
            {/* Expand/Collapse Icon and Library Count */}
            <div className="lg:ml-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              {/* Library Count Badge */}
              <div className="bg-gradient-to-r from-sky-500/20 to-blue-600/20 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-sky-400/30">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-sky-300">{subcategory.libraries.length}</div>
                  <div className="text-sky-200 font-semibold text-xs sm:text-sm">Kütüphane</div>
                </div>
              </div>
              
              {/* Expand/Collapse Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {isExpanded ? (
                  <ChevronUpIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                )}
              </div>
            </div>
          </div>
        </div>
      </button>
      
      {/* Expandable Libraries Grid */}
      {isExpanded && (
        <div className="mt-6 sm:mt-8 animate-in slide-in-from-top-4 duration-500">
          <div className={`grid gap-6 sm:gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {subcategory.libraries.map(library => (
              <LibraryCard key={library.name} library={library} viewMode={viewMode} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
