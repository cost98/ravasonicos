'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TerminiUso() {
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
              Termini e Condizioni d&apos;Uso
            </h1>

            <div className="prose prose-invert max-w-none text-white/80 space-y-6">
              <p className="text-sm text-white/60">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </p>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Accettazione dei Termini</h2>
                <p>
                  Accedendo e utilizzando il sito web dei Ravasonicos (di seguito &quot;il Sito&quot;), 
                  l&apos;utente accetta di essere vincolato dai presenti Termini e Condizioni d&apos;Uso. 
                  Se non si accettano questi termini, si prega di non utilizzare il Sito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Modifiche ai Termini</h2>
                <p>
                  Ci riserviamo il diritto di modificare questi Termini in qualsiasi momento. 
                  Le modifiche entreranno in vigore immediatamente dopo la pubblicazione sul Sito. 
                  L&apos;uso continuato del Sito dopo la pubblicazione delle modifiche costituisce 
                  accettazione dei nuovi Termini.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Uso del Sito</h2>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Uso Consentito</h3>
                <p>Il Sito è fornito per uso personale e non commerciale. L&apos;utente può:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Navigare e visualizzare i contenuti del Sito</li>
                  <li>Ascoltare la musica e guardare i video disponibili</li>
                  <li>Condividere i contenuti tramite i pulsanti di condivisione social</li>
                  <li>Contattarci tramite il modulo di contatto</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Uso Vietato</h3>
                <p>È espressamente vietato:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Utilizzare il Sito per scopi illegali o non autorizzati</li>
                  <li>Copiare, riprodurre o distribuire contenuti senza autorizzazione</li>
                  <li>Modificare, decompilare o effettuare reverse engineering del Sito</li>
                  <li>Utilizzare sistemi automatizzati (bot, spider) per accedere al Sito</li>
                  <li>Tentare di accedere a aree protette o sistemi del Sito</li>
                  <li>Trasmettere virus, malware o codice dannoso</li>
                  <li>Violare i diritti di proprietà intellettuale</li>
                  <li>Impersonare altri utenti o entità</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Proprietà Intellettuale</h2>
                <p>
                  Tutti i contenuti presenti sul Sito, inclusi ma non limitati a testi, 
                  immagini, loghi, musica, video, grafica, design e codice sono di proprietà 
                  dei Ravasonicos o dei rispettivi proprietari e sono protetti dalle leggi 
                  sul diritto d&apos;autore e sulla proprietà intellettuale.
                </p>
                <p className="mt-4">
                  Il nome &quot;Ravasonicos&quot;, il logo e tutti i marchi correlati sono di proprietà 
                  esclusiva dei Ravasonicos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Contenuti Musicali</h2>
                <p>
                  I brani musicali, le registrazioni audio e i video presenti sul Sito sono 
                  forniti esclusivamente per l&apos;ascolto personale e non commerciale. È vietato:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Scaricare, copiare o distribuire i brani senza autorizzazione</li>
                  <li>Utilizzare la musica per scopi commerciali</li>
                  <li>Modificare o creare opere derivate dai brani</li>
                  <li>Rimuovere informazioni sul copyright o watermark</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">6. Link Esterni</h2>
                <p>
                  Il Sito può contenere link a siti web di terze parti (come piattaforme di 
                  streaming musicale, social media, biglietterie). Questi link sono forniti 
                  per comodità dell&apos;utente. Non controlliamo né ci assumiamo responsabilità 
                  per il contenuto, le politiche sulla privacy o le pratiche di siti esterni.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">7. Contenuti Generati dagli Utenti</h2>
                <p>
                  Se inviato contenuto tramite il modulo di contatto o altri canali, 
                  l'utente garantisce di:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Possedere tutti i diritti sul contenuto inviato</li>
                  <li>Non violare diritti di terzi</li>
                  <li>Non inviare contenuti illegali, diffamatori o offensivi</li>
                </ul>
                <p className="mt-4">
                  Ci riserviamo il diritto di rimuovere qualsiasi contenuto inappropriato.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">8. Limitazione di Responsabilità</h2>
                <p>
                  Il Sito è fornito &quot;così com&apos;è&quot; senza garanzie di alcun tipo. Nei limiti 
                  consentiti dalla legge, non ci assumiamo responsabilità per:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Interruzioni o errori nel funzionamento del Sito</li>
                  <li>Perdita di dati o danni derivanti dall'uso del Sito</li>
                  <li>Contenuti di siti web di terze parti</li>
                  <li>Inaccuratezza o incompletezza delle informazioni</li>
                  <li>Danni diretti, indiretti o consequenziali</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">9. Indennizzo</h2>
                <p>
                  L'utente accetta di indennizzare e manlevare i Ravasonicos da qualsiasi 
                  richiesta, danno, perdita o spesa (incluse le spese legali) derivanti da:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Violazione di questi Termini</li>
                  <li>Violazione di leggi o diritti di terzi</li>
                  <li>Uso improprio del Sito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">10. Privacy</h2>
                <p>
                  L&apos;uso del Sito è soggetto anche alla nostra{' '}
                  <Link href="/privacy" className="text-neon hover:underline">Privacy Policy</Link>
                  {' '}e alla{' '}
                  <Link href="/cookie" className="text-neon hover:underline">Cookie Policy</Link>, 
                  che descrivono come raccogliamo, utilizziamo e proteggiamo i dati personali.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">11. Risoluzione delle Controversie</h2>
                <p>
                  In caso di controversie relative a questi Termini o all&apos;uso del Sito, 
                  le parti si impegnano a tentare una risoluzione amichevole. 
                </p>
                <p className="mt-4">
                  Questi Termini sono regolati dalla legge italiana. Per qualsiasi controversia 
                  sarà competente il Foro di riferimento secondo le norme vigenti.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">12. Disposizioni Generali</h2>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">12.1 Separabilità</h3>
                <p>
                  Se una qualsiasi disposizione di questi Termini è ritenuta non valida o 
                  inapplicabile, le restanti disposizioni rimarranno valide ed efficaci.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">12.2 Intero Accordo</h3>
                <p>
                  Questi Termini costituiscono l&apos;intero accordo tra l&apos;utente e i Ravasonicos 
                  relativamente all&apos;uso del Sito.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">12.3 Rinuncia</h3>
                <p>
                  Il mancato esercizio di un diritto previsto da questi Termini non costituisce 
                  rinuncia a tale diritto.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">13. Disponibilità del Servizio</h2>
                <p>
                  Ci impegniamo a mantenere il Sito accessibile, ma non garantiamo che sarà 
                  sempre disponibile o privo di errori. Ci riserviamo il diritto di:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Sospendere temporaneamente il Sito per manutenzione</li>
                  <li>Modificare o interrompere qualsiasi funzionalità</li>
                  <li>Limitare l'accesso a determinate aree del Sito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">14. Contatti</h2>
                <p>
                  Per domande, commenti o richieste relative a questi Termini e Condizioni, 
                  contattare:
                </p>
                <p className="mt-4">
                  <strong>Ravasonicos</strong><br />
                  Email: ravasonicos@gmail.com
                </p>
              </section>

              <div className="bg-neon/10 border border-neon/30 rounded-lg p-6 my-8">
                <p className="text-white/90 text-center">
                  <strong>Grazie per aver visitato il sito dei Ravasonicos!</strong><br />
                  Utilizzando il sito, accetti di rispettare questi Termini e Condizioni.
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
