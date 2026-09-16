'use client';

import React, { createContext, useContext, useState } from 'react';

interface CaseModalContextType {
  isOpen: boolean;
  openCaseModal: () => void;
  closeCaseModal: () => void;
}

const CaseModalContext = createContext<CaseModalContextType | undefined>(undefined);

export function CaseModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCaseModal = () => setIsOpen(true);
  const closeCaseModal = () => setIsOpen(false);

  return (
    <CaseModalContext.Provider value={{ isOpen, openCaseModal, closeCaseModal }}>
      {children}
    </CaseModalContext.Provider>
  );
}

export function useCaseModal() {
  const context = useContext(CaseModalContext);
  if (!context) {
    throw new Error('useCaseModal must be used within a CaseModalProvider');
  }
  return context;
}
