import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Bot,
  BarChart3,
  FileText,
  Map,
  TrendingUp,
  Zap,
  Brain,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Digital Transformation | Workflow Automation | B2Cloud",
  description:
    "AI-powered workflow automation, business process mapping, SOP digitization, and Power BI dashboards for enterprise digital transformation.",
};

const capabilities = [
  {
    icon: Bot,
    title: "AI Workflow Automation",
    desc: "Replace manual, repetitive tasks with intelligent automation. We build custom AI workflows using Microsoft Power Automate, RPA, and custom ML models.",
    features: ["Invoice processing automation", "Approval workflow intelligence", "Predictive maintenance alerts", "Automated reporting"],
  },
  {
    icon: Map,
    title: "Business Process Mapping",
    desc: "Document, analyze, and redesign your business processes to eliminate waste and identify automation opportunities.",
    features: ["As-is process documentation", "Bottleneck identification", "To-be process design", "ROI quantification"],
  },
  {
    icon: FileText,
    title: "SOP Digitization",
    desc: "Convert paper-based standard operating procedures into interactive digital workflows with compliance tracking and audit trails.",
    features: ["Digital SOP creation", "Version control", "Compliance tracking", "Mobile-accessible"],
  },
  {
    icon: BarChart3,
    title: "Power BI Dashboards",
    desc: "Executive-grade analytics dashboards that consolidate data from all your systems into actionable intelligence.",
    features: ["Real-time KPI dashboards", "Cross-system data integration", "Mobile-responsive reports", "Automated data refresh"],
  },
  {
    icon: Brain,
    title: "IT Assessments",
    desc: "Comprehensive digital maturity assessment to benchmark your current state and build a prioritized transformation roadmap.",
    features: ["Infrastructure assessment", "Application portfolio review", "Security gap analysis", "ROI-driven roadmap"],
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    desc: "C-suite advisory services to define your digital transformation vision, technology architecture, and change management approach.",
    features: ["Digital maturity benchmarking", "Technology selection", "Change management planning", "Board-ready roadmaps"],
  },
];

const outcomes = [
  { stat: "70%", label: "of manual tasks automated on average" },
  { stat: "3x", label: "faster reporting and decision cycles" },
  { stat: "45%", label: "reduction in operational overhead" },
  { stat: "90 days", label: "typical time-to-value" },
];

const transformationSteps = [
  { step: "01", title: "Assess", desc: "Map current processes and quantify automation opportunity" },
  { step: "02", title: "Design", desc: "Architect AI-powered workflows and data models" },
  { step: "03", title: "Build", desc: "Develop, test, and integrate automation solutions" },
  { step: "04", title: "Deploy", desc: "Roll out with change management and user enablement" },
  { step: "05", title: "Optimize", desc: "Continuously improve using performance analytics" },
];

export default function AIAutomationPage() {
  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan/10 blur-3xl animate-float pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-pill badge-white mb-5 inline-flex">
                <Cpu className="w-3.5 h-3.5" />
                AI & Digital Transformation
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Automate the Work.
                <br />
                <span className="gradient-text">Amplify the People.</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-xl mb-8">
                We identify, design, and deploy AI-powered automation that eliminates
                manual processes — so your team can focus on decisions, not data entry.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary btn-primary-lg">
                  Get Automation Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/case-studies" className="btn-outline-white btn-primary-lg">
                  See Results
                </Link>
              </div>
            </div>

            {/* Outcomes panel */}
            <div className="glass-card rounded-3xl p-7">
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                Typical Client Outcomes
              </div>
              <div className="grid grid-cols-2 gap-4">
                {outcomes.map((o) => (
                  <div key={o.label} className="glass-card rounded-xl p-4">
                    <div className="text-2xl font-black text-white stat-number mb-1">{o.stat}</div>
                    <div className="text-white/55 text-xs leading-relaxed">{o.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge-pill badge-blue mb-4 inline-flex">Capabilities</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-dark mb-4">
              Full-Spectrum
              <span className="gradient-text"> Digital Transformation</span>
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              From strategy to execution — we handle every layer of your digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-slate-200 p-6 card-hover hover:border-blue-primary/40 hover:shadow-[0_8px_32px_rgba(26,86,219,0.08)]"
              >
                <div className="icon-box icon-box-blue mb-4">
                  <cap.icon className="w-5 h-5 text-blue-primary" />
                </div>
                <h3 className="font-bold text-slate-dark text-lg mb-2">{cap.title}</h3>
                <p className="text-slate text-sm leading-relaxed mb-4">{cap.desc}</p>
                <ul className="space-y-1.5">
                  {cap.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-1 h-1 rounded-full bg-cyan shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section className="section-pad section-gradient-blue relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              From Chaos to <span className="gradient-text">Clarity</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Our 5-stage transformation framework moves you from manual to automated in weeks, not years.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {transformationSteps.map((s, i) => (
              <div key={s.step} className="flex-1 glass-card rounded-2xl p-5 text-center">
                <div className="text-4xl font-black text-white/10 mb-2">{s.step}</div>
                <h3 className="text-white font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-white/55 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-dark mb-4">
            Start Your <span className="gradient-text">Automation Journey</span>
          </h2>
          <p className="text-slate mb-8">
            Free 2-hour process discovery workshop to identify your top 5 automation opportunities.
          </p>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Book Free Workshop
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
