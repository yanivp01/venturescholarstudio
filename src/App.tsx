import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Rocket,
  CheckCircle,
  Users,
  BookOpen,
  Target,
  Globe,
  Heart,
  Menu,
  X,
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  MessageSquare,
  Shield,
  Mail,
  Linkedin,
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [tab, setTab] = useState<"entrepreneurs" | "students">("entrepreneurs");
  const [form, setForm] = useState({ name: "", email: "", message: "", consent: false });
  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");

  useEffect(() => {
    const handler = () => {
      const ids = ["home", "entrepreneurs", "students", "mission", "programme", "faq", "contact"];
      const y = window.scrollY + 100;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const offsetTop = (el as HTMLDivElement).offsetTop;
        const offsetHeight = (el as HTMLDivElement).offsetHeight;
        if (y >= offsetTop && y < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const goto = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 800);
  };

  const nav = [
    { label: "Home", id: "home" },
    { label: "For Entrepreneurs", id: "entrepreneurs" },
    { label: "For Students", id: "students" },
    { label: "Mission", id: "mission" },
    { label: "Programme", id: "programme" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  const faqs = [
    { q: "What is the time commitment?", a: "10–12 weeks, ~8–10 hours per week: 1 EIR session, 1 cohort lecture, plus deliverables." },
    { q: "Who can apply?", a: "Exceptional undergrad/postgrad students from any discipline with curiosity and drive. No prior business experience required." },
    { q: "Sectors?", a: "AI/ML, biotech, energy, advanced materials, robotics, quantum, and other frontier tech tied to real spinouts." },
    { q: "Remote or in person?", a: "Hybrid: weekly virtual sessions; optional in-person coworking in select cities; showcase typically in person with remote option." },
    { q: "Fees or stipends?", a: "Currently free for selected scholars; some ventures may offer project-based stipends at EIR discretion." },
    { q: "IP & confidentiality?", a: "IP remains with the venture; scholars sign standard confidentiality agreements; equity participation may be offered at EIR discretion." },
    { q: "Certificates?", a: "VSS certificate upon completion; eligible for reference letters from your EIR." },
  ];

  const isOpen = (prefix: string, i: number) => openItem === (prefix + "-" + i);

  return (
    <div className="min-h-screen bg-white text-[#1E1E1E]">
      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="relative">
            <div className="text-2xl font-serif text-[#0B1D3A] tracking-wider">
              <span className="relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#D4AF37] text-xs">⚘ ⚘</span>
                VSS
                <span className="block absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37]" />
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => goto(item.id)}
                className={
                  "text-sm font-medium transition-colors " +
                  (activeSection === item.id ? "text-[#D4AF37]" : "text-[#1E1E1E] hover:text-[#0B1D3A]")
                }
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => goto("contact")}
              className="px-4 py-2 bg-[#0B1D3A] text-white rounded-md text-sm font-medium hover:bg-opacity-90"
            >
              Apply
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen((v) => !v)}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden border-t border-gray-200">
              <div className="px-4 py-3 space-y-2">
                {nav.map((item) => (
                  <button key={item.id} onClick={() => goto(item.id)} className="block w-full text-left px-2 py-2 rounded hover:bg-[#F8F5EF]">
                    {item.label}
                  </button>
                ))}
                <button onClick={() => goto("contact")} className="w-full mt-2 px-4 py-2 bg-[#0B1D3A] text-white rounded-md text-sm font-medium">
                  Apply
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section id="home" className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-b from-[#F8F5EF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block relative">
              <div className="text-6xl lg:text-7xl font-serif text-[#0B1D3A] tracking-wider">
                <span className="relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#D4AF37] text-2xl">⚘ ⚘</span>
                  VSS
                  <span className="block absolute -bottom-2 left-0 right-0 h-1 bg-[#D4AF37]" />
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif text-[#0B1D3A] mb-6 leading-tight">
            Learn by building real ventures
            <br />
            with world-class founders.
          </h1>
          <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
            Venture Scholar Studio pairs exceptional students with Entrepreneurs‑in‑Residence working on real spinouts from premier institutions.
          </p>
          <p className="text-sm text-[#D4AF37] font-serif italic tracking-wide mb-6">Proximam Innovationem Aedificamus</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => goto("entrepreneurs")} className="px-8 py-3 bg-[#0B1D3A] text-white rounded-md font-medium hover:bg-opacity-90">
              I'm an Entrepreneur
            </button>
            <button onClick={() => goto("students")} className="px-8 py-3 bg-white text-[#0B1D3A] border-2 border-[#0B1D3A] rounded-md font-medium hover:bg-[#F8F5EF]">
              I'm a Student
            </button>
          </div>
          <div className="mt-6">
            <button onClick={() => goto("programme")} className="text-[#D4AF37] font-medium inline-flex items-center hover:gap-2 transition-all">
              Discover the Programme <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ENTREPRENEURS */}
      <section id="entrepreneurs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1D3A] mb-8 text-center">For Entrepreneurs</h2>
          <div className="prose prose-lg max-w-3xl mx-auto mb-12">
            <p className="text-center mb-8">
              Transform breakthrough research into market reality while cultivating the next generation of innovation leaders.
            </p>
            <p>
              You know the exhilaration of turning cutting‑edge technology into impact. You also know the leap from research to revenue:
              market discovery, customer insight, positioning, and go‑to‑market. VSS structures that leap while you mentor the next generation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#F8F5EF] p-6 rounded-lg">
              <Rocket className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-semibold text-[#0B1D3A] mb-3">What You'll Do</h3>
              <ul className="space-y-2">
                <li className="flex items-start"><CheckCircle className="text-[#D4AF37] mr-2 mt-1" size={16} />Lead weekly guided sessions with your Venture Scholars</li>
                <li className="flex items-start"><CheckCircle className="text-[#D4AF37] mr-2 mt-1" size={16} />Teach business & innovation concepts through real application</li>
                <li className="flex items-start"><CheckCircle className="text-[#D4AF37] mr-2 mt-1" size={16} />Assign applied work and iterate with your team</li>
                <li className="flex items-start"><CheckCircle className="text-[#D4AF37] mr-2 mt-1" size={16} />Champion concepts discovered through your venture</li>
              </ul>
            </div>
            <div className="bg-[#F8F5EF] p-6 rounded-lg">
              <Users className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-semibold text-[#0B1D3A] mb-3">Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start"><CheckCircle className="text-[#D4AF37] mr-2 mt-1" size={16} />Access top talent from leading universities</li>
                <li className="flex items-start"><CheckCircle className="text-[#D4AF37] mr-2 mt-1" size={16} />Join an elite network of entrepreneurs & mentors</li>
                <li className="flex items-start"><CheckCircle className="text-[#D4AF37] mr-2 mt-1" size={16} />Accelerate your venture through structured teaching</li>
                <li className="flex items-start"><CheckCircle className="text-[#D4AF37] mr-2 mt-1" size={16} />Shape the next generation of innovation leaders</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0B1D3A] p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to become an Entrepreneur‑in‑Residence?</h3>
            <p className="text-white/90 mb-6">Share your email to receive our EIR Terms & Programme Overview.</p>
            <form onSubmit={submit} className="max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full px-4 py-2 mb-4 rounded-md text-[#1E1E1E]"
              />
              <label className="flex items-start text-white text-sm mb-4">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                  className="mr-2 mt-1"
                />
                <span>I consent to VSS processing my data in accordance with the Privacy Policy.</span>
              </label>
              <button type="submit" className="w-full px-6 py-3 bg-[#D4AF37] text-[#0B1D3A] font-semibold rounded-md hover:bg-opacity-90">
                Get EIR Information
              </button>
              {status === "success" && <p className="text-green-400 mt-4">Success! Check your email for the EIR Terms.</p>}
            </form>
          </div>

          <div className="text-center mt-8">
            <button onClick={() => goto("students")} className="text-[#D4AF37] font-medium inline-flex items-center hover:gap-2 transition-all">
              See information for students <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* STUDENTS */}
      <section id="students" className="py-20 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1D3A] mb-8 text-center">For Students</h2>
          <div className="prose prose-lg max-w-3xl mx-auto mb-12">
            <p className="text-center mb-8">Learn from elite founders how to turn breakthrough ideas into reality in frontier sectors.</p>
            <p>
              Join a structured journey from curious student to educated innovation operator in your assigned venture domain. Work directly with
              Entrepreneurs‑in‑Residence on real deliverables that move ventures forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg text-center">
              <GraduationCap className="text-[#D4AF37] mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-[#0B1D3A] mb-1">Weekly Mentorship</h3>
              <p className="text-sm">1:1 and small‑group sessions with your EIR, working on real venture challenges.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <BookOpen className="text-[#D4AF37] mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-[#0B1D3A] mb-1">Cross‑Sector Learning</h3>
              <p className="text-sm">Weekly lectures across the entrepreneurial cohort for broad innovation exposure.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Award className="text-[#D4AF37] mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-[#0B1D3A] mb-1">Showcase & Recognition</h3>
              <p className="text-sm">Present your work at the grand showcase day and earn reference letters.</p>
            </div>
          </div>

          {/* Modules */}
          <div className="max-w-3xl mx-auto mb-12 space-y-3">
            {[
              { t: "Market Discovery & Validation", c: "Master customer development, market sizing, competitive analysis, and validation methodologies." },
              { t: "Product Development & Strategy", c: "Translate technical innovations into product roadmaps, MVPs, and GTM strategies." },
              { t: "Fundraising & Finance", c: "Pitch decks, investor relations, venture finance basics, and financial modelling." },
              { t: "Team Building & Leadership", c: "Recruiting, team dynamics, communication, and leadership in fast‑paced environments." },
              { t: "Operations & Scaling", c: "Growth metrics, scaling challenges, and execution excellence." },
            ].map((m, i) => (
              <div key={i} className="bg-white rounded-lg">
                <button
                  onClick={() => setOpenItem(isOpen("m", i) ? null : "m-" + i)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-medium text-[#0B1D3A]">{m.t}</span>
                  <ArrowRight className={"transition-transform " + (isOpen("m", i) ? "rotate-90" : "")} size={18} />
                </button>
                <AnimatePresence>
                  {isOpen("m", i) && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-4 text-sm">
                      {m.c}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="bg-[#0B1D3A] p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Join the Next Cohort</h3>
            <p className="text-white/90 mb-6">Applications are reviewed on a rolling basis. Secure your spot today.</p>
            <button onClick={() => goto("contact")} className="px-8 py-3 bg-[#D4AF37] text-[#0B1D3A] font-semibold rounded-md hover:bg-opacity-90">
              Apply Now
            </button>
          </div>

          <div className="text-center mt-8">
            <button onClick={() => goto("mission")} className="text-[#D4AF37] font-medium inline-flex items-center hover:gap-2 transition-all">
              Learn about our mission <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1D3A] mb-12 text-center">Our Mission</h2>
          <div className="prose prose-lg max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg mb-6">
              We promote innovation globally by expanding access to hands‑on venture experience. VSS increases the number of technologies that
              make it from idea to impact, lowers barriers to entrepreneurship, and bridges the capability gap from research to adoption.
            </p>
            <p className="text-lg">
              We invest in people: raising the next generation of founders and operators while building bridges across countries, universities, and ecosystems.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6 mb-12 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F8F5EF] rounded-full mb-4">
                <Target className="text-[#D4AF37]" size={28} />
              </div>
              <h3 className="font-semibold text-[#0B1D3A] mb-1">Access</h3>
              <p className="text-sm">Democratising venture experience</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F8F5EF] rounded-full mb-4">
                <Award className="text-[#D4AF37]" size={28} />
              </div>
              <h3 className="font-semibold text-[#0B1D3A] mb-1">Excellence</h3>
              <p className="text-sm">World‑class mentorship</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F8F5EF] rounded-full mb-4">
                <Briefcase className="text-[#D4AF37]" size={28} />
              </div>
              <h3 className="font-semibold text-[#0B1D3A] mb-1">Applied Learning</h3>
              <p className="text-sm">Real ventures, real impact</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F8F5EF] rounded-full mb-4">
                <Globe className="text-[#D4AF37]" size={28} />
              </div>
              <h3 className="font-semibold text-[#0B1D3A] mb-1">Global Bridges</h3>
              <p className="text-sm">Connecting ecosystems</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F8F5EF] rounded-full mb-4">
                <Heart className="text-[#D4AF37]" size={28} />
              </div>
              <h3 className="font-semibold text-[#0B1D3A] mb-1">Ethical Impact</h3>
              <p className="text-sm">Technology for humanity</p>
            </div>
          </div>
          <div className="bg-[#F8F5EF] p-8 rounded-lg">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">12+</div>
                <div className="text-sm">Partner Universities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">25+</div>
                <div className="text-sm">Active Ventures</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">50+</div>
                <div className="text-sm">Expert Mentors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">200+</div>
                <div className="text-sm">Alumni Network</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button onClick={() => goto("programme")} className="text-[#D4AF37] font-medium inline-flex items-center hover:gap-2 transition-all">
              Explore the programme structure <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section id="programme" className="py-20 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1D3A] mb-8 text-center">The Programme</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            A structured 10–12 week journey designed to transform ambitious students into skilled innovation operators.
          </p>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#0B1D3A] mb-6 text-center">Weekly Rhythm</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg text-center">
                <Calendar className="text-[#D4AF37] mx-auto mb-3" size={32} />
                <h4 className="font-semibold text-[#0B1D3A] mb-2">EIR Session</h4>
                <p className="text-sm">Weekly guided working session with your Entrepreneur‑in‑Residence.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <Users className="text-[#D4AF37] mx-auto mb-3" size={32} />
                <h4 className="font-semibold text-[#0B1D3A] mb-2">Cohort Lecture</h4>
                <p className="text-sm">Cross‑sector learning from the entrepreneurial community.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <Briefcase className="text-[#D4AF37] mx-auto mb-3" size={32} />
                <h4 className="font-semibold text-[#0B1D3A] mb-2">Applied Work</h4>
                <p className="text-sm">Real deliverables that advance your assigned venture.</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#0B1D3A] mb-6 text-center">Programme Journey</h3>
            <div className="relative max-w-5xl mx-auto">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#D4AF37] -translate-y-1/2"></div>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { w: "Week 1", t: "Onboarding", d: "Meet your EIR, understand the venture, set objectives." },
                  { w: "Weeks 2–5", t: "Discovery", d: "Market research, interviews, competitive analysis." },
                  { w: "Weeks 6–9", t: "Development", d: "Product strategy, business model, GTM planning." },
                  { w: "Weeks 10–12", t: "Showcase", d: "Final presentations, pitch preparation, celebration." },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-white p-6 rounded-lg relative z-10 text-center">
                      <div className="w-8 h-8 bg-[#D4AF37] rounded-full mb-4 mx-auto flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{i + 1}</span>
                      </div>
                      <h4 className="font-semibold text-[#0B1D3A] mb-1">{p.w}</h4>
                      <h5 className="font-medium text-[#D4AF37] mb-2">{p.t}</h5>
                      <p className="text-sm">{p.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-[#0B1D3A] mb-6 text-center">Programme Outcomes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <Award className="text-[#D4AF37] mx-auto mb-3" size={32} />
                <h4 className="font-medium text-[#0B1D3A] mb-2">Portfolio</h4>
                <p className="text-sm">Professional work samples showing real venture contributions.</p>
              </div>
              <div>
                <Target className="text-[#D4AF37] mx-auto mb-3" size={32} />
                <h4 className="font-medium text-[#0B1D3A] mb-2">Sector Expertise</h4>
                <p className="text-sm">Deep understanding of your assigned venture's industry.</p>
              </div>
              <div>
                <MessageSquare className="text-[#D4AF37] mx-auto mb-3" size={32} />
                <h4 className="font-medium text-[#0B1D3A] mb-2">Pitch Skills</h4>
                <p className="text-sm">Experience presenting to investors and stakeholders.</p>
              </div>
              <div>
                <Shield className="text-[#D4AF37] mx-auto mb-3" size={32} />
                <h4 className="font-medium text-[#0B1D3A] mb-2">References</h4>
                <p className="text-sm">Eligibility for EIR recommendation letters.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button onClick={() => goto("faq")} className="text-[#D4AF37] font-medium inline-flex items-center hover:gap-2 transition-all">
              Read frequently asked questions <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1D3A] mb-8 text-center">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-[#F8F5EF] rounded-lg">
                <button
                  onClick={() => setOpenItem(isOpen("f", i) ? null : "f-" + i)}
                  className="w-full px-6 py-4 flex justify-between items-center"
                >
                  <span className="font-medium text-[#0B1D3A]">{f.q}</span>
                  <ArrowRight className={"transition-transform " + (isOpen("f", i) ? "rotate-90" : "")} size={18} />
                </button>
                <AnimatePresence>
                  {isOpen("f", i) && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-4 text-sm">
                      {f.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-[#F8F5EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1D3A] mb-8 text-center">Contact & Apply</h2>
          <div className="flex justify-center mb-6 gap-3">
            <button
              onClick={() => setTab("entrepreneurs")}
              className={"px-4 py-2 rounded-md border " + (tab === "entrepreneurs" ? "bg-white border-[#0B1D3A]" : "bg-transparent border-gray-300")}
            >
              Entrepreneurs
            </button>
            <button
              onClick={() => setTab("students")}
              className={"px-4 py-2 rounded-md border " + (tab === "students" ? "bg-white border-[#0B1D3A]" : "bg-transparent border-gray-300")}
            >
              Students
            </button>
          </div>

          <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                placeholder="Full name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="px-4 py-2 rounded-md border"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="px-4 py-2 rounded-md border"
              />
            </div>
            <textarea
              placeholder={tab === "entrepreneurs" ? "Tell us about your venture" : "Tell us about your interests"}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="mt-4 w-full px-4 py-2 rounded-md border"
              rows={4}
            />
            <label className="flex items-start text-sm mt-4">
              <input
                type="checkbox"
                required
                checked={form.consent}
                onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                className="mr-2 mt-1"
              />
              <span>I consent to VSS processing my data and agree to the Privacy Policy.</span>
            </label>
            <button type="submit" className="mt-4 px-6 py-3 bg-[#0B1D3A] text-white rounded-md font-semibold hover:bg-opacity-90">
              Submit
            </button>
            {status === "success" && <p className="text-green-600 mt-3">Thank you! We'll be in touch shortly.</p>}
          </form>

          <div className="flex justify-center gap-6 mt-6 text-sm text-[#1E1E1E]">
            <a className="inline-flex items-center gap-2 hover:text-[#0B1D3A]" href="#"><Mail size={18} /> contact@vss.org</a>
            <a className="inline-flex items-center gap-2 hover:text-[#0B1D3A]" href="#"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#0B1D3A] font-serif">VSS <span className="text-[#D4AF37]">•</span> Proximam Innovationem Aedificamus</div>
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Venture Scholar Studio. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
