'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>

            <div className="prose prose-invert max-w-none text-white/80 space-y-6">
              <p className="text-sm text-white/60">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </p>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Introduzione</h2>
                <p>
                  La presente Privacy Policy descrive le modalità di raccolta, utilizzo e protezione 
                  dei dati personali degli utenti che visitano il sito web dei Ravasonicos 
                  (di seguito "il Sito"). Ci impegniamo a proteggere la privacy dei nostri visitatori 
                  e a rispettare le normative vigenti in materia di protezione dei dati personali, 
                  in particolare il Regolamento UE 2016/679 (GDPR) e il D.Lgs. 196/2003 (Codice Privacy italiano).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Titolare del Trattamento</h2>
                <p>
                  Il titolare del trattamento dei dati è:<br />
                  <strong>Ravasonicos</strong><br />
                  Email: ravasonicos@gmail.com
                </p>
                <p className="mt-4 text-white/80">
                  Il Titolare tratta i dati personali degli utenti in conformità con il GDPR 
                  e la normativa italiana sulla privacy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Dati Raccolti</h2>
                <p>Durante la navigazione del Sito, potrebbero essere raccolti i seguenti dati:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>
                    <strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, 
                    pagine visitate, durata della visita (raccolti automaticamente dai log del server)
                  </li>
                  <li>
                    <strong>Dati del modulo di contatto:</strong> nome, email, telefono e messaggio inseriti 
                    nel form vengono utilizzati esclusivamente per aprire il client email del visitatore 
                    (tramite protocollo mailto:) senza passare per servizi terzi
                  </li>
                  <li>
                    <strong>Cookie Analytics (con consenso):</strong> se acconsenti all'uso di Google Analytics, 
                    raccogliamo dati anonimizzati sulla tua navigazione per comprendere come i visitatori 
                    utilizzano il sito e migliorare l'esperienza utente. Per maggiori informazioni consulta la nostra{' '}
                    <Link href="/cookie" className="text-neon hover:underline">Cookie Policy</Link>
                  </li>
                  <li>
                    <strong>Cookie tecnici:</strong> per maggiori informazioni consulta la nostra{' '}
                    <Link href="/cookie" className="text-neon hover:underline">Cookie Policy</Link>
                  </li>
                </ul>
                <p className="mt-4 text-white/80">
                  <strong>Cosa NON raccogliamo:</strong> non utilizziamo cookie di profilazione pubblicitaria 
                  o strumenti di tracciamento invasivi. Non raccogliamo dati sensibili o categorie particolari 
                  di dati personali. Il modulo di contatto non invia dati a server esterni: apre semplicemente 
                  il tuo client email precompilando i campi. Google Analytics viene attivato solo con il tuo 
                  esplicito consenso e i dati raccolti sono anonimizzati.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Finalità del Trattamento</h2>
                <p>I dati personali sono trattati per le seguenti finalità:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Facilitare il contatto tramite il modulo (che apre il client email dell'utente)</li>
                  <li>Rispondere alle richieste inviate via email</li>
                  <li>Migliorare l'esperienza di navigazione e le funzionalità del Sito</li>
                  <li>Analizzare l'utilizzo del sito tramite Google Analytics (solo con consenso esplicito) per comprendere come i visitatori interagiscono con i contenuti e migliorare i servizi offerti</li>
                  <li>Adempiere agli obblighi di legge</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Base Giuridica</h2>
                <p>
                  Il trattamento dei dati personali si basa sulle seguenti basi giuridiche:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li><strong>Consenso dell'interessato:</strong> per l'uso di Google Analytics e cookie non tecnici (art. 6.1.a GDPR)</li>
                  <li><strong>Esecuzione di un contratto:</strong> quando necessario per fornire i servizi richiesti</li>
                  <li><strong>Legittimo interesse del titolare:</strong> per migliorare i servizi e garantire la sicurezza del sito</li>
                  <li><strong>Adempimento di obblighi di legge:</strong> quando richiesto dalla normativa vigente</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">6. Conservazione dei Dati</h2>
                <p>
                  I dati personali saranno conservati per il tempo strettamente necessario al 
                  raggiungimento delle finalità per cui sono stati raccolti:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>
                    <strong>Dati di navigazione:</strong> conservati nei log del server per un 
                    massimo di 7 giorni per motivi di sicurezza
                  </li>
                  <li>
                    <strong>Dati del modulo di contatto:</strong> non vengono salvati sul server. 
                    I dati inseriti nel form vengono utilizzati solo temporaneamente per creare 
                    il link mailto che apre il client email dell'utente
                  </li>
                  <li>
                    <strong>Email ricevute:</strong> le email inviate tramite il client dell'utente 
                    sono conservate fino alla conclusione della richiesta e per un massimo di 2 anni successivi
                  </li>
                  <li>
                    <strong>Cookie Google Analytics:</strong> se acconsenti all'uso di Google Analytics, 
                    i cookie verranno conservati per un massimo di 26 mesi secondo le policy di Google. 
                    Puoi revocare il consenso in qualsiasi momento
                  </li>
                  <li>
                    <strong>Preferenze localStorage:</strong> conservati nel browser dell'utente fino alla 
                    loro cancellazione manuale
                  </li>
                </ul>
                <p className="mt-4 text-white/80">
                  Al termine del periodo di conservazione, i dati saranno cancellati o resi anonimi 
                  in modo permanente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">7. Condivisione dei Dati</h2>
                <p>
                  I dati personali non verranno <strong>mai venduti</strong> a terze parti. 
                  La condivisione è limitata ai seguenti casi:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>
                    <strong>Fornitori di servizi essenziali:</strong> hosting del sito web. 
                    Questi fornitori sono vincolati da accordi di riservatezza
                  </li>
                  <li>
                    <strong>Google Analytics:</strong> solo se acconsenti all'uso di cookie analytics, 
                    Google LLC riceverà dati anonimizzati sulla navigazione per finalità statistiche. 
                    Google è certificato Privacy Shield e conforme al GDPR. 
                    Consulta la{' '}
                    <a 
                      href="https://policies.google.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neon hover:underline"
                    >
                      Privacy Policy di Google
                    </a>
                  </li>
                  <li>
                    <strong>Obblighi di legge:</strong> quando richiesto dalla legge o da 
                    autorità competenti
                  </li>
                  <li>
                    <strong>Consenso esplicito:</strong> con il consenso esplicito dell'utente 
                    per finalità specifiche
                  </li>
                </ul>
                <p className="mt-4 text-white/80">
                  Le email inviate dai visitatori vengono ricevute direttamente tramite il 
                  client email del contatto, senza intermediari di terze parti per la 
                  gestione dei moduli.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">8. Diritti dell'Interessato</h2>
                <p>In conformità al GDPR, gli utenti hanno diritto a:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li><strong>Accesso:</strong> ottenere conferma dell'esistenza di dati personali e accedere ai propri dati</li>
                  <li><strong>Rettifica:</strong> richiedere la correzione di dati inesatti o incompleti</li>
                  <li><strong>Cancellazione:</strong> richiedere la cancellazione dei dati (diritto all'oblio)</li>
                  <li><strong>Limitazione:</strong> richiedere la limitazione del trattamento</li>
                  <li><strong>Portabilità:</strong> ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
                  <li><strong>Opposizione:</strong> opporsi al trattamento dei dati</li>
                  <li><strong>Revoca del consenso:</strong> revocare il consenso in qualsiasi momento</li>
                  <li><strong>Reclamo:</strong> proporre reclamo all'autorità di controllo</li>
                </ul>
                <p className="mt-4">
                  Per esercitare questi diritti, contattare: <strong>ravasonicos@gmail.com</strong>
                </p>
                
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 my-6">
                  <h4 className="text-white font-semibold mb-2">Diritto di Reclamo</h4>
                  <p className="text-white/90 text-sm">
                    Gli interessati che ritengono che il trattamento dei dati personali a loro 
                    riferiti avvenga in violazione della normativa hanno diritto di proporre reclamo 
                    al Garante per la Protezione dei Dati Personali, come previsto dall'art. 77 del GDPR.
                  </p>
                  <p className="text-white/90 text-sm mt-3">
                    <strong>Garante per la Protezione dei Dati Personali</strong><br />
                    Piazza Venezia n. 11 - 00187 Roma<br />
                    Tel: +39 06.696771<br />
                    Fax: +39 06.69677.3785<br />
                    Email: garante@gpdp.it<br />
                    PEC: protocollo@pec.gpdp.it<br />
                    Web:{' '}
                    <a 
                      href="https://www.garanteprivacy.it" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neon hover:underline"
                    >
                      www.garanteprivacy.it
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">9. Sicurezza</h2>
                <p>
                  Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere 
                  i dati personali da accessi non autorizzati, perdita, distruzione o alterazione.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">10. Link Esterni</h2>
                <p>
                  Il Sito può contenere link a siti web di terze parti (es. social media). 
                  Non siamo responsabili delle pratiche di privacy di tali siti esterni.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">11. Modifiche alla Privacy Policy</h2>
                <p>
                  Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. 
                  Le modifiche saranno pubblicate su questa pagina con l'indicazione della data 
                  di aggiornamento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">12. Contatti</h2>
                <p>
                  Per qualsiasi domanda o richiesta relativa a questa Privacy Policy, 
                  contattare:<br />
                  Email: ravasonicos@gmail.com
                </p>
              </section>
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
