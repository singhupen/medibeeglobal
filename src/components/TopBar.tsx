'use client';

import { Mail, Phone, Send, MessageSquare } from 'lucide-react';
import { themeConfig } from '@/lib/theme';

export default function TopBar() {
  const { contact } = themeConfig.brand;

  return (
    <div className="bg-primary-950 text-white/85 text-xs border-b border-primary-900/60 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
        {/* Left: Email & Phone Number */}
        <div className="flex items-center gap-3 sm:gap-6 overflow-hidden">
          <a
            href={contact.emailMailto}
            className="inline-flex items-center gap-1.5 hover:text-accent-400 transition-colors truncate"
            title={`Email: ${contact.email}`}
          >
            <Mail className="w-3.5 h-3.5 text-accent-400 flex-shrink-0" />
            <span className="font-medium truncate">{contact.email}</span>
          </a>

          <span className="text-white/25 hidden sm:inline select-none">•</span>

          <a
            href={contact.phoneTel}
            className="inline-flex items-center gap-1.5 hover:text-accent-400 transition-colors flex-shrink-0"
            title={`Call: ${contact.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-accent-400 flex-shrink-0" />
            <span className="font-medium tracking-wide">{contact.phone}</span>
          </a>
        </div>

        {/* Right: Social Media Icons / Logos */}
        <div className="flex items-center gap-3 sm:gap-3.5 pl-3 flex-shrink-0">
          <span className="text-white/40 text-[11px] font-medium hidden md:inline select-none">
            Connect:
          </span>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-accent-400 transition-all hover:scale-110 p-1"
            aria-label="Facebook"
            title="Facebook"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
            className="text-white/70 hover:text-accent-400 transition-all hover:scale-110 p-1"
            aria-label="Telegram"
            title="Telegram"
          >
            <Send className="w-3.5 h-3.5" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me"
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-accent-400 transition-all hover:scale-110 p-1"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-accent-400 transition-all hover:scale-110 p-1"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66c0-.92-.74-1.66-1.66-1.66Z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-accent-400 transition-all hover:scale-110 p-1"
            aria-label="YouTube"
            title="YouTube"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
