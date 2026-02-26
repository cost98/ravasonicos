'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CookiePolicy() {
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
      <main className="relative z-10 pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Informativa sui Cookie
            </h1>

            <div className="prose prose-invert max-w-none text-white/80 space-y-6">
              <p className="text-sm text-white/60">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </p>

              <div className="bg-neon/10 border border-neon/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  Privacy Rispettata
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Questo sito web utilizza <strong>Google Analytics solo con il tuo esplicito consenso</strong>. 
                  Non raccogliamo dati senza permesso, non vendiamo informazioni a terze parti 
                  e non utilizziamo tecnologie di profilazione pubblicitaria.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Cosa sono i Cookie</h2>
                <p>
                  I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo 
                  dell&apos;utente quando visita un sito web. Permettono al sito di riconoscere 
                  il dispositivo e memorizzare alcune informazioni di preferenze.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Tecnologie Utilizzate su Questo Sito</h2>
                
                <p className="mb-4">
                  Il nostro sito utilizza esclusivamente tecnologie di archiviazione locale 
                  (<strong>localStorage</strong>) del browser per memorizzare preferenze base. 
                  Queste non sono cookie HTTP tradizionali e non vengono trasmesse ai server.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Dati Memorizzati Localmente</h3>
                <p>Le informazioni che il sito può memorizzare nel tuo browser sono:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>
                    <strong>Preferenze cookie:</strong> memorizza il tuo consenso all&apos;uso dei cookie analytics (localStorage)
                  </li>
                  <li>
                    <strong>Stato di navigazione temporaneo:</strong> mantiene la sessione 
                    attiva durante la navigazione
                  </li>
                </ul>
                <p className="text-white/70 text-sm mt-4">
                  Questi dati rimangono esclusivamente nel tuo browser e non vengono mai 
                  inviati ai nostri server o a terze parti (eccetto Google Analytics se acconsenti).
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Cookie Analytics (con consenso)</h3>
                <p className="mb-3">
                  Con il tuo consenso esplicito, utilizziamo <strong>Google Analytics</strong> per 
                  comprendere come i visitatori utilizzano il sito e migliorare l&apos;esperienza utente.
                </p>
                <div className="bg-white/5 rounded-lg p-4 my-4">
                  <h4 className="text-white font-semibold mb-2">Google Analytics</h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li><strong>Fornitore:</strong> Google LLC</li>
                    <li><strong>Finalità:</strong> Statistiche anonime sull&apos;utilizzo del sito</li>
                    <li><strong>Durata:</strong> Fino a 26 mesi</li>
                    <li><strong>Cookie utilizzati:</strong> _ga, _gid, _gat</li>
                    <li><strong>Privacy Policy:</strong>{' '}
                      <a 
                        href="https://policies.google.com/privacy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neon hover:underline"
                      >
                        policies.google.com/privacy
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="text-white/70 text-sm mt-4">
                  Puoi revocare il consenso in qualsiasi momento modificando le tue preferenze 
                  nella pagina <Link href="/preferenze-cookie" className="text-neon hover:underline">Preferenze Cookie</Link>.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.3 Cosa NON Utilizziamo</h3>
                <div className="bg-white/5 rounded-lg p-4 my-4">
                  <ul className="space-y-2">
                    <li>❌ Cookie di profilazione pubblicitaria</li>
                    <li>❌ Cookie di tracciamento comportamentale invasivi</li>
                    <li>❌ Pixel di tracciamento di terze parti</li>
                    <li>❌ Sistemi di remarketing</li>
                    <li>❌ Vendita dati a broker terzi</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.4 Servizi di Terze Parti</h3>
                <p>
                  Il sito integra alcuni servizi esterni che potrebbero utilizzare cookie quando 
                  li utilizzi direttamente:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>
                    <strong>Google Analytics:</strong> attivo solo con il tuo consenso esplicito, 
                    per raccogliere statistiche anonime sull&apos;utilizzo del sito
                  </li>
                  <li>
                    <strong>Link a social media:</strong> quando visiti i nostri profili social 
                    (Instagram, Facebook, YouTube), quelle piattaforme gestiranno i propri cookie 
                    secondo le loro policy
                  </li>
                </ul>
                <p className="text-white/70 text-sm mt-4">
                  Non incorporiamo widget social che tracciano automaticamente la tua navigazione 
                  sul nostro sito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Gestione del Browser</h2>
                <p>
                  Puoi gestire o eliminare i dati di navigazione attraverso le impostazioni 
                  del tuo browser:
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Istruzioni per Browser Principali</h3>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>
                    <strong>Chrome:</strong>{' '}
                    <a 
                      href="https://support.google.com/chrome/answer/95647" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neon hover:underline"
                    >
                      Gestione cookie in Chrome
                    </a>
                  </li>
                  <li>
                    <strong>Firefox:</strong>{' '}
                    <a 
                      href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neon hover:underline"
                    >
                      Gestione cookie in Firefox
                    </a>
                  </li>
                  <li>
                    <strong>Safari:</strong>{' '}
                    <a 
                      href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neon hover:underline"
                    >
                      Gestione cookie in Safari
                    </a>
                  </li>
                  <li>
                    <strong>Edge:</strong>{' '}
                    <a 
                      href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neon hover:underline"
                    >
                      Gestione cookie in Edge
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Consenso e Normativa</h2>
                <p>
                  I dati di navigazione base memorizzati localmente dal tuo browser sono necessari 
                  per il funzionamento del sito e, secondo la normativa vigente (GDPR e Direttiva 
                  ePrivacy), non richiedono il tuo consenso esplicito.
                </p>
                <p className="mt-4 text-white/80">
                  <strong>Google Analytics richiede il tuo consenso esplicito.</strong> Il banner cookie 
                  che appare alla prima visita ti permette di scegliere se accettare o rifiutare i cookie 
                  analytics. Gli script di Google Analytics vengono caricati solo dopo che hai espresso 
                  il consenso cliccando &quot;Accetta&quot; o personalizzando le tue preferenze.
                </p>
                <p className="mt-4 text-white/80">
                  Puoi modificare o revocare il consenso in qualsiasi momento visitando la pagina{' '}
                  <Link href="/preferenze-cookie" className="text-neon hover:underline">Preferenze Cookie</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Ulteriori Informazioni</h2>
                <p>
                  Per informazioni complete sulla protezione dei tuoi dati personali, consulta la nostra{' '}
                  <Link href="/privacy" className="text-neon hover:underline">Privacy Policy</Link>.
                </p>
                <p className="mt-4">
                  Per domande o richieste, contattaci:<br />
                  <strong>Email:</strong> ravasonicos@gmail.com
                </p>
              </section>

              <div className="bg-neon/10 border border-neon/30 rounded-xl p-6 my-8">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">🎸</span>
                  La Nostra Filosofia
                </h4>
                <p className="text-white/90 leading-relaxed">
                  Crediamo in una navigazione web semplice e rispettosa della privacy. 
                  Utilizziamo Google Analytics solo se tu lo consenti, per capire meglio come migliorare 
                  il sito. Mai profilazione, mai vendita di dati. Il tuo tempo con noi è dedicato alla musica!
                </p>
              </div>
            </div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg 
                         hover:bg-primary/80 transition-colors duration-300"
              >
                ← Torna alla Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
