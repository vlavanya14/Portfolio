/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Award, 
  Briefcase, 
  Code2, 
  Database, 
  BarChart3, 
  Cpu,
  Terminal
} from "lucide-react";

const SKILLS = [
  { name: "Python", icon: <Terminal className="w-4 h-4" /> },
  { name: "SQL", icon: <Database className="w-4 h-4" /> },
  { name: "Machine Learning", icon: <Cpu className="w-4 h-4" /> },
  { name: "Tableau", icon: <BarChart3 className="w-4 h-4" /> },
  { name: "Pandas/NumPy", icon: <Code2 className="w-4 h-4" /> },
  { name: "Scikit-Learn", icon: <Cpu className="w-4 h-4" /> },
  { name: "TensorFlow", icon: <Cpu className="w-4 h-4" /> },
  { name: "Power BI", icon: <BarChart3 className="w-4 h-4" /> },
];

const PROJECTS = [
  {
    title: "Pattern Recognition in Anonymous IoT Network Traffic for Intrusion Detection Using Machine Learning",
    tools: ["Python", "Machine Learning", "IoT Traffic Analysis", "Data Preprocessing", "Feature Engineering"],
    description: "Designed and implemented a smart intrusion detection system for agricultural IoT networks by analyzing network traffic patterns using machine learning. Developed hybrid detection using Random Forest and Isolation Forest along with a reward-based adaptive threshold mechanism to enhance accuracy. Built a real-time simulation pipeline integrating ESP32, MQTT communication, and a Streamlit dashboard for continuous monitoring and alert generation.",
    link: "https://github.com/vlavanya14",
  },
  {
    title: "Long-Term Temperature Data Analysis for Identification of Trends Over Karnataka",
    tools: ["Python", "Pandas", "QGIS", "ArcGIS", "Matplotlib", "Excel"],
    description: "Analyzed long-term temperature data to detect regional climate trends and seasonal anomalies, applied Spearman correlation, Mann-Kendall, and Modified MK tests for time-series analysis, created spatial maps using QGIS and ArcGIS to visualize trend intensity and regional variations, and presented insights through dashboards with anomaly plots and seasonal trend charts.",
    link: "https://github.com/vlavanya14",
  },
];

const INTERNSHIPS = [
  {
    role: "Project Intern",
    company: "Intel Unnati Industrial Training Program",
    period: "May 2025 - July 2025",
    description: "Built an AI-based OCR system for defect detection and label validation, improving accuracy through image preprocessing. Integrated Arduino-based automation with camera input to enable automated sorting.",
  },
  {
    role: "Python Developer Intern",
    company: "Infosys Springboard",
    period: "Oct 2024 - Dec 2024",
    description: "Built a Python-based deal aggregation app using Selenium and Beautiful Soup, with data processing in Pandas and SQL, and a Streamlit UI for search and filtering.",
  },
];

const CERTIFICATIONS = [
  {
    name: "Data Visualizations with R",
    issuer: "Coursera",
    date: "2025",
  },
  {
    name: "Data Science",
    issuer: "Eduskills",
    date: "2024",
  },
  {
    name: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "2025",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-indigo-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div />
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#internships" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center py-12 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                Hi, I'm <span className="text-indigo-600">V. Lavanya</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Turning complex data into actionable insights through machine learning and statistical analysis.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href="#projects"
                className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2 group"
              >
                View Projects
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* About & Skills */}
        <section id="about" className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-tight">About Me</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              I am a passionate Data Science student with a strong foundation in mathematics and programming. 
              My journey started with a curiosity about how numbers can tell stories, which led me to pursue 
              a B.Tech in Data Science. I enjoy tackling real-world problems using predictive modeling 
              and data visualization.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-indigo-600">5+</p>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Projects</p>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div className="space-y-1">
                <p className="text-2xl font-bold text-indigo-600">2</p>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Internships</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-tight">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <div 
                  key={skill.name}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-xl flex items-center gap-2 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:shadow-md transition-all cursor-default"
                >
                  <span className="text-indigo-500">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-12">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold tracking-tight">Featured Projects</h3>
            </div>
            <a href="https://github.com/vlavanya14" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold text-sm hover:underline flex items-center gap-1">
              View All <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.title}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                  <Code2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map(tool => (
                    <span key={tool} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-500 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                <a 
                  href={project.link}
                  className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Internships Timeline */}
        <section id="internships" className="space-y-12">
          <h3 className="text-3xl font-bold tracking-tight">Professional Experience</h3>
          <div className="space-y-8 relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-slate-200">
            {INTERNSHIPS.map((exp, idx) => (
              <div key={exp.company} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm z-10" />
                <div className="md:w-1/2 pl-12 md:pl-0">
                  <div className={`p-6 bg-white rounded-2xl border border-slate-200 shadow-sm ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-lg">{exp.role}</h4>
                        <p className="text-indigo-600 font-medium text-sm">{exp.company}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded uppercase tracking-tighter">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-12">
          <h3 className="text-3xl font-bold tracking-tight">Certifications</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-snug mb-1">{cert.name}</h4>
                  <p className="text-xs text-slate-500">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-indigo-900 rounded-[3rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full -ml-48 -mb-48" />
          
          <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10 px-6">
            <h3 className="text-4xl font-bold tracking-tight">Let's work together</h3>
            <p className="text-indigo-100 text-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex justify-center gap-6 pt-4">
              <a href="mailto:vlavanya0216@gmail.com" className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all group">
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/v-lavanya-b26a96257/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all group">
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com/vlavanya14" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all group">
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="pt-8">
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2026 Lavanya. Built with React & Tailwind CSS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
