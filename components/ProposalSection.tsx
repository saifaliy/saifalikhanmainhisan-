
import React, { useState } from 'react';

interface ProposalSectionProps {
  onComplete: () => void;
}

export const ProposalSection: React.FC<ProposalSectionProps> = ({ onComplete }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    // Add fireworks or celebration sound here if desired
    setTimeout(onComplete, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-transparent to-red-950/40">
      {!accepted ? (
        <div className="text-center max-w-2xl animate-fade-in">
          <div className="text-8xl mb-6 animate-pulse">💍</div>
          <h2 className="text-5xl md:text-7xl font-cursive text-rose-300 glow-text mb-8">
            Fiza, You Are My Everything ❤️
          </h2>
          
          <div className="glass-card p-8 rounded-3xl mb-10 text-rose-100 font-serif text-lg md:text-xl leading-loose italic">
            You are my peace. You are my strength. You are my motivation. You are my dream, my future, and the very air I breathe.
            Loving you is the best decision of my life. Without you, I am incomplete. With you, I am unstoppable.
          </div>

          <p className="text-4xl md:text-6xl font-cursive text-white mb-12 glow-text">
            Fiza… Will You Marry Me?
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={handleAccept}
              className="px-12 py-4 rounded-full bg-rose-600 text-white text-xl font-bold hover:bg-rose-500 shadow-2xl shadow-rose-500/40 transform hover:scale-105 transition-all"
            >
              YES MY LOVE 💕
            </button>
            <button 
              onClick={handleAccept}
              className="px-12 py-4 rounded-full border-2 border-rose-400 text-rose-400 text-xl font-bold hover:bg-rose-400/10 shadow-xl transition-all"
            >
              FOREVER YES 💍
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center animate-scale-up">
          <h2 className="text-6xl md:text-8xl font-cursive text-white glow-text mb-8">
            Yessssssss! ❤️
          </h2>
          <div className="text-4xl md:text-6xl mb-8">🎆🎇🎆</div>
          <p className="text-2xl font-serif text-rose-200 animate-pulse">
            Creating our paradise together...
          </p>
        </div>
      )}
    </div>
  );
};
