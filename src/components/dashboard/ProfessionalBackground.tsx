"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";

export function ProfessionalBackground() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section 
      className="bg-background py-24 sm:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-text-strong">
              PROFESSIONAL BACKGROUND
            </h2>
          </div>
          <div className="md:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-text-strong mb-4">
                EXPERIENCE
              </h3>
              <ul className="space-y-4">
                <li className="text-lg text-[#64748B]">
                  <strong>Travel Planner Manager</strong> @ The Wandering Lens | 2024–2026
                </li>
                <li className="text-lg text-[#64748B]">
                  <strong>Lecturer & Academic QC</strong> @ Blue Pillar Academy | 2022–2023
                </li>
                <li className="text-lg text-[#64748B]">
                  <strong>Project Management Executive</strong> @ Country Garden | 2017–2022
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-text-strong mb-4">
                EDUCATION
              </h3>
              <p className="text-lg text-[#64748B]">
                <strong>B.Sc Architecture</strong>, UTM | 2012–2017
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a href="/assets/documents/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto rounded-full bg-[#1E293B] px-8 py-3 text-base font-semibold text-white hover:bg-[#1E293B]/90 transition-colors">
                  View Resume
                </button>
              </a>
              <a href="/assets/documents/2026 CV.pdf" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto rounded-full border border-[#1E293B] bg-transparent px-8 py-3 text-base font-semibold text-[#1E293B] hover:bg-slate-50 transition-colors">
                  View CV
                </button>
              </a>
              <a href="/assets/documents/portfolio.pdf" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto rounded-full bg-[#1E293B] px-8 py-3 text-base font-semibold text-white hover:bg-[#1E293B]/90 transition-colors">
                  View Architectural Portfolio
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}