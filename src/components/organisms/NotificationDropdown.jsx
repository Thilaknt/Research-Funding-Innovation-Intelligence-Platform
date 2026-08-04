import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Clock, Sparkles, Send, Bookmark, CheckCheck, ExternalLink, ArrowRight, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotificationDropdown({ isOpen, onClose, notifications, onMarkAllRead, onMarkAsRead }) {
  if (!isOpen) return null;

  const unreadCount = notifications.filter(n => n.isUnread).length;

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'deadline':
        return <AlertTriangle size={14} className="text-red-400" />;
      case 'new_grant':
        return <Bookmark size={14} className="text-emerald-400" />;
      case 'application':
        return <Send size={14} className="text-amber-400" />;
      case 'recommendation':
        return <Sparkles size={14} className="text-blue-400" />;
      default:
        return <Bell size={14} className="text-slate-400" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-40" onClick={onClose}></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        className="absolute right-6 top-16 z-50 w-96 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl glass flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 p-4 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-white">Notifications</h3>
            {unreadCount > 0 && (
              <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-bold text-blue-400 border border-blue-500/30">
                {unreadCount} New
              </span>
            )}
          </div>

          {unreadCount > 0 && (
            <button
              onClick={onMarkAllRead}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-blue-400 transition-colors"
            >
              <CheckCheck size={14} />
              Mark all read
            </button>
          )}
        </div>

        {/* List of recent notifications */}
        <div className="max-h-96 overflow-y-auto divide-y divide-slate-800/60 scrollbar-hide">
          {notifications.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500">
              No notifications at this time.
            </div>
          ) : (
            notifications.slice(0, 5).map((notif) => (
              <div
                key={notif.id}
                onClick={() => onMarkAsRead(notif.id)}
                className={`p-4 transition-colors cursor-pointer hover:bg-slate-800/40 flex items-start gap-3 ${
                  notif.isUnread ? 'bg-blue-950/20' : ''
                }`}
              >
                <div className={`h-8 w-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border ${
                  notif.category === 'deadline' ? 'bg-red-500/10 border-red-500/20' :
                  notif.category === 'new_grant' ? 'bg-emerald-500/10 border-emerald-500/20' :
                  notif.category === 'application' ? 'bg-amber-500/10 border-amber-500/20' : 'bg-blue-500/10 border-blue-500/20'
                }`}>
                  {getCategoryIcon(notif.category)}
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <p className={`text-xs font-bold truncate ${notif.isUnread ? 'text-white' : 'text-slate-300'}`}>
                      {notif.title}
                    </p>
                    {notif.isUnread && (
                      <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0"></span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {notif.message}
                  </p>
                  <p className="text-[10px] text-slate-500 flex items-center gap-1 pt-0.5">
                    <Clock size={10} />
                    {notif.timestamp}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 bg-slate-950/60 p-3 text-center">
          <Link
            to="/notifications"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            View Notification Center
            <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
