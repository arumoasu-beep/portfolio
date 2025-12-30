
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 -right-20 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
            <span className="text-indigo-600 text-sm font-bold uppercase tracking-wider">Available for New Projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
            クリエイティブと効率を<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              同時に最大化する
            </span>
          </h1>
          
          <p className="max-w-2xl text-lg text-slate-600 mb-10 leading-relaxed">
            動画編集、WordPress制作、GAS自動化、オンライン秘書。<br />
            あなたのビジネスの成長を、多角的なスキルで強力にバックアップします。
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#portfolio" className="bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all shadow-xl">
              実績を見る
            </a>
            <a href="#services" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all">
              提供サービス
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-50">
            {/* Mock "Trusted by" or tech icons */}
            <div className="flex items-center justify-center font-bold text-xl italic text-slate-400">Premiere Pro</div>
            <div className="flex items-center justify-center font-bold text-xl italic text-slate-400">WordPress</div>
            <div className="flex items-center justify-center font-bold text-xl italic text-slate-400">Google Apps Script</div>
            <div className="flex items-center justify-center font-bold text-xl italic text-slate-400">Notion</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
