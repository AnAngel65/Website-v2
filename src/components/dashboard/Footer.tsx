"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer 
      className="py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-base text-slate-300">
              Crafted with intention by Ng An Qi
            </p>
            <p className="text-sm text-slate-300">
              © 2026 All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <a href="mailto:angel_anqi_2009@hotmail.com" className="text-base text-blue-200 hover:text-blue-500 transition-colors">
              angel_anqi_2009@hotmail.com
            </a>
            <a href="https://www.linkedin.com/in/an-qi-ng-554654b6/" target="_blank" rel="noopener noreferrer" className="text-base text-blue-200 hover:text-blue-500 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}