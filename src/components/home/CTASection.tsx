import Link from "next/link";
import { ArrowRight, Calendar, Phone, Mail } from "lucide-react";

const ctaOptions = [
  {
    icon: Calendar,
    title: "Free 30-Min Strategy Call",
    desc: "Speak with a senior consultant about your specific challenges.",
    action: "Book a Call",
    href: "/contact",
    primary: true,
  },
  {
    icon: Phone,
    title: "Call Us Directly",
    desc: "Speak to an expert immediately — no wait times.",
    action: "+1 (609) 375-7605",
    href: "tel:+16093757605",
    primary: false,
  },
  {
    icon: Mail,
    title: "Send Us a Brief",
    desc: "Share your project details and get a proposal within 24 hours.",
    action: "Email Us",
    href: "mailto:admin@d2cloud.org",
    primary: false,
  },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/20 via-transparent to-cyan/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Ready to Transform
            <br />
            <span className="gradient-text">Your Business?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Join 20+ enterprises that trust B2Cloud International to deliver
            technology-driven transformation with measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {ctaOptions.map((opt) => (
            <Link
              key={opt.title}
              href={opt.href}
              className={`group flex flex-col items-center text-center p-7 rounded-2xl border transition-all duration-300 ${
                opt.primary
                  ? "bg-blue-primary border-blue-primary hover:bg-blue-electric shadow-[0_8px_32px_rgba(26,86,219,0.4)]"
                  : "glass-card hover:bg-white/10 border-white/12"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                  opt.primary ? "bg-white/15" : "bg-white/08"
                }`}
              >
                <opt.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">{opt.title}</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">{opt.desc}</p>
              <span
                className={`flex items-center gap-1.5 text-sm font-semibold ${
                  opt.primary ? "text-white" : "text-cyan"
                } group-hover:gap-2.5 transition-all`}
              >
                {opt.action}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            "No long-term contracts required",
            "Response within 2 business hours",
            "Free initial assessment",
            "NDA available on request",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/50 text-sm">
              <div className="w-1 h-1 rounded-full bg-cyan" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
