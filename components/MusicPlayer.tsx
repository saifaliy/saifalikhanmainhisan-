
import React, { useState, useRef, useEffect } from 'react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt autoplay since user has interacted with the App parent component
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button 
        onClick={togglePlay}
        className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-rose-400/20 transition-all group border border-rose-500/30 shadow-lg shadow-rose-900/50"
      >
        <span className="text-rose-300 group-hover:scale-125 transition-transform text-xl">
          {isPlaying ? '🎵' : '🔇'}
        </span>
      </button>
      <audio 
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" // Romantic instrumental placeholder
      />
    </div>
  );
};
