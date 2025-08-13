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
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/data/libraries.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: LibrariesData = await response.json();
        setData(data);
      } catch (err) {
        console.error('Error loading data:', err);
        setError(err instanceof Error ? err.message : 'Veri yüklenirken bir hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
          
          {/* Loading Text */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 animate-pulse">
            Kütüphaneler Yükleniyor
          </h2>
          <p className="text-blue-200 text-sm sm:text-base lg:text-lg max-w-md mx-auto">
            React ekosistemindeki en iyi kütüphaneler hazırlanıyor...
          </p>
          
          {/* Progress Bar */}
          <div className="mt-8 w-48 sm:w-64 lg:w-80 mx-auto">
            <div className="w-full bg-blue-500/20 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center">
        <div className="text-center px-4 max-w-md">
          {/* Error Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
          
          {/* Error Text */}
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Hata Oluştu
          </h2>
          <p className="text-red-200 text-sm sm:text-base mb-6">
            {error}
          </p>
          
          {/* Retry Button */}
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Tekrar Dene
          </button>
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
