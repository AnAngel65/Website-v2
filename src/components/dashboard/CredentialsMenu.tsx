import * as React from "react";

export function CredentialsMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuId = React.useId();
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      const root = rootRef.current;
      if (!root) return;
      if (e.target instanceof Node && root.contains(e.target)) return;
      setIsOpen(false);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }

    if (!isOpen) return;
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={[
          "inline-flex items-center gap-2",
          "rounded-2xl bg-card px-4 py-3 text-sm font-semibold tracking-tight",
          "border border-slate-200 shadow-md shadow-slate-200/50",
          "text-text hover:bg-[rgba(59,130,246,0.10)] hover:text-accent transition-colors",
        ].join(" ")}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen(!isOpen)}
      >
        Credentials
        <span className="text-accent">▾</span>
      </button>

      <div
        id={menuId}
        role="menu"
        className={[
          "absolute right-0 z-10 mt-3 w-64 overflow-hidden rounded-2xl",
          "bg-white p-2",
          "border border-slate-200",
          "shadow-lg shadow-slate-200/50",
          isOpen ? "block" : "hidden",
        ].join(" ")}
      >
          <a
            role="menuitem"
            href="/resume.pdf"
            className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-text hover:bg-slate-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            View CV
          </a>
          <a
            role="menuitem"
            href="mailto:angel_anqi_2009@hotmail.com"
            className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-text hover:bg-slate-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Email me
          </a>
        </div>
    </div>
  );
}