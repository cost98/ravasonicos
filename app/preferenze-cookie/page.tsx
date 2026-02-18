'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PreferenzeCookie() {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Carica le preferenze esistenti
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      try {
        const parsed = JSON.parse(consent);
        setPreferences({
          necessary: true, // Sempre true
          analytics: parsed.analytics || false,
        });
      } catch (e) {
        console.error('Error parsing consent:', e);
      }
    }
  }, []);

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: preferences.necessary,
      analytics: preferences.analytics,
      timestamp: new Date().toISOString()
    }));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const resetPreferences = () => {
    localStorage.removeItem('cookieConsent');
    setPreferences({
      necessary: true,
      analytics: false,
    });
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grain opacity-5 pointer-events-none"></div>
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-20 right-1/4 w-96 h-96 bg-neon/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center h-24 px-4">
          <Link href="/">
            <img src="/images/scritta.webp" alt="Ravasónicos" className="h-36 w-auto" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 pt-48 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Gestisci le tue Preferenze Cookie
            </h1>
            <p className="text-white/60 mb-8">
              Controlla quali cookie vuoi consentire sul nostro sito
            </p>

            {/* Success message */}
            {saved && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary/20 border border-primary/50 rounded-lg p-4 mb-6"
              >
                <p className="text-white flex items-center gap-2">
                  ✓ Preferenze salvate con successo!
                </p>
              </motion.div>
            )}

            <div className="space-y-6">
              {/* Cookie Necessari */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      Cookie Tecnici Necessari
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        Sempre Attivi
                      </span>
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Questi cookie sono essenziali per il funzionamento del sito web e non possono 
                      essere disabilitati. Permettono di navigare il sito e utilizzare le sue 
                      funzionalità base, come memorizzare le tue preferenze sui cookie.
                    </p>
                  </div>
                  <div className="ml-6">
                    <div className="w-14 h-7 bg-primary rounded-full flex items-center justify-end px-1">
                      <div className="w-5 h-5 bg-white rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 mt-4">
                  <p className="text-white/50 text-xs">
                    <strong>Cookie utilizzati:</strong> cookieConsent (memorizza le tue preferenze)
                  </p>
                </div>
              </div>

              {/* Cookie Analitici */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 opacity-60">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      Cookie Analitici
                      <span className="text-xs bg-white/10 text-white/50 px-2 py-1 rounded">
                        Non Utilizzati
                      </span>
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Attualmente non utilizziamo cookie analitici o di tracciamento sul nostro sito. 
                      Se in futuro decidessimo di implementarli, questa opzione diventerà disponibile 
                      e potrai scegliere se consentirli o meno.
                    </p>
                  </div>
                  <div className="ml-6">
                    <div className="w-14 h-7 bg-white/20 rounded-full flex items-center px-1">
                      <div className="w-5 h-5 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Marketing/Profilazione */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 opacity-60">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      Cookie di Marketing
                      <span className="text-xs bg-white/10 text-white/50 px-2 py-1 rounded">
                        Non Utilizzati
                      </span>
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Non utilizziamo cookie di marketing o profilazione. Il nostro sito non tiene 
                      traccia della tua navigazione per scopi pubblicitari.
                    </p>
                  </div>
                  <div className="ml-6">
                    <div className="w-14 h-7 bg-white/20 rounded-full flex items-center px-1">
                      <div className="w-5 h-5 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-neon/10 border border-neon/30 rounded-xl p-6 my-8">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span className="text-xl">ℹ️</span>
                Rispettiamo la tua privacy
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                La nostra filosofia è semplice: raccogliamo solo i dati strettamente necessari 
                per far funzionare il sito. Non tracciamo la tua navigazione, non vendiamo i 
                tuoi dati e non utilizziamo cookie di profilazione.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={savePreferences}
                className="flex-1 px-8 py-4 bg-primary text-white font-semibold rounded-lg 
                         hover:bg-primary/80 transition-all duration-300 
                         shadow-lg shadow-primary/30 hover:shadow-primary/50"
              >
                Salva Preferenze
              </button>
              <button
                onClick={resetPreferences}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg 
                         hover:bg-white/20 transition-all duration-300 
                         border border-white/20 hover:border-white/40"
              >
                Reset e Ricarica
              </button>
            </div>

            {/* Links */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm">
              <Link href="/cookie" className="text-neon hover:underline">
                Cookie Policy Completa
              </Link>
              <Link href="/privacy" className="text-neon hover:underline">
                Privacy Policy
              </Link>
              <Link href="/" className="text-white/60 hover:text-white transition-colors">
                ← Torna alla Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
