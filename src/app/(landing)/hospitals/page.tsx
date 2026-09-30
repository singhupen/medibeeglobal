import type { Metadata } from 'next';
import PartnerHospitals from '@/components/PartnerHospitals';

export const metadata: Metadata = {
  title: 'Partner Hospitals in India for Cambodian Patients — Medibeeglobal Network',
  description:
    'View Medibeeglobal partner hospitals across India: Medanta, Gleneagles, Apollo, Fortis, Max, HCG, Kokilaben, Artemis, Rainbow Children\u2019s, and Wockhardt. All hospitals are JCI-accredited with international patient care departments.',
  keywords: [
    'partner hospitals India Cambodia',
    'JCI accredited hospitals India',
    'Apollo Hospital India Cambodia',
    'Fortis Healthcare Cambodia patients',
    'Medanta hospital Cambodia',
    'Max Hospital India Cambodia',
    'Kokilaben hospital India',
    'HCG cancer hospital India',
    'Rainbow Children hospital India',
    'Gleneagles hospital India Cambodia',
    'international patient hospital India',
  ],
  alternates: {
    canonical: 'https://www.medibeeglobal.com/hospitals',
  },
  openGraph: {
    title: 'Partner Hospitals in India for Cambodian Patients — Medibeeglobal Network',
    description:
      'Medibeeglobal partners with 10+ JCI-accredited hospitals across India: Apollo, Fortis, Medanta, Max, Kokilaben, HCG, Gleneagles, Rainbow, and Wockhardt.',
    url: 'https://www.medibeeglobal.com/hospitals',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Partner Hospitals India Medibeeglobal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner Hospitals in India for Cambodian Patients — Medibeeglobal Network',
    description:
      '10+ JCI-accredited partner hospitals in India for Cambodian patients: Apollo, Fortis, Medanta, Max, and more.',
    images: ['/og-image.png'],
  },
};

export default function HospitalsPage() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-gray-50/50">
      <PartnerHospitals />
    </div>
  );
}
