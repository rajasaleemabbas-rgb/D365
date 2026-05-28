import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  BarChart3,
  Settings,
  GraduationCap,
  GitMerge,
  RefreshCw,
  TrendingUp,
  Clock,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ERP Solutions | Microsoft Dynamics 365, QuickBooks & Salesforce | B2Cloud",
  description:
    "Expert ERP implementation, migration, and support for Microsoft Dynamics 365 Finance & Operations, QuickBooks Enterprise, and Salesforce integration.",
};

const solutions = [
  {
    icon: Building2,
    name: "Microsoft Dynamics 365 F&O",
    desc: "Enterprise-grade ERP for finance, operations, supply chain, and manufacturing. The most powerful ERP platform for mid-market and enterprise.",
    capabilities: [
      "Financial management & reporting",
      "Supply chain & procurement",
      "Manufacturing execution",
      "Multi-entity & multi-currency",
      "Real-time Power BI dashboards",
      "AI-powered demand forecasting",
    ],
    badge: "Certified Experts",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: BarChart3,
    name: "QuickBooks Enterprise",
    desc: "Advanced accounting and business management for growing mid-size companies. Scalable, familiar, and feature-rich.",
    capabilities: [
      "Advanced inventory management",
      "Job costing & project tracking",
      "Payroll & HR integration",
      "Industry-specific editions",
      "Custom reporting",
      "Multi-user & cloud access",
    ],
    badge: "Elite ProAdvisor",
    badgeColor: "bg-green-50 text-green-700 border-green-200",
  },
  {
    icon: GitMerge,
    name: "Salesforce Integration",
    desc: "Seamless CRM integration with your ERP for end-to-end visibility from lead to cash, eliminating manual data entry.",
    capabilities: [
      "Bi-directional data sync",
      "Opportunity-to-order automation",
      "Customer 360 integration",
      "Custom API development",
      "Quote-to-cash workflows",
      "Sales forecasting alignment",
    ],
    badge: "ISV Certified",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
];

const services = [
  {
    icon: Settings,
    title: "ERP Implementation",
    desc: "Full-lifecycle deployment from requirements to go-live. Includes data migration, customization, integration, and training.",
  },
  {
    icon: RefreshCw,
    title: "ERP Migration & Upgrades",
    desc: "Risk-managed migration from legacy systems or version upgrades with zero data loss and minimal downtime.",
  },
  {
    icon: BarChart3,
    title: "ERP Optimization",
    desc: "Post-go-live performance tuning, process redesign, and advanced module activation to maximize your investment.",
  },
  {
    icon: GraduationCap,
    title: "Corporate Training",
    desc: "Role-based training programs, user adoption programs, and ongoing enablement to drive system utilization.",
  },
];

const outcomes = [
  { metric: "60%", label: "Reduction in manual processes", icon: TrendingUp },
  { metric: "3x", label: "Faster financial close", icon: Clock },
  { metric: "$2.4M", label: "Average annual savings", icon: DollarSign },
  { metric: "99%", label: "On-time delivery rate", icon: CheckCircle2 },
];

export default function ERPSolutionsPage() {
  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="badge-pill badge-white mb-5 inline-flex">
              <Building2 className="w-3.5 h-3.5" />
              ERP Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Enterprise ERP
              <br />
              <span className="gradient-text">Implementations That Deliver</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mb-8">
              We implement, migrate, and optimize enterprise ERP systems with
              a proven methodology that minimizes risk and maximizes ROI.
              Microsoft Dynamics 365, QuickBooks, and Salesforce specialists.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary btn-primary-lg">
                Get a Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/case-studies" className="btn-outline-white btn-primary-lg">
                See ERP Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {outcomes.map((o) => (
              <div key={o.label} className="flex items-start gap-3">
                <div className="icon-box icon-box-blue shrink-0">
                  <o.icon className="w-5 h-5 text-blue-primary" />
                </div>
                <div>
                  <div className="text-3xl font-black gradient-text stat-number">{o.metric}</div>
                  <div className="text-slate text-sm mt-0.5">{o.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Platforms */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge-pill badge-blue mb-4 inline-flex">Platforms</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-dark mb-4">
              <span className="gradient-text">Certified Expertise</span> Across
              <br />
              Leading ERP Platforms
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-slate-200 p-7 card-hover hover:border-blue-primary/40 hover:shadow-[0_8px_32px_rgba(26,86,219,0.1)]"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="icon-box icon-box-blue icon-box-lg">
                    <s.icon className="w-6 h-6 text-blue-primary" />
                  </div>
                  <span className={`badge-pill text-xs border ${s.badgeColor}`}>
                    {s.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-dark text-lg mb-3">{s.name}</h3>
                <p className="text-slate text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-primary shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge-pill badge-blue mb-4 inline-flex">Our ERP Services</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-dark">
              End-to-End ERP Lifecycle
              <span className="gradient-text block">Support & Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl border border-slate-200 p-6 card-hover hover:border-blue-primary/40"
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

      {/* CTA */}
      <section className="section-gradient-blue relative overflow-hidden py-16">
        <div className="absolute inset-0 dot-pattern-dark opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to Modernize Your ERP?
          </h2>
          <p className="text-white/60 mb-8">
            Get a free 2-hour ERP assessment with a senior Dynamics 365 architect.
          </p>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Schedule Free ERP Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
