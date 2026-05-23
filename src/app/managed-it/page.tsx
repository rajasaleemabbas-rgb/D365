import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Headphones,
  Monitor,
  Cloud,
  Server,
  Mail,
  Clock,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Managed IT Services | SLA-Guaranteed Helpdesk & ERP Support | B2Cloud",
  description:
    "24/7 SLA-guaranteed managed IT services including helpdesk support, Microsoft 365, infrastructure monitoring, and ERP managed services.",
};

const plans = [
  {
    name: "Essentials",
    price: "$1,499",
    period: "/month",
    desc: "For small teams needing reliable IT support",
    sla: "8-hour response",
    uptime: "99.5% uptime SLA",
    features: [
      "Business hours helpdesk (8am–6pm)",
      "Microsoft 365 administration",
      "Patch management",
      "Basic security monitoring",
      "Monthly reporting",
      "Up to 25 users",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$3,299",
    period: "/month",
    desc: "For growing enterprises requiring proactive support",
    sla: "2-hour response",
    uptime: "99.9% uptime SLA",
    features: [
      "24/7 helpdesk support",
      "Microsoft 365 advanced admin",
      "Proactive infrastructure monitoring",
      "Advanced security & compliance",
      "ERP managed services",
      "Dedicated account manager",
      "Weekly reporting & reviews",
      "Up to 100 users",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large enterprises with complex environments",
    sla: "30-min response",
    uptime: "99.99% uptime SLA",
    features: [
      "24/7/365 priority helpdesk",
      "Dedicated support team",
      "Full ERP managed services",
      "Enterprise security operations",
      "Multi-site support",
      "vCIO advisory services",
      "Custom SLAs",
      "Unlimited users",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const services = [
  {
    icon: Headphones,
    title: "Helpdesk Support",
    desc: "Tier 1–3 support covering all your IT and business application needs, staffed by certified technicians.",
  },
  {
    icon: Monitor,
    title: "Infrastructure Monitoring",
    desc: "24/7 proactive monitoring of servers, networks, and applications with automated alerts and remediation.",
  },
  {
    icon: Cloud,
    title: "Cloud Administration",
    desc: "Azure and Microsoft 365 management, optimization, and governance to reduce costs and improve security.",
  },
  {
    icon: Server,
    title: "ERP Managed Services",
    desc: "Dedicated ERP administration, performance tuning, updates, and user support for Dynamics 365 and QuickBooks.",
  },
  {
    icon: Mail,
    title: "Microsoft 365 Support",
    desc: "Full lifecycle management of Microsoft 365 including Exchange, Teams, SharePoint, and security configuration.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "Endpoint protection, vulnerability management, and compliance monitoring to protect your business.",
  },
];

export default function ManagedITPage() {
  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-pill badge-white mb-5 inline-flex">
                <Shield className="w-3.5 h-3.5" />
                Managed IT Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                IT That Works
                <br />
                <span className="gradient-text">While You Sleep</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-xl mb-8">
                SLA-guaranteed managed IT services that keep your systems running,
                your team productive, and your business protected — 24/7/365.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary btn-primary-lg">
                  Get SLA Proposal
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="#pricing" className="btn-outline-white btn-primary-lg">
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-7">
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                Service Level Guarantees
              </div>
              <div className="space-y-3">
                {[
                  { metric: "99.9%", label: "Guaranteed uptime SLA", icon: TrendingUp },
                  { metric: "< 2hrs", label: "Average response time", icon: Clock },
                  { metric: "24/7", label: "Monitoring & support coverage", icon: Monitor },
                  { metric: "100%", label: "SLA credit if we miss targets", icon: CheckCircle2 },
                ].map((item) => (
                  <div key={item.label} className="glass-card rounded-xl p-4 flex items-center gap-4">
                    <item.icon className="w-5 h-5 text-cyan shrink-0" />
                    <div>
                      <div className="text-white font-black text-lg stat-number">{item.metric}</div>
                      <div className="text-white/55 text-xs">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge-pill badge-blue mb-4 inline-flex">What We Cover</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-dark mb-4">
              Comprehensive IT Coverage
              <span className="gradient-text block">Across Your Entire Stack</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 p-6 card-hover hover:border-blue-primary/40"
              >
                <div className="icon-box icon-box-blue mb-4">
                  <s.icon className="w-5 h-5 text-blue-primary" />
                </div>
                <h3 className="font-bold text-slate-dark mb-2">{s.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-pad bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge-pill badge-blue mb-4 inline-flex">Pricing</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-dark mb-4">
              Transparent, Predictable
              <span className="gradient-text"> IT Costs</span>
            </h2>
            <p className="text-slate">All plans include onboarding, documentation, and dedicated account management.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 ${
                  plan.popular
                    ? "bg-blue-primary shadow-[0_20px_60px_rgba(26,86,219,0.3)] scale-105"
                    : "bg-white border border-slate-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`mb-4 ${plan.popular ? "text-white" : "text-slate-dark"}`}>
                  <div className="font-bold text-lg mb-1">{plan.name}</div>
                  <div className="text-sm opacity-70">{plan.desc}</div>
                </div>

                <div className={`flex items-end gap-1 mb-2 ${plan.popular ? "text-white" : "text-slate-dark"}`}>
                  <span className="text-4xl font-black stat-number">{plan.price}</span>
                  <span className={`text-sm mb-1 ${plan.popular ? "text-white/70" : "text-slate"}`}>{plan.period}</span>
                </div>

                <div className={`flex gap-3 mb-5 text-xs ${plan.popular ? "text-white/80" : "text-slate"}`}>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {plan.sla}
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> {plan.uptime}
                  </span>
                </div>

                <ul className="space-y-2 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${plan.popular ? "text-white/85" : "text-slate-700"}`}>
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${plan.popular ? "text-cyan" : "text-blue-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.popular
                      ? "bg-white text-blue-primary hover:bg-blue-50"
                      : "btn-primary"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
