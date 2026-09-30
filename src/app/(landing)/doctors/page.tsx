import type { Metadata } from 'next';
import DoctorsPageClient from './_DoctorsPage';

export const metadata: Metadata = {
  title: 'Top Indian Doctors & Surgeons for Cambodian Patients — Medibeeglobal',
  description:
    "Browse India's leading cardiac surgeons, oncologists, orthopedic specialists, neurologists, transplant surgeons, and IVF experts recommended for Cambodian patients. All doctors have 15–30+ years of experience and Ivy League or UK fellowships.",
  keywords: [
    'top doctors India Cambodia',
    'cardiac surgeon India Cambodia',
    'oncologist India Cambodia',
    'orthopedic surgeon India medical tourism',
    'organ transplant surgeon India',
    'best doctor India for Cambodian patient',
    'neurosurgeon India Cambodia',
    'IVF specialist India Cambodia',
    'second medical opinion India',
    'JCI accredited doctor India',
    'FRCS surgeon India Cambodia',
  ],
  alternates: {
    canonical: 'https://www.medibeeglobal.com/doctors',
  },
  openGraph: {
    title: 'Top Indian Doctors & Surgeons for Cambodian Patients — Medibeeglobal',
    description:
      "Browse India's leading cardiac surgeons, oncologists, transplant specialists, and IVF experts — vetted for Cambodian patients by Medibeeglobal.",
    url: 'https://www.medibeeglobal.com/doctors',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Top Doctors India Medibeeglobal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Indian Doctors & Surgeons for Cambodian Patients — Medibeeglobal',
    description:
      "Browse India's leading cardiac surgeons, oncologists, and transplant experts vetted for Cambodian patients.",
    images: ['/og-image.png'],
  },
};

export default function DoctorsPage() {
  return <DoctorsPageClient />;
}
