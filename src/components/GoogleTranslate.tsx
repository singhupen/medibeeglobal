'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// This tells TypeScript that a "googleTranslateElementInit" function
// and a "google" object will exist on the window at runtime.
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            autoDisplay?: boolean;
          },
          elementId: string
        ) => void;
      };
    };
  }
}

// This component loads Google's official website translation engine.
// It renders no visible UI itself - the visible language button lives
// in LanguageSwitcher.tsx, which talks to this hidden widget.
// Mount this ONCE, near the root of the app (see layout.tsx).
export default function GoogleTranslate() {
  useEffect(() => {
    // The init function Google's script calls once it has loaded.
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          // Keep this list in sync with LANGUAGES in LanguageSwitcher.tsx.
          // Khmer ("km") is included first as it is the primary audience.
          includedLanguages:
            'km,en,hi,bn,ne,my,ar,fr,zh-CN,vi,th',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <>
      {/* Hidden container Google's widget attaches its (also hidden) dropdown to. */}
      <div id="google_translate_element" className="hidden" />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
