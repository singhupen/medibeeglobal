import type { Metadata } from 'next';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Patient Stories & Testimonials — Medibee',
  description: 'Read real stories from Cambodian families who trusted Medibee with their healthcare journey to India.',
};

export default function TestimonialsPage() {
  return (
    <div className="pt-16">
      <Testimonials />
    </div>
  );
}
