import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X, Trash2, ShieldAlert } from 'lucide-react';
import { Button } from '../atoms/Button';

export function DeleteAccountModal({ isOpen, onClose, onConfirm, userEmail = "sarah.chen@mit.edu" }) {
  const [confirmInput, setConfirmInput] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  if (!isOpen) return null;

  const expectedPhrase = `DELETE ${userEmail}`;
  const isInputMatching = confirmInput.trim() === expectedPhrase;

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    if (!isInputMatching) return;
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      onConfirm();
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-red-500/30 bg-slate-900 shadow-2xl glass flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-red-500/20 p-6 bg-red-950/20">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/20 text-red-400 border border-red-500/30">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white">Delete Researcher Account</h2>
                <p className="text-xs text-red-300 font-medium">Danger Zone • Permanent Action</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <form onSubmit={handleDeleteSubmit} className="p-6 space-y-5">
            <div className="rounded-2xl border border-red-500/20 bg-red-950/30 p-4 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                <ShieldAlert size={16} />
                Warning: This action cannot be undone.
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deleting your Nova Intelligence account will permanently erase your profile, saved grant bookmarks, proposal drafts, citation metrics, and API access tokens.
              </p>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300">
                To confirm deletion, type <code className="text-red-400 font-mono select-all font-bold px-1.5 py-0.5 rounded bg-slate-950 border border-red-900">{expectedPhrase}</code> below:
              </label>
              <input
                type="text"
                placeholder={`Type "${expectedPhrase}"`}
                value={confirmInput}
                onChange={(e) => setConfirmInput(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-white focus:border-red-500 focus:outline-none font-mono"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!isInputMatching || isDeleting}
                className={`flex items-center gap-2 text-xs font-bold transition-all ${
                  isInputMatching
                    ? 'bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-600/30'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                }`}
              >
                <Trash2 size={16} />
                {isDeleting ? 'Deleting Account...' : 'Permanently Delete Account'}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
