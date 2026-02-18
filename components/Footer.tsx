'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaYoutube, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/ravasonicos?igsh=NXp3MnRjdHB3ajlv', color: 'hover:text-[#E4405F]' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/ravasonicos/', color: 'hover:text-[#1877F2]' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://m.youtube.com/channel/UC-HcJTcyJpeq0GtZqSeN6rw', color: 'hover:text-[#FF0000]' },
  ];

  const quickLinks = [
    { name: 'Bio', href: '#bio' },
    { name: 'Musica', href: '#music' },
    { name: 'Tour', href: '#tour' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-black to-primary/10 relative pt-8">
      {/* Decorative gradient separator with glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon to-transparent blur-sm"></div>
      
      {/* Radial glow effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
      
      <div className="absolute inset-0 bg-grain opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="/images/scritta.webp" alt="Ravasónicos" className="h-32 w-auto mb-4" />
            <p className="text-white/60 mb-4">
              El sonido que vibra. Rock Latino dal cuore.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl text-white/60 ${social.color} transition-all duration-300 transform hover:scale-125`}
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-secondary mb-4">
              Link Rapidi
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-neon transition-colors duration-300"
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-secondary mb-4">
              Contatti
            </h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <span className="text-white/40">Email:</span><br />
                <a href="mailto:ravasonicos@gmail.com" className="hover:text-neon transition-colors">
                  ravasonicos@gmail.com
                </a>
              </li>
              <li>
                <span className="text-white/40">Social:</span><br />
                <span>@ravasonicos</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 text-sm text-center md:text-left">
            © {currentYear} Ravasonicos. Tutti i diritti riservati.
          </p>
          
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-white/40 justify-center">
            <a href="/privacy" className="hover:text-neon transition-colors">
              Privacy Policy
            </a>
            <a href="/cookie" className="hover:text-neon transition-colors">
              Informativa Cookie
            </a>
            <a href="/termini" className="hover:text-neon transition-colors">
              Termini d&apos;Uso
            </a>
          </div>

          <p className="text-white/40 text-sm flex items-center gap-2">
            Fatto con <FaHeart className="text-neon text-xs" /> per il rock
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
