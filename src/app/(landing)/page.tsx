import type { Metadata } from 'next';
import HomePageClient from './_HomePageClient';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, PHONE_NUMBER, SOCIAL_LINKS } from '@/lib/config';

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
  telephone: PHONE_NUMBER,
  email: 'care@medibeeglobal.com',
  sameAs: [
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.youtube,
    SOCIAL_LINKS.whatsapp,
  ].filter(Boolean),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE_NUMBER,
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
