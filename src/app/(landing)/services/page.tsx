import type { Metadata } from 'next';
import Services from '@/components/Services';

export const metadata: Metadata = {
  title: 'Our Services — Medibeeglobal',
  description: 'How Medibeeglobal works for you: comprehensive coordination platform connecting patients, hospitals, and travel partners.',
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <Services />
    </div>
  );
}
