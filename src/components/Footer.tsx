'use client';

import Link from 'next/link';
import { Mail, Send, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { useCaseModal } from '@/context/case-modal-context';
import Logo from '@/components/Logo';

const quickLinks = [
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

  return (
    <footer id="contact" className="bg-primary-950 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo
                asLink
                href="/"
                variant="card"
                height={34}
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Our Vision, Your Care. A trusted healthcare journey platform connecting Cambodian patients with India&apos;s leading hospitals.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-400 hover:text-primary-950 flex items-center justify-center transition-all hover:scale-105"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-400 hover:text-primary-950 flex items-center justify-center transition-all hover:scale-105"
                aria-label="Telegram"
                title="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-400 hover:text-primary-950 flex items-center justify-center transition-all hover:scale-105"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-400 hover:text-primary-950 flex items-center justify-center transition-all hover:scale-105"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66c0-.92-.74-1.66-1.66-1.66Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-400 hover:text-primary-950 flex items-center justify-center transition-all hover:scale-105"
                aria-label="YouTube"
                title="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:care@medibeeglobal.com"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-400 hover:text-primary-950 flex items-center justify-center transition-all hover:scale-105"
                aria-label="Email"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <span>#111, St. 09B, Thmorda Village,<br />Sangkat Kontouk, Khan Kombol,<br />Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <a href="tel:+855010707404" className="hover:text-white transition-colors">+855-010707404</a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <a href="mailto:care@medibeeglobal.com" className="hover:text-white transition-colors">care@medibeeglobal.com</a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold text-white mb-5">Ready to Start?</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Submit your medical inquiry today and a Medibeeglobal dedicated case manager will reach out within 24 hours.
            </p>
            <button
              onClick={handleCta}
              className="bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-6 py-3 rounded-full transition-all hover:scale-105 w-full cursor-pointer shadow-soft"
            >
              Submit Your Case
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex items-start gap-2.5 sm:gap-3 mb-6 w-full">
            <ShieldCheck className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed flex-1 w-full">
              <span className="font-semibold text-white/70">Disclaimer:</span> Medibeeglobal is an independent medical coordination platform and does not provide medical diagnosis or direct treatment. All medical assessments and treatments are delivered by licensed healthcare practitioners and partner hospitals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
            <p className="text-white/40 text-sm">
              © 2026 Medibeeglobal. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-white/40 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
