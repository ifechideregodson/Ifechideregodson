"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Mail, Menu, Moon, Sun, X, Code2, BrainCircuit, GraduationCap, Radio, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

const categories = ["All", "Web Development", "AI & Health", "Education", "Media"] as const;
type Category = typeof categories[number];

export default function Portfolio() {
  const [category, setCategory] = useState<Category>("All");
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const filteredProjects = useMemo(() => category === "All" ? projects : projects.filter(p => p.category === category), [category]);
  return <main className={dark ? "site dark" : "site light"}>
    <header className="topbar">
      <a className="brand" href="#home"><span className="brand-mark">IG</span><span>Ifechid ere<span className="muted">.dev</span></span></a>
      <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <div className="actions"><button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><a className="button small" href="#contact">Let’s talk <ArrowUpRight size={16}/></a><button className="icon-btn mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button></div>
    </header>
    <section className="hero wrap" id="home">
      <div className="hero-copy"><span className="pill"><i/> BUILDING USEFUL DIGITAL PRODUCTS</span><p className="eyebrow">SOFTWARE · AI · DIGITAL PRODUCTS</p>
        <h1>I turn ambitious ideas into <span className="gradient">working technology.</span></h1>
        <p className="lead">I’m <strong>Ifechid ere Godson</strong>, a developer and builder exploring web applications, AI-powered tools, online education, and digital media.</p>
        <div className="hero-actions"><a className="button" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button ghost" href="#contact"><Mail size={17}/> Contact me</a></div>
        <div className="proof"><Code2 size={20}/><span><b>Build · Learn · Improve</b><small>Focused on practical, evolving projects</small></span></div>
      </div>
      <div className="hero-art" aria-label="Abstract illustration about ideas and technology"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="core"><Sparkles size={29}/><b>IDEAS</b><small>→ REALITY</small></div><div className="float f-one"><Code2/><span><b>Web apps</b><small>Build experiences</small></span></div><div className="float f-two"><BrainCircuit/><span><b>AI systems</b><small>Explore intelligence</small></span></div><div className="float f-three"><GraduationCap/><span><b>Learning</b><small>Expand access</small></span></div></div>
      <a className="scroll" href="#about"><ArrowDown size={14}/> SCROLL TO EXPLORE</a>
    </section>
    <section className="section wrap two-col" id="about"><div><p className="eyebrow">01 / ABOUT</p><h2>Curious by nature.<br/><span className="muted">Builder by practice.</span></h2></div><div><p className="large">I enjoy turning complex challenges into accessible digital experiences—from useful websites to ambitious AI and learning tools.</p><p className="body">My current work spans full-stack web development, experiments in medical AI, education technology, and online media. I value learning, shipping improvements, and building products that can grow beyond a simple demo.</p><a className="text-link" href="#projects">See selected projects <ArrowUpRight size={16}/></a></div></section>
    <section className="projects" id="projects"><div className="wrap"><div className="section-top"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>Projects with a purpose<span className="accent">.</span></h2></div><p className="body">A selection of products and experiments<br/>I’m building and exploring.</p></div>
      <div className="filters" role="group" aria-label="Filter projects">{categories.map(c => <button key={c} className={category === c ? "filter active" : "filter"} onClick={() => setCategory(c)} aria-pressed={category === c}>{c}</button>)}</div>
      <div className="project-grid">{filteredProjects.map((p, i) => <article className="project-card" key={p.title}><div className="project-top"><span className="number">{String(i + 1).padStart(2,"0")}</span><span className="status"><i/> {p.status}</span></div><div className="project-art"><span>{p.category === "AI & Health" ? <BrainCircuit size={38}/> : p.category === "Education" ? <GraduationCap size={38}/> : p.category === "Media" ? <Radio size={38}/> : <Code2 size={38}/>}</span></div><p className="category">{p.category}</p><h3>{p.title}</h3><p className="body project-description">{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><div className="project-footer"><a href={p.url || "#contact"} target={p.url ? "_blank" : undefined} rel={p.url ? "noreferrer" : undefined}>View project <ArrowUpRight size={16}/></a></div></article>)}</div>
      <p className="fine-print">Project descriptions reflect work in progress and areas of exploration. Check each repository for current implementation status.</p>
    </div></section>
    <section className="section wrap two-col" id="skills"><div><p className="eyebrow">03 / WHAT I WORK ON</p><h2>Ideas meet <span className="gradient">execution.</span></h2><p className="body">A growing toolkit and a practical mindset.</p></div><div className="skills"><article><Code2/><div><h3>Web development</h3><p>Responsive interfaces, full-stack applications, APIs, and deployment workflows.</p><small>Next.js · React · TypeScript</small></div></article><article><BrainCircuit/><div><h3>AI & experimentation</h3><p>Exploring model integration, machine-learning workflows, and responsible AI design.</p><small>Python · AI APIs · Evaluation</small></div></article><article><GraduationCap/><div><h3>Education technology</h3><p>Learning tools, exam practice experiences, and systems that make knowledge accessible.</p><small>Learning platforms · Offline-first</small></div></article><article><Radio/><div><h3>Digital media</h3><p>Exploring online media experiences and the technology behind content delivery.</p><small>Streaming · Web platforms</small></div></article></div></section>
    <section className="contact" id="contact"><div className="wrap"><p className="eyebrow">04 / GET IN TOUCH</p><h2>Have a good idea?<br/><span className="gradient">Let’s build it.</span></h2><p className="body">Open to conversations about software, AI, collaborations, and interesting problems.</p><a className="button" href="mailto:hello@example.com?subject=Portfolio%20enquiry"><Mail size={17}/> Email me <ArrowUpRight size={17}/></a><p className="fine-print">Before publishing, replace hello@example.com with your real email address.</p></div></section>
    <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">IG</span><span>Ifechid ere<span className="muted">.dev</span></span></a><span>Designed to evolve · © {new Date().getFullYear()} Ifechid ere Godson</span><a href="https://github.com/ifechideregodson" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={14}/></a></footer>
  </main>;
}
