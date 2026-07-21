import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import heroTeamImage from '../assets/Hero-Team.JPG';
import heroServicesImage from '../assets/Hero-Services.jpg';
import heroAboutUsImage from '../assets/Hero-about-us.jpg';
import heroEventsImage from '../assets/Hero-events-and-achievements.jpg';
import heroContactImage from '../assets/Hero-contact-us.jpg';
import heroTestimonialsImage from '../assets/Hero-testimonials.png';
import officeImage from '../assets/home-office-1.jpg';

// Import animation components
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCountUp from '../components/CountUp';
import ImageWithLoader from '../components/ImageWithLoader';
import Button from '../components/Button';

// Import team member images
import founderImage from '../team/00 - Sheikh Khurram Shehzad - (Founder) Advocate high court.JPG';
import member1Image from '../team/03 - Muhammad Younas - Advocate High Court.jpg';
import member2Image from '../team/01 - Waqas Mahmood Kasuri - Advocate.jpg';
import member3Image from '../team/05 - Amir Rasheed Bhatti - Advocate High Court.jpeg';

// Dynamically import achievement images for the recognitions section preview
const awardModules = import.meta.glob('../Recognitions/achievements/*.{jpg,jpeg,JPG,JPEG,png,PNG}', { eager: true });
const awardImages = Object.entries(awardModules).map(([path, mod]) => ({
  image: typeof mod === 'string' ? mod : mod.default,
  title: path.split('/').pop().replace(/\.(jpg|jpeg|JPG|JPEG|png|PNG)$/, ''),
})).slice(0, 3); // Show first 3 achievements on home page

