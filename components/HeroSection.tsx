
import React, { useState, useEffect } from 'react';

interface HeroSectionProps {
  onProceed: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onProceed }) => {
  const [showCard, setShowCard] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleYes = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-7xl md:text-9xl font-cursive text-rose-300 glow-text mb-4">
          Saif ❤️ Fiza
        </h1>
        <p className="text-xl md:text-2xl font-serif italic tracking-widest text-rose-100/80 animate-pulse">
          A Love That Changed Destiny
        </p>
      </div>

      {showCard && (
        <div className={`glass-card p-8 rounded-3xl max-w-md w-full text-center transform transition-all duration-1000 ${showCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${isShaking ? 'animate-bounce' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-serif mb-8 text-rose-100">
            Are you still angry, meri jaan? 🥺❤️
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleYes}
              className="px-8 py-3 rounded-full border border-rose-400 text-rose-400 hover:bg-rose-400/10 transition-all font-semibold active:scale-95"
            >
              YES 😔
            </button>
            <button 
              onClick={onProceed}
              className="px-8 py-3 rounded-full bg-rose-600 text-white hover:bg-rose-500 shadow-lg shadow-rose-900/50 transition-all font-semibold active:scale-95"
            >
              NO 💕
            </button>
          </div>

          {isShaking && (
            <p className="mt-4 text-rose-300 text-sm font-serif italic animate-fade-in">
              Aww meri jaan… itna bhi gussa theek nahi hota ❤️
            </p>
          )}
        </div>
      )}
    </div>
  );
};
