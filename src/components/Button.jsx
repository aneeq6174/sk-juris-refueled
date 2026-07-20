import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ 
  to, 
  children, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button',
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold font-[var(--font-accent)] transition-all duration-300 relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[color:var(--gold-primary)] to-[color:var(--gold-light)] text-[color:var(--navy-dark)] shadow-md hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.3)] hover:scale-105',
    secondary: 'bg-[color:var(--navy-medium)] text-white shadow-md hover:bg-[color:var(--navy-dark)] hover:scale-105',
    outline: 'border-2 border-[color:var(--gold-primary)] text-[color:var(--gold-primary)] hover:bg-[color:var(--gold-primary)] hover:text-[color:var(--navy-dark)]'
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[color:var(--gold-light)] to-[color:var(--gold-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-[color:var(--gold-light)] to-[color:var(--gold-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}

