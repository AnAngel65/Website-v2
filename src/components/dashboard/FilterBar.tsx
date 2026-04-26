import * as React from "react";

type FilterKey = "all" | "operations" | "client-experience";

type FilterBarProps = {
  value?: FilterKey;
  onChange?: (value: FilterKey) => void;
};

const FILTERS: Array<{ key: FilterKey; label: string }> = [
  { key: "all", label: "All" },
  { key: "operations", label: "Operations" },
  { key: "client-experience", label: "Client Experience" },
];

export function FilterBar({ value = "all", onChange }: FilterBarProps) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2",
        "rounded-2xl bg-card px-3 py-2",
        "shadow-md shadow-slate-200/50",
      ].join(" ")}
      role="tablist"
      aria-label="Dashboard filter"
    >
      {FILTERS.map((f) => {
        const active = f.key === value;
        return (
          <button
            key={f.key}
            type="button"
            onClick={() => onChange?.(f.key)}
            className={[
              "rounded-xl px-4 py-2 text-sm font-medium tracking-tight transition-colors",
              active
                ? "bg-[rgba(59,130,246,0.10)] text-accent"
                : "text-text hover:bg-[rgba(59,130,246,0.10)] hover:text-accent",
            ].join(" ")}
            aria-selected={active}
            role="tab"
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}

