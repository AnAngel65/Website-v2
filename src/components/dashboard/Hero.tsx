"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";

export function Hero() {
  return (
    <motion.section
      className="bg-background min-h-screen flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto w-full max-w-7xl p-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
          <motion.div
            className="md:col-span-2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }}
          >
            <h1 className="text-8xl md:text-9xl font-bold text-text-strong tracking-tighter leading-none">
              NG <span className="block">AN QI</span>
            </h1>
          </motion.div>
          <motion.div
            className="md:col-span-3 text-left md:text-right"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.6, 0.01, -0.05, 0.9] }}
          >
            <p className="text-xl font-medium text-[#64748B] mb-6">
              Operations Specialist | Client Success Concierge | Project Coordinator
            </p>
            <div className="flex justify-end items-center gap-6 mb-6 text-base text-[#64748B]">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Based in Malaysia</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} />
                <span>Remote full-time/freelance</span>
              </div>
            </div>
            <p className="text-lg text-[#64748B] leading-relaxed">
              With 8 years of experience in project-driven environments, I provide the operational backbone that allows businesses to scale and leaders to focus. I turn complex coordination into a seamless, reliable experience, managing the structural integrity of your workflow with empathy and precision.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}