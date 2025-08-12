'use client';

import { useState, useEffect } from 'react';
import { CodeBracketIcon, SparklesIcon, CubeIcon, FolderIcon, HeartIcon, UsersIcon, GlobeAltIcon, MagnifyingGlassIcon, FunnelIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import LibraryCard from '../components/LibraryCard';
import StatsCard from '../components/StatsCard';

interface Library {
  name: string;
  description: string;
  github: string;
  demo: string;
  docs: string;
  npm: string;
  stars: number;
  lastCommit: string;
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

interface LibrariesData {
  categories: Category[];
  stats: {
    totalLibraries: number;
    totalCategories: number;
    totalSubcategories: number;
    lastUpdated: string;
  };
}

export default function Home() {
  const [data, setData] = useState<LibrariesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetch('/data/libraries.json')
      .then(res => res.json())
      .then((data: LibrariesData) => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading data:', err);
        setLoading(false);
      });
  }, []);

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  // Filtreleme mantığını düzeltiyorum
  const filteredData = data?.categories.filter(category => {
    // Kategori filtresi
    if (selectedCategory !== 'all' && category.id !== selectedCategory) {
      return false;
    }
    
    // Arama filtresi
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      const hasMatchingLibrary = category.subcategories.some(sub => 
        sub.libraries.some(lib => 
          lib.name.toLowerCase().includes(searchLower) ||
          lib.description.toLowerCase().includes(searchLower) ||
          lib.tags.some(tag => tag.toLowerCase().includes(searchLower))
        )
      );
      return hasMatchingLibrary;
    }
    
    return true;
  });

  // Filtrelenmiş kütüphaneleri sayma
  const filteredLibraries = filteredData?.reduce((total, category) => {
    return total + category.subcategories.reduce((subTotal, sub) => {
      if (searchTerm.trim()) {
        const searchLower = searchTerm.toLowerCase();
        const matchingLibraries = sub.libraries.filter(lib => 
          lib.name.toLowerCase().includes(searchLower) ||
          lib.description.toLowerCase().includes(searchLower) ||
          lib.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
        return subTotal + matchingLibraries.length;
      }
      return subTotal + sub.libraries.length;
    }, 0);
  }, 0) || 0;

  const calculateStats = () => {
    if (!data) return { totalLibraries: 0, totalCategories: 0, totalSubcategories: 0 };
    
    let totalLibs = 0;
    let totalSubcats = 0;
    
    data.categories.forEach(category => {
      totalSubcats += category.subcategories.length;
      category.subcategories.forEach(sub => {
        totalLibs += sub.libraries.length;
      });
    });
    
    return {
      totalLibraries: totalLibs,
      totalCategories: data.categories.length,
      totalSubcategories: totalSubcats
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 border-4 border-purple-500/20 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
            <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-pink-500 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Kütüphaneler Yükleniyor</h2>
            <p className="text-purple-200 text-lg">React ekosistemindeki en iyi kütüphaneler hazırlanıyor</p>
            <div className="flex justify-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* GitHub Logo ve Ana Logo */}
            <div className="flex justify-center items-center space-x-6 mb-10">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
                <SparklesIcon className="w-16 h-16 text-white" />
              </div>
              <div className="text-white text-6xl font-bold">+</div>
              <div className="w-32 h-32 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300">
                <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-7xl font-black text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              React Kütüphaneleri
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
              React ekosistemindeki en iyi component, UI framework ve kütüphaneleri keşfedin
            </p>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black text-purple-400 mb-2">{stats.totalLibraries}</div>
                <div className="text-gray-300 font-medium">Kütüphane</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black text-pink-400 mb-2">{stats.totalCategories}</div>
                <div className="text-gray-300 font-medium">Kategori</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black text-blue-400 mb-2">{stats.totalSubcategories}</div>
                <div className="text-gray-300 font-medium">Alt Kategori</div>
              </div>
            </div>
            
            {/* Open Source Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-3xl font-bold shadow-2xl hover:scale-105 transition-transform duration-300">
              <HeartIcon className="w-6 h-6" />
              <span className="text-lg">Open Source</span>
            </div>
            
            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <div className="flex flex-col items-center text-gray-400">
                <span className="text-sm mb-2">Aşağı kaydır</span>
                <ArrowDownIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Proje İstatistikleri</h2>
          <p className="text-gray-300 text-xl">React ekosistemindeki kapsamlı kütüphane koleksiyonu</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatsCard
            title="Toplam Kütüphane"
            value={stats.totalLibraries}
            color="purple"
            icon={<CubeIcon className="w-8 h-8 text-white" />}
          />
          <StatsCard
            title="Kategori"
            value={stats.totalCategories}
            color="pink"
            icon={<FolderIcon className="w-8 h-8 text-white" />}
          />
          <StatsCard
            title="Alt Kategori"
            value={stats.totalSubcategories}
            color="blue"
            icon={<CodeBracketIcon className="w-8 h-8 text-white" />}
          />
        </div>
      </div>

      {/* Search and Filters */}
      {data && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
                <SparklesIcon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Kütüphane Keşfet</h2>
              <p className="text-gray-300 text-lg">Aradığınız kütüphaneyi bulun ve filtreleyin</p>
            </div>
            
            {/* Search and Filter Controls */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="flex-1 relative group">
                <MagnifyingGlassIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Kütüphane, açıklama veya tag ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-5 py-5 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-2xl focus:ring-4 focus:ring-purple-500/30 focus:border-purple-400 transition-all duration-300 text-lg placeholder-gray-400 text-white shadow-lg"
                />
              </div>
              
              <div className="relative group">
                <FunnelIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-pink-400 transition-colors duration-300 pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-14 pr-14 py-5 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-2xl focus:ring-4 focus:ring-pink-500/30 focus:border-pink-400 transition-all duration-300 text-lg appearance-none cursor-pointer min-w-[280px] shadow-lg text-white"
                >
                  <option value="all" className="bg-gray-800 text-white">Tüm Kategoriler</option>
                  {data.categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-gray-800 text-white">{category.name}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-6 h-6 text-gray-400 group-focus-within:text-pink-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Search Results Info */}
            {searchTerm && (
              <div className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-400/30 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-purple-200">
                    <MagnifyingGlassIcon className="w-6 h-6 mr-3" />
                    <span className="text-xl font-semibold">
                      &quot;{searchTerm}&quot; için {filteredLibraries} sonuç bulundu
                    </span>
                  </div>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl transition-colors duration-300"
                  >
                    Temizle
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredData?.map((category, index) => (
          <div key={category.id} className="mb-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-12 py-10 text-left bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 hover:from-purple-500/30 hover:via-pink-500/30 hover:to-blue-500/30 transition-all duration-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl">
                      <span className="text-white font-black text-3xl">{index + 1}</span>
                    </div>
                    <div>
                      <h2 className="text-5xl font-black text-white mb-4">{category.name}</h2>
                      <p className="text-gray-300 text-xl leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-purple-300">
                    <svg
                      className={`w-12 h-12 transform transition-transform duration-500 ${
                        expandedCategories.has(category.id) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {expandedCategories.has(category.id) && (
                <div className="p-12 bg-gradient-to-br from-gray-900/50 to-slate-800/50">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div key={subcategory.id} className="mb-16 last:mb-0">
                      <div className="flex items-center mb-10">
                        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl flex items-center justify-center mr-8 shadow-2xl">
                          <span className="text-white font-black text-xl">{subIndex + 1}</span>
                        </div>
                        <h3 className="text-4xl font-bold text-white flex items-center">
                          <CodeBracketIcon className="w-10 h-10 mr-6 text-pink-400" />
                          {subcategory.name}
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-12 text-xl leading-relaxed pl-24">{subcategory.description}</p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pl-24">
                        {subcategory.libraries.map(library => (
                          <LibraryCard key={library.name} library={library} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl mb-10 shadow-2xl">
            <SparklesIcon className="w-12 h-12 text-white" />
          </div>
          
          <h3 className="text-4xl font-bold mb-8">
            🚀 React ekosistemindeki en iyi kütüphaneleri keşfedin
          </h3>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Bu proje açık kaynak olarak geliştirilmektedir. Katkıda bulunmak için GitHub&apos;ı ziyaret edin.
          </p>
          
          {/* Stats in Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-5xl font-black text-purple-400 mb-3">{stats.totalLibraries}</div>
              <div className="text-gray-400 font-medium text-lg">Kütüphane</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-pink-400 mb-3">{stats.totalCategories}</div>
              <div className="text-gray-400 font-medium text-lg">Kategori</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-blue-400 mb-3">{stats.totalSubcategories}</div>
              <div className="text-gray-400 font-medium text-lg">Alt Kategori</div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <UsersIcon className="w-6 h-6" />
              <span className="text-lg">Community</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <GlobeAltIcon className="w-6 h-6" />
              <span className="text-lg">Open Source</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <HeartIcon className="w-6 h-6" />
              <span className="text-lg">Made with ❤️</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
