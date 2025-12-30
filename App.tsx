
import React, { useState } from 'react';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col relative text-slate-800 antialiased">
      <Header />
      <main className="flex-grow pt-16">
        <ProfileHeader />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Action Button for AI Assistant */}
      <button
        onClick={() => setIsAiOpen(!isAiOpen)}
        className="fixed bottom-6 right-6 z-50 bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center border border-white/20"
        aria-label="Ask AI Assistant"
      >
        {isAiOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* AI Assistant Drawer */}
      {isAiOpen && (
        <div className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 z-50 w-auto sm:w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300">
          <AIConsultant onClose={() => setIsAiOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default App;
