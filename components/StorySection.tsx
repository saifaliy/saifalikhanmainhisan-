
import React, { useEffect, useState } from 'react';

interface StorySectionProps {
  onProceed: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onProceed }) => {
  const [visibleIdx, setVisibleIdx] = useState(-1);

  const paragraphs = [
    "Once, in a small village, there was a boy. He had nothing—no confidence, no dreams, no recognition. To the world, he was just another ordinary boy, invisible in the crowd.",
    "But in 8th class, a miracle happened. He fell in love with a girl named Fiza. That love didn't just touch his heart; it ignited a fire in his soul that would change his destiny forever.",
    "He started dreaming. He realized that to be with her, he had to become a man worthy of her light. He changed his habits, his mindset, and his very personality.",
    "He worked day and night, transforming himself from 'zero' to a man of vision. Today, people who knew that little boy don't recognize him. They ask, 'Is this really the same Saif?'",
    "Today, he stands before you as a Software Engineer, one of the best in his village, full of purpose and strength. And every single brick of this success was laid by the love he has for you.",
    "He admits he is not perfect. He has made mistakes. But he wants you to know: 'I am yours. I am your Saif. Please, forgive me. My heart stops when you talk about us not being together.'",
    "He promises to never argue to hurt you, to build a life with you, and to win at life by your side. Our couple isn't perfect, but it is real. And it is eternal."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIdx(prev => {
        if (prev >= paragraphs.length - 1) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [paragraphs.length]);

  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-6 max-w-4xl mx-auto overflow-y-auto">
      <h2 className="text-5xl md:text-7xl font-cursive text-rose-300 glow-text mb-16 text-center">
        Our Story – From Zero To Forever 💖
      </h2>

      <div className="space-y-12 mb-20">
        {paragraphs.map((text, idx) => (
          <p 
            key={idx}
            className={`text-lg md:text-2xl font-serif leading-relaxed text-center transition-all duration-1000 transform ${idx <= visibleIdx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {text}
          </p>
        ))}
      </div>

      {visibleIdx >= paragraphs.length - 1 && (
        <button 
          onClick={onProceed}
          className="animate-bounce mt-10 px-12 py-4 rounded-full bg-gradient-to-r from-rose-700 to-red-600 text-white font-bold text-xl shadow-2xl hover:shadow-rose-500/50 transition-all active:scale-95"
        >
          See My Heart's Request ❤️
        </button>
      )}
      
      <div className="mt-20 text-rose-400 font-serif italic text-xl animate-pulse">
        "He was zero… but her love made him a hero."
      </div>
    </div>
  );
};
