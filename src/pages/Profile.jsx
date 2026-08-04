import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Award, BookOpen, Briefcase, GraduationCap, FileText, Bookmark, 
  Send, ShieldCheck, Edit3, ExternalLink, Mail, MapPin, Globe, 
  Copy, Check, Search, Download, Share2, Sparkles, TrendingUp,
  DollarSign, CheckCircle2, ChevronRight, Hash, Layers, Code, Cpu, Plus
} from 'lucide-react';

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

import { DashboardLayout } from '../templates/DashboardLayout';
import { Card } from '../components/atoms/Card';
import { Button } from '../components/atoms/Button';
import { Badge } from '../components/atoms/Badge';
import { initialProfileData } from '../data/profileData';
import { EditProfileModal } from '../components/organisms/EditProfileModal';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Profile() {
  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [activeTabSection, setActiveTabSection] = useState('profile');
  const [pubFilter, setPubFilter] = useState('All');
  const [pubSearch, setPubSearch] = useState('');
  const [copiedBibtexId, setCopiedBibtexId] = useState(null);
  const [copiedOrcid, setCopiedOrcid] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');

  const { personalInfo, researchInterests, skills, education, experience, publications, savedGrants, applications, certificates } = profileData;

  const scrollToSection = (sectionId) => {
    setActiveTabSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyBibtex = (id, bibtex) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedBibtexId(id);
    setTimeout(() => setCopiedBibtexId(null), 2000);
  };

  const handleCopyOrcid = () => {
    navigator.clipboard.writeText(personalInfo.orcid);
    setCopiedOrcid(true);
    setTimeout(() => setCopiedOrcid(false), 2000);
  };

  const filteredPublications = publications.filter(pub => {
    const matchesFilter = pubFilter === 'All' || pub.type === pubFilter;
    const matchesSearch = pub.title.toLowerCase().includes(pubSearch.toLowerCase()) ||
                          pub.authors.toLowerCase().includes(pubSearch.toLowerCase()) ||
                          pub.journal.toLowerCase().includes(pubSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const sectionsNav = [
    { id: 'profile-overview', label: '1. Profile', icon: User },
    { id: 'research-interests', label: '2. Research Interests', icon: BookOpen },
    { id: 'skills', label: '3. Skills', icon: Cpu },
    { id: 'education', label: '4. Education', icon: GraduationCap },
    { id: 'experience', label: '5. Experience', icon: Briefcase },
    { id: 'publications', label: '6. Publications', icon: FileText },
    { id: 'saved-grants', label: '7. Saved Grants', icon: Bookmark },
    { id: 'applications', label: '8. Applications', icon: Send },
    { id: 'certificates', label: '9. Certificates', icon: ShieldCheck },
    { id: 'edit-profile-section', label: '10. Edit Profile', icon: Edit3 }
  ];

  return (
    <DashboardLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-8 pb-16"
      >
        {/* Sticky Quick Section Navigation Bar */}
        <div className="sticky top-0 z-30 -mx-6 px-6 py-3 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 scrollbar-hide overflow-x-auto flex items-center gap-2">
          {sectionsNav.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeTabSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 ring-1 ring-blue-400'
                    : 'bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Icon size={14} />
                {sec.label}
              </button>
            );
          })}
        </div>

        {/* SECTION 1: PROFILE OVERVIEW & HERO BANNER */}
        <section id="profile-overview" className="scroll-mt-20">
          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 glass">
            {/* Cover Image Background */}
            <div className="h-48 sm:h-64 w-full relative overflow-hidden">
              <img
                src={personalInfo.coverImage}
                alt="Cover"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              {/* Top Quick Actions Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsEditModalOpen(true)}
                  className="bg-slate-950/60 border-slate-700 backdrop-blur-md text-white text-xs hover:bg-slate-800"
                >
                  <Edit3 size={14} className="mr-1.5" />
                  Edit Profile
                </Button>
                <Button
                  variant="outline"
                  onClick={() => alert("Profile link copied to clipboard!")}
                  className="bg-slate-950/60 border-slate-700 backdrop-blur-md text-white text-xs hover:bg-slate-800"
                >
                  <Share2 size={14} className="mr-1.5" />
                  Share
                </Button>
              </div>
            </div>

            {/* Profile Info Row */}
            <div className="relative px-6 sm:px-8 pb-8 -mt-16 sm:-mt-20">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                
                {/* Avatar & Main Details */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
                  <div className="relative group">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="h-28 w-28 sm:h-36 sm:w-36 rounded-2xl object-cover ring-4 ring-slate-950 shadow-2xl bg-slate-800"
                    />
                    <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-slate-950 animate-pulse"></div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{personalInfo.name}</h1>
                      <Badge variant="primary" className="bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        <Sparkles size={12} className="mr-1" />
                        Verified PI
                      </Badge>
                    </div>
                    <p className="text-sm font-medium text-slate-300">{personalInfo.title}</p>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5">
                      <GraduationCap size={14} className="text-blue-400" />
                      {personalInfo.department} • {personalInfo.institution}
                    </p>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5">
                      <MapPin size={14} className="text-slate-500" />
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                {/* External Academic Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleCopyOrcid}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-xs font-medium text-emerald-300 hover:bg-emerald-900/50 transition-colors"
                  >
                    <span className="font-bold text-emerald-400">iD</span>
                    <span>{copiedOrcid ? "Copied!" : personalInfo.orcid}</span>
                    {copiedOrcid ? <Check size={12} /> : <Copy size={12} />}
                  </button>

                  <a
                    href={personalInfo.googleScholar}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors"
                  >
                    <BookOpen size={14} className="text-blue-400" />
                    Google Scholar
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors"
                  >
                    <GithubIcon size={16} />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors"
                  >
                    <LinkedinIcon size={16} />
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>

              {/* Bio Summary */}
              <div className="mt-6 rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4 sm:p-5">
                <p className="text-sm leading-relaxed text-slate-300">{personalInfo.bio}</p>
              </div>

              {/* Metrics Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3.5 text-center">
                  <p className="text-xs text-slate-400 font-medium">Total Citations</p>
                  <p className="text-xl font-bold text-white mt-1">{personalInfo.metrics.citations}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3.5 text-center">
                  <p className="text-xs text-slate-400 font-medium">h-Index</p>
                  <p className="text-xl font-bold text-blue-400 mt-1">{personalInfo.metrics.hIndex}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3.5 text-center">
                  <p className="text-xs text-slate-400 font-medium">i10-Index</p>
                  <p className="text-xl font-bold text-indigo-400 mt-1">{personalInfo.metrics.i10Index}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3.5 text-center">
                  <p className="text-xs text-slate-400 font-medium">Total Funding</p>
                  <p className="text-xl font-bold text-emerald-400 mt-1">{personalInfo.metrics.totalFunding}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3.5 text-center">
                  <p className="text-xs text-slate-400 font-medium">Publications</p>
                  <p className="text-xl font-bold text-amber-400 mt-1">{personalInfo.metrics.publicationsCount}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3.5 text-center">
                  <p className="text-xs text-slate-400 font-medium">Patents</p>
                  <p className="text-xl font-bold text-purple-400 mt-1">{personalInfo.metrics.patentsCount}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: RESEARCH INTERESTS */}
        <section id="research-interests" className="scroll-mt-20">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/20">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">2. Research Interests & Focus Areas</h2>
                  <p className="text-xs text-slate-400">Core domains of active research, methodology, and theoretical specialization</p>
                </div>
              </div>
              <Button variant="outline" onClick={() => setIsEditModalOpen(true)} className="text-xs">
                <Plus size={14} className="mr-1" /> Add Interest
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {researchInterests.map((interest) => (
                <Card key={interest.id} hover className="border-slate-800/80 bg-slate-900/40 p-5 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {interest.category}
                      </span>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                        interest.focus === 'Primary Focus' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {interest.focus}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mt-3">{interest.title}</h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{interest.description}</p>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Proficiency Level</span>
                    <span className="font-semibold text-emerald-400">{interest.level}</span>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 3: SKILLS */}
        <section id="skills" className="scroll-mt-20">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/20">
                  <Cpu size={18} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">3. Technical & Experimental Skills</h2>
                  <p className="text-xs text-slate-400">Software frameworks, laboratory methodologies, and grant leadership competencies</p>
                </div>
              </div>

              {/* Skill Filter Buttons */}
              <div className="flex items-center gap-1.5 bg-slate-900/60 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveSkillCategory('all')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    activeSkillCategory === 'all' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  All Skills
                </button>
                <button
                  onClick={() => setActiveSkillCategory('technical')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    activeSkillCategory === 'technical' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Technical
                </button>
                <button
                  onClick={() => setActiveSkillCategory('experimental')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    activeSkillCategory === 'experimental' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Experimental
                </button>
                <button
                  onClick={() => setActiveSkillCategory('grant')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    activeSkillCategory === 'grant' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Leadership & Grants
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Technical Skills */}
              {(activeSkillCategory === 'all' || activeSkillCategory === 'technical') && (
                <Card className="border-slate-800 bg-slate-900/40 p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Code size={16} className="text-blue-400" />
                      Quantum & Computational
                    </h3>
                    <span className="text-xs text-slate-500">6 Skills</span>
                  </div>
                  <div className="space-y-3.5">
                    {skills.technical.map((sk) => (
                      <div key={sk.name} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-slate-200">{sk.name}</span>
                          <span className="text-slate-400 font-mono">{sk.proficiency}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                            style={{ width: `${sk.proficiency}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-500">
                          <span>{sk.category}</span>
                          <span>{sk.endorsements} peer endorsements</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Experimental Skills */}
              {(activeSkillCategory === 'all' || activeSkillCategory === 'experimental') && (
                <Card className="border-slate-800 bg-slate-900/40 p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Layers size={16} className="text-emerald-400" />
                      Experimental & Lab
                    </h3>
                    <span className="text-xs text-slate-500">3 Skills</span>
                  </div>
                  <div className="space-y-3.5">
                    {skills.experimental.map((sk) => (
                      <div key={sk.name} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-slate-200">{sk.name}</span>
                          <span className="text-slate-400 font-mono">{sk.proficiency}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                            style={{ width: `${sk.proficiency}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-500">
                          <span>{sk.category}</span>
                          <span>{sk.endorsements} peer endorsements</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Grant Leadership Skills */}
              {(activeSkillCategory === 'all' || activeSkillCategory === 'grant') && (
                <Card className="border-slate-800 bg-slate-900/40 p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Award size={16} className="text-amber-400" />
                      Grant Writing & Leadership
                    </h3>
                    <span className="text-xs text-slate-500">4 Skills</span>
                  </div>
                  <div className="space-y-3.5">
                    {skills.grantAndLeadership.map((sk) => (
                      <div key={sk.name} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-slate-200">{sk.name}</span>
                          <span className="text-slate-400 font-mono">{sk.proficiency}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                            style={{ width: `${sk.proficiency}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-500">
                          <span>{sk.category}</span>
                          <span>{sk.endorsements} peer endorsements</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </motion.div>
        </section>

        {/* SECTION 4: EDUCATION */}
        <section id="education" className="scroll-mt-20">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/20">
                <GraduationCap size={18} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">4. Education & Academic Background</h2>
                <p className="text-xs text-slate-400">Degrees, institutional honors, dissertations, and academic advisors</p>
              </div>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="relative group">
                  {/* Timeline bullet */}
                  <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-slate-950"></div>
                  
                  <Card className="border-slate-800 bg-slate-900/40 p-5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-base font-bold text-white">{edu.degree}</h3>
                        <p className="text-xs font-medium text-indigo-400 mt-0.5">{edu.institution} • {edu.location}</p>
                      </div>
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 self-start sm:self-auto">
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-xs text-slate-300 space-y-1 pt-2 border-t border-slate-800/60">
                      <p><span className="font-semibold text-slate-400">Thesis / Dissertation:</span> "{edu.thesis}"</p>
                      <p><span className="font-semibold text-slate-400">Advisor:</span> {edu.advisor}</p>
                      <p><span className="font-semibold text-amber-400">Honors:</span> {edu.honors}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 5: EXPERIENCE */}
        <section id="experience" className="scroll-mt-20">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/20">
                <Briefcase size={18} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">5. Professional & Academic Experience</h2>
                <p className="text-xs text-slate-400">Career timeline across academia, industry labs, and postdoctoral appointments</p>
              </div>
            </div>

            <div className="space-y-4">
              {experience.map((exp) => (
                <Card key={exp.id} className="border-slate-800 bg-slate-900/40 p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        <Badge variant="primary" className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {exp.type}
                        </Badge>
                      </div>
                      <p className="text-sm font-semibold text-emerald-400 mt-1">{exp.organization} • {exp.location}</p>
                    </div>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{exp.description}</p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Accomplishments</h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <ChevronRight size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 6: PUBLICATIONS */}
        <section id="publications" className="scroll-mt-20">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/20">
                  <FileText size={18} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">6. Publications & Intellectual Property</h2>
                  <p className="text-xs text-slate-400">Peer-reviewed journal papers, conference proceedings, and patents ({publications.length} Total)</p>
                </div>
              </div>

              {/* Search & Filters */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-2.5 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search publications..."
                    value={pubSearch}
                    onChange={(e) => setPubSearch(e.target.value)}
                    className="rounded-xl border border-slate-800 bg-slate-900/80 pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800">
                  {['All', 'Journal', 'Conference', 'Patent'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setPubFilter(t)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors ${
                        pubFilter === t ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {filteredPublications.map((pub) => (
                <Card key={pub.id} className="border-slate-800 bg-slate-900/40 p-5 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          pub.type === 'Journal' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                          pub.type === 'Patent' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        }`}>
                          {pub.type}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">{pub.journal} ({pub.year})</span>
                      </div>
                      <h3 className="text-base font-bold text-white hover:text-blue-400 transition-colors">{pub.title}</h3>
                      <p className="text-xs text-slate-300">{pub.authors}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-start">
                      <div className="text-right px-3 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                        <p className="text-[10px] text-slate-400 font-medium">Citations</p>
                        <p className="text-sm font-bold text-amber-400">{pub.citations}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-3 text-slate-400">
                      <span>DOI: <code className="text-slate-300 font-mono">{pub.doi}</code></span>
                      {pub.impactFactor !== 'N/A' && <span>Impact Factor: <strong className="text-emerald-400">{pub.impactFactor}</strong></span>}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                      >
                        {copiedBibtexId === pub.id ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                        <span>{copiedBibtexId === pub.id ? 'BibTeX Copied!' : 'Copy BibTeX'}</span>
                      </button>

                      <a
                        href={pub.doi.startsWith('10') ? `https://doi.org/${pub.doi}` : '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-colors border border-blue-500/20"
                      >
                        <ExternalLink size={12} />
                        <span>View Publication</span>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 7: SAVED GRANTS */}
        <section id="saved-grants" className="scroll-mt-20">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/20">
                <Bookmark size={18} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">7. Saved Grants & Bookmarked Opportunities</h2>
                <p className="text-xs text-slate-400">Tracked funding calls matched against Sarah's research profile</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {savedGrants.map((grant) => (
                <Card key={grant.id} hover className="border-slate-800 bg-slate-900/40 p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {grant.agencyLogo}
                      </span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        {grant.matchScore}% Match
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white mt-3 line-clamp-2">{grant.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{grant.agency}</p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-800/60">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Max Award:</span>
                      <span className="font-bold text-white">{grant.amount}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Deadline:</span>
                      <span className="font-semibold text-amber-400">{grant.deadline}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Status:</span>
                      <span className="text-blue-400">{grant.status}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full text-xs justify-center bg-slate-900/80">
                    Open Proposal Builder
                  </Button>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 8: APPLICATIONS */}
        <section id="applications" className="scroll-mt-20">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/20">
                <Send size={18} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">8. Grant Applications & Tracked Proposals</h2>
                <p className="text-xs text-slate-400">Active and past funding applications submitted by Dr. Sarah Chen</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applications.map((app) => (
                <Card key={app.id} className="border-slate-800 bg-slate-900/40 p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        app.status.includes('Funded') || app.status.includes('Approved') ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                        app.status.includes('Review') ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}>
                        {app.status}
                      </span>
                      <h3 className="text-base font-bold text-white mt-2">{app.title}</h3>
                      <p className="text-xs text-slate-400">{app.agency} • Role: {app.role}</p>
                    </div>

                    <div className="text-right shrink-0">
                      <p className="text-xs text-slate-400">Requested</p>
                      <p className="text-base font-bold text-white">{app.amountRequested}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Application Progress</span>
                      <span className="font-mono text-cyan-400">{app.progress}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        style={{ width: `${app.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-slate-800/60">
                    <span>Submitted: {app.submissionDate}</span>
                    <span>Ref: {app.grantNumber}</span>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 9: CERTIFICATES */}
        <section id="certificates" className="scroll-mt-20">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600/20 text-teal-400 border border-teal-500/20">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">9. Verified Certifications & Credentials</h2>
                <p className="text-xs text-slate-400">Institutional certifications, professional designations, and compliance badges</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificates.map((cert) => (
                <Card key={cert.id} className="border-slate-800 bg-slate-900/40 p-5 flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${cert.badgeColor} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                    <ShieldCheck size={24} />
                  </div>

                  <div className="space-y-2 flex-1">
                    <div>
                      <h3 className="text-sm font-bold text-white">{cert.title}</h3>
                      <p className="text-xs text-slate-400">{cert.issuer} • Issued {cert.issueDate}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((s) => (
                        <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-800/60">
                      <span className="font-mono text-[10px] text-slate-500">ID: {cert.credentialId}</span>
                      <a href={cert.verificationUrl} className="text-teal-400 hover:underline flex items-center gap-1">
                        Verify <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 10: EDIT PROFILE SECTION CARD */}
        <section id="edit-profile-section" className="scroll-mt-20">
          <motion.div variants={itemVariants}>
            <Card className="border-blue-500/30 bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-950 p-8 glass flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">
                  <Edit3 size={14} /> Section 10: Profile Settings & Controls
                </div>
                <h3 className="text-2xl font-bold text-white">Need to update your researcher credentials or bio?</h3>
                <p className="text-sm text-slate-300 max-w-xl">
                  Manage personal information, ORCID link, Google Scholar handles, research interest tags, and communication settings in real-time.
                </p>
              </div>

              <Button
                variant="primary"
                onClick={() => setIsEditModalOpen(true)}
                className="px-6 py-3 text-sm font-semibold shrink-0 shadow-lg shadow-blue-600/30"
              >
                <Edit3 size={16} className="mr-2" />
                Launch Edit Profile Modal
              </Button>
            </Card>
          </motion.div>
        </section>

        {/* Live Edit Profile Modal */}
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          profileData={profileData}
          onSave={(newData) => setProfileData(newData)}
        />
      </motion.div>
    </DashboardLayout>
  );
}
