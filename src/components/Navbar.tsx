'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useCaseModal } from '@/context/case-modal-context';
import Logo from '@/components/Logo';
import TopBar from '@/components/TopBar';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Specialties', href: '/specialties' },
  { label: 'Partner Hospitals', href: '/hospitals' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { openCaseModal } = useCaseModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar Strip: Contact info on left, Social media on right */}
      <TopBar />

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-2.5'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Logo
          asLink
          href="/"
          variant="plain"
          priority
          height={38}
          onClick={() => setMobileOpen(false)}
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-all relative py-1 ${
                  isActive
                    ? 'text-primary-600 font-bold'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary-500" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Actions - Register button commented out for now */}
        {/* <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={openCaseModal}
            className="bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            Get Started
          </button>
        </div> */}

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-card animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-500 font-bold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            {/* Register button commented out for now */}
            {/* <div className="pt-3 border-t border-gray-100">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openCaseModal();
                }}
                className="w-full bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-5 py-3 rounded-full text-center shadow-soft"
              >
                Get Started
              </button>
            </div> */}
          </div>
        </div>
      )}
      </div>
    </header>
  );
}
