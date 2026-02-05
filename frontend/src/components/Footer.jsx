import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Ana Sayfa', id: 'hero' },
    { name: 'Hizmetler', id: 'services' },
    { name: 'Hakkımızda', id: 'about' },
    { name: 'Mağaza', id: 'shop' }
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-aspect-green to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_modelwizard/artifacts/u0f1cf0l_marka.jpg" 
                alt="Aspect Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-white">ASPECT</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              3D tasarım ve üretim teknolojilerini yazılım disipliniyle birleştiriyoruz. 
              Hayalinizdeki baskıları yüksek hassasiyetli çözümlerle fiziksel dünyaya taşıyoruz.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/3daspectshop/" 
                className="w-10 h-10 bg-white/5 hover:bg-aspect-green/20 border border-white/10 hover:border-aspect-green rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
                target='_blank'
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-aspect-green transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/batuyılmaz/" 
                className="w-10 h-10 bg-white/5 hover:bg-aspect-green/20 border border-white/10 hover:border-aspect-green rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
                target='_blank'
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-aspect-green transition-colors" />
              </a>
              <a 
                href="https://github.com/batuyilmaz58" 
                className="w-10 h-10 bg-white/5 hover:bg-aspect-green/20 border border-white/10 hover:border-aspect-green rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="Github"
                target='_blank'
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-aspect-green transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, `#${item.id}`)}
                    className="text-gray-400 hover:text-aspect-green transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-aspect-green mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400 hover:text-aspect-green transition-colors duration-300 group">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-aspect-green" />
                <a href="mailto:3daspectshop@gmail.com" className="group-hover:underline">
                  3daspectshop@gmail.com
                </a>
              </li>
              <li className="flex items-start text-gray-400 hover:text-aspect-green transition-colors duration-300 group">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-aspect-green" />
                <a href="tel:+905376555005" className="group-hover:underline">
                  +90 537 655 5005
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-aspect-green" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} <span className="text-aspect-green font-semibold">Aspect</span>. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-aspect-green transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-aspect-green transition-colors">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-aspect-green to-transparent"></div>
    </footer>
  );
};

export default Footer;
