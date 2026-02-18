'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Verifica se l'utente ha già dato il consenso
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Mostra il banner dopo un breve ritardo
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false, // Per ora false, da attivare se si aggiunge Google Analytics
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true, // I cookie tecnici sono sempre necessari
      analytics: false,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const savePreferences = (analytics: boolean) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: analytics,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={() => setShowSettings(false)}
          />

          {/* Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          >
            <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 via-black to-gray-900 
                          border border-primary/30 rounded-2xl shadow-2xl overflow-hidden">
              {/* Glow effect */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              
              <div className="relative p-6 md:p-8">
                {!showSettings ? (
                  // Main Banner
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="text-2xl">🍪</span>
                        Informativa sui Cookie
                      </h3>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mb-2">
                        Questo sito utilizza cookie tecnici essenziali per garantire il corretto funzionamento 
                        e migliorare la tua esperienza di navigazione. Non utilizziamo cookie di profilazione 
                        o tracciamento.
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm mt-3">
                        <Link 
                          href="/cookie" 
                          className="text-neon hover:underline transition-all"
                        >
                          Cookie Policy
                        </Link>
                        <span className="text-white/40">•</span>
                        <Link 
                          href="/privacy" 
                          className="text-neon hover:underline transition-all"
                        >
                          Privacy Policy
                        </Link>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                      <button
                        onClick={rejectAll}
                        className="px-6 py-3 bg-white/10 text-white rounded-lg 
                                 hover:bg-white/20 transition-all duration-300 font-semibold
                                 border border-white/20 hover:border-white/40"
                      >
                        Rifiuta
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="px-6 py-3 bg-white/10 text-white rounded-lg 
                                 hover:bg-white/20 transition-all duration-300 font-semibold
                                 border border-primary/40 hover:border-primary/60"
                      >
                        Personalizza
                      </button>
                      <button
                        onClick={acceptAll}
                        className="px-6 py-3 bg-primary text-white rounded-lg 
                                 hover:bg-primary/80 transition-all duration-300 font-semibold
                                 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                      >
                        Accetta
                      </button>
                    </div>
                  </div>
                ) : (
                  // Settings Panel
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Preferenze Cookie
                      </h3>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="text-white/60 hover:text-white text-2xl transition-colors"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-4 mb-6">
                      {/* Cookie Tecnici */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="text-white font-semibold mb-1">
                              Cookie Tecnici Necessari
                            </h4>
                            <p className="text-white/60 text-sm">
                              Essenziali per il funzionamento del sito. Non possono essere disabilitati.
                            </p>
                          </div>
                          <div className="ml-4">
                            <div className="w-12 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                              <div className="w-4 h-4 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <p className="text-white/40 text-xs mt-2">
                          Include: gestione sessione, preferenze cookie
                        </p>
                      </div>

                      {/* Cookie Analitici - Disabilitati */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10 opacity-50">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="text-white font-semibold mb-1">
                              Cookie Analitici
                            </h4>
                            <p className="text-white/60 text-sm">
                              Non utilizzati al momento su questo sito.
                            </p>
                          </div>
                          <div className="ml-4">
                            <div className="w-12 h-6 bg-white/20 rounded-full flex items-center px-1">
                              <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => savePreferences(false)}
                        className="flex-1 px-6 py-3 bg-white/10 text-white rounded-lg 
                                 hover:bg-white/20 transition-all duration-300 font-semibold
                                 border border-white/20 hover:border-white/40"
                      >
                        Salva Solo Necessari
                      </button>
                      <button
                        onClick={() => savePreferences(false)}
                        className="flex-1 px-6 py-3 bg-primary text-white rounded-lg 
                                 hover:bg-primary/80 transition-all duration-300 font-semibold
                                 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                      >
                        Conferma Preferenze
                      </button>
                    </div>
                  </div>
                )}

                {/* Info aggiuntiva */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/50 text-xs text-center">
                    Utilizziamo solo cookie tecnici necessari. Puoi modificare le tue preferenze in qualsiasi momento 
                    visitando la nostra{' '}
                    <Link href="/cookie" className="text-neon hover:underline">
                      Cookie Policy
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
