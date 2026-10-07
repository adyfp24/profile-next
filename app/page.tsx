"use client";

import { useMemo, useState } from "react";

const skills = {
  Languages: ["JavaScript / TypeScript", "PHP", "HTML / CSS", "C#", "Go", "Dart"],
  "Frameworks & libraries": ["TailwindCSS", "Node.js", "Express.js", "Laravel", ".NET", "Gin", "Flutter"],
  Databases: ["MySQL", "PostgreSQL", "SQLite", "Firebase", "Redis"],
  Tools: ["Linux", "Git", "Docker", "Postman", "Swagger", "VS Code", "Jira", "DBeaver", "Figma", "AWS"],
  "Soft skills": ["Teamwork", "Leadership", "Public speaking", "Fast adaptation", "Problem solving"],
};

const experiences = [
  { company: "PT. Okejek Kreasi Indonesia", role: "Mobile Developer", date: "Internship · Jan 2025 — Jun 2025", text: "Adapted and refactored an existing Android codebase to support iOS using Flutter, including configuration and App Store deployment. Handled strict review requirements, initiated TestFlight beta testing, and collaborated on long-term platform compatibility." },
  { company: "PT. Vocasia Eduka Teknologi", role: "Backend Developer", date: "Internship · Feb 2025 — May 2025", text: "Developed and maintained API endpoints with CodeIgniter, refactored legacy code for performance and scalability, and structured API documentation with Swagger for efficient frontend integration." },
  { company: "PT. Arkatama Multi Solusindo", role: "Fullstack Developer", date: "Internship · Sep 2024 — Dec 2024", text: "Contributed to three client projects: a donation platform, a campus management platform, and a government agency platform. Developed applications with Laravel using clean code principles and design patterns." },
  { company: "Generasi Baru Indonesia (GenBI) × KPW Bank Indonesia Jember", role: "Fullstack Developer", date: "Contract · Oct 2024 — Dec 2024", text: "Developed the GenBI Jember website with Next.js, built the UI and REST APIs, and handled testing, deployment, and maintenance for optimal performance." },
  { company: "Laboratorium Perangkat Lunak", role: "Teaching Assistant", date: "Contract · Aug 2024 — Dec 2024", text: "Taught object-oriented programming and SQL programming, sharing the pillars of OOP with .NET C# and SQL concepts including transactions, statements, and triggers. Assisted students and managed attendance and grades." },
  { company: "PT. Kode Media Bestari", role: "Backend Developer", date: "Internship · Jan 2024 — Jun 2024", text: "Collaborated with the development team using Agile Scrum. Built REST APIs with auth tokens, migrations, ORM, and middleware; tested APIs with Postman and worked closely with frontend developers." },
  { company: "Laboratorium Infrastruktur Teknologi", role: "Teaching Assistant", date: "Contract · Jan 2024 — Jun 2024", text: "Taught Linux operating systems, including Ubuntu commands, network management, SSH configuration, and web-server setup. Assisted students and managed attendance and grades." },
];

const projects = [
  { title: "Sirama Apps", tag: "Health · Mobile", text: "Mental health application for teenagers with expert consultation, screening, chat, educational content, and authentication. I contributed to the backend team and REST API.", stack: ["REST API", "Mobile", "Backend"], href: "https://play.google.com/store/apps/details?id=sirama.id" },
  { title: "GenBI Website", tag: "Full stack · Next.js", text: "Tourism platform for Malang with authentication, blog, travel gallery, and reviews. Built to strengthen my full stack development skills.", stack: ["Next.js", "REST API", "Vercel"], href: "https://github.com/adyfp24/genbi-website-next", status: "Under development" },
  { title: "Segarsaji Apps", tag: "Marketplace · Client project", text: "Marketplace for partners and consumers to buy vegetables, fruits, and kitchen spices in Jember. Integrated Midtrans, chat, shopping cart, and Google Maps.", stack: ["Marketplace", "Midtrans", "Maps"], status: "Private repository · Deployment in process" },
  { title: "MalangKuy Website", tag: "Full stack · MERN", text: "Tourism platform for Malang featuring authentication, blog, travel gallery, and a review section.", stack: ["MongoDB", "Express", "React", "Node.js"], href: "https://github.com/adyfp24/tourism-MERN" },
  { title: "Kelola-In / FinanciaGo", tag: "Fintech · ML", text: "Financial management app focused on preventing the negative impacts of online loans, with expert counseling, gamification, and machine-learning financial analysis.", stack: ["Finance", "Machine learning", "Mobile"], href: "https://github.com/adyfp24/financiaGo-getX" },
  { title: "Chiligrow Apps", tag: "IoT · Agro-industry", text: "IoT-based agro-industry application integrated with ESP8266 and soil moisture sensors for automatic watering, fertilization, and chili planting simulation.", stack: ["IoT", "ESP8266", "REST API"], href: "https://github.com/adyfp24/chiligrow-app" },
  { title: "Mentor-me Website", tag: "Edtech · Web", text: "Scientific research mentoring service with checkout for hiring mentors and CRUD tools for admins to manage mentor data.", stack: ["Web", "Checkout", "CRUD"], href: "https://github.com/adyfp24/mentorme-final-project" },
  { title: "eMosque Apps", tag: "Community · Mobile", text: "Application for managing mosque activities, including finances, zakat, religious schedules, item borrowing, and event permissions.", stack: ["Flutter", "REST API", "Finance"], href: "https://github.com/adyfp24/emosque-app" },
  { title: "Auto Center POS", tag: "Desktop · Freelance", text: "Electron JS and SQLite desktop POS app for stock management, transactions, and receipt printing for a client’s store.", stack: ["Electron", "SQLite", "Desktop"], href: "https://github.com/adyfp24/cashier-electron-js" },
];

