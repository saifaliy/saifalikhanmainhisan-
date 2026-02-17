
import React, { useState, useEffect, useCallback } from 'react';
import { HeroSection } from './components/HeroSection';
import { QuizSection } from './components/QuizSection';
import { StorySection } from './components/StorySection';
import { ProposalSection } from './components/ProposalSection';
import { FinalSection } from './components/FinalSection';
import { FallingPetals } from './components/FallingPetals';
import { MusicPlayer } from './components/MusicPlayer';

enum AppState {
  HERO = 'hero',
  QUIZ = 'quiz',
  STORY = 'story',
  PROPOSAL = 'proposal',
  FINAL = 'final'
}

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.HERO);
  const [hasInteracted, setHasInteracted] = useState(false);

  const nextStep = useCallback(() => {
    setCurrentStep(prev => {
      if (prev === AppState.HERO) return AppState.QUIZ;
      if (prev === AppState.QUIZ) return AppState.STORY;
      if (prev === AppState.STORY) return AppState.PROPOSAL;
      if (prev === AppState.PROPOSAL) return AppState.FINAL;
      return prev;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleStart = () => {
    setHasInteracted(true);
  };

  if (!hasInteracted) {
    return (
      <div 
        onClick={handleStart}
        className="min-h-screen cinematic-bg flex items-center justify-center cursor-pointer p-4"
      >
        <div className="text-center animate-pulse">
          <h1 className="text-4xl md:text-6xl font-cursive text-rose-300 mb-8">Click to Enter My Heart ❤️</h1>
          <div className="w-16 h-16 border-2 border-rose-400 rounded-full mx-auto flex items-center justify-center">
            <span className="text-2xl animate-bounce">👇</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen cinematic-bg text-rose-50 font-sans relative overflow-hidden">
      <MusicPlayer />
      <FallingPetals />
      
      <div className="relative z-20">
        {currentStep === AppState.HERO && (
          <HeroSection onProceed={nextStep} />
        )}
        
        {currentStep === AppState.QUIZ && (
          <QuizSection onComplete={nextStep} />
        )}

        {currentStep === AppState.STORY && (
          <StorySection onProceed={nextStep} />
        )}

        {currentStep === AppState.PROPOSAL && (
          <ProposalSection onComplete={nextStep} />
        )}

        {currentStep === AppState.FINAL && (
          <FinalSection />
        )}
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/10 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
};

export default App;
