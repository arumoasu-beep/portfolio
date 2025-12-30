
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'video',
    title: '動画編集',
    titleEn: 'Video Production',
    description: 'YouTube・TikTok・SNS広告など、目的に合わせた最適な編集を提供。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    skills: ['Premiere Pro', 'After Effects'],
    color: 'bg-slate-100 text-slate-700',
  },
  {
    id: 'web',
    title: 'WordPress制作',
    titleEn: 'Web Creation',
    description: '集客にフォーカスしたサイト制作から保守・スピード改善まで対応。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: ['WP構築', 'SEO対策'],
    color: 'bg-slate-100 text-slate-700',
  },
  {
    id: 'gas',
    title: 'GAS自動化',
    titleEn: 'Work Automation',
    description: '面倒な入力作業や管理業務をスクリプトで自動化し、工数を削減。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ['API連携', '業務効率化'],
    color: 'bg-slate-100 text-slate-700',
  },
  {
    id: 'secretary',
    title: 'オンライン秘書',
    titleEn: 'Virtual Assistant',
    description: 'リサーチ・メール代行・事務全般、忙しいあなたの右腕になります。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    skills: ['事務', 'リサーチ'],
    color: 'bg-slate-100 text-slate-700',
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center sm:text-left">What I Can Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all flex items-start space-x-4"
            >
              <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${service.color}`}>
                {service.icon}
              </div>
              <div>
                <h4 className="text-md font-bold text-slate-900">{service.title}</h4>
                <p className="text-xs text-slate-500 mb-2">{service.titleEn}</p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
