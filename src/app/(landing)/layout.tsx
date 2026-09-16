'use client';

import { CaseModalProvider, useCaseModal } from '@/context/case-modal-context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseFormModal from '@/components/CaseFormModal';

function LandingShell({ children }: { children: React.ReactNode }) {
  const { isOpen, closeCaseModal, openCaseModal } = useCaseModal();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer onSubmitCase={openCaseModal} />
      <CaseFormModal open={isOpen} onClose={closeCaseModal} />
    </div>
  );
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CaseModalProvider>
      <LandingShell>
        {children}
      </LandingShell>
    </CaseModalProvider>
  );
}
