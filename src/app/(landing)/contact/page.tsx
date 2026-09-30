import type { Metadata } from 'next';
import ContactPageClient from './_ContactPage';

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
    canonical: 'https://www.medibeeglobal.com/contact',
  },
  openGraph: {
    title: 'Contact Medibeeglobal — Get in Touch with Our Case Managers',
    description:
      'Reach out to Medibeeglobal in Phnom Penh by phone, email, Telegram, or WhatsApp. Submit your medical records for a free confidential consultation.',
    url: 'https://www.medibeeglobal.com/contact',
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

export default function ContactPage() {
  return <ContactPageClient />;
}
