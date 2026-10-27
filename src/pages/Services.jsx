import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

// Service icons mapping
const serviceIcons = {
  'Taxation Law': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
    </svg>
  ),
  'International Law': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'Corporate Law': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  'Business Law': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const serviceDescriptions = {
  'Taxation Law': 'Expert counsel on domestic and cross-border tax planning, compliance, disputes, and regulatory matters.',
  'International Law': 'Navigating complex international treaties, cross-border transactions, and global regulatory frameworks.',
  'Corporate Law': 'Mergers, acquisitions, governance, company formation, and comprehensive corporate compliance.',
  'Business Law': 'End-to-end legal support for commercial contracts, joint ventures, and business operations.',
};

function ServiceCard({ title }) {
  return (
    <article className="card p-8 text-center transition-all duration-400 hover:shadow-xl hover:scale-[1.03] group relative overflow-hidden border-2 border-transparent hover:border-[color:var(--teal-accent)] service-card">
      {/* Icon */}
      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[color:var(--teal-accent)] to-[color:var(--navy-medium)] flex items-center justify-center mx-auto mb-6 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        {serviceIcons[title]}
      </div>

      <h3 className="font-semibold text-xl font-[var(--font-accent)] mb-3">{title}</h3>
      <p className="text-slate-600">{serviceDescriptions[title]}</p>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--navy-dark)]/95 to-[color:var(--teal-accent)]/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <Button variant="outline" to="/contact" className="text-white border-white hover:bg-white hover:text-[color:var(--navy-dark)]">
          Contact Us
        </Button>
      </div>
    </article>
  );
}

const services = ['Taxation Law', 'International Law', 'Corporate Law', 'Business Law'];

export default function Services() {
  return (
    <section className="container-x section">
      <AnimatedSection>
        <h1 className="h1 font-[var(--font-heading)]">Expertise</h1>
        <p className="lead mt-3">A comprehensive suite of legal services for international clients.</p>
      </AnimatedSection>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {services.map((title, index) => (
          <AnimatedSection key={title} delay={(index + 1) * 100}>
            <ServiceCard title={title} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
