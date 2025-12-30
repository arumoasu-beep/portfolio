
import React from 'react';

const ProfileHeader: React.FC = () => {
  return (
    <section className="px-6 pb-12 text-center sm:text-left">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-8">
          {/* Profile Icon Placeholder */}
          <div className="relative group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full shadow-sm" title="Available now"></div>
          </div>
          
          <div className="flex-grow">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
              田中 太郎 / Taro Tanaka
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-4">
              Multi-Skilled Freelancer
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <div className="flex items-center space-x-1 text-slate-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>東京都</span>
              </div>
              <div className="flex items-center space-x-1 text-slate-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>対応可能: 10:00 - 20:00</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-2xl mx-auto sm:mx-0">
          「動画・Web・業務効率化」の3軸で、あなたのビジネスを加速させます。
          単なる制作だけでなく、事務局運営や秘書業務を含めた総合的なサポートが可能です。
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#portfolio" className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-slate-800 transition-all text-center">
            実績を見る
          </a>
          <div className="flex justify-center sm:justify-start space-x-3">
            <button className="p-3 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </button>
            <button className="p-3 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.826L10.242 9.242a4 4 0 115.656 5.656l-1.101 1.102m-5.656-5.656l1.102 1.102" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
