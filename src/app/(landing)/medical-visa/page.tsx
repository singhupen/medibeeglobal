import type { Metadata } from 'next';
import MedicalVisaPageClient from './_MedicalVisaPage';

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
    canonical: 'https://www.medibeeglobal.com/medical-visa',
  },
  openGraph: {
    title: 'India Medical Visa Assistance for Cambodian Patients — e-Medical Visa & Attendant Visa',
    description:
      'Complete medical visa guidance for Cambodian patients: Hospital Invitation Letters in 24–48 hours, e-Medical Visa support, and up to 2 family attendant (MEDX) visas.',
    url: 'https://www.medibeeglobal.com/medical-visa',
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

export default function MedicalVisaPage() {
  return <MedicalVisaPageClient />;
}