const logoModules = import.meta.glob('../assets/logos/*.{png,jpg,jpeg}', { eager: true });
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
                <h2 className="h2">About SK Juris & Co.</h2>
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
                <h2 className="h2">Legal Services</h2>
                <p className="lead mt-2">Comprehensive legal solutions tailored to your needs.</p>
              </header>
            </AnimatedSection>

            {/* Service cards - 4 real services in a 2x2 grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {[
                ['Taxation Law', 'Expert counsel on domestic and cross-border tax planning, compliance, and disputes.'],
                ['International Law', 'Navigating complex international treaties, cross-border transactions, and global regulatory frameworks.'],
                ['Corporate Law', 'Mergers, acquisitions, governance, company formation, and corporate compliance.'],
                ['Business Law', 'End-to-end legal support for commercial contracts, joint ventures, and business operations.'],
              ].map(([title, desc], index) => (
                <AnimatedSection key={title} delay={(index + 1) * 100}>
                  <ServiceCard title={title} description={desc} />
                </AnimatedSection>
              ))}
            </div>

            {/* Single View All Services button below all cards */}
            <AnimatedSection delay={400}>
              <div className="mt-10 text-center">
                <Button to="/services" variant="primary">
                  View All Services
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Team Section - Founder displayed first, then members in ascending order */}
      <AnimatedSection>
        <section className="section">
          <div className="container-x">
            <AnimatedSection>
              <header className="mb-10 text-center">
                <h2 className="h2">Expert Team</h2>
                <p className="lead mt-2">Meet the professionals dedicated to your success.</p>
              </header>
            </AnimatedSection>

            {/* Team member cards with hover effects - image scales up, background transitions */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { image: founderImage, name: 'Sheikh Khurram Shehzad', role: 'Advocate High Court - Founder', position: 'center 25%' },
                { image: member1Image, name: 'Muhammad Younas', role: 'Advocate High Court', position: 'center 25%' },
                { image: member2Image, name: 'Atif Raja', role: 'Advocate High Court', position: 'center 25%' },
                { image: member3Image, name: 'Amir Rasheed Bhatti', role: 'Advocate High Court', position: 'center 25%' },
              ].map((member, i) => (
                <AnimatedSection key={member.name} delay={`delay-${(i + 1) * 100}`}>
                  <div className="card overflow-hidden group transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
                    <div className="overflow-hidden">
                      <ImageWithLoader
                        alt={member.name}
                        className="h-48 w-full object-cover team-member-image"
                        src={member.image}
                        style={{ objectPosition: member.position || 'center 25%' }}
                      />
                    </div>
                    <div className="p-4 transition-colors duration-300 group-hover:bg-[color:var(--base)]">
                      <h4 className="font-semibold">{member.name}</h4>
                      <p className="text-sm text-slate-600">{member.role}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={500}>
              <div className="mt-8 text-center">
                <Button to="/team" variant="outline">
                  Meet Full Team
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Recognitions Section - Using actual image filenames as titles */}
      <AnimatedSection>
        <section className="section bg-[color:var(--surface)]">
          <div className="container-x">
            <AnimatedSection>
              <header className="mb-8 text-center">
                <h2 className="h2">Recognitions</h2>
                <p className="lead mt-2">Recognition of our commitment to legal excellence.</p>
              </header>
            </AnimatedSection>

            {/* Award cards with hover effects - images from src/Recognitions/Awards/ folder */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {awardImages.map((item, idx) => (
                <AnimatedSection key={item.title} delay={`delay-${(idx + 1) * 100}`}>
                  <article className="card overflow-hidden group transition-all duration-300 hover:shadow-lg">
                    <div className="overflow-hidden">
                      <ImageWithLoader
                        alt={item.title}
                        className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        src={item.image}
                      />
                    </div>
                    <div className="p-5 transition-colors duration-300 group-hover:bg-[color:var(--base)]">
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={500}>
              <div className="mt-8 text-center">
                <Button to="/recognitions" variant="primary">
                  View All Recognitions
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
                <h2 className="h2">Trusted Clients</h2>
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

      {/* Testimonials Section */}
      <AnimatedSection>
        <section className="section">
          <div className="container-x">
            <AnimatedSection>
              <header className="mb-10 text-center">
                <h2 className="h2">Client Testimonials</h2>
                <p className="lead mt-2">What our clients say about working with us.</p>
              </header>
            </AnimatedSection>

            {/* Testimonial cards with hover effects and placeholder avatars */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ['Robert Wilson', 'General Counsel, Blue Corp', 'Exceptional legal guidance for international expansion.'],
                ['Lisa Anderson', 'Senior Counsel, Prime Plc', 'Responsive, knowledgeable, and results-driven.'],
                ['James Thompson', 'CEO, Global Industries', 'Professional service that exceeded our expectations.'],
              ].map(([name, title, quote], i) => (
                <AnimatedSection key={i} delay={(i + 1) * 100}>
                  <blockquote className="card p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] relative border-l-4 border-[color:var(--gold-primary)]">
                    {/* Decorative quote */}
                    <div className="absolute top-0 left-4 text-[color:var(--gold-primary)] opacity-10 text-9xl font-[var(--font-heading)] leading-none pointer-events-none">
                      "
                    </div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[color:var(--gold-primary)] to-[color:var(--gold-light)] mb-4 mx-auto flex items-center justify-center text-[color:var(--navy-dark)] font-bold text-xl">
                        {name.charAt(0)}
                      </div>
                      <p className="text-slate-700 text-center italic">"{quote}"</p>
                      <footer className="mt-4 text-sm text-slate-500 text-center">
                        <div className="font-semibold">{name}</div>
                        <div>{title}</div>
                      </footer>
                    </div>
                  </blockquote>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={400}>
              <div className="mt-8 text-center">
                <Button to="/testimonials" variant="outline">
                  Read all →
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

function ServiceCard({ title, description }) {
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
      <p className="text-slate-600 mt-2">{description}</p>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--navy-dark)]/95 to-[color:var(--teal-accent)]/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <Button variant="outline" to="/services" className="text-white border-white hover:bg-white hover:text-[color:var(--navy-dark)]">
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
        label: 'About Us',
        path: '/about',
        image: heroAboutUsImage,
        // IMAGE POSITIONING: Change this to adjust how the image is positioned
        // Options: 'object-center' (centered), 'object-top' (top), 'object-bottom' (bottom)
        // Equivalent to CSS background-position
        imagePosition: 'object-center',
        heading: 'About the Firm',
        cta: 'Who We Are',
      },
      {
        label: 'Services',
        path: '/services',
        image: heroServicesImage,
        imagePosition: 'object-center', // Change this to adjust positioning
        heading: 'Services',
        cta: 'Explore Services',
      },
      {
        label: 'Team',
        path: '/team',
        image: heroTeamImage,
        imagePosition: 'object-top',
        heading: 'Meet the Team',
        cta: 'View Team',
      },
      {
        // Recognitions slide - using Hero events and achievements image
        label: 'Recognitions',
        path: '/recognitions',
        image: heroEventsImage,
        imagePosition: 'object-center', // Changed from 'object-top' to center the image
        heading: 'Recognitions',
        cta: 'See Highlights',
      },
      {
        // Contact Us slide - using Hero contact us image
        label: 'Contact Us',
        path: '/contact',
        image: heroContactImage,
        imagePosition: 'object-center', // Change this to adjust positioning
        heading: 'Contact Us',
        cta: 'Get in Touch',
      },
      {
        label: 'Clients',
        path: '/clients',
        image:
          'https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1600&auto=format&fit=crop',
        imagePosition: 'object-center', // Change this to adjust positioning
        heading: 'Clients',
        cta: 'View Clients',
      },
      {
        // Testimonials slide - using Hero testimonials image
        label: 'Testimonials',
        path: '/testimonials',
        image: heroTestimonialsImage,
        imagePosition: 'object-center', // Change this to adjust positioning
        heading: 'What Clients Say',
        cta: 'Read Testimonials',
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
      className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.label}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <ImageWithLoader
              absolute={true}
              alt=""
              className="w-full h-full object-cover"
              src={s.image}
              style={{
                objectPosition: s.imagePosition === 'object-top' ? 'center 30%' :
                  s.imagePosition === 'object-bottom' ? 'center 70%' :
                    'center 30%'
              }}
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
          <p className="text-xs uppercase tracking-widest text-white/90">{slides[index].label}</p>
          <h1 className="h1 text-white mt-2 drop-shadow-lg font-[var(--font-heading)]">{slides[index].heading}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white max-w-xl mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_8px_rgba(0,0,0,0.8)]">
            Delivering clarity and excellence across international legal matters.
          </p>

          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <Button
              to={slides[index].path}
              variant="primary"
              className="bg-white text-[color:var(--navy-dark)] hover:bg-white/90"
            >
              {slides[index].cta}
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
                  console.log(`✅ Slide ${i + 1} clicked - Single click working!`);
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

