import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import BrandWordmark from './BrandWordmark.jsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/clients', label: 'Clients' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = () => setOpen(false);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 h-20 text-white shadow-md transition-colors duration-300 ease-in-out sm:h-24 ${isScrolled ? 'border-b border-white/10 bg-[color:var(--navy-dark)]/75 shadow-lg backdrop-blur-xl' : 'bg-[color:var(--navy-dark)]'}`}>
        <div className="container-x flex h-full items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105" onClick={handleNavigate}>
            <BrandWordmark size="navbar" />
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`
                  }
                  onClick={handleNavigate}
                >
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[color:var(--gold-primary)] transition-all duration-300 group-hover:w-full" />
                </NavLink>
              ))}
            </nav>
            <button
              className="lg:hidden rounded-md p-2 text-white hover:bg-white/10"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle Menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-navigation" className="lg:hidden border-t border-white/10 bg-[color:var(--brand)]">
            <div className="container-x grid gap-2 py-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={handleNavigate}
                  className={({ isActive }) =>
                    `flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>
      <div aria-hidden="true" className="h-20 shrink-0 sm:h-24" />
    </>
  );
}
