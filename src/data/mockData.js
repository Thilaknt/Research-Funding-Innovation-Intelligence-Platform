export const userData = {
  name: "Dr. Sarah Chen",
  role: "Principal Investigator",
  institution: "MIT Quantum Lab",
  statusMessage: "You have 3 grant deadlines approaching this week."
};

export const kpiData = {
  totalFunding: "$42.5M",
  activeGrants: 128,
  innovationIndex: "84.2",
  researchers: 342,
  fundingTrend: "+12.5%",
  grantsTrend: "+5",
  indexTrend: "+2.4",
  researchersTrend: "+14"
};

export const recentGrants = [
  { id: "GR-2024-001", title: "Quantum Computing for Climate Modeling", investigator: "Dr. Sarah Chen", institution: "MIT", amount: "$1,200,000", status: "Active", progress: 75, category: "Quantum tech" },
  { id: "GR-2024-002", title: "Next-Gen Solid State Batteries", investigator: "Prof. James Wilson", institution: "Stanford University", amount: "$850,000", status: "Pending", progress: 0, category: "Energy" },
  { id: "GR-2024-003", title: "AI-Driven Drug Discovery Platform", investigator: "Dr. Elena Rodriguez", institution: "UCSF", amount: "$2,100,000", status: "Active", progress: 45, category: "Healthcare" },
  { id: "GR-2024-004", title: "Biodegradable Polymers from Algae", investigator: "Dr. Akio Tanaka", institution: "UC Berkeley", amount: "$600,000", status: "Completed", progress: 100, category: "Materials" },
];

export const upcomingDeadlines = [
  { id: "DL-1", title: "NSF Quantum Leap Challenge", date: "2 Days", priority: "High" },
  { id: "DL-2", title: "Horizon Europe: Digital Twins", date: "5 Days", priority: "Medium" },
  { id: "DL-3", title: "DOE Advanced Energy Storage", date: "2 Weeks", priority: "Low" }
];

export const recommendedOpportunities = [
  { id: "RO-1", title: "Global Climate Tech Fund", match: "98%", amount: "$2.5M", deadline: "Oct 15, 2026" },
  { id: "RO-2", title: "Advanced Computing Initiative", match: "94%", amount: "$1.8M", deadline: "Nov 01, 2026" },
  { id: "RO-3", title: "Sustainable Materials Grant", match: "89%", amount: "$900K", deadline: "Dec 12, 2026" }
];

export const activityTimeline = [
  { id: "ACT-1", action: "Application Submitted", details: "NSF Quantum Leap Challenge", time: "2 hours ago", type: "success" },
  { id: "ACT-2", action: "Grant Bookmarked", details: "Horizon Europe: Digital Twins", time: "5 hours ago", type: "info" },
  { id: "ACT-3", action: "Status Update", details: "AI-Driven Drug Discovery moved to Review", time: "1 day ago", type: "warning" },
  { id: "ACT-4", action: "Report Approved", details: "Q3 Financials for Solid State Batteries", time: "2 days ago", type: "success" }
];

export const innovationNews = [
  { id: "NW-1", headline: "NIH announces $500M boost for AI in Healthcare", date: "Today" },
  { id: "NW-2", headline: "European Commission finalizes Horizon 2027 framework", date: "Yesterday" },
  { id: "NW-3", headline: "New compliance rules for DOE energy grants", date: "Jul 10" }
];

export const fundingDistribution = [
  { category: "Healthcare", value: 35 },
  { category: "Energy", value: 25 },
  { category: "Quantum Tech", value: 20 },
  { category: "Materials", value: 15 },
  { category: "Other", value: 5 }
];

export const explorerGrants = [
  {
    id: "EXP-001",
    title: "Global Climate Tech Innovation Fund",
    organization: "Department of Energy (DOE)",
    amount: "$2,500,000",
    deadline: "Oct 15, 2026",
    eligibility: "Academic Institutions, Non-profits",
    country: "United States",
    domain: "Energy",
    matchScore: 98
  },
  {
    id: "EXP-002",
    title: "Advanced Quantum Computing Initiative",
    organization: "National Science Foundation (NSF)",
    amount: "$1,800,000",
    deadline: "Nov 01, 2026",
    eligibility: "Universities, Research Labs",
    country: "United States",
    domain: "Quantum Tech",
    matchScore: 94
  },
  {
    id: "EXP-003",
    title: "Horizon Europe: Digital Twins in Healthcare",
    organization: "European Commission",
    amount: "€3,000,000",
    deadline: "Dec 12, 2026",
    eligibility: "EU based Academic Institutions",
    country: "European Union",
    domain: "Healthcare",
    matchScore: 89
  },
  {
    id: "EXP-004",
    title: "Sustainable Materials Research Grant",
    organization: "Global Green Fund",
    amount: "$900,000",
    deadline: "Sep 30, 2026",
    eligibility: "All researchers",
    country: "Global",
    domain: "Materials",
    matchScore: 85
  },
  {
    id: "EXP-005",
    title: "AI in Drug Discovery Seed Funding",
    organization: "NIH",
    amount: "$500,000",
    deadline: "Oct 20, 2026",
    eligibility: "Startups, Academic Institutions",
    country: "United States",
    domain: "Healthcare",
    matchScore: 78
  },
  {
    id: "EXP-006",
    title: "Next-Gen Solid State Battery Pilot",
    organization: "ARPA-E",
    amount: "$1,200,000",
    deadline: "Nov 15, 2026",
    eligibility: "Research Labs, For-profit companies",
    country: "United States",
    domain: "Energy",
    matchScore: 72
  }
];

export const aiRecommendations = [
  {
    id: "AI-001",
    title: "Global Climate Tech Innovation Fund",
    organization: "Department of Energy (DOE)",
    reason: "Based on your recent publications in 'Quantum Modeling' and specified budget, this grant aligns perfectly with your focus on climate tech.",
    eligibility: "Academic Institutions, Non-profits",
    deadline: "Oct 15, 2026",
    amount: "$2,500,000",
    confidence: 98
  },
  {
    id: "AI-002",
    title: "Advanced Quantum Computing Initiative",
    organization: "National Science Foundation (NSF)",
    reason: "Your background in solid-state physics meets the stringent primary investigator requirements for this NSF track.",
    eligibility: "Universities, Research Labs",
    deadline: "Nov 01, 2026",
    amount: "$1,800,000",
    confidence: 92
  },
  {
    id: "AI-003",
    title: "Horizon Europe: Digital Twins",
    organization: "European Commission",
    reason: "Though based in the EU, this grant explicitly allows for international US-based partnerships in quantum simulation which matches your profile.",
    eligibility: "EU based Academic Institutions (Intl Partners allowed)",
    deadline: "Dec 12, 2026",
    amount: "€3,000,000",
    confidence: 85
  }
];
