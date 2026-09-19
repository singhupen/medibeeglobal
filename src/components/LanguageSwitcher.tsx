'use client';

import { useEffect, useRef, useState } from 'react';
import { Globe, Check } from 'lucide-react';

// The list of languages shown in our custom dropdown.
// "code" must match a Google Translate language code, and must also be
// listed in the includedLanguages string in GoogleTranslate.tsx.
// Khmer is listed first since Cambodia is the primary target audience.
const LANGUAGES = [
  { code: 'km', label: 'Khmer (ខ្មែរ)' },
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'bn', label: 'Bengali' },
  { code: 'ne', label: 'Nepali' },
  { code: 'my', label: 'Myanmar (Burmese)' },
  { code: 'ar', label: 'Arabic' },
  { code: 'fr', label: 'French' },
  { code: 'zh-CN', label: 'Chinese (Simplified)' },
  { code: 'vi', label: 'Vietnamese' },
  { code: 'th', label: 'Thai' },
];

// Name of the cookie Google Translate uses to remember the chosen language.
const GOOGTRANS_COOKIE = 'googtrans';

// Reads the currently active language from the googtrans cookie,
// defaulting to English when no translation is active.
function getActiveLanguage(): string {
  if (typeof document === 'undefined') return 'en';
  const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
  return match ? match[1] : 'en';
}

// Sets the googtrans cookie on both the plain domain and the current
// hostname, since Google Translate checks both when applying translation.
function setLanguageCookie(langCode: string) {
  const value = `/en/${langCode}`;
  document.cookie = `${GOOGTRANS_COOKIE}=${value};path=/`;
  document.cookie = `${GOOGTRANS_COOKIE}=${value};path=/;domain=${window.location.hostname}`;
}

export default function LanguageSwitcher({
  variant = 'default',
}: {
  variant?: 'default' | 'topbar';
}) {
  const [open, setOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('en');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveLang(getActiveLanguage());
  }, []);

  // Closes the dropdown when clicking anywhere outside it.
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function selectLanguage(langCode: string) {
    setOpen(false);

    if (langCode === 'en') {
      // Switching back to English: clear the cookie and reload,
      // which restores the original untranslated page.
      document.cookie = `${GOOGTRANS_COOKIE}=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      document.cookie = `${GOOGTRANS_COOKIE}=;path=/;domain=${window.location.hostname};expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      window.location.reload();
      return;
    }

    setLanguageCookie(langCode);

    // The Google widget builds a hidden <select class="goog-te-combo">
    // once it has loaded. Setting its value and firing a "change" event
    // is the supported way to trigger translation programmatically.
    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
      setActiveLang(langCode);
    } else {
      // Widget not ready yet (e.g. page just loaded) - the cookie is
      // already set, so a reload will apply the translation on load.
      window.location.reload();
    }
  }

  const activeLabel =
    LANGUAGES.find((l) => l.code === activeLang)?.label || 'English';

  const isTopbar = variant === 'topbar';

  return (
    <div ref={containerRef} className="relative notranslate">
      <button
        onClick={() => setOpen((v) => !v)}
        className={
          isTopbar
            ? 'flex items-center gap-1.5 text-xs font-medium text-white/85 hover:text-accent-400 transition-colors px-2 py-1 rounded-md hover:bg-white/10 cursor-pointer'
            : 'flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer'
        }
        aria-label="Change language"
      >
        <Globe className={isTopbar ? 'w-3.5 h-3.5 text-accent-400' : 'w-4 h-4'} />
        <span>{activeLabel}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-1.5 w-52 bg-white border border-gray-100 rounded-xl shadow-card py-2 z-50 max-h-80 overflow-y-auto">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors text-left"
            >
              {lang.label}
              {activeLang === lang.code && (
                <Check className="w-4 h-4 text-primary-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
