"use client";

import { Search, FileText, Wrench, Rocket, BarChart3, Headphones } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Assessment",
    desc: "Deep-dive into your current systems, workflows, and business objectives. We identify gaps and quantify transformation ROI.",
    duration: "Week 1–2",
    deliverable: "Assessment Report",
  },
  {
    step: "02",
    icon: FileText,
    title: "Solution Architecture",
    desc: "Our architects design a tailored technology blueprint aligned with your industry requirements and growth trajectory.",
    duration: "Week 2–4",
    deliverable: "Solution Blueprint",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Implementation",
    desc: "Agile delivery in sprints with milestone reviews. Configuration, customization, data migration, and quality assurance.",
    duration: "Week 4–16",
    deliverable: "Deployed Solution",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Go-Live & Training",
    desc: "Structured change management, comprehensive end-user training, and hypercare support during cutover.",
    duration: "Week 16–18",
    deliverable: "Trained Teams",
  },
  {
    step: "05",
    icon: BarChart3,
    title: "Optimization",
    desc: "Post-go-live analytics review, KPI alignment, and continuous improvement to maximize your technology investment.",
    duration: "Ongoing",
    deliverable: "Performance Reports",
  },
  {
    step: "06",
    icon: Headphones,
    title: "Managed Support",
    desc: "SLA-backed helpdesk, proactive monitoring, and dedicated account management for long-term partnership.",
    duration: "Ongoing",
    deliverable: "SLA Dashboard",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-pad section-gradient-blue relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern-dark opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-pill badge-white mb-4 inline-flex">Our Methodology</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Proven Delivery
            <br />
            <span className="gradient-text">Framework</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A structured, risk-managed approach that has delivered 1,200+ successful
            implementations with industry-leading on-time delivery rates.
          </p>
        </div>

        {/* Process grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Step number + icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/08 border border-white/12 flex items-center justify-center group-hover:bg-blue-primary/20 transition-colors">
                  <step.icon className="w-5 h-5 text-cyan" />
                </div>
                <span className="text-5xl font-black text-white/08 group-hover:text-white/12 transition-colors leading-none">
                  {step.step}
                </span>
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{step.desc}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/08">
                <div>
                  <div className="text-xs text-white/35 uppercase tracking-wider font-semibold">Timeline</div>
                  <div className="text-white/75 text-sm font-medium mt-0.5">{step.duration}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-white/35 uppercase tracking-wider font-semibold">Deliverable</div>
                  <div className="text-cyan text-sm font-medium mt-0.5">{step.deliverable}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-white/50 text-sm">
            All projects include dedicated project manager, weekly status updates, and risk register.
          </p>
        </div>
      </div>
    </section>
  );
}
