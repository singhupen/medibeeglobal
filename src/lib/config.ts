/**
 * Shared site configuration constants.
 * Import SITE_URL wherever a canonical or absolute URL is needed
 * so every reference stays in sync and points to the non-www host.
 */
export const SITE_URL = 'https://medibeeglobal.com';

/** Date used as lastModified for static (non-dynamic) pages in the sitemap. */
export const STATIC_PAGE_DATE = new Date('2025-09-15');

export const PHONE_NUMBER = '+85510707404'; // International format without leading 0
export const WHATSAPP_LINK = 'https://wa.me/85510707404';

export const SOCIAL_LINKS = {
  facebook: '',
  instagram: '',
  linkedin: '',
  youtube: '',
  whatsapp: WHATSAPP_LINK,
};
