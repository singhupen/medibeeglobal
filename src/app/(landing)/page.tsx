'use client';

import Hero from '@/components/Hero';
import VisionCards from '@/components/VisionCards';
import { useCaseModal } from '@/context/case-modal-context';

export default function LandingHomePage() {
  const { openCaseModal } = useCaseModal();

  return (
    <div className="flex-1">
      <Hero onSubmitCase={openCaseModal} />
      <VisionCards />
    </div>
  );
}
