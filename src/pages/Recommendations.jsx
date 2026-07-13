import React, { useState } from 'react';
import { DashboardLayout } from '../templates/DashboardLayout';
import { AIChatInterface } from '../components/organisms/AIChatInterface';
import { RecommendationResults } from '../components/organisms/RecommendationResults';

export function Recommendations() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const handleSimulateSubmit = () => {
    setIsGenerating(true);
    setHasResults(false);
    
    // Simulate AI processing time before showing results
    setTimeout(() => {
      setIsGenerating(false);
      setHasResults(true);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh-8rem)] flex-col gap-6 lg:flex-row">
        
        {/* Left Pane: Chat Interface */}
        <div className="w-full lg:w-1/3 xl:w-1/4 min-w-[320px] flex-shrink-0">
          <AIChatInterface onSimulateSubmit={handleSimulateSubmit} />
        </div>

        {/* Right Pane: Results */}
        <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
          <RecommendationResults isGenerating={isGenerating} hasResults={hasResults} />
        </div>

      </div>
    </DashboardLayout>
  );
}
