import type { Metadata } from 'next';
import PricingPageClient from './_PricingPage';

export const metadata: Metadata = {
  title: 'Medical Treatment Pricing in India — Transparent Packages for Cambodian Patients',
  description:
    'Compare transparent medical treatment package pricing for Cambodian patients at top Indian hospitals. Cardiac bypass surgery, knee replacement, cancer treatment, organ transplants, and IVF — all at 60–80% lower costs than in Cambodia or Singapore.',
  keywords: [
    'India medical treatment cost Cambodia',
    'hospital package cost India Cambodia',
    'cardiac surgery price India',
    'knee replacement cost India Cambodia',
    'cancer treatment cost India',
    'organ transplant price India',
    'IVF cost India Cambodia',
    'affordable medical treatment India',
    'India medical package pricing',
    'compare hospital prices India Cambodia',
  ],
  alternates: {
    canonical: 'https://www.medibeeglobal.com/pricing',
  },
  openGraph: {
    title: 'Medical Treatment Pricing in India — Transparent Packages for Cambodian Patients',
    description:
      'Transparent pricing for cardiac surgery, knee replacement, cancer treatment, organ transplants, and IVF at top Indian hospitals — 60–80% lower than Cambodia or Singapore.',
    url: 'https://www.medibeeglobal.com/pricing',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'India Medical Treatment Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Treatment Pricing in India — Transparent Packages for Cambodian Patients',
    description:
      'Transparent medical treatment pricing at top Indian hospitals — 60–80% lower than Cambodia or Singapore.',
    images: ['/og-image.png'],
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
