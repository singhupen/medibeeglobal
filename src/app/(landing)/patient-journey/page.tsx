import type { Metadata } from 'next';
import PatientJourneyPageClient from './_PatientJourneyPage';

export const metadata: Metadata = {
  title: 'The Patient Journey — From Cambodia to India with Medibeeglobal',
  description:
    'A step-by-step guide to the Medibeeglobal patient journey: from your first consultation in Phnom Penh, through medical visa, flight, hospital admission, surgery, and lifelong recovery follow-up back home in Cambodia.',
  keywords: [
    'Cambodia India patient journey',
    'medical tourism process Cambodia',
    'Medibeeglobal patient journey',
    'how medical tourism works Cambodia India',
    'Cambodia to India hospital process',
    'Khmer medical coordinator journey',
    'cross-border patient roadmap',
    'medical travel steps Cambodia',
    'post-surgery follow-up Cambodia',
  ],
  alternates: {
    canonical: '/patient-journey',
  },
  openGraph: {
    title: 'The Patient Journey — From Cambodia to India with Medibeeglobal',
    description:
      'A step-by-step roadmap from your consultation in Phnom Penh to world-class treatment in India, with dedicated Khmer support at every stage.',
    url: '/patient-journey',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Patient Journey Cambodia to India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Patient Journey — From Cambodia to India with Medibeeglobal',
    description:
      'Step-by-step roadmap from Phnom Penh consultation to world-class treatment in India, with Khmer case manager support.',
    images: ['/og-image.png'],
  },
};

export default function PatientJourneyPage() {
  return <PatientJourneyPageClient />;
}
