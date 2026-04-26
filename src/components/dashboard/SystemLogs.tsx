"use client";

import * as React from "react";

const FILTERS = [
  "All",
  "Operational Precision",
  "Client Servicing",
  "Strategic Project Execution",
] as const;

type Filter = (typeof FILTERS)[number];

const PROJECTS = [
  {
    id: 1,
    title: "Project Alpha",
    body: "The 'System' result for operational efficiency.",
    category: "Operational Precision",
  },
  {
    id: 2,
    title: "Project Beta",
    body: "The 'System' result for client satisfaction.",
    category: "Client Servicing",
  },
  {
    id: 3,
    title: "Project Gamma",
    body: "The 'System' result for project delivery.",
    category: "Strategic Project Execution",
  },
  {
    id: 4,
    title: "Project Delta",
    body: "The 'System' result for precision tasks.",
    category: "Operational Precision",
  },
  {
    id: 5,
    title: "Project Epsilon",
    body: "The 'System' result for client relations.",
    category: "Client Servicing",
  },
  {
    id: 6,
    title: "Project Zeta",
    body: "The 'System' result for execution strategy.",
    category: "Strategic Project Execution",
  },
] as const;

export function SystemLogs() {
  const [activeFilter, setActiveFilter] = React.useState<Filter>("All");

  const isVisible = (category: string) => {
    if (activeFilter === "All") return true;
    return category === activeFilter;
  };

  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-[1400px] p-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-text-strong">
            System Logs
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={[
                "inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium",
                "border border-slate-200 shadow-sm",
                "transition-colors",
                activeFilter === filter
                  ? "bg-accent text-white"
                  : "bg-white text-text hover:bg-slate-50",
              ].join(" ")}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={[
                "rounded-2xl bg-white p-8 border border-slate-100 shadow-sm",
                "transition-all duration-500",
                isVisible(project.category)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none",
              ].join(" ")}
            >
              <div className="mb-2 text-xs font-medium text-accent uppercase tracking-wide">
                {project.category}
              </div>
              <div className="text-lg font-semibold text-text-strong">
                {project.title}
              </div>
              <div className="mt-2 text-sm text-text">
                {project.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}