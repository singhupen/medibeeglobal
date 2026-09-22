'use client';

import Hero from '@/components/Hero';
import PartnerTrustStrip from '@/components/PartnerTrustStrip';
import VisionCards from '@/components/VisionCards';
import Journey from '@/components/Journey';
import Testimonials from '@/components/Testimonials';
import HomeCtaBanner from '@/components/HomeCtaBanner';
import { useCaseModal } from '@/context/case-modal-context';

export default function LandingHomePage() {
  const { openCaseModal } = useCaseModal();

  return (
    <div className="flex-1">
      <Hero onSubmitCase={openCaseModal} />
      <PartnerTrustStrip />
      <VisionCards />
      <Journey />
      <Testimonials />
      <HomeCtaBanner onSubmitCase={openCaseModal} />
    </div>
  );
}
