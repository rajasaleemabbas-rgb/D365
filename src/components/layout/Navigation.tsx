"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Cpu,
  BarChart3,
  Shield,
  HeartPulse,
  Building2,
  Phone,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      {
        label: "ERP Solutions",
        href: "/erp-solutions",
        icon: Building2,
        desc: "Dynamics 365, QuickBooks & Salesforce",
      },
      {
        label: "AI & Automation",
        href: "/ai-automation",
        icon: Cpu,
        desc: "Workflow automation & digital transformation",
      },
      {
        label: "Managed IT",
        href: "/managed-it",
        icon: Shield,
        desc: "SLA-based helpdesk & infrastructure support",
      },
      {
        label: "Medical Billing",
        href: "/medical-billing",
        icon: HeartPulse,
        desc: "Revenue cycle & claims management",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-primary to-cyan flex items-center justify-center shadow-lg group-hover:shadow-blue-primary/30 transition-shadow duration-300">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-navy" : "text-white"
                }`}
              >
                B2Cloud
              </span>
              <span
                className={`text-xs font-medium transition-colors duration-300 ${
                  scrolled ? "text-slate-mid" : "text-white/70"
                }`}
              >
                International
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      scrolled
                        ? "text-slate-700 hover:text-blue-primary hover:bg-blue-light/40"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-100 p-2 animate-fade-in-down">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group ${
                            isActive(child.href)
                              ? "bg-blue-light/60 text-blue-primary"
                              : "hover:bg-slate-50 text-slate-700 hover:text-blue-primary"
                          }`}
                        >
                          <div className="icon-box icon-box-blue mt-0.5 w-9 h-9 rounded-lg shrink-0">
                            <child.icon className="w-4 h-4 text-blue-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm">
                              {child.label}
                            </div>
                            <div className="text-xs text-slate-mid mt-0.5">
                              {child.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActive(item.href)
                      ? scrolled
                        ? "text-blue-primary bg-blue-light/40"
                        : "text-white bg-white/15"
                      : scrolled
                      ? "text-slate-700 hover:text-blue-primary hover:bg-blue-light/40"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            <div className="ml-3 flex items-center gap-2">
              <Link
                href="tel:+1-800-B2CLOUD"
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  scrolled ? "text-slate-600 hover:text-blue-primary" : "text-white/80 hover:text-white"
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">+1 (800) B2CLOUD</span>
              </Link>
              <Link
                href="/contact"
                className="btn-primary text-sm px-5 py-2.5 ml-2"
              >
                Get a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-100 mb-4 overflow-hidden animate-fade-in-down">
            <div className="p-4 space-y-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <div className="px-3 py-2 text-xs font-semibold text-slate-mid uppercase tracking-wider mt-2 mb-1">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          isActive(child.href)
                            ? "text-blue-primary bg-blue-light/50"
                            : "text-slate-700 hover:text-blue-primary hover:bg-slate-50"
                        }`}
                      >
                        <child.icon className="w-4 h-4 shrink-0" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-blue-primary bg-blue-light/50"
                        : "text-slate-700 hover:text-blue-primary hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}

              <div className="pt-3 border-t border-slate-100 mt-2">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
