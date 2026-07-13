import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { FundingExplorer } from './pages/FundingExplorer';
import { Recommendations } from './pages/Recommendations';
import { ProposalBuilder } from './pages/ProposalBuilder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/funding" element={<FundingExplorer />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/applications" element={<ProposalBuilder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
