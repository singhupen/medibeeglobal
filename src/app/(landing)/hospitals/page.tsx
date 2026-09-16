import type { Metadata } from 'next';
import PartnerHospitals from '@/components/PartnerHospitals';

export const metadata: Metadata = {
  title: 'Partner Hospitals in India — Medibeeglobal Network',
  description: 'View Medibeeglobal partner hospitals across India: Apollo, Fortis, AIIMS, Manipal, Narayana Health, and MIOT.',
};

export default function HospitalsPage() {
  return (
    <div className="pt-16 bg-gray-50">
      <PartnerHospitals />
    </div>
  );
}
