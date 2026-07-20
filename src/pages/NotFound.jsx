import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container-x section text-center">
      <p className="text-sm uppercase tracking-wider text-slate-500">Error 404</p>
      <h1 className="h1 mt-2">Page not found</h1>
      <p className="lead mt-3 max-w-2xl mx-auto">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link to="/" className="px-5 py-3 rounded-md bg-[color:var(--brand-2)] text-white font-medium">
          Go to Home
        </Link>
        <Link to="/contact" className="px-5 py-3 rounded-md ring-1 ring-slate-300">
          Contact Support
        </Link>
      </div>
    </section>
  );
}


