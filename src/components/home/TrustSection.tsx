"use client";

import { useEffect, useRef } from "react";
import { Award, Shield, CheckCircle2, Star } from "lucide-react";

const partners = [
  { name: "Microsoft Partner", tier: "Gold" },
  { name: "Salesforce ISV", tier: "Certified" },
  { name: "QuickBooks", tier: "Elite ProAdvisor" },
  { name: "AWS Partner", tier: "Select" },
  { name: "Power Platform", tier: "Certified" },
  { name: "Azure", tier: "Solutions Partner" },
  { name: "ISO 9001", tier: "Certified" },
  { name: "SOC 2 Type II", tier: "Compliant" },
];

const trustMetrics = [
  {
    icon: Award,
    label: "Industry Awards",
    value: "12",
    desc: "Top ERP Consulting Firm 2024",
  },
  {
    icon: Star,
    label: "Client Satisfaction",
    value: "4.9/5",
    desc: "Average rating across 500+ clients",
  },
  {
    icon: Shield,
    label: "Security Compliance",
    value: "SOC 2",
    desc: "Type II certified infrastructure",
  },
  {
    icon: CheckCircle2,
    label: "Projects Delivered",
    value: "1,200+",
    desc: "On-time, on-budget implementations",
  },
];

export default function TrustSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white border-b border-slate-100">
      {/* Trust metrics bar */}
      <div className="bg-surface border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustMetrics.map((m) => (
              <div key={m.label} className="flex items-start gap-3">
                <div className="icon-box icon-box-blue shrink-0">
                  <m.icon className="w-5 h-5 text-blue-primary" />
                </div>
                <div>
                  <div className="font-black text-xl text-slate-dark stat-number">
                    {m.value}
                  </div>
                  <div className="font-semibold text-sm text-slate-700">{m.label}</div>
                  <div className="text-xs text-slate-mid mt-0.5">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner logos marquee */}
      <div className="py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
          <p className="text-center text-xs font-semibold text-slate-mid uppercase tracking-widest">
            Certified & Recognized Partnerships
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="marquee-track gap-4 px-4" style={{ animationDuration: "25s" }}>
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-surface border border-slate-200 hover:border-blue-primary/30 hover:bg-blue-light/30 transition-all duration-200 cursor-default shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-blue-primary/40" />
                <div>
                  <div className="font-semibold text-sm text-slate-800">{partner.name}</div>
                  <div className="text-xs text-blue-primary font-medium">{partner.tier}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
