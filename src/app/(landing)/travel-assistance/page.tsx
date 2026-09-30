import type { Metadata } from 'next';
import TravelAssistancePageClient from './_TravelAssistancePage';

export const metadata: Metadata = {
  title: 'Travel & Hotel Assistance in India for Cambodian Medical Patients — Medibeeglobal',
  description:
    'Medibeeglobal arranges complete travel and accommodation for Cambodian medical patients in India: 24/7 airport pickup, sanitized hospitals-adjacent hotels, Khmer-speaking on-ground coordinator, and 30–50% corporate hotel discounts.',
  keywords: [
    'medical travel assistance India Cambodia',
    'hotel accommodation India Cambodia patients',
    'airport pickup India hospital',
    'Cambodian patient hotel India',
    'medical tourism travel logistics India',
    'Khmer coordinator India',
    'hospital near hotel India Cambodia',
    'medical tourism accommodation India',
    'travel assistance Cambodia to India',
  ],
  alternates: {
    canonical: '/travel-assistance',
  },
  openGraph: {
    title: 'Travel & Hotel Assistance in India for Cambodian Medical Patients — Medibeeglobal',
    description:
      '24/7 airport pickup, hospital-adjacent hotels, Khmer on-ground support, and 30–50% hotel discounts for Cambodian patients in India.',
    url: '/travel-assistance',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Travel Assistance India Cambodia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel & Hotel Assistance in India for Cambodian Medical Patients',
    description:
      '24/7 airport pickup, hospital-adjacent hotels, and Khmer-speaking coordinator for Cambodian patients in India.',
    images: ['/og-image.png'],
  },
};

export default function TravelAssistancePage() {
  return <TravelAssistancePageClient />;
}
