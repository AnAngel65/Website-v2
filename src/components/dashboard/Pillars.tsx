"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const PILLARS_DATA = [
  {
    pillar: "Operational Precision",
    title: "Operational Precision",
    content: [
      {
        title: "Workflow Orchestration",
        text: `Transforming tribal knowledge into an immutable "Source of Truth." I don't just write instructions; I build the workflow framework that eliminates double-work.`,
      },
      {
        title: "Chaos Termination",
        text: `Identifying operational bottlenecks—where data silos, memory-dependency, or manual friction exist—and re-engineering the process to be self-sustaining.`,
      },
      {
        title: "Backbone Design",
        text: `Creating the "skeleton" of the business. By focusing on the structural integrity of data entry, pricing maps, and asset management, I ensure the organization can scale without losing its fundamental logic.`,
      },
      {
        title: "Impact",
        text: `Scaled organization from 1 to 6 planners. Reduced onboarding time by 80% (2 weeks to 3 days). Eliminated 4 hours of daily information retrieval overhead.`,
      },
    ],
  },
  {
    pillar: "Client Servicing",
    title: "Client Servicing",
    content: [
      {
        title: "High-Touch Concierge Operations",
        text: `Providing a "Reliability Anchor." I don't just answer questions; I manage the entire client journey from pre-tour readiness to post-service closure.`,
      },
      {
        title: "Structural Empathy",
        text: `The ability to de-escalate complex client anxieties through structured communication frameworks. I use logic to make clients feel safe, providing clear backup plans and step-by-step guidance.`,
      },
      {
        title: "Indispensable Liaison",
        text: `Acting as the bridge between raw operations (guides/drivers/operators) and the human experience. I ensure that high-stakes requests (surprise proposals, emotional milestones, crisis recovery) are executed with 100% precision.`,
      },
      {
        title: "Impact",
        text: `Maintained a 95% satisfaction rating and an 80% repeat client rate by providing a consistent reliability anchor for premium travelers and high-stakes milestones.`,
      },
    ],
  },
  {
    pillar: "Project Coordination",
    title: "Project Coordination",
    content: [
      {
        title: "Synchronized Execution",
        text: `Smooth coordination between different departments, government authorities, and ensuring all parties are aligned and informed so the project moves forward without friction.`,
      },
      {
        title: "Resource Allocation",
        text: `Maximizing utility without burning out team members. I manage the "spatial" and "human" resources with the same discipline used in construction PM, ensuring every asset is in the right place at the right time.`,
      },
      {
        title: "Timeline Integrity",
        text: `Zero-error delivery discipline. I treat every deadline as a structural requirement—non-negotiable and meticulously tracked to maintain stakeholder confidence.`,
      },
      {
        title: "Impact",
        text: `Proven capability to oversee 3 concurrent residential/commercial or travel projects. I manage the "critical path"—ensuring that timelines, dependencies, and resources are mapped to prevent downstream delays.`,
      },
    ],
  },
];

export function Pillars() {
  const [expanded, setExpanded] = React.useState<false | number>(0);

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
            Core Competencies
          </h2>
        </motion.div>

        <div className="space-y-4">
          {PILLARS_DATA.map((item, index) => (
            <AccordionItem
              key={index}
              i={index}
              expanded={expanded}
              setExpanded={setExpanded}
              data={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const AccordionItem = ({ i, expanded, setExpanded, data }: any) => {
  const isOpen = i === expanded;

  return (
    <motion.div
      className="border-b border-slate-200"
      initial={false}
      animate={{
        backgroundColor: isOpen ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0)",
      }}
    >
      <motion.header
        className="flex justify-between items-center p-6 cursor-pointer"
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <h3 className="text-2xl font-semibold text-white">{data.title}</h3>
        <div className="text-white">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.content.map((entry: any, entryIndex: number) => (
                  <div key={entryIndex}>
                    <h4 className="text-lg font-semibold text-white mb-2">{entry.title}</h4>
                    <p className="text-base text-blue-200">{entry.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};