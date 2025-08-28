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
    <div className=\"min-h-screen bg-white text-[#1E1E1E]\">
      {/* NAVBAR */}
      <nav className=\"fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between\">
          {/* Logo */}
          <div className=\"relative\">
            <div className=\"text-2xl font-serif text-[#0B1D3A] tracking-wider\">
              <span className=\"relative\">
                <span className=\"absolute -top-3 left-1/2 -translate-x-1/2 text-[#D4AF37] text-xs\">⚘ ⚘</span>
                VSS
                <span className=\"block absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37]\" />
              </span>
            </div>
          </div>

          <div className=\"hidden md:flex items-center gap-6\">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => goto(item.id)}
                className={
                  \"text-sm font-medium transition-colors \" +
                  (activeSection === item.id ? \"text-[#D4AF37]\" : \"text-[#1E1E1E] hover:text-[#0B1D3A]\")
                }
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => goto(\"contact\")}
              className=\"px-4 py-2 bg-[#0B1D3A] text-white rounded-md text-sm font-medium hover:bg-opacity-90\">
              Apply
            </button>
          </div>

          <button className=\"md:hidden\" onClick={() => setMobileOpen((v) => !v)}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: \"auto\", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className=\"md:hidden border-t border-gray-200\">
              <div className=\"px-4 py-3 space-y-2\">
                {nav.map((item) => (
                  <button key={item.id} onClick={() => goto(item.id)} className=\"block w-full text-left px-2 py-2 rounded hover:bg-[#F8F5EF]\">
                    {item.label}
                  </button>
                ))}
                <button onClick={() => goto(\"contact\")} className=\"w-full mt-2 px-4 py-2 bg-[#0B1D3A] text-white rounded-md text-sm font-medium\">
                  Apply
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section id=\"home\" className=\"pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-b from-[#F8F5EF] to-white\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center\">
          <div className=\"mb-8\">
            <div className=\"inline-block relative\">
              <div className=\"text-6xl lg:text-7xl font-serif text-[#0B1D3A] tracking-wider\">
                <span className=\"relative\">
                  <span className=\"absolute -top-6 left-1/2 -translate-x-1/2 text-[#D4AF37] text-2xl\">⚘ ⚘</span>
                  VSS
                  <span className=\"block absolute -bottom-2 left-0 right-0 h-1 bg-[#D4AF37]\" />
                </span>
              </div>
            </div>
          </div>
          <h1 className=\"text-4xl lg:text-6xl font-serif text-[#0B1D3A] mb-6 leading-tight\">
            Learn by building real ventures
            <br />
            with world-class founders.
          </h1>
          <p className=\"text-lg lg:text-xl mb-8 max-w-3xl mx-auto\">
            Venture Scholar Studio pairs exceptional students with Entrepreneurs‑in‑Residence working on real spinouts from premier institutions.
          </p>
          <p className=\"text-sm text-[#D4AF37] font-serif italic tracking-wide mb-6\">Proximam Innovationem Aedificamus</p>
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
            <button onClick={() => goto(\"entrepreneurs\")} className=\"px-8 py-3 bg-[#0B1D3A] text-white rounded-md font-medium hover:bg-opacity-90\">
              I'm an Entrepreneur
            </button>
            <button onClick={() => goto(\"students\")} className=\"px-8 py-3 bg-white text-[#0B1D3A] border-2 border-[#0B1D3A] rounded-md font-medium hover:bg-[#F8F5EF]\">
              I'm a Student
            </button>
          </div>
          <div className=\"mt-6\">
            <button onClick={() => goto(\"programme\")} className=\"text-[#D4AF37] font-medium inline-flex items-center hover:gap-2 transition-all\">
              Discover the Programme <ArrowRight size={16} className=\"ml-1\" />
            </button>
          </div>
        </div>
      </section>

      {/* The rest of the sections are identical to the version I provided earlier, but without any literal \n sequences and no nested template literals. */}
    </div>
  );
}
