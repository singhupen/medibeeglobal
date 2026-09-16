import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Medibee — Cross-Border Medical Care Coordination",
    template: "%s | Medibee",
  },
  description: "Cross-border medical care coordination for Cambodian patients seeking trusted, accredited medical treatment in India — with care, clarity, and confidence.",
  keywords: [
    "Medibee",
    "Medical care India",
    "Cambodia medical travel",
    "Cambodian patients in India",
    "Medical visa India",
    "Apollo Hospital",
    "Fortis Healthcare",
    "JCI accredited hospitals India",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
