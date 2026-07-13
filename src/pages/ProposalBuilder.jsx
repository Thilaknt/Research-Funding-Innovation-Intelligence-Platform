import React, { useState, useEffect, useRef } from 'react';
import { DashboardLayout } from '../templates/DashboardLayout';
import { EditorSidebar } from '../components/organisms/EditorSidebar';
import { EditorToolbar } from '../components/organisms/EditorToolbar';
import { ProposalEditor } from '../components/organisms/ProposalEditor';

export function ProposalBuilder() {
  const [activeSection, setActiveSection] = useState('title');
  const [content, setContent] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const typingTimeoutRef = useRef(null);

  // Simulated Auto-Save Logic
  const handleContentChange = (sectionId, value) => {
    setContent((prev) => ({ ...prev, [sectionId]: value }));
    setIsSaving(true);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      // Simulate API call for saving
      setIsSaving(false);
    }, 1500);
  };

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh-8rem)] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
        
        <EditorSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        
        <div className="flex flex-1 flex-col overflow-hidden">
          <EditorToolbar isSaving={isSaving} />
          <ProposalEditor 
            activeSection={activeSection}
            content={content}
            onChange={handleContentChange}
          />
        </div>

      </div>
    </DashboardLayout>
  );
}
