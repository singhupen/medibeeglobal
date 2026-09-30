import type { Metadata } from 'next';
import Services from '@/components/Services';

export const metadata: Metadata = {
  title: 'Medical Tourism Services — What Medibeeglobal Does for Cambodian Patients',
  description:
    'Medibeeglobal offers full-service medical tourism coordination: doctor matching, hospital admission, medical visa invitation letters, airport pickup, accommodation, Khmer translation, and post-treatment follow-up in Cambodia.',
  keywords: [
    'Medibeeglobal services',
    'medical tourism services Cambodia India',
    'hospital coordination service Cambodia',
    'Khmer translation medical India',
    'medical visa service Cambodia',
    'Cambodia India medical coordinator services',
    'second opinion service India Cambodia',
    'post treatment follow-up Cambodia',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Medical Tourism Services — What Medibeeglobal Does for Cambodian Patients',
    description:
      'Doctor matching, hospital admission, medical visa letters, airport pickup, accommodation, Khmer translation, and lifelong follow-up — all handled by Medibeeglobal.',
    url: '/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Medibeeglobal Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Tourism Services — What Medibeeglobal Does for Cambodian Patients',
    description:
      'Full-service medical tourism coordination: doctor matching, visa letters, Khmer translation, and post-treatment follow-up.',
    images: ['/og-image.png'],
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <Services />
    </div>
  );
}
