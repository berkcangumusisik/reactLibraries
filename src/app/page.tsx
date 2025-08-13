'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Search from '../components/Search';
import Libraries from '../components/Libraries';
import Footer from '../components/Footer';



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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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

  const filteredData = data?.categories.filter(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) {
      return false;
    }
    
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
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="relative mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-4 border-blue-500/20 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-4 border-transparent border-t-blue-500 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Kütüphaneler Yükleniyor</h2>
          <p className="text-blue-200 text-sm sm:text-base">React ekosistemindeki en iyi kütüphaneler hazırlanıyor</p>
        </div>
      </div>
    );
  }

  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Header />
      <Hero 
        totalLibraries={stats.totalLibraries}
        totalCategories={stats.totalCategories}
        totalSubcategories={stats.totalSubcategories}
      />
      <Search 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        viewMode={viewMode}
        setViewMode={setViewMode}
        filteredLibraries={filteredLibraries}
        categories={data?.categories || []}
      />
      <Libraries 
        filteredData={filteredData}
        viewMode={viewMode}
      />
      <Footer />
    </div>
  );
}
