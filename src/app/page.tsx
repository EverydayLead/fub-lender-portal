const prompts = [
  { num: "1", title: "Blueprint & Strategy", desc: "Process flow with 6 phases, 30 business requirements, dual customer/banker lanes", status: "complete" },
  { num: "1b", title: "Banker Experience Mockup", desc: "5-screen interactive mobile mockup with Jackie Parsons deal", status: "complete" },
  { num: "2", title: "Mobile Architecture", desc: "Expo custom dev client, WatermelonDB offline-first, Okta OIDC, 5 open decisions", status: "complete" },
  { num: "3", title: "Full Mobile UX", desc: "19 screens with all states (empty/loading/error/populated), accessibility, gestures", status: "complete" },
  { num: "5", title: "Backend Schema & Security", desc: "PostgreSQL 9 tables, API contracts, authority enforcement, 10-threat STRIDE model, 6 n8n workflows", status: "complete" },
  { num: "6", title: "Design System", desc: "Color palette, Lato typography, 15 component specs, dark mode, phone frame demo", status: "complete" },
  { num: "7", title: "Starter Codebase", desc: "File tree, package.json, theme tokens, WatermelonDB schema, 3 components, demo mode", status: "complete" },
] as const;

const artifacts = [
  {
    title: "Process Flow & Business Requirements",
    desc: "6-phase dual-lane flow with 30 MoSCoW-prioritized business requirements and ops detail",
    prompt: "1",
    lines: 1292,
    status: "done",
  },
  {
    title: "Banker Experience Mockup",
    desc: "Interactive 5-screen mobile prototype: Pipeline → New Deal → Credit Memo → Deal Detail → Approver Queue",
    prompt: "1b",
    lines: 390,
    status: "done",
  },  {
    title: "Mobile Architecture Spec",
    desc: "Expo custom dev client, WatermelonDB offline-first sync, Okta OIDC auth, 5 open architecture decisions documented",
    prompt: "2",
    lines: 1840,
    status: "done",
  },
  {
    title: "Full Mobile UX Screens",
    desc: "19 screens covering all states (empty, loading, error, populated) with accessibility annotations and gesture maps",
    prompt: "3",
    lines: 2650,
    status: "done",
  },
  {
    title: "Backend Schema & Security Model",
    desc: "PostgreSQL 9-table schema, full API contracts, authority enforcement matrix, 10-threat STRIDE model, 6 n8n automation workflows",
    prompt: "5",
    lines: 3100,
    status: "done",
  },
  {
    title: "Design System & Component Library",
    desc: "FUB color palette, Lato typography scale, 15 component specs with variants, dark mode tokens, phone frame demo",
    prompt: "6",
    lines: 1950,
    status: "done",
  },
  {
    title: "Starter Codebase & Scaffolding",
    desc: "Complete file tree, package.json configs, theme tokens, WatermelonDB schema, 3 starter components, demo mode toggle",
    prompt: "7",
    lines: 2200,
    status: "done",
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
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Complete
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800">{p.title}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{p.desc}</p>
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-[#002D72] bg-blue-50 rounded px-1.5 py-0.5">P{a.prompt}</span>
                    <h3 className="font-bold text-[#002D72]">{a.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{a.lines?.toLocaleString()} lines</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Delivered
                  </span>
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