import type { Metadata } from "next";
import "./globals.css";
import GoogleTranslate from "@/components/GoogleTranslate";

const BASE_URL = "https://www.medibeeglobal.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Medibeeglobal — Trusted Medical Tourism from Cambodia to India",
    template: "%s | Medibeeglobal",
  },
  description:
    "Medibeeglobal connects Cambodian patients with JCI-accredited hospitals in India for cancer treatment, cardiac surgery, organ transplants, IVF, and orthopedics — with Khmer-speaking case managers, direct hospital billing, and end-to-end travel coordination.",
  keywords: [
    "Medibeeglobal",
    "medical tourism Cambodia to India",
    "Cambodian patients India",
    "medical travel coordination Cambodia",
    "JCI accredited hospitals India",
    "Apollo Hospital Cambodia",
    "Fortis Healthcare Cambodia",
    "Medanta hospital medical tourism",
    "cancer treatment India Cambodia",
    "cardiac surgery India Cambodia",
    "organ transplant India",
    "IVF fertility treatment India",
    "medical visa India Cambodia",
    "Khmer speaking case manager",
    "cross-border medical care",
    "affordable medical treatment India",
    "medical second opinion India",
    "hospital in Delhi for Cambodia patients",
    "hospital in Bangalore for Cambodia patients",
    "hospital in Chennai for Cambodia patients",
  ],
  authors: [{ name: "Medibeeglobal", url: BASE_URL }],
  creator: "Medibeeglobal",
  publisher: "Medibeeglobal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Medibeeglobal",
    title: "Medibeeglobal — Trusted Medical Tourism from Cambodia to India",
    description:
      "Medibeeglobal connects Cambodian patients with JCI-accredited hospitals in India. Cardiac surgery, oncology, transplants, IVF — with Khmer-speaking case managers and direct hospital billing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Medibeeglobal — Medical Tourism Cambodia to India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medibeeglobal — Trusted Medical Tourism from Cambodia to India",
    description:
      "Medibeeglobal connects Cambodian patients with JCI-accredited hospitals in India for cancer, cardiac surgery, transplants, IVF and more.",
    images: ["/og-image.png"],
    creator: "@medibeeglobal",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  category: "healthcare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        {/* Loads Google's translation engine; renders no visible UI itself */}
        <GoogleTranslate />
        {children}
      </body>
    </html>
  );
}
