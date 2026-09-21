import type { Metadata } from 'next';
import SpecialtiesDirectory from '@/components/SpecialtiesDirectory';

export const metadata: Metadata = {
  title: 'Medical Specialties & Treatments in India — Medibeeglobal Network',
  description:
    'Explore 14+ world-class medical specialties in India for Cambodian patients: Cardiac Sciences, Oncology & CAR-T, Organ Transplants, BMT, Orthopedics, Neurosurgery, IVF, and Pediatrics at 60-85% lower costs.',
};

export default function SpecialtiesPage() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-gray-50/50">
      <SpecialtiesDirectory />
    </div>
  );
}
