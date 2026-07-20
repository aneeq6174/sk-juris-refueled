import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../assets/SKJ logo.png';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  {
    to: '/recognitions',
    label: 'Recognitions',
    dropdown: [
      { to: '/recognitions#awards-and-moments', label: 'Awards and Moments' },
      { to: '/recognitions#moments-videos', label: 'Moments — Videos' },
    ],
  },
  { to: '/team', label: 'Team' },
  { to: '/services', label: 'Services' },
  { to: '/clients', label: 'Clients' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact Us' },
];

// Smooth scroll to a hash section, waiting for the page to be ready
function scrollToHash(hash) {
  if (!hash) return;
  const id = hash.replace('#', '');
  const attempt = (tries = 0) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    } else if (tries < 10) {
      setTimeout(() => attempt(tries + 1), 120);
    }
  };
  attempt();
}

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkBase = 'px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1';
  const linkActive = 'text-white bg-white/20';
  const linkIdle = 'text-white/80 hover:text-white hover:bg-white/10';

  const handleNavigate = () => {
    setOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  };

  const handleHashLink = (e, to) => {
    e.preventDefault();
    handleNavigate();
    const [path, hash] = to.split('#');
    const hashStr = hash ? `#${hash}` : '';
    const currentPath = window.location.pathname;

    if (currentPath === path) {
      scrollToHash(hashStr);
    } else {
      navigate(path);
      setTimeout(() => scrollToHash(hashStr), 300);
    }
  };

  const renderDropdownLinks = (items, variant = 'desktop') => {
    return (
      <div className={variant === 'desktop' ? 'py-2' : 'mt-2 space-y-1'}>
        {items.map((item) => {
          const isHashLink = item.to.includes('#');
          const commonClass =
            variant === 'desktop'
              ? 'block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors'
              : 'block px-3 py-2 text-sm text-white/80 rounded-md hover:bg-white/10 hover:text-white transition-colors';
          return isHashLink ? (
            <a
              key={item.label}
              href={item.to}
              onClick={(e) => handleHashLink(e, item.to)}
              className={commonClass}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.to}
              onClick={handleNavigate}
              className={commonClass}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <header className={`sticky top-0 z-50 text-white shadow-md transition-all duration-300 ${isScrolled ? 'bg-[color:var(--navy-dark)]/95 backdrop-blur-md h-16 sm:h-20 shadow-lg' : 'bg-[color:var(--navy-dark)] h-20 sm:h-24'}`}>
      <div className={`container-x flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-24'}`}>
        <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105" onClick={handleNavigate}>
          <img src={logo} alt="SK Juris & Co. Logo" className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-20 sm:h-24' : 'h-28 sm:h-32 lg:h-38'}`} />
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative" onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
                  <NavLink to={item.to} className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`} onClick={handleNavigate}>
                    <span>{item.label}</span>
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.293l3.71-4.06a.75.75 0 0 1 1.08 1.04l-4.24 4.63a.75.75 0 0 1-1.08 0l-4.24-4.63a.75.75 0 0 1 .02-1.06z" /></svg>
                  </NavLink>
                  <div className={`absolute left-0 top-full mt-2 w-56 bg-white text-slate-900 shadow-lg ring-1 ring-black/5 transition-all duration-200 ${openDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'}`}>
                    {renderDropdownLinks(item.dropdown, 'desktop')}
                  </div>
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} className={({ isActive }) => {
                  const base = 'px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1 relative group';
                  const active = isActive ? 'text-white bg-white/20' : 'text-white/80 hover:text-white hover:bg-white/10';
                  return `${base} ${active}`;
                }} onClick={handleNavigate}>
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[color:var(--gold-primary)] transition-all duration-300 group-hover:w-full" />
                </NavLink>
              )
            )}
          </nav>
          <button className="lg:hidden p-2 rounded-md text-white hover:bg-white/10" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[color:var(--brand)]">
          <div className="container-x py-3 grid gap-2">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="rounded-lg border border-white/10">
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-white/90" onClick={() => setOpenMobileDropdown((prev) => (prev === item.label ? null : item.label))}>
                    <span>{item.label}</span>
                    <svg className={`h-4 w-4 transition-transform ${openMobileDropdown === item.label ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.293l3.71-4.06a.75.75 0 0 1 1.08 1.04l-4.24 4.63a.75.75 0 0 1-1.08 0l-4.24-4.63a.75.75 0 0 1 .02-1.06z" /></svg>
                  </button>
                  {openMobileDropdown === item.label && (
                    <div className="px-3 pb-3 space-y-1">
                      <NavLink to={item.to} onClick={handleNavigate} className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>{item.label}</NavLink>
                      {renderDropdownLinks(item.dropdown, 'mobile')}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} onClick={handleNavigate} className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>{item.label}</NavLink>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}


