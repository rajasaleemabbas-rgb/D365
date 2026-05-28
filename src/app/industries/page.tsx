import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Stethoscope,
  Hotel,
  Briefcase,
  HardHat,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Manufacturing, Healthcare, Hospitality | B2Cloud",
  description:
    "B2Cloud delivers industry-specific ERP, AI, and managed IT solutions for manufacturing, healthcare, hospitality, financial services, and construction.",
};

const industries = [
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    subtitle: "From shop floor to top floor",
    desc: "We help discrete and process manufacturers gain real-time visibility, reduce costs, and optimize production — from raw material to finished goods.",
    challenges: [
      "Legacy ERP limiting growth",
      "Manual production planning",
      "Inventory reconciliation overhead",
      "No real-time shop floor visibility",
    ],
    solutions: [
      "Microsoft Dynamics 365 F&O implementation",
      "MES/ERP integration",
      "Demand forecasting with AI",
      "Quality management module",
      "Cost accounting optimization",
    ],
    results: [
      { stat: "40%", label: "Inventory cost reduction" },
      { stat: "60%", label: "Faster production planning" },
      { stat: "25%", label: "Improvement in OEE" },
    ],
    color: "blue",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Healthcare",
    subtitle: "Care delivery, maximized",
    desc: "HIPAA-compliant revenue cycle management, EHR integration, and clinical workflow automation for physician groups, hospitals, and specialty practices.",
    challenges: [
      "High claim denial rates (30-45%)",
      "Fragmented billing systems",
      "Long AR collection cycles",
      "Compliance and audit risk",
    ],
    solutions: [
      "End-to-end revenue cycle management",
      "Denial management automation",
      "Insurance verification workflows",
      "EHR/PMS integration",
      "Compliance reporting",
    ],
    results: [
      { stat: "35%", label: "Denial reduction" },
      { stat: "28 days", label: "Average AR cycle" },
      { stat: "99.2%", label: "Clean claim rate" },
    ],
    color: "rose",
    gradient: "from-rose-500 to-pink-700",
  },
  {
    id: "hospitality",
    icon: Hotel,
    title: "Hospitality",
    subtitle: "Better data, better guest experiences",
    desc: "Unified financial management, F&B cost control, and analytics for hotels, resorts, and restaurant groups seeking enterprise-grade visibility.",
    challenges: [
      "Disconnected property systems",
      "No consolidated P&L visibility",
      "Manual F&B cost tracking",
      "Slow monthly close (5–10 days)",
    ],
    solutions: [
      "PMS/POS ERP integration",
      "Consolidated financial reporting",
      "F&B cost analytics",
      "Revenue management dashboards",
      "Multi-property Power BI",
    ],
    results: [
      { stat: "22%", label: "F&B cost reduction" },
      { stat: "3 hrs", label: "Monthly close" },
      { stat: "100%", label: "Multi-property visibility" },
    ],
    color: "amber",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "finance",
    icon: Briefcase,
    title: "Financial Services",
    subtitle: "Compliance-ready, growth-ready",
    desc: "Regulatory-compliant financial management, multi-entity consolidation, and real-time reporting for financial services firms.",
    challenges: [
      "Regulatory reporting complexity",
      "Multi-entity consolidation",
      "Spreadsheet-based reporting",
      "Audit preparation overhead",
    ],
    solutions: [
      "Multi-entity financial management",
      "Automated regulatory reporting",
      "Real-time compliance dashboards",
      "Audit trail automation",
      "FP&A platform implementation",
    ],
    results: [
      { stat: "80%", label: "Reporting time savings" },
      { stat: "100%", label: "Audit readiness" },
      { stat: "5x", label: "Faster close process" },
    ],
    color: "emerald",
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    id: "construction",
    icon: HardHat,
    title: "Construction",
    subtitle: "Build smarter, profit more",
    desc: "Project cost management, subcontractor billing, and job costing solutions for general contractors, specialty trades, and construction firms.",
    challenges: [
      "Manual job costing and budget tracking",
      "Subcontractor invoice management",
      "No real-time project profitability view",
      "Disconnected field and back-office systems",
    ],
    solutions: [
      "Job costing & project accounting setup",
      "Subcontractor billing automation",
      "ERP integration with field management tools",
      "Real-time project dashboards",
      "Progress billing & retention tracking",
    ],
    results: [
      { stat: "35%", label: "Reduction in cost overruns" },
      { stat: "50%", label: "Faster project billing cycle" },
      { stat: "100%", label: "Real-time job profitability" },
    ],
    color: "violet",
    gradient: "from-violet-500 to-purple-700",
  },
];

const colorRings: Record<string, string> = {
  blue: "border-blue-200 hover:border-blue-400/50",
  rose: "border-rose-200 hover:border-rose-400/50",
  amber: "border-amber-200 hover:border-amber-400/50",
  emerald: "border-emerald-200 hover:border-emerald-400/50",
  violet: "border-violet-200 hover:border-violet-400/50",
};

const colorMetric: Record<string, string> = {
  blue: "text-blue-primary",
  rose: "text-rose-600",
  amber: "text-amber-600",
  emerald: "text-emerald-600",
  violet: "text-violet-600",
};

export default function IndustriesPage() {
  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="badge-pill badge-white mb-5 inline-flex">Industries</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              We Know Your
              <br />
              <span className="gradient-text">Industry Deeply</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Our practice leads come from the industries they serve. No learning curve —
              we bring pre-built expertise, templates, and best practices from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Industry sections */}
      <div className="bg-white">
        {industries.map((industry, i) => (
          <section
            key={industry.id}
            id={industry.id}
            className={`section-pad ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Info */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-slate-mid mb-1">{industry.subtitle}</div>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-dark mb-4">
                    {industry.title}
                  </h2>
                  <p className="text-slate text-lg leading-relaxed mb-6">{industry.desc}</p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold text-slate-dark text-sm uppercase tracking-wider mb-3">
                        Common Challenges
                      </h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-slate text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-dark text-sm uppercase tracking-wider mb-3">
                        Our Solutions
                      </h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-slate-700 text-sm">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-primary shrink-0 mt-0.5" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary inline-flex">
                    Discuss Your {industry.title} Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Results */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`rounded-2xl border-2 ${colorRings[industry.color]} p-8 bg-white shadow-sm`}>
                    <div className="text-sm font-semibold text-slate-mid uppercase tracking-wider mb-6">
                      Typical Results
                    </div>
                    <div className="space-y-5">
                      {industry.results.map((r) => (
                        <div key={r.label} className="flex items-center gap-4">
                          <div className={`text-4xl font-black stat-number ${colorMetric[industry.color]} min-w-[5rem]`}>
                            {r.stat}
                          </div>
                          <div className="h-px flex-1 bg-slate-200" />
                          <div className="text-slate font-medium text-sm text-right max-w-[10rem]">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <div className="text-xs text-slate-mid mb-2">Based on</div>
                      <div className="font-semibold text-slate-dark">
                        Average across B2Cloud {industry.title} engagements
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="section-gradient-blue py-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Your Industry, Our Expertise
          </h2>
          <p className="text-white/60 mb-8">
            Let&apos;s discuss your specific challenges. Free industry assessment with one of our practice leads.
          </p>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Schedule Industry Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
