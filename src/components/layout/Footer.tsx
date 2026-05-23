import Link from "next/link";
import {
  BarChart3,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Share2,
  ArrowRight,
  Building2,
  Cpu,
  Shield,
  HeartPulse,
} from "lucide-react";

const services = [
  { label: "ERP Solutions", href: "/erp-solutions", icon: Building2 },
  { label: "AI & Automation", href: "/ai-automation", icon: Cpu },
  { label: "Managed IT Services", href: "/managed-it", icon: Shield },
  { label: "Medical Billing", href: "/medical-billing", icon: HeartPulse },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const industries = [
  { label: "Manufacturing", href: "/industries#manufacturing" },
  { label: "Healthcare", href: "/industries#healthcare" },
  { label: "Hospitality", href: "/industries#hospitality" },
  { label: "Financial Services", href: "/industries#finance" },
  { label: "Distribution", href: "/industries#distribution" },
];

const certifications = [
  "Microsoft Solutions Partner",
  "Dynamics 365 Certified",
  "ISO 9001:2015",
  "SOC 2 Type II",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-blue-primary via-blue-electric to-cyan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                Ready to transform your operations?
              </h3>
              <p className="text-blue-100 text-sm mt-1">
                Schedule a free 30-minute consultation with our enterprise experts.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/contact"
                className="bg-white text-blue-primary font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 text-sm shadow-lg hover:shadow-white/20 hover:translate-y-[-1px]"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="tel:+18002256283"
                className="btn-outline-white text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-primary to-cyan flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg text-white">B2Cloud</span>
                <span className="text-xs text-white/60 font-medium">International</span>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Enterprise ERP, AI automation, and managed IT solutions that drive
              measurable business outcomes for mid-size enterprises worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:info@b2cloud.com"
                className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan shrink-0" />
                info@b2cloud.com
              </a>
              <a
                href="tel:+18002256283"
                className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan shrink-0" />
                +1 (800) B2CLOUD
              </a>
              <div className="flex items-start gap-2.5 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                <span>New York, NY | Dubai, UAE | London, UK</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2.5">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/08 hover:bg-blue-primary border border-white/10 flex items-center justify-center transition-all duration-200 hover:border-blue-primary"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/08 hover:bg-blue-primary border border-white/10 flex items-center justify-center transition-all duration-200 hover:border-blue-primary"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors group"
                  >
                    <item.icon className="w-3.5 h-3.5 text-cyan/60 group-hover:text-cyan" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 mt-6">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {industries.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Certifications
            </h4>
            <div className="space-y-2.5">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 text-white/60 text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                  {cert}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-3">
                Newsletter
              </h4>
              <p className="text-white/50 text-xs mb-3">
                Get insights on ERP, AI, and digital transformation.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/08 border border-white/12 text-white text-sm px-3 py-2 rounded-lg placeholder:text-white/35 focus:outline-none focus:border-blue-primary/60 transition-colors min-w-0"
                />
                <button
                  type="submit"
                  className="bg-blue-primary hover:bg-blue-electric px-3 py-2 rounded-lg transition-colors shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/08">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} B2Cloud International. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
