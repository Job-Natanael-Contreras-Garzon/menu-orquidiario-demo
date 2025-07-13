'use client';

import { MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const Footer = () => {
  const socialLinks = [
    {
      href: 'https://www.instagram.com/elorquideario.scz/?hl=es',
      icon: <Instagram className="h-6 w-6" />,
      name: 'Instagram',
    },
    {
      href: 'https://www.tiktok.com/discover/el-orquideario?lang=es',
      icon: <TikTokIcon className="h-6 w-6" />,
      name: 'TikTok',
    },
    {
      href: 'https://wa.me/59162014808',
      icon: <WhatsAppIcon className="h-6 w-6" />,
      name: 'WhatsApp',
    },
  ];

  const contactInfo = [
    {
      href: 'https://maps.app.goo.gl/S5315jEbGWcbEwkr9',
      icon: <MapPin className="h-5 w-5 flex-shrink-0" />,
      text: 'C. Republiquetas 489 Esq. Tarija, Santa Cruz de la Sierra',
    },
    {
      href: 'mailto:elorquideario@cafeteria.com',
      icon: <Mail className="h-5 w-5 flex-shrink-0" />,
      text: 'elorquideario@cafeteria.com',
    },
    {
      href: 'tel:+59162014808',
      icon: <Phone className="h-5 w-5 flex-shrink-0" />,
      text: '(+591) 6201-4808',
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Columna 1: Logo y Nombre */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-headline text-2xl font-bold text-primary">El Orquideario</h2>
            <p className="mt-2 text-sm text-muted-foreground">Café de especialidad</p>
          </div>

          {/* Columna 2: Contacto */}
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-foreground">Contacto</h3>
            <ul className="mt-4 space-y-3">
              {contactInfo.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.icon}
                    <span className="text-sm">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-foreground">Síguenos</h3>
            <div className="mt-4 flex justify-center md:justify-start gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BB Developers. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
