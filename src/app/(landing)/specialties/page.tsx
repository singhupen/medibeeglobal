import type { Metadata } from 'next';
import WhyIndia from '@/components/WhyIndia';

export const metadata: Metadata = {
  title: 'Medical Specialties & Cost Comparisons — Medibeeglobal',
  description: 'Explore world-class medical treatments in India for Cambodian patients: Cardiac Surgery, Oncology, Organ Transplants, Neurosurgery, Orthopedics, and IVF at 60-80% lower costs.',
};

export default function SpecialtiesPage() {
  return (
    <div className="pt-24">
      <WhyIndia />
    </div>
  );
}
