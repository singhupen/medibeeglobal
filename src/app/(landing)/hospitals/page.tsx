import type { Metadata } from 'next';
import PartnerHospitals from '@/components/PartnerHospitals';

export const metadata: Metadata = {
  title: 'Partner Hospitals in India — Medibeeglobal Network',
  description: 'View Medibeeglobal partner hospitals across India: Medanta, Gleneagles, Apollo, Fortis, Max, HCG, Kokilaben, Artemis, Rainbow Children’s, and Wockhardt.',
};

export default function HospitalsPage() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-gray-50/50">
      <PartnerHospitals />
    </div>
  );
}
