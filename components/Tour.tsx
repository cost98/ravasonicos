'use client';

import { motion } from 'framer-motion';
import { FaTicketAlt, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

export default function Tour() {
  const tourDates = [
    {
      date: '15 FEB 2026',
      venue: 'Rock Palace',
      city: 'Madrid, España',
      ticketLink: '#',
    },
    {
      date: '22 FEB 2026',
      venue: 'La Sala Underground',
      city: 'Barcelona, España',
      ticketLink: '#',
    },
    {
      date: '01 MAR 2026',
      venue: 'El Templo del Rock',
      city: 'Valencia, España',
      ticketLink: '#',
    },
    {
      date: '08 MAR 2026',
      venue: 'Arena Sonora',
      city: 'Sevilla, España',
      ticketLink: '#',
    },
  ];

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
            TOUR DATES
          </h2>
          <p className="text-center text-white/70 mb-12 text-lg">
            Vive la experiencia en vivo
          </p>

          <div className="space-y-4">
            {tourDates.map((show, index) => (
              <motion.div
                key={index}
                className="border-2 border-primary bg-black/50 backdrop-blur-sm rounded-lg p-6 hover:bg-primary/10 transition-all duration-300 group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <FaCalendarAlt className="text-secondary text-xl flex-shrink-0" />
                      <span className="text-secondary font-bold text-lg">
                        {show.date}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-primary text-xl flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">{show.venue}</p>
                        <p className="text-white/60 text-sm">{show.city}</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={show.ticketLink}
                    className="bg-cta hover:bg-cta-600 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-cta/30"
                  >
                    <FaTicketAlt />
                    ENTRADAS
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white/70 mb-4">¿No encuentras tu ciudad?</p>
            <button className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-black font-bold px-8 py-3 rounded-lg transition-all duration-300">
              SOLICITA UNA FECHA
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
