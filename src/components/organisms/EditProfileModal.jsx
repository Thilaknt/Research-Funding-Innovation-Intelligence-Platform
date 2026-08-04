import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, BookOpen, Link as LinkIcon, Plus, Trash2, Save, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../atoms/Button';

export function EditProfileModal({ isOpen, onClose, profileData, onSave }) {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({ ...profileData });
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [newInterest, setNewInterest] = useState({ title: '', category: 'Quantum Physics', level: 'Expert', focus: 'Primary Focus', description: '' });

  if (!isOpen) return null;

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleInterestAdd = () => {
    if (!newInterest.title.trim()) return;
    const newItem = {
      id: `ri-${Date.now()}`,
      ...newInterest
    };
    setFormData(prev => ({
      ...prev,
      researchInterests: [...prev.researchInterests, newItem]
    }));
    setNewInterest({ title: '', category: 'Quantum Physics', level: 'Expert', focus: 'Primary Focus', description: '' });
  };

  const handleInterestRemove = (id) => {
    setFormData(prev => ({
      ...prev,
      researchInterests: prev.researchInterests.filter(item => item.id !== id)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl glass flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 p-6 bg-slate-900/80">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/20">
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Edit Profile & Credentials</h2>
                <p className="text-xs text-slate-400">Update your researcher profile across the Nova platform</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-950/40 px-6 gap-2">
            <button
              onClick={() => setActiveTab('personal')}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'personal'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <User size={16} />
              Personal Info & Bio
            </button>
            <button
              onClick={() => setActiveTab('links')}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'links'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <LinkIcon size={16} />
              Academic Links & Identifiers
            </button>
            <button
              onClick={() => setActiveTab('interests')}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'interests'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen size={16} />
              Research Interests
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {savedSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white">Profile Updated Successfully!</h3>
                <p className="text-sm text-slate-400">Your profile changes are now live on your account.</p>
              </div>
            ) : (
              <>
                {/* Personal Tab */}
                {activeTab === 'personal' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">Full Name & Title</label>
                        <input
                          type="text"
                          value={formData.personalInfo.name}
                          onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
                          className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">Role / Designation</label>
                        <input
                          type="text"
                          value={formData.personalInfo.title}
                          onChange={(e) => handleInputChange('personalInfo', 'title', e.target.value)}
                          className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">Institution</label>
                        <input
                          type="text"
                          value={formData.personalInfo.institution}
                          onChange={(e) => handleInputChange('personalInfo', 'institution', e.target.value)}
                          className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">Department / Lab</label>
                        <input
                          type="text"
                          value={formData.personalInfo.department}
                          onChange={(e) => handleInputChange('personalInfo', 'department', e.target.value)}
                          className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">Location</label>
                        <input
                          type="text"
                          value={formData.personalInfo.location}
                          onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
                          className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">Contact Email</label>
                        <input
                          type="email"
                          value={formData.personalInfo.email}
                          onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                          className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Avatar Image URL</label>
                      <input
                        type="text"
                        value={formData.personalInfo.avatar}
                        onChange={(e) => handleInputChange('personalInfo', 'avatar', e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Biography</label>
                      <textarea
                        rows={4}
                        value={formData.personalInfo.bio}
                        onChange={(e) => handleInputChange('personalInfo', 'bio', e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/60 p-4 text-sm text-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Links Tab */}
                {activeTab === 'links' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">ORCID iD</label>
                      <input
                        type="text"
                        value={formData.personalInfo.orcid}
                        onChange={(e) => handleInputChange('personalInfo', 'orcid', e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Google Scholar URL</label>
                      <input
                        type="text"
                        value={formData.personalInfo.googleScholar}
                        onChange={(e) => handleInputChange('personalInfo', 'googleScholar', e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">LinkedIn Profile</label>
                      <input
                        type="text"
                        value={formData.personalInfo.linkedin}
                        onChange={(e) => handleInputChange('personalInfo', 'linkedin', e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">GitHub / Code Repository</label>
                      <input
                        type="text"
                        value={formData.personalInfo.github}
                        onChange={(e) => handleInputChange('personalInfo', 'github', e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Lab / Personal Website</label>
                      <input
                        type="text"
                        value={formData.personalInfo.website}
                        onChange={(e) => handleInputChange('personalInfo', 'website', e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Research Interests Tab */}
                {activeTab === 'interests' && (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-slate-800 bg-slate-800/30 p-4 space-y-3">
                      <h4 className="text-sm font-semibold text-white">Add New Research Interest</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Interest Title (e.g., Quantum Sensing)"
                          value={newInterest.title}
                          onChange={(e) => setNewInterest(prev => ({ ...prev, title: e.target.value }))}
                          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                        />
                        <select
                          value={newInterest.category}
                          onChange={(e) => setNewInterest(prev => ({ ...prev, category: e.target.value }))}
                          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white"
                        >
                          <option value="Quantum Physics">Quantum Physics</option>
                          <option value="Quantum Computing">Quantum Computing</option>
                          <option value="Quantum ML">Quantum ML</option>
                          <option value="Environmental Tech">Environmental Tech</option>
                          <option value="Experimental Hardware">Experimental Hardware</option>
                        </select>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={handleInterestAdd}
                          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
                        >
                          <Plus size={16} />
                          Add Interest
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-slate-300">Existing Research Interests ({formData.researchInterests.length})</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {formData.researchInterests.map((interest) => (
                          <div key={interest.id} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 p-3">
                            <div>
                              <p className="text-sm font-medium text-white">{interest.title}</p>
                              <span className="text-xs text-blue-400">{interest.category}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleInterestRemove(interest.id)}
                              className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Footer Buttons */}
            {!savedSuccess && (
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <Button variant="outline" type="button" onClick={onClose}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit" className="flex items-center gap-2">
                  <Save size={16} />
                  Save Changes
                </Button>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
