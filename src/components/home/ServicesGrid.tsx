"use client";

import Link from "next/link";
import {
  Building2,
  Cpu,
  Shield,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    color: "blue",
    badge: "Core Offering",
    title: "ERP & Business Applications",
    description:
      "End-to-end implementation, migration, and optimization of enterprise ERP systems. From finance automation to supply chain visibility.",
    features: [
      "Microsoft Dynamics 365 F&O",
      "QuickBooks Enterprise",
      "Salesforce CRM Integration",
      "ERP Migration & Upgrades",
      "Corporate Training",
    ],
    href: "/erp-solutions",
    metric: "60%",
    metricLabel: "reduction in manual processes",
  },
  {
    icon: Cpu,
    color: "cyan",
    badge: "High Demand",
    title: "AI & Digital Transformation",
    description:
      "Automate business workflows, digitize SOPs, and build intelligent dashboards that turn data into executive decisions.",
    features: [
      "AI Workflow Automation",
      "Business Process Mapping",
      "SOP Digitization",
      "Power BI Dashboards",
      "Digital Strategy Consulting",
    ],
    href: "/ai-automation",
    metric: "3x",
    metricLabel: "faster decision cycles",
  },
  {
    icon: Shield,
    color: "indigo",
    badge: "SLA Guaranteed",
    title: "Managed IT Services",
    description:
      "Proactive infrastructure management, helpdesk support, and ERP-specific managed services with guaranteed SLAs.",
    features: [
      "24/7 Helpdesk Support",
      "Microsoft 365 Management",
      "Infrastructure Monitoring",
      "ERP Managed Services",
      "Cloud Administration",
    ],
    href: "/managed-it",
    metric: "99.9%",
    metricLabel: "guaranteed uptime SLA",
  },
  {
    icon: HeartPulse,
    color: "rose",
    badge: "Healthcare",
    title: "Medical Billing & Healthcare",
    description:
      "Optimize revenue cycles, reduce claim denials, and automate healthcare workflows for maximum reimbursement.",
    features: [
      "Revenue Cycle Management",
      "Claims Processing & Denials",
      "Insurance Verification",
      "Healthcare Workflow Automation",
      "Compliance & Coding Support",
    ],
    href: "/medical-billing",
    metric: "35%",
    metricLabel: "reduction in claim denials",
  },
];

const colorConfig: Record<string, { bg: string; border: string; icon: string; badge: string; metric: string }> = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-100 hover:border-blue-primary/40",
    icon: "text-blue-primary bg-blue-100",
    badge: "bg-blue-primary/10 text-blue-primary",
    metric: "text-blue-primary",
  },
  cyan: {
    bg: "bg-cyan-50/50",
    border: "border-cyan-100 hover:border-cyan/50",
    icon: "text-cyan bg-cyan-100",
    badge: "bg-cyan/10 text-cyan-700",
    metric: "text-cyan-700",
  },
  indigo: {
    bg: "bg-indigo-50/50",
    border: "border-indigo-100 hover:border-indigo-400/40",
    icon: "text-indigo-600 bg-indigo-100",
    badge: "bg-indigo-50 text-indigo-600 border border-indigo-100",
    metric: "text-indigo-600",
  },
  rose: {
    bg: "bg-rose-50/50",
    border: "border-rose-100 hover:border-rose-400/40",
    icon: "text-rose-500 bg-rose-100",
    badge: "bg-rose-50 text-rose-600 border border-rose-100",
    metric: "text-rose-500",
  },
};

export default function ServicesGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="badge-pill badge-blue mb-4 inline-flex">Our Services</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-dark mb-4 leading-tight">
            Four Practice Areas.
            <br />
            <span className="gradient-text">One Strategic Partner.</span>
          </h2>
          <p className="text-slate max-w-2xl mx-auto text-lg leading-relaxed">
            We combine deep ERP expertise with AI-driven automation to deliver
            measurable ROI across every layer of your business.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const colors = colorConfig[service.color];
            return (
              <div
                key={service.title}
                className={`group relative rounded-2xl border ${colors.border} bg-white card-hover overflow-hidden transition-all duration-300`}
              >
                {/* Top accent bar */}
                <div className={`h-1 w-full ${service.color === "blue" ? "bg-gradient-to-r from-blue-primary to-blue-electric" : service.color === "cyan" ? "bg-gradient-to-r from-cyan to-blue-primary" : service.color === "indigo" ? "bg-gradient-to-r from-indigo-500 to-blue-primary" : "bg-gradient-to-r from-rose-400 to-pink-500"}`} />

                <div className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`icon-box icon-box-lg ${colors.icon} rounded-2xl`}>
                      <service.icon className="w-7 h-7" />
                    </div>
                    <span className={`badge-pill text-xs ${colors.badge}`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Metric + CTA */}
                  <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                    <div>
                      <div className={`text-2xl font-black stat-number ${colors.metric}`}>
                        {service.metric}
                      </div>
                      <div className="text-xs text-slate-mid">{service.metricLabel}</div>
                    </div>
                    <Link
                      href={service.href}
                      className="flex items-center gap-1.5 text-sm font-semibold text-blue-primary hover:text-blue-electric transition-colors group-hover:gap-2.5"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
