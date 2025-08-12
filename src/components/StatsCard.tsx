'use client';

interface StatsCardProps {
  title: string;
  value: string | number;
  color: 'indigo' | 'green' | 'purple' | 'orange' | 'red' | 'blue' | 'pink';
  icon?: React.ReactNode;
}

const colorClasses = {
  indigo: 'text-indigo-400',
  green: 'text-green-400',
  purple: 'text-purple-400',
  orange: 'text-orange-400',
  red: 'text-red-400',
  blue: 'text-blue-400',
  pink: 'text-pink-400'
};

const bgColorClasses = {
  indigo: 'from-indigo-500 to-blue-600',
  green: 'from-green-500 to-emerald-600',
  purple: 'from-purple-500 to-pink-600',
  orange: 'from-orange-500 to-red-600',
  red: 'from-red-500 to-pink-600',
  blue: 'from-blue-500 to-indigo-600',
  pink: 'from-pink-500 to-rose-600'
};

export default function StatsCard({ title, value, color, icon }: StatsCardProps) {
  return (
    <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 overflow-hidden">
      {/* Gradient Background Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgColorClasses[color]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Decorative Elements */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${bgColorClasses[color]} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-16 translate-x-16`}></div>
      <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${bgColorClasses[color]} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 translate-y-12 -translate-x-12`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="flex justify-center mb-6">
            <div className={`p-5 rounded-3xl bg-gradient-to-br ${bgColorClasses[color]} shadow-lg group-hover:shadow-xl transition-shadow duration-500`}>
              <div className="text-white">
                {icon}
              </div>
            </div>
          </div>
        )}
        
        <div className={`text-5xl font-black ${colorClasses[color]} mb-4 group-hover:scale-110 transition-transform duration-500`}>
          {value}
        </div>
        
        <div className="text-gray-300 font-bold text-lg text-center">
          {title}
        </div>
      </div>
    </div>
  );
}
