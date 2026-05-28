import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Stethoscope,
  Hotel,
  Briefcase,
  HardHat,
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | Enterprise Technology Results | B2Cloud International",
  description:
    "Real-world case studies showing how B2Cloud International delivers measurable ROI through ERP implementation, AI automation, and managed IT services.",
};

const caseStudies = [
  {
    icon: Factory,
    industry: "Manufacturing",
    company: "MidWest Precision Parts",
    role: "James Whitfield, COO",
    title: "Dynamics 365 Cuts Inventory Costs 40% for Precision Manufacturer",
    challenge: "A 350-person manufacturer running a 15-year-old ERP struggled with manual inventory reconciliation taking 40+ hours/week, zero real-time production visibility, and finance closing taking 12 business days.",
    solution: "Full Microsoft Dynamics 365 Finance & Operations implementation with custom manufacturing execution modules, warehouse management integration, and executive Power BI dashboards.",
    results: [
      { metric: "40%", label: "Inventory cost reduction" },
      { metric: "60%", label: "Faster production planning" },
      { metric: "$2.4M", label: "Annual savings" },
      { metric: "3 days", label: "Month-end close (was 12)" },
    ],
    quote: "B2Cloud transformed our operations. We now have real-time visibility into every aspect of our production floor. The ROI was evident within the first quarter.",
    timeline: "12 weeks",
    tag: "ERP Implementation",
    color: "blue",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    icon: Stethoscope,
    industry: "Healthcare",
    company: "Regional Medical Associates",
    role: "Dr. Sarah Chen, CFO",
    title: "Revenue Cycle Overhaul Recovers $850K and Cuts Denials by 35%",
    challenge: "A 12-physician group with a 45% claim denial rate and a 90-day AR cycle. Billing team spending 60% of their time on re-billing rather than preventive action.",
    solution: "Complete revenue cycle transformation including denial management automation, AI-powered coding review, real-time eligibility verification, and payer-specific optimization.",
    results: [
      { metric: "35%", label: "Denial reduction" },
      { metric: "28 days", label: "AR cycle (was 90)" },
      { metric: "$850K", label: "Revenue recovered" },
      { metric: "99.2%", label: "Clean claim rate" },
    ],
    quote: "Our revenue cycle has never performed better. The denial reduction alone paid for the engagement 3x over in the first year.",
    timeline: "8 weeks",
    tag: "Medical Billing",
    color: "rose",
    gradient: "from-rose-500 to-pink-700",
  },
  {
    icon: Hotel,
    industry: "Hospitality",
    company: "Pinnacle Hotels Group",
    role: "Michael Torres, VP Finance",
    title: "Multi-Property Analytics Platform Cuts Close from 5 Days to 3 Hours",
    challenge: "A 12-property hotel group running disconnected PMS and POS systems per property, with no consolidated P&L, a 5-day monthly close, and executives flying blind on performance.",
    solution: "Unified Power BI analytics platform integrated with all PMS, POS, and accounting systems across 12 properties. Custom executive dashboards and automated daily/weekly reporting.",
    results: [
      { metric: "3 hours", label: "Monthly close (was 5 days)" },
      { metric: "22%", label: "F&B waste reduction" },
      { metric: "100%", label: "Real-time P&L visibility" },
      { metric: "12", label: "Properties unified" },
    ],
    quote: "We finally have one version of the truth across our entire portfolio. Decision-making speed has completely transformed.",
    timeline: "10 weeks",
    tag: "AI & Analytics",
    color: "amber",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: HardHat,
    industry: "Construction",
    company: "TechLogic Construction",
    role: "Sarah Mitchell, IT Director",
    title: "Managed IT Services Takes ERP Uptime from 94% to 99.8%",
    challenge: "A national construction firm with an ERP uptime of 94%, a 4-hour average support response time, and $200K/year in emergency consulting fees for recurring system issues.",
    solution: "Comprehensive ERP managed services contract covering Dynamics 365, proactive monitoring, patching, helpdesk, and a dedicated success manager — all under a fixed monthly SLA.",
    results: [
      { metric: "99.8%", label: "ERP uptime achieved" },
      { metric: "< 2hrs", label: "Average response time" },
      { metric: "60%", label: "IT cost reduction" },
      { metric: "$180K", label: "Saved vs. ad-hoc consulting" },
    ],
    quote: "Professional, proactive, and genuinely invested in our success. This wasn't a vendor relationship — it became a true partnership.",
    timeline: "Ongoing",
    tag: "Managed IT",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    icon: Briefcase,
    industry: "Financial Services",
    company: "NorthBridge Capital Partners",
    role: "Amanda Torres, CFO",
    title: "AI Automation Eliminates 25 Manual Processes Across Finance Operations",
    challenge: "A $500M fund administrator with heavily manual month-end processes, 3-week reporting cycles, and a finance team spending 70% of their time on data assembly.",
    solution: "AI-driven workflow automation replacing 25 manual finance processes, integrated with Dynamics 365 for real-time consolidation, and Power BI for investor-ready reporting.",
    results: [
      { metric: "25", label: "Manual processes eliminated" },
      { metric: "3 days", label: "Reporting cycle (was 3 weeks)" },
      { metric: "70%", label: "Finance team time freed" },
      { metric: "4.5x", label: "ROI in year one" },
    ],
    quote: "We redeployed the equivalent of 2 FTEs to higher-value analysis work. The automation paid for itself in under 6 months.",
    timeline: "14 weeks",
    tag: "AI Automation",
    color: "violet",
    gradient: "from-violet-500 to-purple-700",
  },
];

