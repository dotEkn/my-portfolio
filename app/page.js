"use client";
import MatrixRain from "./components/MatrixRain";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";



export default function Home() {
  return (
    <main className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pt-32">
      {/* === Hero Section === */}
      <MatrixRain />
      <motion.div
        className="relative flex justify-center items-center mt-16 mb-8"
        style={{ perspective: 1000 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Aura */}
        <div className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 blur-xl opacity-70 animate-spin-slow"></div>
        {/* Profile Image */}
        <Image
          src="/william.jpg"
          alt="William Ekengren"
          width={224}
          height={224}
          className="rounded-full border-4 border-gray-900 shadow-2xl object-cover relative z-10"
          priority
        />
      </motion.div>

      {/* Typing Title */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-100">
        Hey,{" "}
        <span className="text-emerald-400">
        <ReactTyped
          strings={["I'm William"]}
          typeSpeed={80}
          backSpeed={50}
          backDelay={5000}
          loop={true}
          showCursor={true}
          cursorChar="_"
          startDelay={300}
        />
        </span>
      </h1>

      <h2 className="text-lg md:text-xl text-gray-400 mt-2">
        Cybersecurity & Microdata Analysis Student
      </h2>

      <p className="text-gray-400 leading-relaxed max-w-lg mx-auto mt-4">
        Passionate about securing data and exploring the analytical side of tech.  
        I study how information flows, how it can be protected, and how data reveals insight.
      </p>

      {/* === About Me Section === */}
      <section className="mt-28 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-100 mb-8">
          <span className="text-emerald-400">
            <ReactTyped
              strings={["About Me"]}
              typeSpeed={150}
              showCursor={true}
              backSpeed={200}
              backDelay={10000}
              loop={true}
              cursorChar="_"
            />
          </span>
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          I’m <span className="text-emerald-400 font-semibold">William Ekengren</span>, 
          a passionate student of <span className="text-cyan-400">Cybersecurity</span> and 
          <span className="text-cyan-400"> Microdata Analysis</span>.  
          My journey started long before code — I’ve spent nearly a decade in 
          <span className="text-emerald-400"> customer service and management</span>, 
          where I learned the importance of communication, trust, and adaptability.
        </p>

        <p className="text-gray-400 leading-relaxed mb-6">
          Over the years, I’ve transitioned from sales management to the tech world — 
          diving deep into network security, data analysis, and hands-on challenges through platforms like 
          <span className="text-emerald-400"> TryHackMe</span> and 
          <span className="text-emerald-400"> Capture The Flag (CTF)</span> events.  
          I’m especially comfortable in <span className="text-cyan-400">Linux environments</span>, 
          and I enjoy writing scripts, exploring vulnerabilities, and automating solutions.  
        </p>

        <p className="text-gray-400 leading-relaxed">
          My goal is to bridge the gap between 
          <span className="text-emerald-400"> human understanding</span> and 
          <span className="text-emerald-400"> technical defense</span> — 
          helping organizations stay secure while making cybersecurity accessible and practical.
        </p>
      </section>

      {/* === Skills Section === */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-100 mb-8">
          <span className="text-emerald-400">
            <ReactTyped
              strings={["Skills"]}
              typeSpeed={150}
              showCursor={true}
              backSpeed={200}
              backDelay={10000}
              loop={true}
              cursorChar="_"
            />
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          {/* Cybersecurity */}
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-emerald-400 transition-all duration-300">
            <h3 className="text-xl font-semibold text-emerald-400 mb-3">Cybersecurity</h3>
            <ul className="text-gray-400 space-y-2 text-left">
              <li>🧩 Capture The Flag (CTF) Challenges</li>
              <li>🔍 Network Analysis & Wireshark</li>
              <li>🐧 Linux Environments</li>
              <li>💻 Penetration Testing (TryHackMe)</li>
            </ul>
          </div>

          {/* Programming & Data */}
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-emerald-400 transition-all duration-300">
            <h3 className="text-xl font-semibold text-emerald-400 mb-3">Programming & Data</h3>
            <ul className="text-gray-400 space-y-2 text-left">
              <li>🐍 Python (Automation, Scripting, Pandas)</li>
              <li>☕ Java</li>
              <li>🧮 Data Analysis & Visualization</li>
              <li>🌐 C# / Web</li>
              <li>🧠 Microdata Analysis</li>
            </ul>
          </div>

          {/* Professional Skills */}
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-emerald-400 transition-all duration-300">
            <h3 className="text-xl font-semibold text-emerald-400 mb-3">Professional Skills</h3>
            <ul className="text-gray-400 space-y-2 text-left">
              <li>🤝 Customer Service & Team Leadership</li>
              <li>📊 Sales Strategy & Communication</li>
              <li>🗂️ Project Organization & Efficiency</li>
              <li>⚙️ Problem Solving & Decision Making</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === GitHub + TryHackMe Activity === */}
      <section className="mt-20 text-center relative">
        <h2 className="text-3xl font-bold text-gray-100 mb-10">
          <span className="text-emerald-400">
            <ReactTyped
              strings={["Activity"]}
              typeSpeed={150}
              showCursor={true}
              backSpeed={200}
              backDelay={10000}
              loop={true}
              cursorChar="_"
            />
          </span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap">
          {[{
            src: "https://github-readme-stats.vercel.app/api?username=dotEkn&show_icons=true&hide_border=true&theme=tokyonight&bg_color=0d1117&cache_seconds=21600",
            alt: "GitHub stats",
          }, {
            src: "https://github-readme-stats.vercel.app/api/top-langs/?username=dotEkn&layout=compact&langs_count=12&hide_border=true&theme=tokyonight&bg_color=0d1117&cache_seconds=21600",
            alt: "Top languages",
          }, {
            src: "https://streak-stats.demolab.com?user=dotEkn&theme=tokyonight&hide_border=true&background=0d1117",
            alt: "GitHub streak",
          }].map((card, i) => (
            <div key={i} className="relative group flex justify-center items-center">
              <div className="absolute w-full h-full rounded-xl bg-emerald-500/20 blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative z-10 flex items-center justify-center w-[380px] h-[170px] bg-[#0d1117] rounded-lg shadow-md overflow-hidden hover-lift">
                <img src={card.src} alt={card.alt} className="object-contain max-w-[95%] max-h-[95%]" loading="lazy" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <iframe
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3929232"
            className="w-[350px] h-[150px] rounded-lg border-2 border-gray-800 shadow-md hover:border-emerald-400 transition-all"
            style={{ border: "none" }}
            loading="lazy"
          ></iframe>
        </div>

        <p className="text-gray-400 mt-4 text-sm">
          Live TryHackMe badge — updates automatically as I progress through rooms and challenges.
        </p>
      </section>

      {/* === Contact === */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-100 mb-10">
          <span className="text-emerald-400">
            <ReactTyped
              strings={["Contact Me"]}
              typeSpeed={150}
              showCursor={true}
              backSpeed={200}
              backDelay={10000}
              loop={true}
              cursorChar="_"
            />
          </span>
        </h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Whether you have a question, want to collaborate on a project, or just want to say hi — 
          feel free to reach out! I’m always open to connecting with like-minded individuals.
        </p>
        <a
          href="mailto:ekengrxn@gmail.com"
          className="inline-block bg-emerald-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition"
        >
          Contact Me
        </a>
      </section>
      {/* Footer */}
      <footer className="mt-32 border-t border-gray-800 bg-gray-950/90 backdrop-blur-sm w-full w-screen">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center">
          <p className="text-gray-400 text-sm mb-3">
            This portfolio is a personal project — built to improve my skills in{" "}
            <span className="text-emerald-400 font-medium">React</span>,{" "}
            <span className="text-emerald-400 font-medium">Next.js</span>,{" "}
            <span className="text-emerald-400 font-medium">JavaScript</span>, and{" "}
            <span className="text-emerald-400 font-medium">Tailwind CSS</span>.
          </p>

          <p className="text-gray-500 text-xs mb-6">
            Continuously updated with new projects, designs, and experiments in cybersecurity and data analysis.
          </p>

          <div className="flex justify-center gap-6 text-2xl mb-4">
            <a
              href="https://github.com/dotEkn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/0x0Eken"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:ekengrxn@gmail.com"
              className="hover:text-emerald-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} William Ekengren — All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
