'use client';

import Hero from '@/components/Hero';
import { useCaseModal } from '@/context/case-modal-context';

export default function LandingHomePage() {
  const { openCaseModal } = useCaseModal();

  return (
    <div className="flex-1">
      <Hero onSubmitCase={openCaseModal} />
    </div>
  );
}