const achievements = [
  ["03", "3rd Winner", "Software Development Competition · AMCC CODE", "National-level competition at Amikom University Yogyakarta. Built software with a team to solve current issues."],
  ["02", "2nd Winner", "Website Development Competition · CITECH", "Provincial-level competition at Jember University. Collaborated on the Mentor-Me website and presented it in the final round."],
  ["01", "Scholarship Awardee", "Bank Indonesia Scholarship 2024", "Awarded to outstanding students in Indonesia to support the development of high-quality human resources."],
  ["01", "1st Winner", "Capture The Flag · Laos Arena", "Faculty-level cybersecurity competition covering forensics, OSINT, cryptography, web security, and steganography."],
];

const organizations = [
  { name: "HIMATIF", role: "Staff of Human Resource Development", date: "Dec 2022 — Present", text: "Served as a liaison between students and academic staff, fulfilled association responsibilities, and successfully executed 7+ programs with a strong KPI." },
  { name: "UKM Keislaman Al-Azhar", role: "Staff of Caderization", date: "Dec 2023 — Present", text: "Played an active role in Islamic spiritual activities within the Faculty of Computer Science, collaborating with staff to execute 5+ programs with a strong KPI." },
];

const certifications = [
  { title: "Git Version Control", provider: "Progate", date: "03/05/2024", url: "https://progate.com/course_certificate/2637f0e5scw3e7", text: "Completed a course covering Git fundamentals." },
  { title: "Node JS For Web Development", provider: "Progate", date: "04/05/2024", url: "https://progate.com/course_certificate/e7a8ed81scy6wc", text: "Completed a course covering Node.js fundamentals for web application development." },
];

