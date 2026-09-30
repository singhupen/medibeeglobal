import type { MetadataRoute } from 'next';
import { SITE_URL, STATIC_PAGE_DATE } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',          // homepage
    '/about',
    '/services',
    '/specialties',
    '/hospitals',
    '/doctors',
    '/destinations',
    '/how-it-works',
    '/patient-journey',
    '/medical-visa',
    '/travel-assistance',
    '/pricing',
    '/testimonials',
    '/contact',
  ];

  return staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: STATIC_PAGE_DATE,
  }));
}
