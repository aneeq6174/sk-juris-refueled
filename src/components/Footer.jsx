import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SKJ logo.png';
import Button from './Button';

const links = [
  { to: '/', label: 'Home' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/clients', label: 'Clients' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[color:var(--navy-dark)] to-[#0F1419] text-slate-200 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold-primary)] to-transparent" />
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[color:var(--navy-medium)] to-[color:var(--navy-light)] text-white relative cta-section">
        <div className="container-x py-16 sm:py-20 text-center relative z-10">
          <h2 className="h2 text-white font-[var(--font-heading)]" style={{ 
            color: '#ffffff',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
          }}>Ready to Get Started?</h2>
          <p className="lead mt-2 max-w-2xl mx-auto cta-text" style={{ 
            color: 'rgba(255, 255, 255, 0.95)',
            fontSize: '1.35rem',
            lineHeight: '1.8',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            fontWeight: '400'
          }}>
            Contact us to discuss your legal needs and discover how we can help.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button variant="primary" to="/contact">
              Schedule Consultation
            </Button>
            <Button variant="outline" to="/expertise" className="text-white border-white hover:bg-white hover:text-[color:var(--navy-dark)]">
              Explore Expertise
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="container-x section relative z-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg">
                <img
                  src={logo}
                  alt="SK Juris & Co. Logo"
                  className="h-16 sm:h-36 w-auto object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Providing exceptional international legal services with integrity and excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white font-[var(--font-accent)]">Quick Links</h4>
            <ul className="mt-4 grid gap-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link 
                    className="text-sm text-slate-300 hover:text-[color:var(--gold-primary)] transition-all duration-300 hover:translate-x-1 inline-block" 
                    to={l.to}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white font-[var(--font-accent)]">Contact</h4>
            <ul className="mt-4 text-sm text-slate-300 grid gap-2">
              <li className="hover:text-[color:var(--gold-primary)] transition-colors duration-300">Phone: +92 3004931839</li>
              <li className="hover:text-[color:var(--gold-primary)] transition-colors duration-300">Email: skjurisco@gmail.com</li>
              <li className="hover:text-[color:var(--gold-primary)] transition-colors duration-300">Website: www.skjuris.com</li>
              <li>Lahore Office: 100-C GECHS, Model Town Link Road, Lahore</li>
              <li>Islamabad Office: Office No. 104, LLP, 1st floor, Green Trust Tower, Blue Area, Islamabad</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-4 text-center text-xs sm:text-sm text-slate-400">
          © 2025 SK Juris & Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
