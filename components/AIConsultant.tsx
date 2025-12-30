
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

interface AIConsultantProps {
  onClose: () => void;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'こんにちは！田中太郎のポートフォリオへようこそ。彼の経歴や、ご依頼可能な案件について私がお答えします。何か気になることはありますか？' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: messages.concat({ role: 'user', text: userMessage }).map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `
            あなたはフリーランス「田中太郎」のパーソナルAIアシスタントです。
            クライアント候補からの質問に答え、信頼を獲得することが目的です。
            
            田中の特徴：
            - 動画編集: YouTube, TikTok実績多数。
            - Web制作: WordPressでの集客サイト。
            - GAS: 業務効率化のプロ。
            - 秘書: 細かなリサーチや事務代行も可能。
            
            彼の性格は「丁寧」「几帳面」「迅速」。
            回答は簡潔かつ礼儀正しく、本人になりきるのではなく「マネージャー」のような立場で話してください。
          `,
          temperature: 0.7,
        }
      });

      const aiText = response.text || "申し訳ありません。回答を生成できませんでした。";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "接続に失敗しました。少し時間をおいて再度お試しください。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col h-[500px] max-h-[80vh] overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-3 text-white">
          <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
             <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                alt="AI Icon" 
                className="w-full h-full object-cover rounded-full opacity-80"
              />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold leading-none">田中太郎's</span>
            <span className="text-sm font-bold">AI Assistant</span>
          </div>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-slate-900 text-white rounded-tr-none' : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl text-sm shadow-sm border border-slate-100 flex space-x-1">
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce animation-delay-150"></div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce animation-delay-300"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="ご質問をどうぞ..."
            className="w-full bg-slate-100 border-none rounded-full py-3 pl-4 pr-12 text-sm focus:ring-1 focus:ring-slate-400 outline-none"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 p-2 text-slate-900 disabled:text-slate-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
