'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crea il link mailto con i dati del form
    const subject = encodeURIComponent(`[Ravasonicos - ${formData.subject}] Messaggio da ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefono: ${formData.phone}\n` +
      `Oggetto: ${formData.subject}\n\n` +
      `Messaggio:\n${formData.message}`
    );
    
    // Apri il client email
    window.location.href = `mailto:ravasonicos@gmail.com?subject=${subject}&body=${body}`;
  };

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/ravasonicos?igsh=NXp3MnRjdHB3ajlv', color: 'hover:text-[#E4405F]' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/ravasonicos/', color: 'hover:text-[#1877F2]' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://m.youtube.com/channel/UC-HcJTcyJpeq0GtZqSeN6rw', color: 'hover:text-[#FF0000]' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-black relative">
      <div className="absolute inset-0 bg-grain opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-center mb-4 text-primary drop-shadow-[0_0_20px_rgba(233,30,99,0.3)]">
            CONTATTI
          </h2>
          <p className="text-center text-white/70 mb-12 text-lg">
            Unisciti alla rivoluzione sonica
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-black/50 border-2 border-white/20 focus:border-primary rounded-lg text-white outline-none transition-all duration-300"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Il tuo nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-black/50 border-2 border-white/20 focus:border-primary rounded-lg text-white outline-none transition-all duration-300"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tuo@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                      Telefono <span className="text-white/50 text-sm">(opzionale)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-black/50 border-2 border-white/20 focus:border-primary rounded-lg text-white outline-none transition-all duration-300"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-semibold mb-2">
                      Oggetto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-black/50 border-2 border-white/20 focus:border-primary rounded-lg text-white outline-none transition-all duration-300"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="">Seleziona...</option>
                      <option value="booking">Booking / Ingaggio</option>
                      <option value="press">Stampa / Media</option>
                      <option value="general">Richiesta Generale</option>
                      <option value="fan">Messaggi Fan</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Messaggio
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black/50 border-2 border-white/20 focus:border-primary rounded-lg text-white outline-none transition-all duration-300 resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Scrivi qui il tuo messaggio..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black border-2 border-neon text-neon font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:bg-neon hover:text-black hover:scale-105 shadow-lg shadow-neon/30"
                  >
                    INVIA VIA EMAIL
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 flex flex-col"
            >
              {/* Email Card */}
              <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-cta/10 border-2 border-primary/30 rounded-lg p-8 text-center flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Contatto Diretto
                </h3>
                <p className="text-white/70 mb-6">
                  Per booking, interviste, collaborazioni e richieste stampa
                </p>
                <a
                  href="mailto:ravasonicos@gmail.com"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-black border-2 border-neon text-neon font-bold rounded-lg transition-all duration-300 transform hover:bg-neon hover:text-black hover:scale-105 shadow-lg shadow-neon/30"
                >
                  <FaEnvelope className="text-2xl" />
                  <span>ravasonicos@gmail.com</span>
                </a>
              </div>

              {/* Social Media Card */}
              <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-cta/10 border-2 border-primary/30 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Seguici sui Social
                </h3>
                <p className="text-white/70 mb-6">
                  News, foto, video e aggiornamenti live
                </p>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex flex-col items-center gap-2 transition-all duration-300 transform hover:scale-110`}
                      title={social.name}
                    >
                      <social.icon className={`text-5xl text-white/60 ${social.color} transition-colors`} />
                      <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
