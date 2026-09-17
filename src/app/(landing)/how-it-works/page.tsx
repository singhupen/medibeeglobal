import type { Metadata } from 'next';
import Journey from '@/components/Journey';

export const metadata: Metadata = {
  title: 'How It Works — The Medibeeglobal Journey',
  description: 'Understand the seamless 6-step medical journey with Medibeeglobal: consultation in Phnom Penh, doctor matching, visa prep, treatment in India, and continuous follow-up.',
};

export default function HowItWorksPage() {
  return (
    <div className="pt-24 bg-primary-950">
      <Journey />
    </div>
  );
}
