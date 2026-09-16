'use client';

import Link from 'next/link';
import { Mail, Send, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { useCaseModal } from '@/context/case-modal-context';
import Logo from '@/components/Logo';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Specialties', href: '/specialties' },
  { label: 'Partner Hospitals', href: '/hospitals' },
  { label: 'Pricing', href: '/pricing' },
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
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-400 hover:text-primary-950 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-400 hover:text-primary-950 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="mailto:care@medibeeglobal.com"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-400 hover:text-primary-950 flex items-center justify-center transition-colors"
                aria-label="Email"
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
          <div className="flex items-start gap-3 mb-6">
            <ShieldCheck className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
            <p className="text-white/50 text-sm leading-relaxed max-w-3xl">
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
