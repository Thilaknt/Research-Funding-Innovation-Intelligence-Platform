import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell, Clock, AlertTriangle, Bookmark, Send, Sparkles, CheckCheck, 
  Trash2, Filter, Eye, CheckCircle2, ArrowRight, X, ShieldAlert,
  ChevronRight, RefreshCw, Zap
} from 'lucide-react';

import { DashboardLayout } from '../templates/DashboardLayout';
import { Card } from '../components/atoms/Card';
import { Button } from '../components/atoms/Button';
import { Badge } from '../components/atoms/Badge';
import { initialNotifications } from '../data/notificationsData';
import { Link } from 'react-router-dom';

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

export function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const unreadCount = notifications.filter(n => n.isUnread).length;

  const handleMarkAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, isUnread: !n.isUnread } : n))
    );
  };

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isUnread: false })));
  };

  const handleDismiss = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const handleClearRead = () => {
    setNotifications(prev => prev.filter(n => n.isUnread));
  };

  const categories = [
    { id: 'All', label: 'All Notifications', count: notifications.length },
    { id: 'Deadline Reminders', label: 'Deadline Reminders', count: notifications.filter(n => n.type === 'Deadline Reminders').length },
    { id: 'New Grants', label: 'New Grants', count: notifications.filter(n => n.type === 'New Grants').length },
    { id: 'Application Updates', label: 'Application Updates', count: notifications.filter(n => n.type === 'Application Updates').length },
    { id: 'Recommendation Updates', label: 'Recommendation Updates', count: notifications.filter(n => n.type === 'Recommendation Updates').length },
  ];

  const filteredNotifications = notifications.filter(n => {
    const categoryMatch = activeCategory === 'All' || n.type === activeCategory;
    const unreadMatch = !showUnreadOnly || n.isUnread;
    return categoryMatch && unreadMatch;
  });

  const getCategoryTheme = (category) => {
    switch (category) {
      case 'deadline':
        return {
          icon: AlertTriangle,
          badgeBg: 'bg-red-500/10 text-red-400 border-red-500/20',
          cardBorder: 'border-red-500/30 hover:border-red-500/50',
          accentColor: 'text-red-400',
          pillColor: 'bg-red-500'
        };
      case 'new_grant':
        return {
          icon: Bookmark,
          badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          cardBorder: 'border-emerald-500/30 hover:border-emerald-500/50',
          accentColor: 'text-emerald-400',
          pillColor: 'bg-emerald-500'
        };
      case 'application':
        return {
          icon: Send,
          badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
          cardBorder: 'border-amber-500/30 hover:border-amber-500/50',
          accentColor: 'text-amber-400',
          pillColor: 'bg-amber-500'
        };
      case 'recommendation':
        return {
          icon: Sparkles,
          badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
          cardBorder: 'border-blue-500/30 hover:border-blue-500/50',
          accentColor: 'text-blue-400',
          pillColor: 'bg-blue-500'
        };
      default:
        return {
          icon: Bell,
          badgeBg: 'bg-slate-800 text-slate-300 border-slate-700',
          cardBorder: 'border-slate-800',
          accentColor: 'text-slate-300',
          pillColor: 'bg-slate-500'
        };
    }
  };

  return (
    <DashboardLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6 pb-16"
      >
        {/* Header Hero Banner */}
        <motion.div variants={cardVariants} className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-950 p-8 glass">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <Bell size={22} />
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Notification Center</h1>
              </div>
              <p className="text-sm text-slate-400">
                Real-time alerts for grant deadlines, new funding indexings, proposal updates, and AI recommendations
              </p>
            </div>

            {/* Unread Counter Badge & Global Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-2xl bg-slate-900/80 px-4 py-2 border border-slate-800">
                <span className="text-xs text-slate-400 font-medium">Unread Alerts</span>
                <span className={`flex h-6 min-w-6 items-center justify-center rounded-full px-2 text-xs font-extrabold ${
                  unreadCount > 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 animate-pulse' : 'bg-slate-800 text-slate-400'
                }`}>
                  {unreadCount}
                </span>
              </div>

              {unreadCount > 0 && (
                <Button
                  variant="outline"
                  onClick={handleMarkAllRead}
                  className="bg-slate-900/60 text-xs border-slate-700 text-slate-200 hover:bg-slate-800"
                >
                  <CheckCheck size={14} className="mr-1.5 text-blue-400" />
                  Mark All Read
                </Button>
              )}

              <Button
                variant="outline"
                onClick={handleClearRead}
                className="bg-slate-900/60 text-xs border-slate-700 text-slate-400 hover:text-red-400 hover:bg-slate-800"
              >
                <Trash2 size={14} className="mr-1.5" />
                Clear Read
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs & Filter Bar */}
        <motion.div variants={cardVariants} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 ring-1 ring-blue-400'
                      : 'bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat.label}
                  <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${
                    isActive ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer self-start sm:self-auto bg-slate-900/60 px-3 py-2 rounded-xl border border-slate-800">
            <input
              type="checkbox"
              checked={showUnreadOnly}
              onChange={(e) => setShowUnreadOnly(e.target.checked)}
              className="rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500/30"
            />
            <span>Show Unread Only</span>
          </label>
        </motion.div>

        {/* Notification Cards List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredNotifications.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-800 bg-slate-900/20 p-12 text-center space-y-3"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800/60 text-slate-500">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-base font-bold text-slate-300">All Caught Up!</h3>
                <p className="text-xs text-slate-500 max-w-sm">
                  No notifications match your current filter selections. Check back later for new grant opportunities.
                </p>
              </motion.div>
            ) : (
              filteredNotifications.map((notif) => {
                const theme = getCategoryTheme(notif.category);
                const IconComponent = theme.icon;

                return (
                  <motion.div
                    key={notif.id}
                    layout
                    variants={cardVariants}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Card
                      className={`relative overflow-hidden border p-6 transition-all glass ${theme.cardBorder} ${
                        notif.isUnread ? 'bg-slate-900/90 shadow-xl' : 'bg-slate-900/40 opacity-90'
                      }`}
                    >
                      {/* Unread Glow Ribbon */}
                      {notif.isUnread && (
                        <div className={`absolute top-0 left-0 bottom-0 w-1.5 ${theme.pillColor}`}></div>
                      )}

                      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                        {/* Main Content */}
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 border ${theme.badgeBg}`}>
                            <IconComponent size={22} />
                          </div>

                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${theme.badgeBg}`}>
                                {notif.type}
                              </span>
                              
                              {notif.priority === 'High' && (
                                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 flex items-center gap-1">
                                  <Zap size={10} /> Urgent
                                </span>
                              )}

                              <span className="text-xs text-slate-500 flex items-center gap-1">
                                <Clock size={12} />
                                {notif.timestamp}
                              </span>
                            </div>

                            <h3 className={`text-base font-bold ${notif.isUnread ? 'text-white' : 'text-slate-200'}`}>
                              {notif.title}
                            </h3>

                            <p className="text-xs leading-relaxed text-slate-300">
                              {notif.message}
                            </p>

                            {/* Metadata Badges */}
                            {notif.metadata && (
                              <div className="flex flex-wrap items-center gap-3 pt-2">
                                {notif.metadata.grantName && (
                                  <span className="text-[11px] px-3 py-1 rounded-xl bg-slate-800/80 text-slate-300 border border-slate-700">
                                    Grant: <strong>{notif.metadata.grantName}</strong>
                                  </span>
                                )}
                                {notif.metadata.amount && (
                                  <span className="text-[11px] px-3 py-1 rounded-xl bg-emerald-950/40 text-emerald-300 border border-emerald-800/40">
                                    Award: <strong>{notif.metadata.amount}</strong>
                                  </span>
                                )}
                                {notif.metadata.matchScore && (
                                  <span className="text-[11px] px-3 py-1 rounded-xl bg-blue-950/40 text-blue-300 border border-blue-800/40">
                                    Match: <strong>{notif.metadata.matchScore}</strong>
                                  </span>
                                )}
                                {notif.metadata.deadline && (
                                  <span className="text-[11px] px-3 py-1 rounded-xl bg-red-950/40 text-red-300 border border-red-800/40">
                                    Deadline: <strong>{notif.metadata.deadline}</strong>
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-row sm:flex-col items-end gap-2 shrink-0 self-stretch sm:self-auto justify-between sm:justify-start pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleMarkAsRead(notif.id)}
                              title={notif.isUnread ? "Mark as read" : "Mark as unread"}
                              className="p-2 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                            >
                              <Eye size={16} />
                            </button>
                            <button
                              onClick={() => handleDismiss(notif.id)}
                              title="Dismiss notification"
                              className="p-2 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-red-400 transition-colors"
                            >
                              <X size={16} />
                            </button>
                          </div>

                          <Link to={notif.actionUrl}>
                            <Button
                              variant="primary"
                              className="text-xs px-3.5 py-2 flex items-center gap-1.5 shadow-md"
                            >
                              {notif.actionText}
                              <ChevronRight size={14} />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
