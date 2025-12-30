
import React, { useState } from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    category: 'Video',
    title: 'ビジネス系YouTubeチャンネル編集',
    description: '平均視聴維持率を15%向上させた、教育系ジャンルの編集実績。',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
    tags: ['YouTube', 'Premiere Pro'],
  },
  {
    id: 2,
    category: 'Web',
    title: '地域クリニック サイト制作',
    description: 'WordPressを活用し、予約のしやすさと信頼感を重視したWebサイト。',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['WordPress', 'SEO'],
  },
  {
    id: 3,
    category: 'GAS',
    title: '受注管理自動化ツール',
    description: 'スプレッドシートと外部APIを連携させ、事務工数を8割削減。',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?w=800&h=600&fit=crop',
    tags: ['GAS', 'Automation'],
  },
  {
    id: 4,
    category: 'Secretary',
    title: '海外進出支援 事務代行',
    description: '英語リサーチからMTG調整まで、代表のコア業務集中をサポート。',
    imageUrl: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?w=800&h=600&fit=crop',
    tags: ['Secretarial', 'English'],
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Video', 'Web', 'GAS', 'Secretary'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white border-t border-slate-100 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-6">
          <h2 className="text-2xl font-bold text-slate-900">Works</h2>
          
          <div className="flex overflow-x-auto pb-2 sm:pb-0 gap-2 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${filter === cat ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-sm border border-slate-100 transition-all group-hover:shadow-md">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="px-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{project.category}</span>
                </div>
                <h4 className="text-md font-extrabold text-slate-900 group-hover:text-slate-600 transition-colors mb-2">{project.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
