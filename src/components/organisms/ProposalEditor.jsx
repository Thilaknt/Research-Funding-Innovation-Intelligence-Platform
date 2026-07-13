import React from 'react';

export function ProposalEditor({ activeSection, content, onChange }) {
  
  const getPlaceholder = (section) => {
    switch(section) {
      case 'title': return 'Enter a descriptive title for your proposal...';
      case 'abstract': return 'Provide a brief summary of the proposed research...';
      case 'problem': return 'Detail the specific problem or gap in knowledge...';
      case 'objectives': return 'List the primary and secondary objectives...';
      case 'methodology': return 'Describe the experimental design and procedures...';
      case 'budget': return 'Outline the financial requirements and justification...';
      case 'timeline': return 'Provide a chronological schedule of major milestones...';
      default: return 'Start typing...';
    }
  };

  const getSectionTitle = (section) => {
    return section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1');
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-950 p-8 lg:p-12">
      <div className="mx-auto max-w-4xl h-full flex flex-col">
        <h2 className="mb-6 text-3xl font-bold text-white tracking-tight">
          {getSectionTitle(activeSection)}
        </h2>
        <textarea
          value={content[activeSection] || ''}
          onChange={(e) => onChange(activeSection, e.target.value)}
          placeholder={getPlaceholder(activeSection)}
          className="flex-1 w-full resize-none bg-transparent text-lg text-slate-300 placeholder:text-slate-700 focus:outline-none leading-relaxed"
        />
      </div>
    </div>
  );
}
