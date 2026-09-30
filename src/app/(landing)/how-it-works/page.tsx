import type { Metadata } from 'next';
import Journey from '@/components/Journey';

export const metadata: Metadata = {
  title: 'How It Works — The 6-Step Medibeeglobal Medical Journey',
  description:
    'Understand the seamless 6-step Medibeeglobal journey: free consultation in Phnom Penh, doctor matching, hospital admission, medical visa, treatment in India, and continuous follow-up care back home in Cambodia.',
  keywords: [
    'how Medibeeglobal works',
    'medical tourism process Cambodia India',
    '6 steps medical treatment India Cambodia',
    'consultation Phnom Penh India hospital',
    'how to get treatment in India from Cambodia',
    'Cambodia India medical process',
    'Medibeeglobal process steps',
    'cross-border care process Cambodia',
  ],
  alternates: {
    canonical: 'https://www.medibeeglobal.com/how-it-works',
  },
  openGraph: {
    title: 'How It Works — The 6-Step Medibeeglobal Medical Journey',
    description:
      'Free consultation, doctor matching, hospital admission, medical visa, treatment in India, and lifelong follow-up — the full Medibeeglobal patient journey.',
    url: 'https://www.medibeeglobal.com/how-it-works',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'How Medibeeglobal Works' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works — The 6-Step Medibeeglobal Medical Journey',
    description:
      'From consultation in Phnom Penh to treatment in India — the complete 6-step Medibeeglobal patient journey.',
    images: ['/og-image.png'],
  },
};

export default function HowItWorksPage() {
  return (
    <div className="pt-24 bg-primary-950">
      <Journey />
    </div>
  );
}
