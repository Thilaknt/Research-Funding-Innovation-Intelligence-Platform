import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { FundingExplorer } from './pages/FundingExplorer';
import { Recommendations } from './pages/Recommendations';
import { ProposalBuilder } from './pages/ProposalBuilder';
import { ResearchIntelligence } from './pages/ResearchIntelligence';
import { Profile } from './pages/Profile';
import { Notifications } from './pages/Notifications';
import { Settings } from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/funding" element={<FundingExplorer />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/applications" element={<ProposalBuilder />} />
        <Route path="/intelligence" element={<ResearchIntelligence />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
