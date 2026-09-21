'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight, Clock, Sparkles, ChevronRight, ArrowUp } from 'lucide-react';
import { useCaseModal } from '@/context/case-modal-context';
import Logo from '@/components/Logo';

interface QuickLinkItem {
  label: string;
  href: string;
}

const quickLinks: QuickLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Doctors & Specialists', href: '/doctors' },
  { label: 'Partner Hospitals', href: '/hospitals' },
  { label: 'Treatments', href: '/specialties' },
  { label: 'Medical Destinations', href: '/destinations' },
  { label: 'Patient Journey', href: '/patient-journey' },
  { label: 'Medical Visa', href: '/medical-visa' },
  { label: 'Hotel & Travel', href: '/travel-assistance' },
  { label: 'Patient Stories', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer({ onSubmitCase }: { onSubmitCase?: () => void }) {
  const { openCaseModal } = useCaseModal();

  const handleCta = () => {
    if (onSubmitCase) {
      onSubmitCase();
    } else {
      openCaseModal();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Split quick links into two balanced columns for clean dual-column layout
  const col1Links = quickLinks.slice(0, 6);
  const col2Links = quickLinks.slice(6);

  return (
    <footer id="contact" className="relative bg-[#071426] text-white pt-16 pb-8 border-t border-white/10 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust & Value Highlights Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12 mb-12 border-b border-white/10">
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-accent-400/10 border border-accent-400/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-accent-400" />
            </div>
            <div>
              <h5 className="text-white font-semibold text-sm">Accredited Network</h5>
              <p className="text-white/50 text-xs">JCI & NABH premier partner hospitals</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-accent-400/10 border border-accent-400/20 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-accent-400" />
            </div>
            <div>
              <h5 className="text-white font-semibold text-sm">24-Hour Response</h5>
              <p className="text-white/50 text-xs">Free doctor opinion & estimated quote</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-accent-400/10 border border-accent-400/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-accent-400" />
            </div>
            <div>
              <h5 className="text-white font-semibold text-sm">Comprehensive Care</h5>
              <p className="text-white/50 text-xs">Visa, airport pickup & translation support</p>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <Logo
                  asLink
                  href="/"
                  variant="card"
                  height={34}
                />
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Our Vision, Your Care. A trusted medical tourism platform connecting Cambodian patients with India&apos;s leading accredited multi-specialty hospitals.
              </p>

              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
                Cross-Border Healthcare Partner
              </div>
            </div>

            {/* Social Media Icons: Facebook, Instagram, WhatsApp, LinkedIn, YouTube */}
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Connect With Us</p>
              <div className="flex flex-wrap gap-2.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-accent-400 hover:text-primary-950 hover:border-accent-400 text-white/80 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-accent-400 hover:text-primary-950 hover:border-accent-400 text-white/80 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/855010707404"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-accent-400 hover:text-primary-950 hover:border-accent-400 text-white/80 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-accent-400 hover:text-primary-950 hover:border-accent-400 text-white/80 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66Z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-accent-400 hover:text-primary-950 hover:border-accent-400 text-white/80 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Redesigned Quick Links Section (Dual Column Layout) */}
          <div className="lg:pl-2 xl:pl-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-4 bg-accent-400 rounded-full" />
              <h4 className="font-bold text-white tracking-wide text-base">Quick Links</h4>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {/* Column 1 */}
              <ul className="space-y-2">
                {col1Links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1.5 text-white/65 hover:text-white text-xs sm:text-sm transition-all duration-200 py-0.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-accent-400/60 group-hover:text-accent-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                      <span className="group-hover:translate-x-0.5 transition-transform truncate">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Column 2 */}
              <ul className="space-y-2">
                {col2Links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1.5 text-white/65 hover:text-white text-xs sm:text-sm transition-all duration-200 py-0.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-accent-400/60 group-hover:text-accent-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                      <span className="group-hover:translate-x-0.5 transition-transform truncate">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="md:col-span-2 lg:col-span-1 lg:pl-8 xl:pl-14">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-4 bg-accent-400 rounded-full" />
              <h4 className="font-bold text-white tracking-wide text-base">Contact Us</h4>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm mb-6">
              <li className="flex items-start gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-accent-400 flex-shrink-0 mt-1" />
                <span className="leading-relaxed">
                  #111, St. 09B, Thmorda Village,<br />
                  Sangkat Kontouk, Khan Kombol,<br />
                  Phnom Penh, Cambodia
                </span>
              </li>

              <li className="flex items-center gap-2.5 text-white/70">
                <Phone className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <a
                  href="tel:+855010707404"
                  className="hover:text-white hover:underline transition-colors tracking-wide"
                >
                  +855-010707404
                </a>
              </li>

              <li className="flex items-center gap-2.5 text-white/70">
                <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <a
                  href="mailto:care@medibeeglobal.com"
                  className="hover:text-white hover:underline transition-colors truncate"
                >
                  care@medibeeglobal.com
                </a>
              </li>
            </ul>

            {/* Submit Your Case CTA */}
            <div className="pt-2">
              <button
                onClick={handleCta}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-300 text-primary-950 font-bold px-5 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-accent-400/25 text-sm cursor-pointer"
              >
                <span>Submit Your Case</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-white/40 mt-2">
                🔒 Free doctor review & treatment estimate
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <ShieldCheck className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
              <span className="font-semibold text-white/70">Disclaimer:</span> Medibeeglobal is an independent medical coordination platform and does not provide medical diagnosis or direct treatment. All medical assessments, surgical procedures, and treatments are delivered directly by accredited hospitals and licensed healthcare practitioners.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10 text-xs sm:text-sm">
          <p className="text-white/40 text-center sm:text-left">
            © 2026 Medibeeglobal. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/40 hover:text-accent-400 transition-colors ml-2 cursor-pointer"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
