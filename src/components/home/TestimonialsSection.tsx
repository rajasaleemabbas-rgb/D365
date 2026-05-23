"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "David Harrington",
    role: "CFO",
    company: "Apex Manufacturing Group",
    industry: "Manufacturing",
    text: "B2Cloud's Dynamics 365 implementation gave us real-time financial visibility across 6 plants for the first time. Our month-end close dropped from 12 days to 3. The ROI was evident within the first quarter.",
    rating: 5,
    initials: "DH",
    color: "bg-blue-primary",
  },
  {
    name: "Dr. Patricia Nguyen",
    role: "Practice Administrator",
    company: "Southern Healthcare Network",
    industry: "Healthcare",
    text: "Their medical billing team transformed our revenue cycle. Claim denials down 38%, and collections up significantly. They became a true extension of our team, not just a vendor.",
    rating: 5,
    initials: "PN",
    color: "bg-rose-500",
  },
  {
    name: "Robert Castillo",
    role: "COO",
    company: "Grand Harbour Hotels",
    industry: "Hospitality",
    text: "We struggled for years to get consolidated reporting across 8 properties. B2Cloud built our Power BI platform in 6 weeks. Now I start every morning with a 2-minute dashboard review instead of waiting for reports.",
    rating: 5,
    initials: "RC",
    color: "bg-amber-500",
  },
  {
    name: "Sarah Mitchell",
    role: "IT Director",
    company: "TechLogic Distribution",
    industry: "Distribution",
    text: "The managed IT services contract paid for itself. Our ERP uptime went from 94% to 99.8%, and our helpdesk response time dropped to under 2 hours. Professional, proactive, and genuinely invested.",
    rating: 5,
    initials: "SM",
    color: "bg-emerald-500",
  },
  {
    name: "James Kowalski",
    role: "VP Operations",
    company: "NorthStar Fabrications",
    industry: "Manufacturing",
    text: "The AI workflow automation B2Cloud implemented eliminated 25 manual processes our team was doing daily. We redeployed those hours to value-adding work. This wasn't just an IT project — it was a business transformation.",
    rating: 5,
    initials: "JK",
    color: "bg-violet-500",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className="section-pad section-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-pill badge-blue mb-4 inline-flex">Testimonials</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-dark leading-tight">
            Trusted by Enterprise
            <br />
            <span className="gradient-text">Leaders Worldwide</span>
          </h2>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-[0_8px_48px_rgba(0,0,0,0.06)] relative">
            {/* Quote mark */}
            <div className="quote-icon absolute top-6 left-8 select-none">&ldquo;</div>

            {/* Stars */}
            <div className="flex gap-1 mb-5 justify-center">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <blockquote className="text-slate-dark text-xl md:text-2xl font-medium leading-relaxed text-center mb-8 relative z-10">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div
                className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}
              >
                {t.initials}
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-dark">{t.name}</div>
                <div className="text-sm text-slate-mid">
                  {t.role} · {t.company}
                </div>
                <div className="text-xs text-blue-primary font-medium mt-0.5">
                  {t.industry}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate hover:text-blue-primary hover:border-blue-primary/40 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 h-2.5 bg-blue-primary"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate hover:text-blue-primary hover:border-blue-primary/40 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mini avatars row */}
        <div className="flex justify-center gap-3 flex-wrap">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border transition-all duration-200 ${
                i === active
                  ? "border-blue-primary bg-blue-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-blue-primary/30"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold`}
              >
                {t.initials}
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-xs font-semibold text-slate-dark">{t.name}</div>
                <div className="text-xs text-slate-mid">{t.industry}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
