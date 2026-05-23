"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Factory,
  Stethoscope,
  Hotel,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  ChevronDown,
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    icon: Factory,
    industry: "Manufacturing",
    company: "MidWest Precision Parts",
    challenge: "Legacy ERP causing production delays, manual inventory reconciliation taking 40+ hours/week",
    solution: "Microsoft Dynamics 365 Finance & Operations implementation with custom manufacturing modules",
    results: [
      { metric: "40%", label: "Reduction in inventory costs" },
      { metric: "60%", label: "Faster production planning" },
      { metric: "$2.4M", label: "Annual savings achieved" },
      { metric: "8 weeks", label: "Time to go-live" },
    ],
    quote: "B2Cloud transformed our operations. We now have real-time visibility into every aspect of our production floor.",
    author: "James Whitfield, COO",
    tag: "ERP Implementation",
    duration: "12 weeks",
    color: "blue",
  },
  {
    id: 2,
    icon: Stethoscope,
    industry: "Healthcare",
    company: "Regional Medical Associates",
    challenge: "45% claim denial rate, fragmented billing systems, and 90-day AR cycle causing cash flow strain",
    solution: "End-to-end revenue cycle management overhaul with AI-driven denial management and insurance verification",
    results: [
      { metric: "35%", label: "Reduction in claim denials" },
      { metric: "28 days", label: "Average AR cycle (down from 90)" },
      { metric: "$850K", label: "Additional revenue recovered" },
      { metric: "99.2%", label: "Clean claim submission rate" },
    ],
    quote: "Our revenue cycle has never performed better. The denial reduction alone paid for the engagement 3x over.",
    author: "Dr. Sarah Chen, CFO",
    tag: "Medical Billing",
    duration: "8 weeks",
    color: "rose",
  },
  {
    id: 3,
    icon: Hotel,
    industry: "Hospitality",
    company: "Pinnacle Hotels Group",
    challenge: "12 properties running disconnected systems, no consolidated P&L visibility, manual F&B cost tracking",
    solution: "Unified Power BI analytics platform integrated with PMS and POS systems across all properties",
    results: [
      { metric: "100%", label: "Real-time P&L visibility" },
      { metric: "22%", label: "Reduction in F&B waste" },
      { metric: "3hrs", label: "Monthly close (down from 5 days)" },
      { metric: "12", label: "Properties unified on one platform" },
    ],
    quote: "We finally have one version of the truth across our entire portfolio. Decision-making has completely transformed.",
    author: "Michael Torres, VP Finance",
    tag: "AI & Analytics",
    duration: "10 weeks",
    color: "amber",
  },
];

const colorMap: Record<string, { badge: string; accent: string; border: string; metric: string }> = {
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    accent: "bg-blue-primary",
    border: "border-blue-200",
    metric: "text-blue-primary",
  },
  rose: {
    badge: "bg-rose-50 text-rose-700 border-rose-100",
    accent: "bg-rose-500",
    border: "border-rose-200",
    metric: "text-rose-600",
  },
  amber: {
    badge: "bg-amber-50 text-amber-700 border-amber-100",
    accent: "bg-amber-500",
    border: "border-amber-200",
    metric: "text-amber-600",
  },
};

export default function CaseStudiesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <div className="badge-pill badge-blue mb-4 inline-flex">Case Studies</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-dark leading-tight">
              Results That
              <br />
              <span className="gradient-text">Speak for Themselves</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="btn-outline-blue self-start md:self-auto"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Case study cards */}
        <div className="space-y-5">
          {caseStudies.map((cs) => {
            const colors = colorMap[cs.color];
            const isExpanded = expanded === cs.id;

            return (
              <div
                key={cs.id}
                className={`rounded-2xl border ${colors.border} bg-white overflow-hidden transition-all duration-300 ${isExpanded ? "shadow-[0_8px_40px_rgba(0,0,0,0.08)]" : "hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"}`}
              >
                {/* Card header (always visible) */}
                <button
                  onClick={() => setExpanded(isExpanded ? null : cs.id)}
                  className="w-full text-left p-6 flex items-start gap-5"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.accent} flex items-center justify-center shrink-0`}
                  >
                    <cs.icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`badge-pill text-xs border ${colors.badge}`}>
                        {cs.tag}
                      </span>
                      <span className="text-xs text-slate-mid">{cs.industry}</span>
                    </div>
                    <h3 className="font-bold text-slate-dark text-lg">{cs.company}</h3>
                    <p className="text-slate text-sm mt-1 leading-relaxed line-clamp-2">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Quick metrics */}
                  <div className="hidden md:flex items-center gap-6 shrink-0 mr-4">
                    <div className="text-center">
                      <div className={`text-xl font-black stat-number ${colors.metric}`}>
                        {cs.results[0].metric}
                      </div>
                      <div className="text-xs text-slate-mid w-20">{cs.results[0].label}</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-xl font-black stat-number ${colors.metric}`}>
                        {cs.results[2].metric}
                      </div>
                      <div className="text-xs text-slate-mid w-20">{cs.results[2].label}</div>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 mt-1 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left: Details */}
                      <div>
                        <h4 className="font-semibold text-slate-dark text-sm uppercase tracking-wider mb-3">
                          The Challenge
                        </h4>
                        <p className="text-slate text-sm leading-relaxed mb-5">{cs.challenge}</p>

                        <h4 className="font-semibold text-slate-dark text-sm uppercase tracking-wider mb-3">
                          Our Solution
                        </h4>
                        <p className="text-slate text-sm leading-relaxed mb-5">{cs.solution}</p>

                        {/* Quote */}
                        <div className="bg-surface rounded-xl p-4 border-l-4 border-blue-primary">
                          <p className="text-slate-700 text-sm italic leading-relaxed mb-2">
                            &ldquo;{cs.quote}&rdquo;
                          </p>
                          <div className="text-xs font-semibold text-slate-500">
                            — {cs.author}
                          </div>
                        </div>
                      </div>

                      {/* Right: Results */}
                      <div>
                        <h4 className="font-semibold text-slate-dark text-sm uppercase tracking-wider mb-3">
                          Measurable Results
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {cs.results.map((r) => (
                            <div
                              key={r.label}
                              className="bg-surface rounded-xl p-4 border border-slate-200"
                            >
                              <div className={`text-2xl font-black stat-number ${colors.metric} mb-1`}>
                                {r.metric}
                              </div>
                              <div className="text-xs text-slate leading-tight">{r.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-5">
                          <div className="flex items-center gap-1.5 text-sm text-slate">
                            <Clock className="w-4 h-4 text-slate-mid" />
                            Delivered in {cs.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
