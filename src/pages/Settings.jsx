import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings as SettingsIcon, Palette, Globe, Bell, Shield, Eye, Download, 
  Trash2, Key, Smartphone, Laptop, CheckCircle2, Save, Lock, AlertTriangle, 
  Moon, Sun, Sparkles, RefreshCw, Check, FileSpreadsheet, FileCode, FileText, Archive
} from 'lucide-react';

import { DashboardLayout } from '../templates/DashboardLayout';
import { Card } from '../components/atoms/Card';
import { Button } from '../components/atoms/Button';
import { Badge } from '../components/atoms/Badge';
import { initialSettings } from '../data/settingsData';
import { DeleteAccountModal } from '../components/organisms/DeleteAccountModal';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Settings() {
  const [settings, setSettings] = useState(initialSettings);
  const [activeTab, setActiveTab] = useState('theme');
  const [toastMessage, setToastMessage] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [passwordForm, setPasswordForm] = useState({ current: '', next: '', confirm: '' });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveSettings = () => {
    showToast("Settings successfully saved and updated!");
  };

  const handleExportData = (type) => {
    showToast(`Exporting ${type} dataset... Download started.`);
  };

  const handleRevokeSession = (sessionId) => {
    setSettings(prev => ({
      ...prev,
      security: {
        ...prev.security,
        activeSessions: prev.security.activeSessions.filter(s => s.id !== sessionId)
      }
    }));
    showToast("Session revoked successfully.");
  };

  const tabsNav = [
    { id: 'theme', label: '1. Theme & Appearance', icon: Palette },
    { id: 'language', label: '2. Language & Region', icon: Globe },
    { id: 'notifications', label: '3. Notifications', icon: Bell },
    { id: 'security', label: '4. Security & 2FA', icon: Shield },
    { id: 'privacy', label: '5. Privacy & Visibility', icon: Eye },
    { id: 'export', label: '6. Export Data', icon: Download },
    { id: 'danger', label: '7. Delete Account', icon: Trash2 },
  ];

  return (
    <DashboardLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-8 pb-16"
      >
        {/* Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 right-6 z-50 flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-xs font-bold text-white shadow-2xl shadow-emerald-500/30"
            >
              <CheckCircle2 size={18} />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Page Header */}
        <motion.div variants={cardVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <SettingsIcon size={22} />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">Platform Settings</h1>
              <p className="text-xs text-slate-400">Configure workspace themes, security, notifications, and privacy preferences</p>
            </div>
          </div>

          <Button variant="primary" onClick={handleSaveSettings} className="flex items-center gap-2 text-xs font-semibold shadow-lg shadow-blue-600/30">
            <Save size={16} />
            Save All Preferences
          </Button>
        </motion.div>

        {/* Main Settings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Nav */}
          <div className="space-y-1.5 lg:col-span-1">
            {tabsNav.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              const isDanger = tab.id === 'danger';

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-xs font-semibold transition-all ${
                    isActive
                      ? isDanger
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30 shadow-lg'
                        : 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 ring-1 ring-blue-400'
                      : isDanger
                        ? 'text-red-400 hover:bg-red-950/20'
                        : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <IconComponent size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Settings Tab Panel */}
          <div className="lg:col-span-3">
            {/* 1. THEME MODULE */}
            {activeTab === 'theme' && (
              <motion.div variants={cardVariants} className="space-y-6">
                <Card className="border-slate-800 bg-slate-900/40 p-6 space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Palette size={20} className="text-blue-400" />
                      Theme & Visual Aesthetics
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">Select your preferred color theme and interface styling</p>
                  </div>

                  {/* Theme Mode Tiles */}
                  <div className="space-y-3">
                    <label className="text-xs font-semibold text-slate-300">Interface Theme Preset</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id: 'dark-glass', title: 'Dark Glassmorphic (Default)', desc: 'High-contrast dark slate with frosted glass overlays', icon: Moon },
                        { id: 'slate-dark', title: 'Midnight Slate', desc: 'Deep navy background with crisp white typography', icon: Sparkles },
                        { id: 'cyberpunk', title: 'Cyberpunk Quantum', desc: 'Neon blue & purple accent dark mode', icon: RefreshCw },
                        { id: 'light', title: 'Clean Light (Beta)', desc: 'Bright daylight theme for high-illumination environments', icon: Sun },
                      ].map((th) => (
                        <div
                          key={th.id}
                          onClick={() => {
                            setSettings(prev => ({ ...prev, theme: { ...prev.theme, mode: th.id } }));
                            showToast(`Theme changed to ${th.title}`);
                          }}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-2 ${
                            settings.theme.mode === th.id
                              ? 'border-blue-500 bg-blue-950/20 ring-2 ring-blue-500/30'
                              : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-bold text-white flex items-center gap-2">
                              <th.icon size={16} className="text-blue-400" />
                              {th.title}
                            </h3>
                            {settings.theme.mode === th.id && (
                              <CheckCircle2 size={16} className="text-blue-400" />
                            )}
                          </div>
                          <p className="text-xs text-slate-400">{th.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accent Color Selection */}
                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    <label className="text-xs font-semibold text-slate-300">Primary Accent Color</label>
                    <div className="flex items-center gap-4">
                      {[
                        { name: 'blue', color: 'bg-blue-500' },
                        { name: 'indigo', color: 'bg-indigo-500' },
                        { name: 'emerald', color: 'bg-emerald-500' },
                        { name: 'amber', color: 'bg-amber-500' },
                        { name: 'purple', color: 'bg-purple-500' },
                      ].map((acc) => (
                        <button
                          key={acc.name}
                          onClick={() => setSettings(prev => ({ ...prev, theme: { ...prev.theme, accentColor: acc.name } }))}
                          className={`h-9 w-9 rounded-full ${acc.color} flex items-center justify-center transition-transform ${
                            settings.theme.accentColor === acc.name ? 'ring-4 ring-slate-700 scale-110' : 'hover:scale-105'
                          }`}
                        >
                          {settings.theme.accentColor === acc.name && <Check size={16} className="text-white" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* 2. LANGUAGE MODULE */}
            {activeTab === 'language' && (
              <motion.div variants={cardVariants} className="space-y-6">
                <Card className="border-slate-800 bg-slate-900/40 p-6 space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Globe size={20} className="text-blue-400" />
                      Language & Regional Preferences
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">Set display language, timezones, and numerical formatting</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">Display Language</label>
                      <select
                        value={settings.language.selectedLanguage}
                        onChange={(e) => setSettings(prev => ({ ...prev, language: { ...prev.language, selectedLanguage: e.target.value } }))}
                        className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                      >
                        {settings.availableLanguages.map((lang) => (
                          <option key={lang.code} value={lang.code}>
                            {lang.name} ({lang.native})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">Timezone</label>
                      <select
                        value={settings.language.timezone}
                        onChange={(e) => setSettings(prev => ({ ...prev, language: { ...prev.language, timezone: e.target.value } }))}
                        className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                      >
                        <option value="America/New_York (UTC-05:00)">Eastern Time (US & Canada)</option>
                        <option value="America/Los_Angeles (UTC-08:00)">Pacific Time (US & Canada)</option>
                        <option value="Europe/London (UTC+00:00)">London, Edinburgh (GMT)</option>
                        <option value="Europe/Paris (UTC+01:00)">Paris, Berlin, Madrid</option>
                        <option value="Asia/Tokyo (UTC+09:00)">Tokyo, Osaka, Seoul</option>
                      </select>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* 3. NOTIFICATIONS MODULE */}
            {activeTab === 'notifications' && (
              <motion.div variants={cardVariants} className="space-y-6">
                <Card className="border-slate-800 bg-slate-900/40 p-6 space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Bell size={20} className="text-blue-400" />
                      Notification Channels & Categories
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">Control how and when you receive funding alerts</p>
                  </div>

                  {/* Channel Switches */}
                  <div className="space-y-4 border-b border-slate-800 pb-6">
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Delivery Channels</h3>
                    {[
                      { key: 'emailAlerts', title: 'Email Notifications', desc: 'Receive grant deadline alerts and application updates via sarah.chen@mit.edu' },
                      { key: 'pushNotifications', title: 'Browser Push Notifications', desc: 'Instant desktop popups when new high-match grants are indexed' },
                      { key: 'smsAlerts', title: 'SMS / WhatsApp Urgent Alerts', desc: 'Text messages for high-priority deadline reminders within 24 hours' },
                      { key: 'weeklyDigest', title: 'Weekly Summary Digest', desc: 'A consolidated Friday summary report of grant activity' },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between gap-4 p-3 rounded-xl bg-slate-800/40">
                        <div>
                          <p className="text-sm font-bold text-white">{item.title}</p>
                          <p className="text-xs text-slate-400">{item.desc}</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.notifications[item.key]}
                          onChange={(e) => setSettings(prev => ({
                            ...prev,
                            notifications: { ...prev.notifications, [item.key]: e.target.checked }
                          }))}
                          className="h-5 w-5 rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500/30"
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}

            {/* 4. SECURITY MODULE */}
            {activeTab === 'security' && (
              <motion.div variants={cardVariants} className="space-y-6">
                <Card className="border-slate-800 bg-slate-900/40 p-6 space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Shield size={20} className="text-blue-400" />
                      Security & Authentication
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">Manage Two-Factor Authentication, passwords, and active login sessions</p>
                  </div>

                  {/* 2FA Card */}
                  <div className="flex items-center justify-between p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/20">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        <Lock size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Two-Factor Authentication (2FA) Enabled</p>
                        <p className="text-xs text-emerald-300">Protected via {settings.security.twoFactorMethod}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="text-xs bg-slate-900 border-slate-700">
                      Reconfigure 2FA
                    </Button>
                  </div>

                  {/* Active Sessions */}
                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Active Login Sessions</h3>
                    <div className="space-y-3">
                      {settings.security.activeSessions.map((sess) => (
                        <div key={sess.id} className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-900/60">
                          <div className="flex items-center gap-3">
                            {sess.device.includes('MacBook') || sess.device.includes('Chrome') ? (
                              <Laptop size={20} className="text-blue-400" />
                            ) : (
                              <Smartphone size={20} className="text-purple-400" />
                            )}
                            <div>
                              <p className="text-xs font-bold text-white flex items-center gap-2">
                                {sess.device}
                                {sess.isCurrent && (
                                  <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/30">
                                    This Device
                                  </span>
                                )}
                              </p>
                              <p className="text-[11px] text-slate-400">{sess.location} • {sess.ip} • {sess.lastActive}</p>
                            </div>
                          </div>

                          {!sess.isCurrent && (
                            <button
                              onClick={() => handleRevokeSession(sess.id)}
                              className="text-xs text-red-400 hover:underline font-semibold"
                            >
                              Revoke
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* 5. PRIVACY MODULE */}
            {activeTab === 'privacy' && (
              <motion.div variants={cardVariants} className="space-y-6">
                <Card className="border-slate-800 bg-slate-900/40 p-6 space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Eye size={20} className="text-blue-400" />
                      Privacy & Data Visibility
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">Control public visibility of your researcher metrics and active grants</p>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-semibold text-slate-300">Profile Visibility Level</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'public', title: 'Public', desc: 'Visible to all global researchers and funding agencies' },
                        { id: 'institutional', title: 'Institutional Only', desc: 'Restricted to MIT researchers & verified collaborators' },
                        { id: 'private', title: 'Private', desc: 'Only visible to you' },
                      ].map((vis) => (
                        <div
                          key={vis.id}
                          onClick={() => setSettings(prev => ({ ...prev, privacy: { ...prev.privacy, profileVisibility: vis.id } }))}
                          className={`p-4 rounded-xl border cursor-pointer transition-all space-y-1 ${
                            settings.privacy.profileVisibility === vis.id
                              ? 'border-blue-500 bg-blue-950/20 ring-2 ring-blue-500/30'
                              : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                          }`}
                        >
                          <p className="text-xs font-bold text-white">{vis.title}</p>
                          <p className="text-[11px] text-slate-400">{vis.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* 6. EXPORT DATA MODULE */}
            {activeTab === 'export' && (
              <motion.div variants={cardVariants} className="space-y-6">
                <Card className="border-slate-800 bg-slate-900/40 p-6 space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Download size={20} className="text-blue-400" />
                      Export Data & Archives
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">Download machine-readable exports of your grants, applications, and citations</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileSpreadsheet size={24} className="text-emerald-400" />
                        <div>
                          <p className="text-xs font-bold text-white">Bookmarked Grants (CSV)</p>
                          <p className="text-[10px] text-slate-400">Includes deadlines & match scores</p>
                        </div>
                      </div>
                      <Button variant="outline" onClick={() => handleExportData('Grants CSV')} className="text-xs">
                        Download
                      </Button>
                    </div>

                    <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileCode size={24} className="text-blue-400" />
                        <div>
                          <p className="text-xs font-bold text-white">Applications Record (JSON)</p>
                          <p className="text-[10px] text-slate-400">Full proposal submission records</p>
                        </div>
                      </div>
                      <Button variant="outline" onClick={() => handleExportData('Applications JSON')} className="text-xs">
                        Download
                      </Button>
                    </div>

                    <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText size={24} className="text-amber-400" />
                        <div>
                          <p className="text-xs font-bold text-white">Publications BibTeX / RIS</p>
                          <p className="text-[10px] text-slate-400">Standard reference manager format</p>
                        </div>
                      </div>
                      <Button variant="outline" onClick={() => handleExportData('BibTeX File')} className="text-xs">
                        Download
                      </Button>
                    </div>

                    <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Archive size={24} className="text-purple-400" />
                        <div>
                          <p className="text-xs font-bold text-white">Full Profile Archive (ZIP)</p>
                          <p className="text-[10px] text-slate-400">Complete account dataset</p>
                        </div>
                      </div>
                      <Button variant="outline" onClick={() => handleExportData('Complete Account ZIP')} className="text-xs">
                        Download
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* 7. DANGER ZONE / DELETE ACCOUNT MODULE */}
            {activeTab === 'danger' && (
              <motion.div variants={cardVariants} className="space-y-6">
                <Card className="border-red-500/30 bg-gradient-to-r from-red-950/30 via-slate-900 to-slate-950 p-6 space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <AlertTriangle size={20} className="text-red-400" />
                      Danger Zone • Account Deletion
                    </h2>
                    <p className="text-xs text-red-300 mt-1">Permanently erase your account and all associated grant research data</p>
                  </div>

                  <div className="rounded-2xl border border-red-500/20 bg-red-950/20 p-4 space-y-3">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Once your account is deleted, all stored proposals, grant bookmarks, custom AI recommendations, and verified certificates will be permanently removed.
                    </p>
                    
                    <div className="pt-2">
                      <Button
                        variant="primary"
                        onClick={() => setIsDeleteModalOpen(true)}
                        className="bg-red-600 hover:bg-red-500 text-xs font-bold px-5 py-2.5 shadow-lg shadow-red-600/30 text-white"
                      >
                        <Trash2 size={16} className="mr-2" />
                        Delete Account Permanently
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>

        {/* Delete Account Modal */}
        <DeleteAccountModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => showToast("Account deletion request submitted.")}
          userEmail="sarah.chen@mit.edu"
        />
      </motion.div>
    </DashboardLayout>
  );
}
