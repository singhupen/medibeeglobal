import type { Metadata } from "next";
import "./globals.css";
import GoogleTranslate from "@/components/GoogleTranslate";

export const metadata: Metadata = {
  title: {
    default: "Medibeeglobal",
    template: "%s | Medibeeglobal",
  },
  description: "Cross-border medical care coordination for Cambodian patients seeking trusted, accredited medical treatment in India — with care, clarity, and confidence.",
  keywords: [
    "Medibeeglobal",
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
        {/* Loads Google's translation engine; renders no visible UI itself */}
        <GoogleTranslate />
        {children}
      </body>
    </html>
  );
}
