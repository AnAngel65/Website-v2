import * as React from "react";

type CardProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Card({ title, description, children, className }: CardProps) {
  return (
    <section
      className={[
        "rounded-2xl bg-card p-12",
        "border border-slate-100",
        "shadow-xl shadow-slate-200/60",
        "transition-transform transition-shadow duration-200 ease-out will-change-transform",
        "hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/60",
        "flex min-h-[220px] flex-col gap-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <header className="flex flex-col gap-2">
        <h2 className="text-base font-semibold uppercase tracking-widest text-text-strong">
          {title}
        </h2>
        {description ? (
          <p className="max-w-prose text-sm leading-6 text-text">
            {description}
          </p>
        ) : null}
      </header>
      {children ? <div className="flex-1">{children}</div> : null}
    </section>
  );
}

