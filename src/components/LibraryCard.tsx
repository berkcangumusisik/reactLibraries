'use client';

import { ArrowTopRightOnSquareIcon, CodeBracketIcon, BookOpenIcon, PlayIcon, StarIcon } from '@heroicons/react/24/outline';

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

interface LibraryCardProps {
  library: Library;
}

export default function LibraryCard({ library }: LibraryCardProps) {
  return (
    <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-white/20 overflow-hidden">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 flex-1">
              <a 
                href={library.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                {library.name}
              </a>
            </h4>
            <div className="flex items-center space-x-2 text-yellow-400">
              <StarIcon className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-300">
                {library.stars >= 1000 ? `${(library.stars / 1000).toFixed(1)}k` : library.stars}
              </span>
            </div>
          </div>
          
          <p className="text-gray-300 text-base leading-relaxed">{library.description}</p>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {library.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 text-sm rounded-2xl font-medium hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 cursor-default border border-purple-400/30 hover:border-purple-400/50"
              title={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a
            href={library.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-600/50"
          >
            <CodeBracketIcon className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            GitHub
          </a>
          <a
            href={library.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm rounded-2xl hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-green-500/50"
          >
            <PlayIcon className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            Demo
          </a>
          <a
            href={library.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm rounded-2xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-blue-500/50"
          >
            <BookOpenIcon className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            Docs
          </a>
          <a
            href={`https://www.npmjs.com/package/${library.npm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm rounded-2xl hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-red-500/50"
          >
            <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            NPM
          </a>
        </div>
        
        {/* Footer */}
        <div className="pt-4 border-t border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Active</span>
            </div>
            <span className="font-mono text-sm text-gray-400 bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">
              {library.npm}
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-12 -translate-x-12"></div>
    </div>
  );
}
