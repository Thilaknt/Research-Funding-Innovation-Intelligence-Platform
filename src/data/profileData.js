export const initialProfileData = {
  // 1. Profile Overview & Header
  personalInfo: {
    name: "Dr. Sarah Chen",
    title: "Principal Investigator & Associate Professor",
    department: "Department of Physics & Quantum Intelligence Lab",
    institution: "Massachusetts Institute of Technology (MIT)",
    location: "Cambridge, MA, USA",
    email: "sarah.chen@mit.edu",
    phone: "+1 (617) 253-1000",
    website: "https://quantum.mit.edu/chen-lab",
    orcid: "0000-0002-1825-0097",
    googleScholar: "https://scholar.google.com/citations?user=sarahchen",
    linkedin: "https://linkedin.com/in/drsarahchen",
    github: "https://github.com/sarahchen-quantum",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1600&q=80",
    bio: "Dr. Sarah Chen leads the Quantum Intelligence Laboratory at MIT. Her pioneering research bridges fault-tolerant quantum error correction, NISQ algorithms, and machine learning applications in molecular dynamics and climate prediction models. Recipient of the NSF CAREER Award and IEEE Quantum Pioneer Medal.",
    metrics: {
      citations: "4,280",
      hIndex: "28",
      i10Index: "45",
      totalFunding: "$5.8M",
      activeGrantsCount: 4,
      publicationsCount: 42,
      patentsCount: 6
    }
  },

  // 2. Research Interests
  researchInterests: [
    { id: "ri-1", title: "Quantum Error Correction", category: "Quantum Physics", level: "Expert", description: "Surface codes, topological qubit architectures, and fault-tolerant logical gate protocols.", focus: "Primary Focus" },
    { id: "ri-2", title: "Variational Quantum Algorithms", category: "Quantum Computing", level: "Expert", description: "VQE and QAOA optimization for noisy intermediate-scale quantum devices.", focus: "Primary Focus" },
    { id: "ri-3", title: "AI-Driven Molecular Simulation", category: "Quantum ML", level: "Advanced", description: "Combining neural network ansatzes with quantum chemistry Hamiltonians.", focus: "Active Research" },
    { id: "ri-4", title: "Climate Modeling AI", category: "Environmental Tech", level: "Advanced", description: "High-resolution atmospheric fluid dynamics powered by hybrid quantum-classical solvers.", focus: "Active Research" },
    { id: "ri-5", title: "Nanofabrication & Cryogenics", category: "Experimental Hardware", level: "Intermediate", description: "Dilution refrigerator measurement setups and superconducting transmon qubit fabrication.", focus: "Supporting Field" },
    { id: "ri-6", title: "Quantum Information Theory", category: "Theoretical Physics", level: "Expert", description: "Entanglement entropy measures, tensor networks, and quantum channel capacities.", focus: "Foundation" }
  ],

  // 3. Skills
  skills: {
    technical: [
      { name: "Qiskit / IBM Quantum SDK", proficiency: 95, category: "Quantum Software", endorsements: 48 },
      { name: "PyTorch & Quantum ML", proficiency: 90, category: "AI Frameworks", endorsements: 42 },
      { name: "Python / C++ High Performance", proficiency: 92, category: "Languages", endorsements: 56 },
      { name: "Cirq & PennyLane", proficiency: 85, category: "Quantum Software", endorsements: 31 },
      { name: "Superconducting Qubit Modeling", proficiency: 88, category: "Physics Simulation", endorsements: 27 },
      { name: "High-Performance Cluster (HPC)", proficiency: 84, category: "Infrastructure", endorsements: 23 }
    ],
    experimental: [
      { name: "Dilution Refrigerator Operation (mK)", proficiency: 82, category: "Hardware", endorsements: 19 },
      { name: "Microwave Pulse Shaping & Calibration", proficiency: 90, category: "Quantum Control", endorsements: 35 },
      { name: "Spectrometry & Noise Analysis", proficiency: 86, category: "Diagnostics", endorsements: 22 }
    ],
    grantAndLeadership: [
      { name: "NSF / DOE Proposal Development", proficiency: 98, category: "Grant Writing", endorsements: 64 },
      { name: "Multi-Institutional Team Leadership", proficiency: 92, category: "Management", endorsements: 51 },
      { name: "Budget Forecasting & Compliance", proficiency: 88, category: "Finance", endorsements: 38 },
      { name: "Technology Transfer & Patent Filing", proficiency: 85, category: "IP Management", endorsements: 29 }
    ]
  },

  // 4. Education
  education: [
    {
      id: "edu-1",
      degree: "Ph.D. in Physics & Quantum Applied Sciences",
      institution: "Massachusetts Institute of Technology (MIT)",
      period: "2015 - 2019",
      location: "Cambridge, MA",
      thesis: "Fault-Tolerant Quantum Error Correction Protocols for Superconducting Transmons",
      advisor: "Prof. Alan V. Hargrove",
      honors: "Summa Cum Laude, MIT Outstanding Dissertation Award in Physical Sciences"
    },
    {
      id: "edu-2",
      degree: "M.S. in Electrical Engineering & Computer Science",
      institution: "Stanford University",
      period: "2013 - 2015",
      location: "Stanford, CA",
      thesis: "Optimizing Variational Eigensolvers for Chemical Bond Dissociation",
      advisor: "Prof. Elena Rostova",
      honors: "Stanford Graduate Fellowship in Science & Engineering"
    },
    {
      id: "edu-3",
      degree: "B.S. in Physics & Applied Mathematics",
      institution: "University of California, Berkeley",
      period: "2009 - 2013",
      location: "Berkeley, CA",
      thesis: "Quantum State Tomography on Optical Cavity Systems",
      advisor: "Prof. Marcus Thorne",
      honors: "Regents' Scholar, Departmental Honors in Physics"
    }
  ],

  // 5. Experience
  experience: [
    {
      id: "exp-1",
      role: "Principal Investigator & Associate Professor",
      organization: "MIT Quantum Intelligence Laboratory",
      period: "2022 - Present",
      location: "Cambridge, MA",
      type: "Academic",
      description: "Directing a 14-member interdisciplinary team of postdocs and graduate students. Secured over $4.5M in competitive research funding from NSF, DOE, and DARPA.",
      achievements: [
        "Pioneered a new fault-tolerant logical qubit protocol reducing physical qubit overhead by 34%.",
        "Established industrial partnerships with IBM Quantum and Google Quantum AI for hardware co-design.",
        "Mentored 6 Ph.D. students and 4 Postdoctoral fellows to successful academic/industry placements."
      ]
    },
    {
      id: "exp-2",
      role: "Senior Research Scientist",
      organization: "IBM Quantum Systems & Research Lab",
      period: "2019 - 2022",
      location: "Yorktown Heights, NY",
      type: "Industry Research",
      description: "Led quantum algorithm benchmarking for 127-qubit Eagle and 433-qubit Osprey processor architectures.",
      achievements: [
        "Co-developed the Qiskit Runtime pulse control framework used by over 50,000 global researchers.",
        "Granted 4 US Patents on error mitigation techniques in NISQ quantum computing.",
        "Co-authored 8 high-impact publications in Nature Physics and Physical Review Letters."
      ]
    },
    {
      id: "exp-3",
      role: "Postdoctoral Research Fellow",
      organization: "Harvard Center for Quantum Hardware",
      period: "2019 - 2020",
      location: "Cambridge, MA",
      type: "Postdoc",
      description: "Investigated neutral atom quantum processors and Rydberg state entanglement control.",
      achievements: [
        "Demonstrated 51-atom quantum entanglement register fidelity exceeding 99.2%.",
        "Awarded Harvard Quantum Initiative Postdoctoral Fellowship."
      ]
    }
  ],

  // 6. Publications
  publications: [
    {
      id: "pub-1",
      title: "Real-Time Quantum Error Suppression in Superconducting Transmon Circuits using Neural Pulse Control",
      authors: "Sarah Chen, Marcus Thorne, Elena Rostova, Alan V. Hargrove",
      journal: "Nature Quantum Information",
      year: 2025,
      type: "Journal",
      citations: 142,
      doi: "10.1038/s41534-025-00892-x",
      pdfUrl: "#",
      impactFactor: "15.4",
      bibtex: `@article{chen2025realtime,\n  title={Real-Time Quantum Error Suppression in Superconducting Transmon Circuits},\n  author={Chen, Sarah and Thorne, Marcus and Rostova, Elena},\n  journal={Nature Quantum Information},\n  volume={11},\n  pages={45--58},\n  year={2025}\n}`
    },
    {
      id: "pub-2",
      title: "Hybrid Variational Solvers for Atmospheric Fluid Dynamics: Scalability on 100+ Qubit Systems",
      authors: "Sarah Chen, David K. Vance, Hiroshi Tanaka",
      journal: "Physical Review Letters",
      year: 2024,
      type: "Journal",
      citations: 98,
      doi: "10.1103/PhysRevLett.132.140401",
      pdfUrl: "#",
      impactFactor: "9.1",
      bibtex: `@article{chen2024hybrid,\n  title={Hybrid Variational Solvers for Atmospheric Fluid Dynamics},\n  author={Chen, Sarah and Vance, David K and Tanaka, Hiroshi},\n  journal={Physical Review Letters},\n  volume={132},\n  year={2024}\n}`
    },
    {
      id: "pub-3",
      title: "Fault-Tolerant Surface Code Layouts with Reduced Inter-Substrate Crosstalk",
      authors: "Sarah Chen, James L. Miller",
      journal: "IEEE Transactions on Quantum Engineering",
      year: 2024,
      type: "Conference",
      citations: 64,
      doi: "10.1109/TQE.2024.3382109",
      pdfUrl: "#",
      impactFactor: "6.8",
      bibtex: `@inproceedings{chen2024surface,\n  title={Fault-Tolerant Surface Code Layouts with Reduced Inter-Substrate Crosstalk},\n  author={Chen, Sarah and Miller, James L},\n  booktitle={IEEE International Conference on Quantum Computing},\n  year={2024}\n}`
    },
    {
      id: "pub-4",
      title: "Quantum Chemistry Ansatz Compression via Tensor Network Decomposition",
      authors: "Elena Rodriguez, Sarah Chen, Andrew Kim",
      journal: "Journal of Chemical Theory and Computation",
      year: 2023,
      type: "Journal",
      citations: 215,
      doi: "10.1021/acs.jctc.3c00412",
      pdfUrl: "#",
      impactFactor: "5.8",
      bibtex: `@article{rodriguez2023ansatz,\n  title={Quantum Chemistry Ansatz Compression via Tensor Network Decomposition},\n  author={Rodriguez, Elena and Chen, Sarah and Kim, Andrew},\n  journal={J. Chem. Theory Comput.},\n  year={2023}\n}`
    },
    {
      id: "pub-5",
      title: "Adaptive Pulse Generation Method for Transmon Qubit Logic Operations (US Patent 11,842,910)",
      authors: "Sarah Chen, IBM Corporation",
      journal: "US Patent Office",
      year: 2023,
      type: "Patent",
      citations: 18,
      doi: "US11842910B2",
      pdfUrl: "#",
      impactFactor: "N/A",
      bibtex: `@patent{chen2023adaptive,\n  title={Adaptive Pulse Generation Method for Transmon Qubit Logic Operations},\n  author={Chen, Sarah},\n  year={2023},\n  number={US11842910B2}\n}`
    }
  ],

  // 7. Saved Grants
  savedGrants: [
    {
      id: "sg-1",
      title: "NSF Quantum Leap Challenge Institutes: Co-Design of Fault-Tolerant Architectures",
      agency: "National Science Foundation (NSF)",
      agencyLogo: "NSF",
      amount: "$2,500,000",
      deadline: "Oct 15, 2026",
      matchScore: 98,
      category: "Quantum Tech",
      savedDate: "Aug 01, 2026",
      status: "Application Draft 60%"
    },
    {
      id: "sg-2",
      title: "DOE Office of Science: Advanced Quantum Hardware for Climate Dynamics",
      agency: "Department of Energy (DOE)",
      agencyLogo: "DOE",
      amount: "$1,800,000",
      deadline: "Nov 01, 2026",
      matchScore: 94,
      category: "Energy & Climate",
      savedDate: "Jul 28, 2026",
      status: "Bookmarked"
    },
    {
      id: "sg-3",
      title: "Horizon Europe: AI and Hybrid Quantum Solvers for Sustainable Materials",
      agency: "European Commission",
      agencyLogo: "EU",
      amount: "€3,000,000",
      deadline: "Dec 12, 2026",
      matchScore: 89,
      category: "Materials",
      savedDate: "Jul 20, 2026",
      status: "Partner Search"
    }
  ],

  // 8. Applications
  applications: [
    {
      id: "app-1",
      title: "NSF CAREER: Real-Time Error-Suppressed Superconducting Qubit Registers",
      agency: "National Science Foundation",
      amountRequested: "$1,200,000",
      role: "Principal Investigator",
      status: "Active - Funded",
      progress: 100,
      submissionDate: "Jan 14, 2025",
      period: "2025 - 2030",
      grantNumber: "NSF-PHY-249012"
    },
    {
      id: "app-2",
      title: "DARPA ONISQ Phase II: Fault-Tolerant Quantum Simulation Benchmarks",
      agency: "DARPA",
      amountRequested: "$1,750,000",
      role: "Lead Co-PI",
      status: "Under Review",
      progress: 85,
      submissionDate: "May 10, 2026",
      period: "2026 - 2029",
      grantNumber: "DARPA-HR0011-26-S-004"
    },
    {
      id: "app-3",
      title: "MIT-IBM Watson AI Lab Grant: Quantum Neural Network Pruning",
      agency: "MIT-IBM Watson Lab",
      amountRequested: "$450,000",
      role: "Principal Investigator",
      status: "Approved",
      progress: 100,
      submissionDate: "Mar 02, 2026",
      period: "2026 - 2027",
      grantNumber: "IBM-MIT-2026-09"
    },
    {
      id: "app-4",
      title: "DOE Microelectronics Research: Low-Loss Cryogenic Wiring Arrays",
      agency: "Department of Energy",
      amountRequested: "$890,000",
      role: "Co-PI",
      status: "Draft In Progress",
      progress: 45,
      submissionDate: "Target: Sep 2026",
      period: "2027 - 2029",
      grantNumber: "Pending"
    }
  ],

  // 9. Certificates
  certificates: [
    {
      id: "cert-1",
      title: "Certified Research Project Manager (PMP - Scientific)",
      issuer: "Project Management Institute (PMI)",
      issueDate: "Mar 2023",
      credentialId: "PMI-SCI-8849201",
      badgeColor: "from-blue-500 to-indigo-600",
      verificationUrl: "#",
      skills: ["Grant Management", "Risk Assessment", "Budget Oversight"]
    },
    {
      id: "cert-2",
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "Nov 2024",
      credentialId: "AWS-ML-SPEC-49021",
      badgeColor: "from-amber-500 to-orange-600",
      verificationUrl: "#",
      skills: ["HPC Clusters", "SageMaker", "Model Deployment"]
    },
    {
      id: "cert-3",
      title: "NSF Responsible Conduct of Research (RCR) Master Credential",
      issuer: "National Science Foundation & CITI Program",
      issueDate: "Jan 2025",
      credentialId: "CITI-RCR-992104",
      badgeColor: "from-emerald-500 to-teal-600",
      verificationUrl: "#",
      skills: ["Research Ethics", "Data Governance", "Mentorship Standards"]
    },
    {
      id: "cert-4",
      title: "IEEE Senior Member Credential",
      issuer: "Institute of Electrical and Electronics Engineers",
      issueDate: "Jun 2023",
      credentialId: "IEEE-SM-40192841",
      badgeColor: "from-cyan-500 to-blue-600",
      verificationUrl: "#",
      skills: ["Peer Review", "Conference Organizing", "IEEE Quantum"]
    }
  ]
};
