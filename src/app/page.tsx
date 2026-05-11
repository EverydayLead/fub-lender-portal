const prompts = [
  { num: 1, title: "Blueprint & Strategy", status: "complete" },
  { num: 2, title: "Mobile Architecture", status: "progress" },
  { num: 3, title: "Mobile UX Design", status: "queued" },
  { num: 4, title: "Integration Mapping", status: "queued" },
  { num: 5, title: "Backend Schema & Security", status: "progress" },
  { num: 6, title: "Design System", status: "progress" },
  { num: 7, title: "Starter Codebase", status: "queued" },
] as const;

const artifacts = [
  {
    title: "Process Flow & Business Requirements",
    desc: "6-phase dual-lane flow with 30 MoSCoW-prioritized business requirements and ops detail",
    lines: 1292,
    status: "done",
    link: "#",
  },
  {
    title: "Banker Experience Mockup",
    desc: "Interactive 5-screen mobile prototype: Pipeline → New Deal → Credit Memo → Deal Detail → Approver Queue",
    lines: 390,
    status: "done",
    link: "#",
  },
  {
    title: "Mobile Architecture",
    desc: "Tech stack decisions, offline-first design, API contracts, security architecture",
    lines: null,
    status: "building",
    link: null,
  },
  {
    title: "Backend Schema & Security",
    desc: "PostgreSQL schema, API endpoints, authority enforcement, threat model",
    lines: null,
    status: "building",
    link: null,
  },
  {
    title: "Design System",
    desc: "Color tokens, typography, 15+ components, accessibility guidelines",
    lines: null,
    status: "building",
    link: null,
  },
];

const principles = [
  {
    icon: "📝",
    title: "Credit-Memo First",
    desc: "Bankers write stories, not forms. NLP extracts the data.",
  },
  {
    icon: "🔄",
    title: "Continuous Flow",
    desc: "No blocking gates. Async approval with SLA timers.",
  },
  {
    icon: "⚡",
    title: "Smart Defaults",
    desc: "Jack Henry core fills what it knows. Banker confirms.",
  },
  {
    icon: "🛤️",
    title: "Complexity Lanes",
    desc: "Fast (<$250K, 15 min), Standard (CRE/C&I), Complex (SBA/committee)",
  },
  {
    icon: "📡",
    title: "Offline-Tolerant",
    desc: "Rural OK/TX reality. Works on bad LTE. Syncs when connected.",
  },
];

const team = [
  { name: "Justin Sanderson", role: "Chief Transformation Officer", tag: "Sponsor" },
  { name: "Henry Marquez", role: "Lead Developer", tag: null },
  { name: "Ryan Suchala", role: "Chief Banking Officer", tag: "Business Owner" },
  { name: "Tim Schneider", role: "COO", tag: "Executive Sponsor" },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "complete")
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
        Complete
      </span>
    );
  if (status === "progress")
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
        <svg className="w-4 h-4 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" d="M4 12a8 8 0 018-8" /></svg>
        In Progress
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
      Queued
    </span>
  );
}

export default function Home() {
  const completed = prompts.filter((p) => p.status === "complete").length;
  const inProgress = prompts.filter((p) => p.status === "progress").length;
  const pct = Math.round((completed / prompts.length) * 100);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="bg-[#002D72] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <p className="text-sm tracking-widest uppercase text-blue-200 mb-3">First United Bank</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">FUB Lender — Build Portal</h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl">
            Lending Transformation · Mobile-First Platform
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div className="bg-white/10 backdrop-blur rounded-lg px-5 py-3">
              <span className="block text-2xl font-bold">{completed}/{prompts.length}</span>
              <span className="text-blue-200">Prompts Complete</span>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-5 py-3">
              <span className="block text-2xl font-bold">{inProgress}</span>
              <span className="text-blue-200">In Progress</span>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-5 py-3">
              <span className="block text-2xl font-bold">{pct}%</span>
              <span className="text-blue-200">Overall Progress</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">

        {/* Build Progress */}
        <section>
          <h2 className="text-2xl font-bold text-[#002D72] mb-2">Build Progress</h2>
          <p className="text-gray-500 mb-8">7-prompt chain driving the full platform build</p>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
            <div className="bg-[#002D72] h-3 rounded-full transition-all" style={{ width: `${pct}%` }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {prompts.map((p) => (
              <div
                key={p.num}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-bold text-[#002D72] bg-blue-50 rounded-full w-7 h-7 flex items-center justify-center">
                    {p.num}
                  </span>
                  <StatusBadge status={p.status} />
                </div>
                <h3 className="font-semibold text-gray-800">{p.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Artifacts */}
        <section>
          <h2 className="text-2xl font-bold text-[#002D72] mb-2">Artifacts</h2>
          <p className="text-gray-500 mb-8">Deliverables produced by each build prompt</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artifacts.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-bold text-[#002D72] mb-2">{a.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  {a.status === "done" ? (
                    <>
                      <span className="text-xs text-gray-400">{a.lines?.toLocaleString()} lines</span>
                      <a
                        href={a.link ?? "#"}
                        className="text-sm font-semibold text-[#002D72] hover:text-[#DA291C] transition-colors"
                      >
                        View Artifact →
                      </a>
                    </>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-amber-600 font-medium">
                      <svg className="w-4 h-4 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" d="M4 12a8 8 0 018-8" /></svg>
                      Building…
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Principles */}
        <section>
          <h2 className="text-2xl font-bold text-[#002D72] mb-2">Design Principles</h2>
          <p className="text-gray-500 mb-8">The five tenets driving every product decision</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h3 className="font-bold text-[#002D72] mb-2 text-sm">{p.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-2xl font-bold text-[#002D72] mb-2">Team</h2>
          <p className="text-gray-500 mb-8">Lending Transformation leadership</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#002D72] text-white flex items-center justify-center font-bold text-lg mb-4">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-bold text-gray-800">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
                {t.tag && (
                  <span className="inline-block mt-2 text-xs font-semibold text-[#002D72] bg-blue-50 px-2 py-0.5 rounded">
                    {t.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#002D72] text-blue-200 text-center py-8 mt-12">
        <p className="text-sm">
          Built by the Lending Transformation team at First United Bank · Spend Life Wisely®
        </p>
        <p className="text-xs text-blue-300/50 mt-2">Last updated May 2026</p>
      </footer>
    </div>
  );
}
