import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaCheck } from "react-icons/fa";

// Ordered oldest -> newest so the ladder climbs from left to right.
const journey = [
  {
    id: 1,
    step: "01",
    company: "illumin-labs",
    role: "Contract Full-Stack Web Developer",
    period: "Dec 2024 – Nov 2025",
    type: "Freelance",
    initials: "IL",
    stack: ["React", "Node.js", "MongoDB"],
    milestone: "Started building real client products end to end.",
  },
  {
    id: 2,
    step: "02",
    company: "Nova Corp",
    role: "Software Engineer Intern",
    period: "Feb 2025 – Aug 2025",
    type: "Internship",
    initials: "NC",
    stack: ["MERN", "PHP", "Agile"],
    milestone: "Learned professional workflow — sprints, reviews, testing.",
  },
  {
    id: 3,
    step: "03",
    company: "CODEMAS Technologies",
    role: "Contract Web Developer",
    period: "Nov 2025 – Apr 2026",
    type: "Contract",
    initials: "CT",
    stack: ["WordPress", "Next.js", "PHP"],
    milestone: "Owned delivery of full client sites independently.",
  },
  {
    id: 4,
    step: "04",
    company: "SAS Creative",
    role: "Web Developer",
    period: "Apr 2026 – Aug 2026",
    type: "Full-time",
    initials: "SC",
    stack: ["React", "Next.js", "Tailwind"],
    milestone: "Moved from contract work into a full-time in-house role.",
  },
  {
    id: 5,
    step: "05",
    company: "SAS Creative",
    role: "Associate Software Engineer",
    period: "Aug 2026 – Present",
    type: "Full-time",
    initials: "SC",
    stack: ["React", "Node.js", "TypeScript"],
    milestone: "Promoted into engineering — shipping production features.",
    current: true,
    promoted: true,
  },
];

const stats = [
  { value: "5", label: "Roles" },
  { value: "4", label: "Companies" },
  { value: "1", label: "Promotion" },
];

