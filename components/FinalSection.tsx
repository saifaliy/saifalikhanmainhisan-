
import React from 'react';

export const FinalSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-fade-in">
      <div className="text-6xl mb-8">🌸</div>
      <h2 className="text-4xl md:text-6xl font-cursive text-rose-300 glow-text mb-12">
        To My Future Wife...
      </h2>
      
      <div className="space-y-6 text-xl md:text-3xl font-serif text-rose-100 italic">
        <p>"No matter what happens..."</p>
        <p>"No matter how hard life gets..."</p>
        <p>"I will always choose you."</p>
      </div>

      <div className="mt-20 space-y-2 text-rose-400/80 font-sans tracking-widest text-sm uppercase">
        <p>From Zero...</p>
        <p>To Software Engineer...</p>
        <p>To Your Forever Husband.</p>
      </div>

      <footer className="mt-32 opacity-60">
        <p className="font-cursive text-2xl mb-2">Made With Infinite Love By Saif ❤️</p>
        <p className="text-xs font-sans">Two souls, one heart, forever written together.</p>
      </footer>
    </div>
  );
};
