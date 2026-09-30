import type { Metadata } from 'next';
import HomePageClient from './_HomePageClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Medibeeglobal',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-transparent.png`,
  description:
    'Medibeeglobal connects Cambodian patients with JCI-accredited hospitals in India for cancer treatment, cardiac surgery, organ transplants, IVF, and orthopedics — with Khmer-speaking case managers, direct hospital billing, and end-to-end travel coordination.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#111, St. 09B, Thmorda Village, Sangkat Kontouk, Khan Kombol',
    addressLocality: 'Phnom Penh',
    addressCountry: 'KH',
  },
  telephone: '+855-010707404',
  email: 'care@medibeeglobal.com',
  sameAs: [
    'https://facebook.com',
    'https://instagram.com',
    'https://linkedin.com',
    'https://youtube.com',
    'https://wa.me/855010707404',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+855-010707404',
    contactType: 'customer service',
    availableLanguage: ['English', 'Khmer'],
  },
};

export default function LandingHomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <HomePageClient />
    </>
  );
}
