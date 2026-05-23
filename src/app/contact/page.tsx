"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Building2,
  Cpu,
  Shield,
  HeartPulse,
} from "lucide-react";

const offices = [
  { city: "New York", country: "USA", address: "350 Fifth Avenue, Suite 4200", phone: "+1 (212) 555-0180", timezone: "EST (UTC-5)" },
  { city: "Dubai", country: "UAE", address: "DIFC Gate Avenue, Level 14", phone: "+971 4 555 0190", timezone: "GST (UTC+4)" },
  { city: "London", country: "UK", address: "30 St Mary Axe, EC3A 8BF", phone: "+44 20 7946 0180", timezone: "GMT (UTC+0)" },
];

const services = [
  { value: "erp", label: "ERP Implementation / Dynamics 365", icon: Building2 },
  { value: "ai", label: "AI & Workflow Automation", icon: Cpu },
  { value: "it", label: "Managed IT Services", icon: Shield },
  { value: "billing", label: "Medical Billing / RCM", icon: HeartPulse },
  { value: "other", label: "Other / General Inquiry", icon: MessageSquare },
];

const benefits = [
  "Free 30-minute strategy consultation",
  "Senior consultant assigned to your project",
  "Response within 2 business hours",
  "NDA available on request",
  "No sales pressure — genuine advisory",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "",
    service: "", employees: "", message: "", timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="badge-pill badge-white mb-5 inline-flex">Contact Us</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              Let&apos;s Build Something
              <br />
              <span className="gradient-text">Remarkable Together</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Talk to a senior consultant about your business challenges.
              No sales scripts — just a genuine conversation about what&apos;s possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="space-y-6">
              {/* What to expect */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-dark mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-slate">
                      <CheckCircle2 className="w-4 h-4 text-blue-primary shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response time */}
              <div className="bg-blue-primary rounded-2xl p-6 text-white">
                <Clock className="w-8 h-8 text-cyan mb-3" />
                <div className="font-bold text-lg mb-1">Response in 2 Hours</div>
                <div className="text-white/70 text-sm">
                  During business hours (Mon–Fri, 8am–6pm EST).
                  Emergency support available 24/7 for existing clients.
                </div>
              </div>

              {/* Direct contact */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-dark mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <a href="mailto:info@b2cloud.com" className="flex items-center gap-3 text-slate hover:text-blue-primary transition-colors text-sm">
                    <Mail className="w-4 h-4 text-slate-mid" />
                    info@b2cloud.com
                  </a>
                  <a href="tel:+18002256283" className="flex items-center gap-3 text-slate hover:text-blue-primary transition-colors text-sm">
                    <Phone className="w-4 h-4 text-slate-mid" />
                    +1 (800) B2CLOUD
                  </a>
                  <a href="#" className="flex items-center gap-3 text-slate hover:text-blue-primary transition-colors text-sm">
                    <Calendar className="w-4 h-4 text-slate-mid" />
                    Schedule on Calendly
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-dark mb-3">Message Received!</h2>
                  <p className="text-slate mb-6 max-w-md mx-auto">
                    A senior consultant will reach out within 2 business hours to schedule your complimentary strategy consultation.
                  </p>
                  <Link href="/" className="btn-primary">
                    Return to Homepage
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200 p-8">
                  <h2 className="text-2xl font-black text-slate-dark mb-2">Book Your Free Consultation</h2>
                  <p className="text-slate text-sm mb-7">
                    Tell us about your project and we&apos;ll match you with the right specialist.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-dark mb-1.5">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-dark mb-1.5">
                          Company Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Corporation"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-dark mb-1.5">
                          Work Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-dark mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-dark mb-1.5">
                          Service of Interest <span className="text-rose-500">*</span>
                        </label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-dark mb-1.5">
                          Company Size
                        </label>
                        <select
                          name="employees"
                          value={formData.employees}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Select size...</option>
                          <option value="50-100">50–100 employees</option>
                          <option value="100-250">100–250 employees</option>
                          <option value="250-500">250–500 employees</option>
                          <option value="500-1000">500–1,000 employees</option>
                          <option value="1000+">1,000+ employees</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-dark mb-1.5">
                        Project Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select timeline...</option>
                        <option value="immediate">Ready to start now</option>
                        <option value="1-3months">Within 1–3 months</option>
                        <option value="3-6months">Within 3–6 months</option>
                        <option value="exploring">Just exploring options</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-dark mb-1.5">
                        Tell Us About Your Project <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your current challenges, what you're hoping to achieve, or questions you have..."
                        className="form-input resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                      Book Free Consultation
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-xs text-slate-mid text-center">
                      By submitting this form, you agree to our{" "}
                      <Link href="#" className="text-blue-primary hover:underline">Privacy Policy</Link>.
                      We never share your information.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-dark mb-3">
              Global <span className="gradient-text">Offices</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="rounded-2xl border border-slate-200 p-6 card-hover hover:border-blue-primary/30"
              >
                <div className="font-black text-xl text-slate-dark mb-0.5">{office.city}</div>
                <div className="text-blue-primary text-sm font-medium mb-4">{office.country}</div>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-slate text-sm">
                    <MapPin className="w-4 h-4 text-slate-mid shrink-0 mt-0.5" />
                    {office.address}
                  </div>
                  <div className="flex items-center gap-2.5 text-slate text-sm">
                    <Phone className="w-4 h-4 text-slate-mid shrink-0" />
                    {office.phone}
                  </div>
                  <div className="flex items-center gap-2.5 text-slate text-sm">
                    <Clock className="w-4 h-4 text-slate-mid shrink-0" />
                    {office.timezone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
