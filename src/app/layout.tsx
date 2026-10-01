import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GoogleTranslate from "@/components/GoogleTranslate";
import { SITE_URL } from "@/lib/config";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Medibeeglobal — Trusted Medical Tourism from Cambodia to India",
    template: "%s | Medibeeglobal",
  },
  description:
    "Medibeeglobal connects Cambodian patients with JCI-accredited hospitals in India for cancer treatment, cardiac surgery, organ transplants, IVF, and orthopedics — with Khmer-speaking case managers, direct hospital billing, and end-to-end travel coordination.",
  authors: [{ name: "Medibeeglobal", url: SITE_URL }],
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
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
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
    <html lang="en" className={`h-full scroll-smooth ${plusJakarta.variable}`} data-scroll-behavior="smooth">
      <body className={`min-h-full flex flex-col antialiased ${plusJakarta.className}`}>
        {/* Loads Google's translation engine; renders no visible UI itself */}
        <GoogleTranslate />
        {children}
      </body>
    </html>
  );
}
