
import React, { useState } from 'react';

interface QuizSectionProps {
  onComplete: () => void;
}

const QUESTIONS = [
  {
    id: 1,
    text: "Do you know I changed my entire life for you? 💖",
    yesMsg: "Floating your way...",
    noMsg: "Then let me tell you tonight ❤️"
  },
  {
    id: 2,
    text: "Do you remember 8th class… when a simple village boy fell in love? 🌸",
    yesMsg: "Magic in the air ✨",
    noMsg: "That was the day my destiny started changing 💫"
  },
  {
    id: 3,
    text: "Do you think that boy is still the same? 🥺",
    yesMsg: "Look closer... ❤️",
    noMsg: "Exactly. He changed for you."
  },
  {
    id: 4,
    text: "Do you know why I became what I am today? 💻✨",
    yesMsg: "It was all for you...",
    noMsg: "Because I wanted to be worthy of you ❤️"
  }
];

export const QuizSection: React.FC<QuizSectionProps> = ({ onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showFeedback, setShowFeedback] = useState<string | null>(null);
  const [isMoving, setIsMoving] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const handleAnswer = (isYes: boolean) => {
    const question = QUESTIONS[currentIdx];
    
    // Logic for Question 3 ("Is he the same?")
    if (currentIdx === 2 && isYes) {
        setShowFeedback("No... he is reborn ❤️");
        setTimeout(() => setShowFeedback(null), 2000);
        return;
    }

    setShowFeedback(isYes ? question.yesMsg : question.noMsg);
    
    setTimeout(() => {
      setShowFeedback(null);
      if (currentIdx < QUESTIONS.length - 1) {
        setCurrentIdx(prev => prev + 1);
      } else {
        // Special Final Question Logic
        setIsMoving(true);
      }
    }, 2000);
  };

  const handleNoHover = () => {
    if (isMoving) {
      const newX = Math.random() * 300 - 150;
      const newY = Math.random() * 300 - 150;
      setNoButtonPos({ x: newX, y: newY });
    }
  };

  if (isMoving) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-card p-10 rounded-3xl text-center max-w-md w-full animate-fade-in">
          <h2 className="text-3xl font-serif mb-10 text-rose-100">
            Will you promise to never leave me? 💍
          </h2>
          <div className="flex gap-6 justify-center items-center">
            <button 
              onClick={onComplete}
              className="px-10 py-4 rounded-full bg-rose-600 text-white hover:bg-rose-500 shadow-xl shadow-rose-900/40 font-bold transform hover:scale-110 transition-all"
            >
              YES, FOREVER 💕
            </button>
            <button 
              onMouseEnter={handleNoHover}
              style={{ transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)` }}
              className="px-10 py-4 rounded-full border border-rose-400 text-rose-400 font-bold transition-transform duration-200 cursor-not-allowed"
            >
              NO ❌
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card p-10 rounded-3xl text-center max-w-lg w-full animate-scale-up">
        <span className="text-rose-400 font-serif italic mb-2 block">Question {currentIdx + 1} of 5</span>
        <h2 className="text-2xl md:text-3xl font-serif mb-8 text-rose-100 min-h-[80px]">
          {QUESTIONS[currentIdx].text}
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => handleAnswer(true)}
            className="w-full sm:w-auto px-10 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-white font-semibold"
          >
            YES 💖
          </button>
          <button 
            onClick={() => handleAnswer(false)}
            className="w-full sm:w-auto px-10 py-3 rounded-full border border-rose-400 text-rose-400 hover:bg-rose-400/10 transition-all font-semibold"
          >
            NO ✨
          </button>
        </div>

        {showFeedback && (
          <div className="mt-6 animate-bounce text-rose-300 font-serif italic">
            {showFeedback}
          </div>
        )}
      </div>
    </div>
  );
};
