import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import taxationLawImage from '../assets/Taxation Law.jpeg';
import internationalLawImage from '../assets/International Law.jpeg';
import corporateLawImage from '../assets/Corporate Law.jpeg';
import officeImage from '../assets/home-office-1.jpg';

// Import animation components
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCountUp from '../components/CountUp';
import ImageWithLoader from '../components/ImageWithLoader';
import Button from '../components/Button';
import TypewriterHeading from '../components/TypewriterHeading.jsx';

const logoModules = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });
const clientLogos = Object.values(logoModules).map((mod) => (typeof mod === 'string' ? mod : mod.default));
export default function Home() {
  return (
    <>
      {/* Hero - auto-fading slider with readable overlay */}
      <HeroSlider />

      {/* About snapshot */}
      <AnimatedSection>
        <section className="section">
          <div className="container-x grid gap-10 lg:grid-cols-2 items-left">
            <AnimatedSection delay="delay-100">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <ImageWithLoader
                  alt="Office"
                  className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110"
                  src={officeImage}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay="delay-200">
              <div>
                <TypewriterHeading
                  className="h2"
                  text="About SK Juris & Co. (SKJC)"
                />
                <p className="lead mt-3">
                  Founded on principles of excellence and integrity, we have been at the forefront of
                  international legal services for over two decades.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-6">
                  <Stat value="500+" label="Cases Won" />
                  <Stat value="25+" label="Years Experience" />
                  <Stat value="50+" label="Countries Served" />
                </div>
                <Link to="/about" className="mt-6 inline-block text-[color:var(--brand-2)] font-medium">
                  Learn more →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Section - Center-aligned with hover effects */}
      <AnimatedSection>
        <section className="section bg-[color:var(--surface)]">
          <div className="container-x">
            <AnimatedSection>
              <header className="mb-10 text-center">
                <TypewriterHeading className="h2" text="Legal Services" />
                <p className="lead mt-2">Comprehensive legal solutions tailored to your needs.</p>
              </header>
            </AnimatedSection>

            {/* Service cards - practice-area names only */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {[
                'Taxation Law',
                'International Law',
                'Corporate Law',
                'Business Law',
              ].map((title, index) => (
                <AnimatedSection key={title} delay={(index + 1) * 100}>
                  <ServiceCard title={title} />
                </AnimatedSection>
              ))}
            </div>

            {/* Single View All Services button below all cards */}
            <AnimatedSection delay={400}>
              <div className="mt-10 text-center">
                <Button to="/expertise" variant="primary">
                  View All Services
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Client Logos Section */}
      <AnimatedSection>
        <section className="section bg-[color:var(--base)]">
          <div className="container-x">
            <AnimatedSection>
              <header className="mb-10 text-center">
                <TypewriterHeading className="h2" text="Trusted Clients" />
                <p className="lead mt-2">Organizations that rely on our cross-border legal expertise.</p>
              </header>
            </AnimatedSection>

            <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center">
              {clientLogos.slice(0, 6).map((logoSrc, index) => (
                <AnimatedSection key={logoSrc} delay={index * 50}>
                  <div className="h-20 w-full bg-white rounded-xl shadow-sm ring-1 ring-slate-200 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg p-4 group">
                    <img
                      src={logoSrc}
                      alt="Client logo"
                      className="max-h-12 w-auto object-contain opacity-100 transition-all duration-300"
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={400}>
              <div className="mt-10 text-center">
                <Button to="/clients" variant="primary">
                  View All Clients
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

    </>
  );
}

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

function ServiceCard({ title }) {
  return (
    <article className="card p-6 text-center transition-all duration-400 hover:shadow-xl hover:scale-[1.03] group relative overflow-hidden border-2 border-transparent hover:border-[color:var(--teal-accent)] service-card">
      {/* Icon */}
      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[color:var(--teal-accent)] to-[color:var(--navy-medium)] flex items-center justify-center mx-auto mb-4 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        {serviceIcons[title] || (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )}
      </div>

      <h3 className="font-semibold text-lg font-[var(--font-accent)]">{title}</h3>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--navy-dark)]/95 to-[color:var(--teal-accent)]/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <Button variant="outline" to="/expertise" className="text-white border-white hover:bg-white hover:text-[color:var(--navy-dark)]">
          Learn More
        </Button>
      </div>
    </article>
  );
}

// Stat component with animated counting
function Stat({ value, label }) {
  return (
    <div className="group">
      <div className="text-3xl sm:text-4xl font-bold text-[color:var(--gold-primary)] font-[var(--font-accent)] transition-all duration-300 group-hover:scale-110">
        <AnimatedCountUp value={value} duration={2.5} />
      </div>
      <div className="text-sm text-slate-600 mt-1 font-medium">{label}</div>
    </div>
  );
}


// Hero Slider Component - Auto-fading slider with updated background images
function HeroSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const slides = useMemo(
    () => [
      {
        image: taxationLawImage,
        heading: 'Taxation Law',
        description:
          'Clear advice on tax planning, compliance and disputes for businesses operating in a changing regulatory landscape.',
      },
      {
        image: internationalLawImage,
        heading: 'International Commercial Law',
        description:
          'Practical counsel for cross-border transactions, international trade and the legal challenges of global business.',
      },
      {
        image: corporateLawImage,
        heading: 'Corporate Law',
        description:
          'Commercially focused legal guidance for contracts, business operations and the decisions that move enterprises forward.',
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIndex((i) => (i + 1) % slides.length);
          return 0;
        }
        return prev + 2.86; // Increment every 100ms for 3.5s total (more professional pace)
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section
      className="home-hero relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.heading}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <ImageWithLoader
              absolute={true}
              alt=""
              className="w-full h-full object-cover"
              src={s.image}
              style={{ objectPosition: 'center 30%' }}
            />
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--navy-dark)]/80 via-[color:var(--navy-dark)]/60 to-[color:var(--teal-accent)]/50" />
            <div className="absolute inset-0 backdrop-brightness-[.75]" />
          </div>
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-20 h-full container-x flex items-center">
        <div className="text-left text-white max-w-2xl animate-fade-in-up">
          <p className="text-xs uppercase tracking-widest text-white/90">Legal Services</p>
          <TypewriterHeading
            as="h1"
            className="h1 text-white mt-2 drop-shadow-lg font-[var(--font-heading)]"
            text={slides[index].heading}
          />
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white max-w-xl mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_8px_rgba(0,0,0,0.8)]">
            {slides[index].description}
          </p>

          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <Button
              to="/expertise"
              variant="primary"
              className="bg-white text-[color:var(--navy-dark)] hover:bg-white/90"
            >
              Explore Expertise
            </Button>
          </div>

          {/* Enhanced progress indicators - Fixed single-click */}
          <div className="mt-6 flex items-center gap-2 slider-controls">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIndex(i);
                  setProgress(0);
                }}
                className="slider-dot relative flex-1 h-1 bg-white/30 rounded-full overflow-hidden group cursor-pointer"
                style={{ pointerEvents: 'auto', zIndex: 100 }}
              >
                <div
                  className={`absolute inset-y-0 left-0 bg-[color:var(--gold-primary)] transition-all duration-100 ${i === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{ width: i === index ? `${progress}%` : '0%' }}
                />
                <div className="absolute inset-0 bg-white/60 group-hover:bg-white/80 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
