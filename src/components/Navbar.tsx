'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import TopBar from '@/components/TopBar';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Hospitals', href: '/hospitals' },
  { label: 'Treatments', href: '/specialties' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Medical Visa', href: '/medical-visa' },
  { label: 'Hotel & Travel', href: '/travel-assistance' },
  { label: 'Patient Journey', href: '/patient-journey' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar Strip: Contact info on left, Social media & Language Switcher on right */}
      <TopBar />

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-2'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-2.5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-6 sm:-ml-9 lg:-ml-12 mr-3 xl:mr-6">
            <Logo
              asLink
              href="/"
              variant="plain"
              priority
              height={38}
              onClick={() => setMobileOpen(false)}
            />
          </div>

          {/* Desktop Navigation - All routes displayed one by one, non-collapsible, no horizontal scrolling */}
          <div className="hidden lg:flex items-center justify-end flex-1 gap-1 xl:gap-2.5 2xl:gap-3.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs xl:text-[13px] 2xl:text-sm font-semibold transition-all relative py-1 px-1.5 xl:px-2 rounded-lg whitespace-nowrap ${
                    isActive
                      ? 'text-primary-600 font-bold bg-primary-50/70'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1.5 right-1.5 h-0.5 rounded-full bg-primary-500" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-gray-800" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer - All routes listed one by one */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-card animate-fade-in max-h-[85vh] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-600 font-bold'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
