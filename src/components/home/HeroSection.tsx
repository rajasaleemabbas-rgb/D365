"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, TrendingUp, Users, Globe } from "lucide-react";

const stats = [
  { value: "20+", label: "Enterprise Clients", icon: Users },
  { value: "98%", label: "Client Retention", icon: TrendingUp },
  { value: "15+", label: "Years Experience", icon: Globe },
  { value: "10+", label: "Industry Experts", icon: CheckCircle2 },
];

const trustedBy = [
  "Microsoft Partner", "Salesforce ISV", "QuickBooks Elite", "AWS Partner", "ISO Certified"
];

const highlights = [
  "Microsoft Dynamics 365 Certified Experts",
  "AI-powered workflow automation",
  "SLA-guaranteed managed services",
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden flex flex-col">
      {/* Background layers */}
      <div className="absolute inset-0 dot-pattern-dark opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/60" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-primary/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/5 w-80 h-80 rounded-full bg-cyan/08 blur-3xl animate-float-reverse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-primary/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {/* Badge */}
              <div className="badge-pill badge-white mb-6 inline-flex">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                Microsoft Dynamics 365 Certified Experts
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6">
                Enterprise Technology
                <br />
                <span className="gradient-text">That Drives Real</span>
                <br />
                Business Outcomes
              </h1>

              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                From ERP implementation to AI workflow automation — B2Cloud International
                delivers end-to-end digital transformation for mid-size enterprises
                across manufacturing, healthcare, and hospitality.
              </p>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-10">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-white/80 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary btn-primary-lg">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/case-studies" className="btn-outline-white btn-primary-lg">
                  <Play className="w-4 h-4" />
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Right column — Stats card */}
            <div className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="glass-card rounded-3xl p-8 blue-glow">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className={`glass-card rounded-2xl p-5 transition-all duration-500`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <stat.icon className="w-5 h-5 text-cyan mb-3" />
                      <div className="stat-number text-3xl font-black text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-white/55 text-xs font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Client logos strip */}
                <div className="border-t border-white/10 pt-5">
                  <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">
                    Certified & Trusted Partner
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trustedBy.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-lg bg-white/08 text-white/60 text-xs font-medium border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live activity indicator */}
                <div className="mt-5 flex items-center gap-3 bg-white/05 rounded-xl p-3.5">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">Active Implementations</div>
                    <div className="text-white/50 text-xs">3 projects in progress</div>
                  </div>
                  <div className="ml-auto text-emerald-400 font-bold text-sm">Live</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
