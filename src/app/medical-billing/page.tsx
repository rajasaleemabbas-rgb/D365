import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  FileCheck,
  DollarSign,
  ShieldCheck,
  RefreshCw,
  BarChart3,
  TrendingUp,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Billing & Healthcare Solutions | Revenue Cycle Management | B2Cloud",
  description:
    "Expert medical billing, revenue cycle management, claims processing, denial management, and healthcare workflow automation services.",
};

const services = [
  {
    icon: DollarSign,
    title: "Revenue Cycle Management",
    desc: "End-to-end management of your entire revenue cycle from patient registration through final payment posting.",
    features: ["Patient eligibility verification", "Prior authorization management", "Medical coding (ICD-10, CPT)", "Patient billing & collections"],
  },
  {
    icon: FileCheck,
    title: "Claims Processing",
    desc: "Clean claim submission with 99.2%+ first-pass acceptance rate using our proprietary scrubbing technology.",
    features: ["Electronic claims submission", "Clearinghouse management", "Claim status tracking", "ERA/EOB posting"],
  },
  {
    icon: RefreshCw,
    title: "Denial Management",
    desc: "Systematic identification, appeal, and prevention of claim denials to maximize reimbursements.",
    features: ["Denial root cause analysis", "Automated appeals workflows", "Payer contract compliance", "Denial prevention training"],
  },
  {
    icon: ShieldCheck,
    title: "Insurance Verification",
    desc: "Real-time benefits verification and pre-authorization to eliminate eligibility-related denials.",
    features: ["Real-time eligibility checks", "Benefits breakdown reports", "Prior auth tracking", "Automated verification workflows"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare Workflow Automation",
    desc: "Automate patient intake, scheduling coordination, and clinical documentation workflows.",
    features: ["Patient intake automation", "Appointment reminders", "Clinical workflow integration", "HIPAA-compliant processes"],
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    desc: "Real-time financial dashboards with KPI tracking, payer performance analysis, and AR aging reports.",
    features: ["AR aging dashboard", "Payer performance reports", "Revenue trend analysis", "Executive summaries"],
  },
];

const outcomes = [
  { stat: "35%", label: "Average denial reduction", icon: TrendingUp },
  { stat: "28 days", label: "AR cycle (industry avg: 75)", icon: Clock },
  { stat: "99.2%", label: "Clean claim rate", icon: CheckCircle2 },
  { stat: "15–25%", label: "Revenue increase, typical", icon: DollarSign },
];

const specialties = [
  "Primary Care", "Internal Medicine", "Orthopedics", "Cardiology",
  "Oncology", "Mental Health", "Physical Therapy", "Radiology",
  "Emergency Medicine", "Surgery", "Dermatology", "Neurology",
];

export default function MedicalBillingPage() {
  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-pill badge-white mb-5 inline-flex">
                <HeartPulse className="w-3.5 h-3.5" />
                Medical Billing & Healthcare
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Maximize Every
                <br />
                <span className="gradient-text">Dollar You Earn</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-xl mb-8">
                End-to-end revenue cycle management that reduces denials, accelerates
                collections, and increases your net revenue — while staying HIPAA compliant.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary btn-primary-lg">
                  Get Free RCM Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/case-studies" className="btn-outline-white btn-primary-lg">
                  Healthcare Case Studies
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-7">
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-5">
                Revenue Cycle Benchmarks
              </div>
              <div className="grid grid-cols-2 gap-4">
                {outcomes.map((o) => (
                  <div key={o.label} className="glass-card rounded-xl p-4">
                    <o.icon className="w-5 h-5 text-cyan mb-2" />
                    <div className="text-2xl font-black text-white stat-number mb-1">{o.stat}</div>
                    <div className="text-white/55 text-xs leading-relaxed">{o.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 glass-card rounded-xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan" />
                  <span className="text-white/80 text-xs font-medium">HIPAA Compliant · SOC 2 Certified Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge-pill badge-blue mb-4 inline-flex">Services</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-dark mb-4">
              Complete Revenue Cycle
              <span className="gradient-text block">From Intake to Payment</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 p-6 card-hover hover:border-rose-300/60 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)]"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="font-bold text-slate-dark text-lg mb-2">{s.title}</h3>
                <p className="text-slate text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-rose-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-pad bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-dark mb-3">
              Specialties <span className="gradient-text">We Serve</span>
            </h2>
            <p className="text-slate">Specialized billing expertise across all major medical specialties.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {specialties.map((s) => (
              <div
                key={s}
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:border-rose-300 hover:text-rose-600 transition-colors cursor-default"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gradient-blue py-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Stop Leaving Revenue on the Table
          </h2>
          <p className="text-white/60 mb-8">
            Free revenue cycle assessment — we&apos;ll identify your top denial drivers and project your revenue uplift.
          </p>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Schedule Free Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
