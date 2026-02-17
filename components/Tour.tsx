'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const tourDates = [
  {
    date: '26 Aprile 2026',
    venue: 'Il Bosco Grande',
    city: 'Pavia (PV)',
    address: 'Strada Bosco Grande, 27100',
    link: 'https://www.amicideiboschi.it/il-bosco-grande.html',
  },
];

export default function Tour() {
  return (
    <section id="tour" className="py-20 px-4 bg-black relative">
      <div className="absolute inset-0 bg-grain opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-center mb-4 text-secondary drop-shadow-[0_0_20px_rgba(255,235,59,0.3)]">
            DATE TOUR
          </h2>
          <p className="text-center text-white/70 mb-12 text-lg">
            Vivi l&apos;esperienza dal vivo
          </p>

          {/* Tour Dates */}
          <div className="space-y-6 mb-12">
            {tourDates.map((show, index) => (
              <motion.div
                key={index}
                className="border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-lg p-6 md:p-8 hover:border-secondary/70 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,235,59,0.2)]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <FaCalendarAlt className="text-2xl text-secondary" />
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {show.date}
                      </h3>
                    </div>
                    <h4 className="text-xl md:text-2xl font-semibold text-neon mb-2">
                      {show.venue}
                    </h4>
                    <div className="flex items-start gap-2 text-white/70">
                      <FaMapMarkerAlt className="text-lg mt-1 text-primary" />
                      <div>
                        <p>{show.address}</p>
                        <p>{show.city}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href={show.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cta hover:bg-cta-600 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cta/30 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      Info & Biglietti
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action for More Dates */}
          <motion.div
            className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm rounded-lg p-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white/70 text-lg mb-6">
              Vuoi portare i Ravasonicos nel tuo locale o festival?
            </p>
            <a
              href="mailto:ravasonicos@gmail.com"
              className="inline-block bg-primary/20 border-2 border-primary text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:bg-primary hover:text-black hover:scale-105"
            >
              Richiedi una Data
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
