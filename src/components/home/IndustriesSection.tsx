"use client";

import Link from "next/link";
import { Factory, Hotel, Stethoscope, Briefcase, HardHat, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "ERP-driven production planning, inventory management, and supply chain visibility for discrete and process manufacturers.",
    tags: ["Dynamics 365 F&O", "MRP Integration", "IoT Monitoring"],
    clients: "2 clients",
    href: "/industries#manufacturing",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Revenue cycle management, HIPAA-compliant workflows, and EHR integrations that maximize reimbursements.",
    tags: ["Medical Billing", "RCM", "HIPAA Compliance"],
    clients: "1 client",
    href: "/industries#healthcare",
    gradient: "from-rose-500 to-pink-700",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    desc: "Streamlined property management, F&B cost control, and guest experience automation for hotels and restaurants.",
    tags: ["PMS Integration", "F&B Analytics", "Cost Control"],
    clients: "2 clients",
    href: "/industries#hospitality",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Briefcase,
    title: "Financial Services",
    desc: "Regulatory compliance automation, financial reporting, and multi-entity consolidation with real-time dashboards.",
    tags: ["Compliance Automation", "Power BI", "Multi-entity"],
    clients: "8 clients",
    href: "/industries#finance",
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    icon: HardHat,
    title: "Construction",
    desc: "Project cost management, subcontractor billing, and job costing solutions for contractors and construction firms.",
    tags: ["Job Costing", "Project Management", "Subcontractor Billing"],
    clients: "1 client",
    href: "/industries#construction",
    gradient: "from-violet-500 to-purple-700",
  },
];

export default function IndustriesSection() {
  return (
    <section className="section-pad section-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-24">
            <div className="badge-pill badge-blue mb-4 inline-flex">Industry Expertise</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-dark leading-tight mb-5">
              Deep Vertical
              <br />
              <span className="gradient-text">Domain Knowledge</span>
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-8">
              We don&apos;t just implement software — we understand your industry.
              Our practice leads come from the industries they serve.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Pre-built industry-specific templates",
                "Regulatory compliance built-in",
                "Vertical-specific KPI dashboards",
                "Industry peer benchmarking",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-primary/12 border border-blue-primary/20 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-primary" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/industries"
              className="btn-primary inline-flex"
            >
              Explore All Industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: industry cards */}
          <div className="space-y-4">
            {industries.map((industry, i) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-primary/30 hover:shadow-[0_8px_32px_rgba(26,86,219,0.1)] transition-all duration-300 block"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shrink-0 shadow-md`}
                >
                  <industry.icon className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-bold text-slate-dark text-base group-hover:text-blue-primary transition-colors">
                      {industry.title}
                    </h3>
                    <span className="text-xs text-slate-mid font-medium shrink-0 ml-3">
                      {industry.clients}
                    </span>
                  </div>
                  <p className="text-sm text-slate leading-relaxed mb-3">
                    {industry.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-primary group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
