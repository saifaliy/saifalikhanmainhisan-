
import React, { useEffect, useState } from 'react';

export const FallingPetals: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: string; duration: string; size: string; type: string }>>([]);

  useEffect(() => {
    const particleCount = 20;
    const initialParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 10 + 10}s`,
      size: `${Math.random() * 15 + 10}px`,
      type: i % 2 === 0 ? '🌸' : '❤️'
    }));
    setParticles(initialParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {particles.map((p) => (
        <div
          key={p.id}
          className="heart-particle flex items-center justify-center"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: p.size,
          }}
        >
          {p.type}
        </div>
      ))}
    </div>
  );
};
