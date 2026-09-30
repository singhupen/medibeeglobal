'use client';

import Pricing from '@/components/Pricing';
import { useCaseModal } from '@/context/case-modal-context';

export default function PricingPage() {
  const { openCaseModal } = useCaseModal();

  return (
    <div className="pt-24">
      <Pricing onSubmitCase={openCaseModal} />
    </div>
  );
}
