'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    // Controlla il consenso salvato
    const checkConsent = () => {
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (cookieConsent) {
        try {
          const consent = JSON.parse(cookieConsent);
          setConsent(consent.analytics === true);
        } catch (error) {
          console.error('Error parsing cookie consent:', error);
        }
      }
    };

    // Controlla al mount
    checkConsent();

    // Ascolta i cambiamenti al localStorage (da altri tab o dal banner)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookieConsent') {
        checkConsent();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Ascolta eventi custom dal CookieBanner
    const handleConsentChange = () => {
      checkConsent();
    };

    window.addEventListener('cookieConsentChange', handleConsentChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookieConsentChange', handleConsentChange);
    };
  }, []);

  // Non renderizzare nulla se non c'è il consenso
  if (!consent) {
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CB991TN2JW"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CB991TN2JW');
        `}
      </Script>
    </>
  );
}
