const deliverables = [
  {
    title: "Process Flow",
    file: "/fub-lender-process-flow.html",
    description: "6-phase lending workflow with dual customer/banker swim lanes and 30 MoSCoW business requirements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9 6h11M9 12h11M9 18h11M5 6h.01M5 12h.01M5 18h.01" />
      </svg>
    ),
    accent: "bg-[#002D72]",
  },
  {
    title: "Banker Mockup",
    file: "/fub-lender-banker-mockup.html",
    description: "Interactive 5-screen mobile prototype in a phone frame — tap through the core banker experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
    accent: "bg-[#DA291C]",
  },
  {
    title: "Architecture",
    file: "/fub-lender-architecture.html",
    description: "9-tab technical document covering tech stack, offline-first design, API contracts, security controls, and integration diagram.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    accent: "bg-[#002D72]",
  },
  {
    title: "Full UX Screens",
    file: "/fub-lender-full-ux.html",
    description: "19 screens across 4 categories with clickable state toggles, spec panels, and accessibility reference.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    accent: "bg-[#DA291C]",
  },
  {
    title: "Backend & Schema",
    file: "/fub-lender-backend-schema.html",
    description: "PostgreSQL DDL, RESTful API contracts, authority enforcement, STRIDE threat model, n8n workflows, nCino coexistence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    accent: "bg-[#002D72]",
  },
  {
    title: "Design System",
    file: "/fub-lender-design-system.html",
    description: "Full color palette, typography scale, 15 component specs with live previews, and dark mode support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
    accent: "bg-[#C4972A]",
  },
  {
    title: "Starter Codebase",
    file: "/fub-lender-starter-codebase.html",
    description: "11 tabbed sections: quick start, file tree, package.json, theme tokens, WatermelonDB schema, components, and demo mode.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    accent: "bg-[#002D72]",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F5]">
      {/* Header Bar */}
      <header className="bg-[#002D72] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center font-black text-lg tracking-tight">
              FUB
            </div>
            <span className="text-sm font-light tracking-wide opacity-80">LENDER BUILD PORTAL</span>
          </div>
          <span className="text-xs font-light opacity-60 hidden sm:block">First United Bank · Transformation Office</span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#002D72] text-white pb-16 pt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
              FUB Lender
              <span className="block text-[#C4972A] text-2xl sm:text-3xl font-light mt-1">Mobile Lending Platform</span>
            </h1>
            <p className="text-base sm:text-lg font-light leading-relaxed opacity-85 max-w-2xl">
              Complete build documentation for First United Bank&apos;s mobile-first lending application.
              Seven interactive deliverables spanning process design, UX, architecture, and implementation.
            </p>
            <div className="flex gap-6 mt-8 text-sm font-light opacity-70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                7 deliverables
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C4972A]"></div>
                Interactive prototypes
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                Production-ready specs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <main className="max-w-6xl mx-auto px-6 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliverables.map((d, i) => (
            <a
              key={i}
              href={d.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-[#002D72]/30 transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Card Top Accent */}
              <div className={`h-1.5 ${d.accent}`}></div>

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + Number */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#002D72]/[0.07] text-[#002D72] flex items-center justify-center group-hover:bg-[#002D72] group-hover:text-white transition-colors duration-200">
                    {d.icon}
                  </div>
                  <span className="text-xs font-mono text-gray-400 mt-1">
                    {String(i + 1).padStart(2, "0")}/{String(deliverables.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#002D72] transition-colors">
                  {d.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {d.description}
                </p>

                {/* View Link */}
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-[#002D72] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  View deliverable
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform">
                    <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 mt-12">
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} First United Bank · Transformation Office
          </p>
          <p className="text-xs text-gray-400">
            Spend Life Wisely&trade;
          </p>
        </div>
      </footer>
    </div>
  );
}
