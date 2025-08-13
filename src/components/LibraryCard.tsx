'use client';

import { ArrowTopRightOnSquareIcon, CodeBracketIcon, BookOpenIcon, PlayIcon } from '@heroicons/react/24/outline';

interface Library {
  name: string;
  description: string;
  github: string;
  demo: string;
  docs: string;
  npm: string;
  tags: string[];
}

interface LibraryCardProps {
  library: Library;
  viewMode: 'grid' | 'list';
}

export default function LibraryCard({ library, viewMode }: LibraryCardProps) {
  if (viewMode === 'list') {
    return (
      <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
              <a 
                href={library.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                {library.name}
              </a>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{library.description}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {library.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-lg border border-blue-400/30"
            >
              {tag}
            </span>
          ))}
          {library.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-lg">
              +{library.tags.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400">Güncel</span>
          </div>
          <span className="font-mono text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-lg">
            {library.npm}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
          <a 
            href={library.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            {library.name}
          </a>
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">{library.description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {library.tags.slice(0, 3).map(tag => (
          <span
            key={tag}
            className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-lg border border-blue-400/30"
          >
            {tag}
          </span>
        ))}
        {library.tags.length > 3 && (
          <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-lg">
            +{library.tags.length - 3}
          </span>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-4">
        <a
          href={library.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-3 py-2 bg-gray-800 text-white text-xs rounded-lg hover:bg-gray-700 transition-colors"
        >
          <CodeBracketIcon className="w-3 h-3 mr-1" />
          GitHub
        </a>
        <a
          href={library.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-3 py-2 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-500 transition-colors"
        >
          <PlayIcon className="w-3 h-3 mr-1" />
          Demo
        </a>
        <a
          href={library.docs}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-3 py-2 bg-indigo-600 text-white text-xs rounded-lg hover:bg-indigo-500 transition-colors"
        >
          <BookOpenIcon className="w-3 h-3 mr-1" />
          Docs
        </a>
        <a
          href={`https://www.npmjs.com/package/${library.npm}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-3 py-2 bg-red-600 text-white text-xs rounded-lg hover:bg-red-500 transition-colors"
        >
          <ArrowTopRightOnSquareIcon className="w-3 h-3 mr-1" />
          NPM
        </a>
      </div>
      
      <div className="pt-3 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400">Güncel</span>
          </div>
          <span className="font-mono text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-lg">
            {library.npm}
          </span>
        </div>
      </div>
    </div>
  );
}
