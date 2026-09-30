import type { Metadata } from 'next';
import TestimonialsPageClient from './_TestimonialsPage';

export const metadata: Metadata = {
  title: 'Patient Testimonials — Real Stories from Cambodian Families | Medibeeglobal',
  description:
    'Read authentic testimonials from 500+ Cambodian patients who received cardiac surgery, cancer treatment, knee replacement, and organ transplants in India with Medibeeglobal. 98% patient satisfaction rate.',
  keywords: [
    'Medibeeglobal reviews',
    'Medibeeglobal testimonials',
    'Cambodia India hospital reviews',
    'Cambodian patient India treatment story',
    'medical tourism success story Cambodia',
    'cardiac surgery testimonial India',
    'cancer treatment success India Cambodia',
    'knee replacement patient India story',
    'IVF success India Cambodia',
    'real patient reviews India',
  ],
  alternates: {
    canonical: 'https://www.medibeeglobal.com/testimonials',
  },
  openGraph: {
    title: 'Patient Testimonials — Real Stories from Cambodian Families | Medibeeglobal',
    description:
      'Read authentic testimonials from 500+ Cambodian patients who received life-saving care in India through Medibeeglobal — with 98% satisfaction.',
    url: 'https://www.medibeeglobal.com/testimonials',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Medibeeglobal Patient Testimonials' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Testimonials — Real Stories from Cambodian Families | Medibeeglobal',
    description:
      '500+ Cambodian patients treated in India with Medibeeglobal. Read their authentic recovery stories.',
    images: ['/og-image.png'],
  },
};

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}
