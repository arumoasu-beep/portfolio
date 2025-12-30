
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-white border-t border-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          © {new Date().getFullYear()} Taro Tanaka Portfolio. Built with Focus.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
