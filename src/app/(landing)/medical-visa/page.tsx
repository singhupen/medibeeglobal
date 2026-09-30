import type { Metadata } from 'next';
import MedicalVisaPageClient from './_MedicalVisaPage';
import JsonLd from '@/components/JsonLd';
import { visaFaqs } from '@/lib/data';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'India Medical Visa Assistance for Cambodian Patients — e-Medical Visa & Attendant Visa',
  description:
    'Complete medical visa guidance for Cambodian patients and up to 2 family attendants (MEDX). Medibeeglobal provides official Hospital Visa Invitation Letters in 24–48 hours, free of charge, for India e-Medical Visa.',
  keywords: [
    'India medical visa Cambodia',
    'e-medical visa India Cambodia',
    'hospital visa invitation letter India',
    'Cambodia to India medical visa help',
    'MEDX attendant visa India',
    'medical visa Cambodia patient',
    'VIL letter India hospital',
    'India medical visa application Cambodia',
    'fast medical visa India',
  ],
  alternates: {
    canonical: '/medical-visa',
  },
  openGraph: {
    title: 'India Medical Visa Assistance for Cambodian Patients — e-Medical Visa & Attendant Visa',
    description:
      'Complete medical visa guidance for Cambodian patients: Hospital Invitation Letters in 24–48 hours, e-Medical Visa support, and up to 2 family attendant (MEDX) visas.',
    url: '/medical-visa',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'India Medical Visa Cambodia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India Medical Visa Assistance for Cambodian Patients',
    description:
      'Hospital Invitation Letters in 24–48 hours, e-Medical Visa support, and family attendant visas for Cambodian patients going to India.',
    images: ['/og-image.png'],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Medical Visa', item: `${SITE_URL}/medical-visa` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: visaFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function MedicalVisaPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <MedicalVisaPageClient />
    </>
  );
}