const Experience = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      id="experience"
      className="relative px-4 sm:px-6 md:px-12 lg:px-20 pt-8 sm:pt-16 lg:pt-20 max-w-screen overflow-hidden mt-12"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ---------------- Heading ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-6 sm:mb-8 mt-8 sm:mt-0"
      >
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          style={{ marginTop: "-40px" }}
          className="text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 text-center"
        >
          My{" "}
          <span
            style={{
              background:
                "linear-gradient(to right, #0ea5e9, #06b6d4, #14b8a6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Experience
          </span>
        </motion.h1>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>

        {/* Growth summary */}
        <div className="mt-5 flex items-center justify-center gap-3 sm:gap-5">
          {stats.map((s, i) => (
            <React.Fragment key={s.label}>
              {i > 0 && <span className="w-px h-6 bg-neutral-800"></span>}
              <span className="flex items-baseline gap-1.5">
                <span className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                  {s.value}
                </span>
                <span className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider">
                  {s.label}
                </span>
              </span>
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* ---------------- Growth ladder ---------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-60px" }}
        className="relative max-w-6xl mx-auto mb-12 lg:mb-16"
      >
        {/* Ambient glow rising to the right */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-tr from-transparent via-cyan-500/[0.06] to-teal-400/[0.10] blur-2xl"></div>

        {/* --- Growth axis label (desktop) --- */}
        <div className="hidden lg:flex items-center gap-2 mb-4 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
          <FaArrowUp className="text-cyan-400/60 text-[9px]" />
          Career growth
          <span className="flex-1 h-px bg-gradient-to-r from-neutral-800 to-transparent"></span>
        </div>

        {/* ===================== DESKTOP: ascending steps ===================== */}
        <div className="hidden lg:flex items-end gap-4 relative">
          {/* Growth trajectory climbing behind the steps */}
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="growthLine" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                <stop offset="55%" stopColor="#22d3ee" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <line
              x1="4"
              y1="94"
              x2="93"
              y2="10"
              stroke="url(#growthLine)"
              strokeWidth="0.4"
              strokeDasharray="2 2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {journey.map((job, i) => {
            const isActive = hovered === job.id || (hovered === null && job.current);

            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                onMouseEnter={() => setHovered(job.id)}
                onMouseLeave={() => setHovered(null)}
                className="flex-1 flex flex-col"
                style={{ paddingBottom: `${i * 30}px` }}
              >
                {/* ---- Step card ---- */}
                <div
                  className={`relative rounded-xl p-[1px] transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-br from-cyan-400 to-teal-400"
                      : "bg-neutral-800"
                  }`}
                >
                  <div
                    className={`relative rounded-xl px-4 py-4 h-full transition-all duration-300 ${
                      isActive ? "bg-neutral-900" : "bg-neutral-950"
                    }`}
                  >
                    {/* Step number + badge */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span
                        className={`text-[10px] font-bold tracking-widest transition-colors duration-300 ${
                          isActive ? "text-cyan-400" : "text-neutral-700"
                        }`}
                      >
                        {job.step}
                      </span>
                      {job.current ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 px-2 py-0.5 text-[9px] font-medium text-cyan-300">
                          <span className="relative flex w-1.5 h-1.5">
                            <span className="absolute inline-flex w-full h-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          </span>
                          Now
                        </span>
                      ) : (
                        <span className="text-[9px] text-neutral-600 uppercase tracking-wider">
                          {job.type}
                        </span>
                      )}
                    </div>

                    {/* COMPANY — the highlighted element */}
                    <h3
                      className={`text-base font-bold leading-tight mb-1 transition-all duration-300 ${
                        isActive
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300"
                          : "text-white"
                      }`}
                    >
                      {job.company}
                    </h3>

                    {/* Role */}
                    <p className="text-[11px] leading-snug text-neutral-400 min-h-[28px]">
                      {job.role}
                    </p>

                    {/* Period */}
                    <p className="mt-2 text-[10px] text-neutral-600">
                      {job.period}
                    </p>

                    {/* Promotion marker */}
                    {job.promoted && (
                      <p className="mt-2.5 inline-flex items-center gap-1 rounded-md bg-teal-400/10 border border-teal-400/25 px-1.5 py-0.5 text-[9px] font-medium text-teal-300">
                        <FaArrowUp className="text-[7px]" />
                        Promoted
                      </p>
                    )}

                    {/* Milestone — revealed on hover */}
                    <div
                      className={`grid transition-all duration-300 ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100 mt-2.5"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="flex gap-1.5 text-[10px] leading-relaxed text-neutral-400 border-t border-neutral-800 pt-2">
                          <FaCheck className="mt-[3px] flex-shrink-0 text-[7px] text-cyan-400/70" />
                          {job.milestone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ---- Riser: the leg that makes each step sit higher ---- */}
                <div className="relative flex flex-col items-center mt-0">
                  <div
                    className={`w-px transition-colors duration-300 ${
                      isActive
                        ? "bg-gradient-to-b from-cyan-400 to-cyan-400/20"
                        : "bg-gradient-to-b from-neutral-600 to-neutral-800/30"
                    }`}
                    style={{ height: `${i * 30 + 16}px` }}
                  ></div>
                </div>
              </motion.div>
            );
          })}

          {/* Baseline the ladder stands on */}
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-neutral-800 via-neutral-700 to-cyan-400/40"></div>
        </div>

        {/* ===================== MOBILE / TABLET: climbing timeline ===================== */}
        <div className="lg:hidden relative">
          {/* Rail */}
          <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-neutral-800 via-cyan-400/30 to-cyan-400/70"></div>

          <div className="space-y-3">
            {[...journey].reverse().map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative pl-10"
              >
                {/* Step node */}
                <span
                  className={`absolute left-0 top-3 w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold ring-4 ring-neutral-950 ${
                    job.current
                      ? "bg-gradient-to-br from-cyan-400 to-teal-400 text-neutral-900"
                      : "bg-neutral-900 border border-neutral-800 text-neutral-500"
                  }`}
                >
                  {job.step}
                </span>

                <div
                  className={`rounded-xl border px-4 py-3 ${
                    job.current
                      ? "border-cyan-400/40 bg-neutral-900/80 shadow-[0_8px_30px_-16px_rgba(6,182,212,0.6)]"
                      : "border-neutral-800 bg-neutral-900/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    {/* COMPANY — highlighted */}
                    <h3
                      className={`text-[15px] font-bold leading-tight ${
                        job.current
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300"
                          : "text-white"
                      }`}
                    >
                      {job.company}
                    </h3>

                    {job.current ? (
                      <span className="flex-shrink-0 inline-flex items-center gap-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 px-2 py-0.5 text-[9px] font-medium text-cyan-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        Now
                      </span>
                    ) : (
                      <span className="flex-shrink-0 text-[9px] text-neutral-600 uppercase tracking-wider mt-1">
                        {job.type}
                      </span>
                    )}
                  </div>

                  <p className="mt-0.5 text-xs text-neutral-400">{job.role}</p>
                  <p className="mt-1 text-[10px] text-neutral-600">
                    {job.period}
                  </p>

                  {job.promoted && (
                    <p className="mt-2 inline-flex items-center gap-1 rounded-md bg-teal-400/10 border border-teal-400/25 px-1.5 py-0.5 text-[9px] font-medium text-teal-300">
                      <FaArrowUp className="text-[7px]" />
                      Promoted
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
