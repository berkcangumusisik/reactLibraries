'use client';

import { MagnifyingGlassIcon, FunnelIcon, ViewColumnsIcon, ListBulletIcon } from '@heroicons/react/24/outline';

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  filteredLibraries: number;
  categories: Array<{ id: string; name: string }>;
}

export default function Search({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory, 
  viewMode, 
  setViewMode, 
  filteredLibraries, 
  categories 
}: SearchProps) {
  return (
    <section id="search" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 border border-white/20 rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <MagnifyingGlassIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">Kütüphane Keşfet</h2>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                İhtiyacınıza uygun React kütüphanelerini arayın, kategorilere göre filtreleyin ve 
                <span className="text-blue-300 font-semibold"> projeleriniz için en uygun çözümleri bulun</span>
              </p>
            </div>
            
            {/* Search Controls */}
            <div className="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-10">
              {/* Search Input */}
              <div className="flex-1 relative group">
                <MagnifyingGlassIcon className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Kütüphane, açıklama veya tag ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 sm:pl-14 pr-4 sm:pr-6 py-3 sm:py-4 lg:py-5 bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 text-white placeholder-gray-400 text-base sm:text-lg hover:bg-white/15 hover:border-white/30"
                />
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              {/* Controls Row */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Category Filter */}
                <div className="relative group flex-1 sm:flex-none">
                  <FunnelIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300 z-10" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full sm:w-auto pl-12 pr-8 py-3 sm:py-4 lg:py-5 bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all duration-300 text-white min-w-[200px] sm:min-w-[220px] text-base sm:text-lg hover:bg-white/15 hover:border-white/30 appearance-none cursor-pointer"
                  >
                    <option value="all" className="bg-gray-800">Tüm Kategoriler</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id} className="bg-gray-800">
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-b-2 border-white/40 rotate-45 pointer-events-none"></div>
                </div>
                
                {/* View Mode Toggle */}
                <div className="flex bg-white/10 rounded-xl sm:rounded-2xl p-1 border border-white/20 overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base ${
                      viewMode === 'grid' 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <ViewColumnsIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base ${
                      viewMode === 'list' 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <ListBulletIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">List</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Search Results */}
            {searchTerm && (
              <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-400/30 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-200 text-base sm:text-lg font-semibold">
                      &quot;{searchTerm}&quot; için <span className="text-white font-bold">{filteredLibraries}</span> sonuç bulundu
                    </span>
                  </div>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="px-3 sm:px-4 py-2 bg-blue-500/30 text-blue-200 hover:text-white hover:bg-blue-500/50 transition-all duration-300 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base"
                  >
                    Temizle
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
