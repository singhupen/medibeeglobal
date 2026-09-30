import type { Metadata } from 'next';
import ContactPageClient from './_ContactPage';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact Medibeeglobal — Get in Touch with Our Case Managers',
  description:
    'Reach out to Medibeeglobal in Phnom Penh by phone, email, Telegram, or WhatsApp. Submit your medical records for a confidential consultation with our Khmer-speaking coordinators.',
  keywords: [
    'contact Medibeeglobal',
    'Medibeeglobal Phnom Penh office',
    'medical tourism inquiry Cambodia',
    'Khmer case manager contact',
    'medical consultation Cambodia India',
    'Cambodia hospital inquiry India',
    'Telegram medical tourism Cambodia',
    'WhatsApp Medibeeglobal',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Medibeeglobal — Get in Touch with Our Case Managers',
    description:
      'Reach out to Medibeeglobal in Phnom Penh by phone, email, Telegram, or WhatsApp. Submit your medical records for a free confidential consultation.',
    url: '/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Medibeeglobal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Medibeeglobal — Get in Touch with Our Case Managers',
    description:
      'Reach out to Medibeeglobal by phone, email, Telegram, or WhatsApp for a free medical consultation.',
    images: ['/og-image.png'],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <ContactPageClient />
    </>
  );
}