const navItems = ["about", "experience", "projects", "recognition"];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Full stack", "Mobile", "IoT", "Desktop"];
  const visibleProjects = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.tag.includes(filter)), [filter]);

  return (
    <main>
      <nav className="nav shell"><a className="wordmark" href="#top">AF<span>.</span></a><div className="nav-links">{navItems.map((item) => <a key={item} href={`#${item}`}>{item}</a>)}</div><a className="nav-cta" href="mailto:adyfp24@gmail.com">Let&apos;s talk <span>↗</span></a></nav>

      <section className="hero shell" id="top">
        <div className="hero-copy"><div className="eyebrow"><span className="pulse" /> Available for new opportunities</div><p className="hero-kicker">Information Technology student<br />&amp; junior full stack developer</p><h1>Building useful<br /><em>things</em> with code.</h1><p className="hero-intro">I&apos;m Ady Firdaus Pratama — a developer who enjoys turning complex problems into clear, thoughtful digital experiences.</p><div className="hero-actions"><a className="button button-dark" href="#projects">See my work <span>↓</span></a><a className="text-link" href="https://www.linkedin.com/in/ady-firdaus-979150257/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="text-link" href="https://github.com/adyfp24" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
        <div className="hero-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-card"><div className="card-top"><span>adyfp24 / portfolio</span><span>2025</span></div><div className="code-line"><span className="pink">const</span> developer = <span className="yellow">{`{`}</span></div><div className="code-line indent">name: <span className="green">&quot;Ady&quot;</span>,</div><div className="code-line indent">focus: <span className="green">&quot;full stack&quot;</span>,</div><div className="code-line indent">coffee: <span className="orange">true</span>,</div><div className="code-line"><span className="yellow">{`}`}</span></div><div className="terminal"><span>➜</span> ship ideas that matter<span className="cursor">_</span></div></div><div className="float-chip chip-one">✦ Problem solver</div><div className="float-chip chip-two">⌘ Open to learn</div></div>
      </section>

      <section className="marquee"><div>JavaScript <span>✦</span> TypeScript <span>✦</span> Node.js <span>✦</span> Flutter <span>✦</span> Laravel <span>✦</span> Go <span>✦</span> JavaScript <span>✦</span> TypeScript <span>✦</span> Node.js <span>✦</span></div></section>

      <section className="section shell about" id="about"><div className="section-label"><span>01</span><span>About me</span></div><div className="about-grid"><div><h2>A curious mind with a <span>builder&apos;s heart.</span></h2></div><div className="about-body"><p>I am a Computer Science student passionate about pursuing a career in software development. I mainly utilize Node.js, Laravel, and Go for web development, and Flutter/Dart for mobile apps.</p><p>I am well-versed in the Software Development Life Cycle (SDLC) and actively involved in student associations, consistently striving for academic excellence and self-improvement.</p><div className="stats"><div><strong>3+</strong><span>years building</span></div><div><strong>09</strong><span>featured projects</span></div><div><strong>07</strong><span>work experiences</span></div></div></div></div></section>

      <section className="section shell skill-section"><div className="section-label"><span>02</span><span>Technical skills</span></div><div className="skills-grid">{Object.entries(skills).map(([group, values]) => <div className="skill-group" key={group}><h3>{group}</h3><div className="tag-list">{values.map((value) => <span key={value}>{value}</span>)}</div></div>)}</div></section>

      <section className="section shell" id="experience"><div className="section-label"><span>03</span><span>Work experience</span></div><div className="experience-list">{experiences.map((item, i) => <article className="experience-item" key={item.company}><div className="exp-index">0{i + 1}</div><div className="exp-main"><h3>{item.role}</h3><p className="company">{item.company}</p><p className="date">{item.date}</p><p className="exp-text">{item.text}</p></div><span className="arrow">↗</span></article>)}</div></section>

      <section className="section shell projects-section" id="projects"><div className="section-heading"><div className="section-label"><span>04</span><span>Selected projects</span></div><p>Small experiments, real client work,<br />and everything in between.</p></div><div className="filter-row">{filters.map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><div className="projects-grid">{visibleProjects.map((project, i) => <article className="project-card" key={project.title}><div className={`project-visual visual-${i % 4}`}><span className="project-number">0{i + 1}</span><span className="project-symbol">{["⌁", "◈", "⊹", "◒"][i % 4]}</span><span className="project-label">{project.tag.split(" · ")[0]}</span></div><div className="project-content"><div className="project-title"><h3>{project.title}</h3>{project.href && <a href={project.href} target="_blank" rel="noreferrer">↗</a>}</div><p>{project.text}</p><div className="project-footer"><div className="mini-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.status && <small>{project.status}</small>}</div></div></article>)}</div></section>

      <section className="section shell organization"><div className="section-label"><span>05</span><span>Organization experience</span></div><div className="org-grid">{organizations.map((item) => <article className="org-card" key={item.name}><div className="org-icon">◎</div><div><h3>{item.name}</h3><p className="company">{item.role}</p><p className="date-visible">{item.date}</p><p>{item.text}</p></div></article>)}</div></section>

      <section className="section shell certificates"><div className="section-label"><span>06</span><span>Courses &amp; certifications</span></div><div className="cert-grid">{certifications.map((item) => <article className="cert-card" key={item.title}><div className="cert-top"><span>Certificate</span><span>{item.date}</span></div><h3>{item.title}</h3><p>{item.text}</p><strong>{item.provider}</strong><a href={item.url} target="_blank" rel="noreferrer">View certificate ↗</a></article>)}</div></section>

      <section className="section shell recognition" id="recognition"><div className="section-label"><span>07</span><span>Recognition</span></div><div className="recognition-grid">{achievements.map(([number, title, subtitle, text]) => <article className="recognition-card" key={subtitle}><span className="trophy">✦</span><div className="recognition-number">{number}</div><h3>{title}</h3><p className="recognition-subtitle">{subtitle}</p><p>{text}</p></article>)}</div></section>

      <section className="closing"><div className="shell closing-inner"><p className="eyebrow"><span className="pulse" /> Have a project in mind?</p><h2>Let&apos;s make it<br /><em>real.</em></h2><a className="button button-light" href="mailto:adyfp24@gmail.com">Start a conversation <span>↗</span></a><div className="closing-links"><a href="mailto:adyfp24@gmail.com">adyfp24@gmail.com</a><span>Jember, Indonesia</span><a href="https://www.linkedin.com/in/ady-firdaus-979150257/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/adyfp24" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
      <footer className="footer shell"><span>© 2025 Ady Firdaus Pratama</span><span>Built with Next.js &amp; TypeScript</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
