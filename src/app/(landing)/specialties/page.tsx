import type { Metadata } from 'next';
import SpecialtiesDirectory from '@/components/SpecialtiesDirectory';

export const metadata: Metadata = {
  title: 'Medical Specialties & Treatments in India for Cambodian Patients — Medibeeglobal',
  description:
    'Explore 14+ world-class medical specialties available in India for Cambodian patients: Cardiac Sciences, Oncology & CAR-T Cell Therapy, Organ Transplants, Bone Marrow Transplant (BMT), Orthopedics, Neurosurgery, IVF & Fertility, and Pediatric Surgery at 60-85% lower costs.',
  keywords: [
    'medical specialties India Cambodia',
    'cardiac surgery India Cambodia',
    'cancer treatment India Cambodia',
    'organ transplant India Cambodia',
    'bone marrow transplant India',
    'orthopedics India Cambodia',
    'neurosurgery India Cambodia',
    'IVF India Cambodia',
    'CAR-T cell therapy India',
    'pediatric surgery India',
    'kidney transplant India Cambodia',
    'liver transplant India Cambodia',
    'affordable specialty care India',
  ],
  alternates: {
    canonical: '/specialties',
  },
  openGraph: {
    title: 'Medical Specialties & Treatments in India for Cambodian Patients — Medibeeglobal',
    description:
      '14+ medical specialties in India for Cambodian patients: cardiac surgery, oncology, transplants, IVF, orthopedics, and neurosurgery at 60-85% lower costs.',
    url: '/specialties',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Medical Specialties India Cambodia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Specialties in India for Cambodian Patients — Medibeeglobal',
    description:
      '14+ specialties including cardiac surgery, cancer treatment, organ transplants, and IVF at 60-85% lower costs in India.',
    images: ['/og-image.png'],
  },
};

export default function SpecialtiesPage() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-gray-50/50">
      <SpecialtiesDirectory />
    </div>
  );
}
