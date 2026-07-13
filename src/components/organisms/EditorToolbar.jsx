import React from 'react';
import { Upload, Sparkles, CheckCircle2, Loader2, FileText, FileDown, Bold, Italic, List, AlignLeft, AlignCenter } from 'lucide-react';
import { Button } from '../atoms/Button';

export function EditorToolbar({ isSaving }) {
  return (
    <div className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900/80 px-6 backdrop-blur-md">
      
      {/* Formatting Tools (Simulated) */}
      <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 p-1">
        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white"><Bold size={16} /></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white"><Italic size={16} /></Button>
        <div className="mx-1 h-4 w-px bg-slate-700"></div>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white"><List size={16} /></Button>
        <div className="mx-1 h-4 w-px bg-slate-700"></div>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white"><AlignLeft size={16} /></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white"><AlignCenter size={16} /></Button>
      </div>

      <div className="flex items-center gap-4">
        {/* Auto Save Status */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mr-4">
          {isSaving ? (
            <>
              <Loader2 size={14} className="animate-spin text-blue-400" />
              <span>Saving...</span>
            </>
          ) : (
            <>
              <CheckCircle2 size={14} className="text-slate-500" />
              <span>Saved</span>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <Button variant="outline" size="sm" className="bg-slate-800 border-slate-700">
          <Upload size={14} className="mr-2" />
          Upload PDF
        </Button>
        
        <Button variant="outline" size="sm" className="bg-slate-800 border-slate-700">
          <FileDown size={14} className="mr-2" />
          Export
        </Button>
        
        <Button variant="primary" size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0">
          <Sparkles size={14} className="mr-2" />
          AI Summary
        </Button>
      </div>
    </div>
  );
}
