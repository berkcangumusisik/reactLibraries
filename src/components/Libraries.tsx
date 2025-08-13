'use client';

import CategoryCard from './CategoryCard';

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

interface LibrariesProps {
  filteredData: Category[] | undefined;
  viewMode: 'grid' | 'list';
}

export default function Libraries({ filteredData, viewMode }: LibrariesProps) {
  return (
    <section id="libraries" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">React Kütüphaneleri</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Kategorilere göre organize edilmiş, detaylı açıklamalar ve linkler ile 
            <span className="text-blue-300 font-semibold"> en iyi React kütüphanelerini</span> keşfedin
          </p>
        </div>
        
        {/* Libraries Grid */}
        <div className="space-y-16">
          {filteredData?.map((category, categoryIndex) => (
            <CategoryCard 
              key={category.id} 
              category={category} 
              index={categoryIndex}
              viewMode={viewMode}
            />
          ))}
        </div>
        
        {/* Empty State */}
        {(!filteredData || filteredData.length === 0) && (
          <div className="text-center py-12 sm:py-16 lg:py-20 px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Sonuç Bulunamadı</h3>
            <p className="text-gray-300 max-w-md mx-auto text-sm sm:text-base">
              Arama kriterlerinize uygun kütüphane bulunamadı. Farklı anahtar kelimeler deneyin veya kategori filtrelerini değiştirin.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
