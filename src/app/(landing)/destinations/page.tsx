import type { Metadata } from 'next';
import DestinationsPageClient from './_DestinationsPage';

export const metadata: Metadata = {
  title: 'Top Medical Tourism Destinations in India — Delhi, Bengaluru, Chennai & More',
  description:
    "Explore India's leading medical hubs for Cambodian patients: Delhi NCR for transplants, Bengaluru for cardiac surgery & IVF, Chennai for affordable care, Mumbai for oncology, and Kolkata for shortest transit. Compare costs, hospitals, and flight routes.",
  keywords: [
    'medical tourism destinations India Cambodia',
    'Delhi hospital Cambodia patients',
    'Bengaluru medical tourism',
    'Chennai hospital medical tourism',
    'Mumbai oncology hospital',
    'Kolkata cardiology Cambodia',
    'best city India medical treatment',
    'India medical hub guide Cambodia',
    'flight Phnom Penh to Delhi hospital',
    'compare Indian medical cities',
  ],
  alternates: {
    canonical: '/destinations',
  },
  openGraph: {
    title: 'Top Medical Tourism Destinations in India — Delhi, Bengaluru, Chennai & More',
    description:
      "Compare India's top medical cities for Cambodian patients: Delhi NCR, Bengaluru, Chennai, Mumbai, and Kolkata — with hospital networks, flight routes, and living costs.",
    url: '/destinations',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Medical Tourism Destinations India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Medical Tourism Destinations in India — Delhi, Bengaluru, Chennai & More',
    description:
      "Compare India's top medical cities for Cambodian patients. Find the best city for your treatment.",
    images: ['/og-image.png'],
  },
};

export default function DestinationsPage() {
  return <DestinationsPageClient />;
}
