import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Globe,
  Award,
  Target,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  Handshake,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About B2Cloud International | Enterprise Technology Experts",
  description:
    "15+ years of enterprise ERP, AI automation, and managed IT services. Microsoft Gold Partner serving 500+ clients globally.",
};

const values = [
  {
    icon: Target,
    title: "Outcome-Driven",
    desc: "We measure success by your business results — not hours billed or features shipped. Every engagement starts with defining measurable outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Deep Expertise",
    desc: "Our consultants average 12 years of industry experience. We've seen what works, what fails, and how to navigate complexity.",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    desc: "We embed with your team, not parachute in. Long-term relationships built on trust, transparency, and shared accountability.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Grade",
    desc: "Security-first, compliance-ready infrastructure. SOC 2 Type II certified with ISO 9001 quality management.",
  },
];

const milestones = [
  { year: "2009", event: "Founded in New York with focus on ERP consulting" },
  { year: "2012", event: "Achieved Microsoft Dynamics Gold Partner status" },
  { year: "2015", event: "Launched Managed IT Services practice" },
  { year: "2018", event: "Opened Dubai office; launched Healthcare division" },
  { year: "2020", event: "Launched AI & Digital Transformation practice" },
  { year: "2022", event: "Surpassed 400+ enterprise client milestone" },
  { year: "2024", event: "Named Top 25 ERP Consulting Firm globally" },
];

const leadership = [
  {
    name: "Alexander Chen",
    role: "CEO & Founder",
    bio: "Former McKinsey principal with 20+ years in enterprise technology. Led digital transformations for Fortune 500 companies across 3 continents.",
    initials: "AC",
    color: "bg-blue-primary",
  },
  {
    name: "Priya Sharma",
    role: "CTO & Co-Founder",
    bio: "Microsoft MVP and Dynamics 365 architect. 15 years building enterprise systems at scale, former senior architect at Microsoft.",
    initials: "PS",
    color: "bg-violet-500",
  },
  {
    name: "Marcus Williams",
    role: "VP, Healthcare Practice",
    bio: "Former COO of a regional health system. Deep expertise in revenue cycle management, HIPAA compliance, and EHR integration.",
    initials: "MW",
    color: "bg-rose-500",
  },
  {
    name: "Elena Rodriguez",
    role: "VP, AI & Automation",
    bio: "PhD in Machine Learning from MIT. Led AI transformation programs at three Fortune 200 companies before joining B2Cloud.",
    initials: "ER",
    color: "bg-emerald-500",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="badge-pill badge-white mb-5 inline-flex">About B2Cloud</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              We Build Enterprise
              <br />
              <span className="gradient-text">Technology That Lasts</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              For 15+ years, B2Cloud International has been the trusted technology partner
              for mid-size enterprises navigating complex transformations — from ERP
              modernization to AI-powered operations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Enterprise Clients", icon: Users },
              { value: "15+", label: "Years in Business", icon: Award },
              { value: "40+", label: "Practice Experts", icon: Target },
              { value: "3", label: "Global Offices", icon: Globe },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black gradient-text stat-number mb-1">
                  {s.value}
                </div>
                <div className="text-slate font-medium text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge-pill badge-blue mb-4 inline-flex">Our Mission</div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-dark leading-tight mb-5">
                Technology Should Create
                <span className="gradient-text block">Competitive Advantage</span>
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Too many enterprises are trapped in underperforming systems, manual
                processes, and fragmented data. We exist to change that — one transformation
                at a time.
              </p>
              <p className="text-slate leading-relaxed mb-8">
                Our integrated approach combines ERP expertise, AI capabilities, and
                managed services to ensure your technology investment delivers compounding
                returns year after year.
              </p>
              <Link href="/contact" className="btn-primary">
                Start Your Transformation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex gap-4 p-5 rounded-2xl border border-slate-200 hover:border-blue-primary/30 hover:shadow-md card-hover"
                >
                  <div className="icon-box icon-box-blue shrink-0">
                    <v.icon className="w-5 h-5 text-blue-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-dark mb-1">{v.title}</h3>
                    <p className="text-slate text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge-pill badge-blue mb-4 inline-flex">Our Journey</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-dark mb-4">
              15 Years of
              <span className="gradient-text"> Enterprise Excellence</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-primary/50 via-blue-primary/30 to-transparent" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2 md:text-right flex flex-col items-start md:items-end ml-14 md:ml-0">
                    {i % 2 === 0 ? (
                      <>
                        <div className="text-blue-primary font-black text-lg">{m.year}</div>
                        <div className="text-slate-dark font-medium text-sm mt-1 max-w-xs">
                          {m.event}
                        </div>
                      </>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-primary border-4 border-white shadow-md mt-1 shrink-0" />

                  <div className="md:w-1/2 ml-14 md:ml-0">
                    {i % 2 === 1 ? (
                      <>
                        <div className="text-blue-primary font-black text-lg">{m.year}</div>
                        <div className="text-slate-dark font-medium text-sm mt-1 max-w-xs">
                          {m.event}
                        </div>
                      </>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge-pill badge-blue mb-4 inline-flex">Leadership Team</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-dark">
              Experienced Leaders,{" "}
              <span className="gradient-text">Proven Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((l) => (
              <div
                key={l.name}
                className="rounded-2xl border border-slate-200 p-6 text-center card-hover hover:border-blue-primary/30"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${l.color} mx-auto flex items-center justify-center text-white text-xl font-black mb-4`}
                >
                  {l.initials}
                </div>
                <h3 className="font-bold text-slate-dark">{l.name}</h3>
                <div className="text-blue-primary text-sm font-medium mb-3">{l.role}</div>
                <p className="text-slate text-xs leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-pad section-gradient-blue relative">
        <div className="absolute inset-0 dot-pattern-dark opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge-pill badge-white mb-4 inline-flex">Certifications & Awards</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-10">
            Recognized for Excellence
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Microsoft Dynamics 365 Gold Partner",
              "Salesforce ISV Certified",
              "QuickBooks Elite ProAdvisor",
              "ISO 9001:2015",
              "SOC 2 Type II",
              "AWS Select Partner",
              "Top 25 ERP Consulting Firm 2024",
              "Inc. 5000 Fastest Growing",
            ].map((cert) => (
              <div
                key={cert}
                className="glass-card rounded-xl px-5 py-3 text-white/80 text-sm font-medium"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
