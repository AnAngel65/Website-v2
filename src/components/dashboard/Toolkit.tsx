"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";

const PROFICIENCIES = [
  "Google Sheets (Advanced/Automation)",
  "Apps Script",
  "SAP",
  "Notion",
  "AI Prompting",
  "AutoCAD",
  "Cursor/VS Code",
  "Google Workspace",
  "Slack",
  "Microsoft Office",
];

export function Toolkit() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold uppercase tracking-widest text-white">
            My Toolkit
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            A selection of the tools and technologies I use to bring projects to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PROFICIENCIES.map((prof, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <p className="text-lg font-semibold text-blue-200">{prof}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}