const colorMetrics: Record<string, string> = {
  blue: "text-blue-primary",
  rose: "text-rose-600",
  amber: "text-amber-600",
  emerald: "text-emerald-600",
  violet: "text-violet-600",
};

const colorBadge: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  rose: "bg-rose-50 text-rose-700 border-rose-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  violet: "bg-violet-50 text-violet-700 border-violet-200",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="badge-pill badge-white mb-5 inline-flex">Case Studies</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Proof Over
              <br />
              <span className="gradient-text">Promises</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Every engagement is built around measurable outcomes. Here are a few examples
              of the transformation we&apos;ve delivered for clients across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <div
                key={cs.company}
                className={`grid lg:grid-cols-2 gap-8 items-start pb-12 ${
                  i < caseStudies.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                {/* Left */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cs.gradient} flex items-center justify-center`}
                    >
                      <cs.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className={`badge-pill text-xs border ${colorBadge[cs.color]}`}>
                        {cs.tag}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-dark leading-tight mb-3">
                    {cs.title}
                  </h2>
                  <div className="text-sm text-slate-mid mb-4">
                    {cs.company} · {cs.industry}
                  </div>

                  <h3 className="font-semibold text-slate-dark text-sm uppercase tracking-wider mb-2">
                    The Challenge
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mb-4">{cs.challenge}</p>

                  <h3 className="font-semibold text-slate-dark text-sm uppercase tracking-wider mb-2">
                    Our Solution
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mb-5">{cs.solution}</p>

                  <div className="bg-surface rounded-xl p-4 border-l-4 border-blue-primary mb-5">
                    <p className="text-slate-700 text-sm italic leading-relaxed mb-2">
                      &ldquo;{cs.quote}&rdquo;
                    </p>
                    <div className="text-xs font-semibold text-slate-500">— {cs.role}</div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate">
                    <Clock className="w-4 h-4 text-slate-mid" />
                    Project delivered in {cs.timeline}
                  </div>
                </div>

                {/* Right: Results */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-surface rounded-2xl p-7 border border-slate-200">
                    <div className="text-xs font-semibold text-slate-mid uppercase tracking-wider mb-5">
                      Measurable Results
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {cs.results.map((r) => (
                        <div
                          key={r.label}
                          className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm"
                        >
                          <div className={`text-3xl font-black stat-number ${colorMetrics[cs.color]} mb-1`}>
                            {r.metric}
                          </div>
                          <div className="text-slate text-xs leading-relaxed">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-white/60 mb-8">
            Let&apos;s discuss your specific challenges and what results are possible for your organization.
          </p>
          <Link href="/contact" className="btn-primary btn-primary-lg">
            Start Your Transformation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
