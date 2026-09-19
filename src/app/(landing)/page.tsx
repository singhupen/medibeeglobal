'use client';

import Hero from '@/components/Hero';
import VisionCards from '@/components/VisionCards';
import Journey from '@/components/Journey';
import { useCaseModal } from '@/context/case-modal-context';

export default function LandingHomePage() {
  const { openCaseModal } = useCaseModal();

  return (
    <div className="flex-1">
      <Hero onSubmitCase={openCaseModal} />
      <VisionCards />
      <Journey />
    </div>
  );
}
