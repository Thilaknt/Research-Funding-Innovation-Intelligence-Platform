export const initialNotifications = [
  {
    id: "notif-1",
    type: "Deadline Reminders",
    category: "deadline",
    priority: "High",
    title: "Urgent: NSF Quantum Leap Challenge Deadline in 2 Days",
    message: "Your application draft 'Co-Design of Fault-Tolerant Architectures' is 60% complete. Final proposal submission closes on Oct 15 at 5:00 PM EST.",
    timestamp: "10 mins ago",
    isUnread: true,
    actionText: "Resume Application",
    actionUrl: "/applications",
    metadata: {
      grantName: "NSF Quantum Leap Challenge",
      amount: "$2,500,000",
      agency: "National Science Foundation",
      deadline: "2 Days Left"
    }
  },
  {
    id: "notif-2",
    type: "New Grants",
    category: "new_grant",
    priority: "Medium",
    title: "New High-Match Grant Indexed: DOE Clean Energy Quantum Solvers",
    message: "The US Department of Energy published a $3.2M grant opportunity targeting hybrid quantum algorithms for grid optimization. 96% match with your profile.",
    timestamp: "1 hour ago",
    isUnread: true,
    actionText: "View Grant Details",
    actionUrl: "/funding",
    metadata: {
      grantName: "DOE Clean Energy Solvers",
      amount: "$3,200,000",
      agency: "Department of Energy",
      matchScore: "96%"
    }
  },
  {
    id: "notif-3",
    type: "Application Updates",
    category: "application",
    priority: "High",
    title: "Proposal Status Changed: DARPA ONISQ Phase II Moved to Review",
    message: "Your application 'Fault-Tolerant Quantum Simulation Benchmarks' (Ref: DARPA-HR0011-26-S-004) has advanced to the Scientific Peer Review Board.",
    timestamp: "3 hours ago",
    isUnread: true,
    actionText: "Check Proposal Status",
    actionUrl: "/applications",
    metadata: {
      grantName: "DARPA ONISQ Phase II",
      status: "Under Scientific Review",
      refId: "DARPA-HR0011-26-S-004"
    }
  },
  {
    id: "notif-4",
    type: "Recommendation Updates",
    category: "recommendation",
    priority: "Info",
    title: "AI Recommendation Engine Updated 5 New Opportunities",
    message: "Nova AI analyzed 14 newly indexed global calls and identified 3 primary matches in Quantum Error Correction and 2 in Climate Modeling Solvers.",
    timestamp: "5 hours ago",
    isUnread: true,
    actionText: "Explore Recommendations",
    actionUrl: "/recommendations",
    metadata: {
      matchesFound: 5,
      topDomain: "Quantum Tech & Climate AI"
    }
  },
  {
    id: "notif-5",
    type: "Deadline Reminders",
    category: "deadline",
    priority: "Medium",
    title: "Reminder: Horizon Europe Digital Twins Proposal Partner Lock",
    message: "EU Commission requires consortium participant registrations to be finalized by Nov 01, 2026. Partner search is currently open.",
    timestamp: "1 day ago",
    isUnread: false,
    actionText: "Review Consortium",
    actionUrl: "/funding",
    metadata: {
      grantName: "Horizon Europe: Digital Twins",
      amount: "€3,000,000",
      agency: "European Commission"
    }
  },
  {
    id: "notif-6",
    type: "Application Updates",
    category: "application",
    priority: "Info",
    title: "Grant Award Approved: MIT-IBM Watson AI Lab Grant ($450,000)",
    message: "Congratulations! Your proposal 'Quantum Neural Network Pruning' has been officially approved for funding starting Q4 2026.",
    timestamp: "2 days ago",
    isUnread: false,
    actionText: "View Award Letter",
    actionUrl: "/applications",
    metadata: {
      grantName: "MIT-IBM Watson AI Grant",
      amount: "$450,000",
      status: "Approved & Funded"
    }
  },
  {
    id: "notif-7",
    type: "New Grants",
    category: "new_grant",
    priority: "Info",
    title: "New Opportunity: Global Green Materials Research Grant",
    message: "Global Green Fund announced a $900,000 grant call for sustainable materials. Open to academic PIs and international labs.",
    timestamp: "3 days ago",
    isUnread: false,
    actionText: "Bookmark Opportunity",
    actionUrl: "/funding",
    metadata: {
      grantName: "Global Green Materials",
      amount: "$900,000",
      agency: "Global Green Fund"
    }
  }
];
