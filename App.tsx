
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { QuizSection } from './components/QuizSection';
import { StorySection } from './components/StorySection';
import { ProposalSection } from './components/ProposalSection';
import { FinalSection } from './components/FinalSection';
import { FallingPetals } from './components/FallingPetals';

enum AppState {
  HERO = 'hero',
  QUIZ = 'quiz',
  STORY = 'story',
  PROPOSAL = 'proposal',
  FINAL = 'final'
}

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.HERO);
  const [showPetals, setShowPetals] = useState(true);

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

  return (
    <div className="min-h-screen cinematic-bg text-rose-50 font-sans relative overflow-hidden">
      {showPetals && <FallingPetals />}
      
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

      {/* Background Ambience Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/10 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
};

export default App;
