export const initialSettings = {
  // 1. Theme Settings
  theme: {
    mode: "dark-glass", // 'dark-glass' | 'slate-dark' | 'cyberpunk' | 'light'
    accentColor: "blue", // 'blue' | 'indigo' | 'emerald' | 'amber' | 'purple'
    compactMode: false,
    fontSize: "medium",
    highContrast: false
  },

  // 2. Language & Region
  language: {
    selectedLanguage: "en-US",
    timezone: "America/New_York (UTC-05:00)",
    dateFormat: "MM/DD/YYYY",
    currencyDisplay: "USD ($)",
    numberFormat: "en-US"
  },

  // 3. Notifications Preferences
  notifications: {
    emailAlerts: true,
    pushNotifications: true,
    smsAlerts: false,
    weeklyDigest: true,
    categories: {
      grantDeadlines: true,
      newGrantMatches: true,
      applicationUpdates: true,
      recommendationUpdates: true,
      marketingNews: false
    },
    frequency: "realtime" // 'realtime' | 'daily' | 'weekly'
  },

  // 4. Security
  security: {
    twoFactorEnabled: true,
    twoFactorMethod: "Authenticator App (TOTP)",
    lastPasswordChange: "May 14, 2026",
    activeSessions: [
      { id: "sess-1", device: "MacBook Pro 16\" (macOS Tahoe)", location: "Cambridge, MA, USA", ip: "18.9.22.102", isCurrent: true, lastActive: "Active Now" },
      { id: "sess-2", device: "iPhone 16 Pro (iOS 19)", location: "Boston, MA, USA", ip: "172.56.21.9", isCurrent: false, lastActive: "2 hours ago" },
      { id: "sess-3", device: "Chrome / Windows 11", location: "Cambridge, MA, USA", ip: "18.9.22.140", isCurrent: false, lastActive: "3 days ago" }
    ],
    apiTokens: [
      { id: "tok-1", name: "MIT Lab Automation Bot", created: "Jan 10, 2026", expires: "Jan 10, 2027", lastUsed: "Yesterday" }
    ]
  },

  // 5. Privacy
  privacy: {
    profileVisibility: "public", // 'public' | 'institutional' | 'private'
    showCitationMetrics: true,
    showActiveGrants: true,
    googleScholarSync: true,
    allowAiProfiling: true,
    benchmarkDataSharing: true
  },

  // 6. Languages List
  availableLanguages: [
    { code: "en-US", name: "English (US)", native: "English (US)" },
    { code: "en-GB", name: "English (UK)", native: "English (UK)" },
    { code: "es-ES", name: "Spanish", native: "Español" },
    { code: "fr-FR", name: "French", native: "Français" },
    { code: "de-DE", name: "German", native: "Deutsch" },
    { code: "zh-CN", name: "Mandarin Chinese", native: "中文 (简体)" },
    { code: "ja-JP", name: "Japanese", native: "日本語" }
  ]
};
