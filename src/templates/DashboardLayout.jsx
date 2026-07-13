import React from 'react';
import { Sidebar } from '../components/organisms/Sidebar';
import { Header } from '../components/organisms/Header';

export function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen w-full bg-slate-950 font-sans text-slate-200 selection:bg-blue-500/30">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]"></div>
      
      <Sidebar className="hidden z-10 md:flex" />
      
      <div className="flex flex-1 flex-col z-10 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
