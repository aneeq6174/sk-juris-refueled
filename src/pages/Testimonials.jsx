import React, { useState, useEffect, memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageWithLoader from '../components/ImageWithLoader';

// Dynamically import all testimonial images
const testimonialImageModules = import.meta.glob('../testimonials/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });
const testimonialImages = Object.entries(testimonialImageModules)
  .filter(([path]) => {
    const filename = path.split('/').pop().toLowerCase();
    return !filename.includes('client testimonials') && !filename.includes('.txt');
  })
  .reduce((acc, [path, mod]) => {
    const filename = path.split('/').pop().replace(/\.(png|jpg|jpeg|PNG|JPG|JPEG)$/, '');
    acc[filename.toLowerCase()] = typeof mod === 'string' ? mod : mod.default;
    return acc;
  }, {});

// Testimonial data parsed from the text file
const testimonialsData = [
  {
    name: 'Irfan Qaisar Sheikh',
    credentials: [
      'Director, Qaisar LG-Petro Chemicals (Pvt)',
      'Director, Qaisar Brothers (Pvt) Ltd',
      'Former Director, Trading Corporation Pakistan',
      'Former President, Lahore Chamber of Commerce and Industry (LCCI)',
      'Former President, Pakistan Industrialists Associations Front (PIAF)',
    ],
    testimonial: 'Always found him thoroughly professional lawyer committed to his work.',
  },
  {
    name: 'Sheikh Muhammad Asif',
    credentials: [
      'CEO, AMK Engineering (Pvt) Ltd',
      'Former President, Lahore Chamber of Commerce and Industry (LCCI)',
      'Board of Directors, Pakistan Steel Mills Limited',
    ],
    testimonial: 'Fully equipped with all the skills and capabilities of good commercial lawyers.',
  },
  {
    name: 'Maj (r) Javed Zamir Ahmad',
    credentials: [
      'CEO, Askari Estate DHA Lahore',
      'Former President, DHA Estate Agents Association',
    ],
    testimonial: 'Their professional abilities are beyond any doubt.',
  },
  {
    name: 'Maj (r) Rafique Hasrat',
    credentials: [
      'CEO, National Estate',
      'Former President, Federation of Pakistan Realtors',
      'Former President, DHA Estate Agents Association',
    ],
    testimonial: 'Whenever consulted, he [Mr. Khurram Abbas] responded us fairly and comprehensively. His modus operandi is incredibly professional.',
  },
  {
    name: 'Maciej Gabryelski',
    credentials: [
      'Director, RS Gloves Company Poland',
    ],
    testimonial: 'Their depth of competence in business law and international trade disputes is invaluable.',
  },
  {
    name: 'Dr. Muhammad Arshad',
    credentials: [
      'CEO, Aslam Superstore (Pvt) Ltd',
      'CEO, Banera Country Club Behria Town Lahore',
      'Managing Partner, Brothers Enterprizes',
      'Managing Partner, Banera Rooftop Restaurant DHA EME Lahore',
    ],
    testimonial: 'They are accomplished commercial lawyers whose advice I am happy to rely and act upon.',
  },
  {
    name: 'Kashif Anwar',
    credentials: [
      'Director, AMK Engineering (Pvt) Ltd',
      'Former Vice President, Lahore Chamber of Commerce and Industry',
      'President, Friends of Economic and Business Reforms',
    ],
    testimonial: 'Their honesty and competence has always impressed me.',
  },
  {
    name: 'Dr. Arsala Mansoor',
    credentials: [
      'PhD in Bio-Chemistry',
      'Overseas Pakistani (Lives in United States of America)',
    ],
    testimonial: 'I found Mr. Khurram Abbas and his team prepared for anything that could come their way during my litigation regarding my property in Pakistan.',
  },
  {
    name: 'Dr. Fahim Abbasi',
    credentials: [
      'PhD in Cyber Security',
      'Overseas Pakistani (Lives in New Zealand)',
    ],
    testimonial: 'I would say I was utterly hopeless and they did it. They are relentless in their efforts to save their client from injustice. They are impressively law-knowing and professional.',
  },
  {
    name: 'Ibrahim ul Huda',
    credentials: [
      'Overseas Pakistani (Lives in Canada)',
    ],
    testimonial: 'I am deeply satisfied that there is somebody to effectively protect my properties and my commercial interests in Pakistan from any illegality or unjust adventurism.',
  },
  {
    name: 'Shahid Mehmud Dogar',
    credentials: [
      'CEO, Dogar Publishers',
      'CEO, Dogar Carz',
    ],
    testimonial: 'My taxation and labour disputes, both with government departments, have been handled so meticulously and well-rounded competence, that a sense of self-confidence as to the correctness in legal compliances has prevailed in my daily business operations.',
  },
  {
    name: 'Dr. Saleh Mehmood',
    credentials: [
      'CEO, Moreno Iglesias Research Laboratory (Pvt) Ltd',
    ],
    testimonial: 'The strategic guidance provided by Mr. Khurram Abbas resulted in a swift and substantial settlement of my industrial property dispute.',
  },
  {
    name: 'Khalid Mehmood Javed',
    credentials: [
      'Managing Partner, Forecasters Real Estate DHA Lahore',
      'Vice President, Federation of Lahore Realtors Associations',
      'Former General Secretary, DHA Estate Agents Association',
    ],
    testimonial: 'His [Mr. Khurram\'s] work ethic, proactive communication and concentration on details make him an unparallel lawyer.',
  },
  {
    name: 'Khurram Aftab',
    credentials: [
      'CEO, Dynamic Links Corporation',
      'Chairman RSC at Federation of Pakistan Chambers of Commerce and Industry',
    ],
    testimonial: 'They are professional, responsive and above all passionate about their work.',
  },
  {
    name: 'Syed Ehtesham Gilani',
    credentials: [
      'CEO, Cosmopolitan Enterprises (Pvt) Ltd',
      'Former Vice President, Sialkot Chamber of Commerce and Industry',
    ],
    testimonial: 'Mr. Khurram Abbas conducted my insurance claim case in High Court. After tiring proceedings and tenacious follow up by my lawyer, Mr. Khurram, the case was decided in my favour. I have seen him working so well on each and every detail of the case. In fact, he made my case so easy to understand for the judge. He is excellent.',
  },
  {
    name: 'Ilyas Majeed Sheikh',
    credentials: [
      'Chairman, Eagle Group of Companies',
      'CEO, Eagle Developers (Pvt) Ltd',
      'CEO, Eagle Town (Pvt) Ltd',
    ],
    testimonial: 'They are transparent, prompt and friendly.',
  },
  {
    name: 'Syed Samar Abbas',
    credentials: [
      'CEO, Palm Springs (Pvt) Ltd',
      'Chairman, Palm Springs Housing Project Gwadar',
      'Managing Partner, Konain Estate & Developers',
    ],
    testimonial: 'I would say one word for Mr. Khurram Abbas: \'trustworthy\'.',
  },
  {
    name: 'Amjad Wattoo',
    credentials: [
      'Partner, Q-Links Builders & Developers',
    ],
    testimonial: 'Corporate Lines give the attention you deserved in legally troubled circumstances and does it with empathy and compassion.',
  },
  {
    name: 'Shahid Mehmud',
    credentials: [
      'CEO, Estate Planners Lahore',
      'General Secretary, DHA Estate Agents Association Lahore',
    ],
    testimonial: 'They are focused, target-oriented and very high ethically. Throughout my tenure at the Association, I did not need any other lawyer.',
  },
];

// Helper function to find image for a client
function getClientImage(clientName) {
  // Normalize the name for matching
  const normalizeName = (name) => {
    return name.toLowerCase()
      .replace(/dr\.?\s*/gi, 'dr ')
      .replace(/\s*\(r\)/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
  };
  
  const normalizedClientName = normalizeName(clientName);
  
  // Try exact match first
  if (testimonialImages[normalizedClientName]) {
    return testimonialImages[normalizedClientName];
  }
  
  // Try matching without titles/prefixes
  const nameWithoutTitle = normalizedClientName
    .replace(/^(dr|mr|mrs|ms|maj|prof)\s+/i, '')
    .trim();
  if (nameWithoutTitle !== normalizedClientName && testimonialImages[nameWithoutTitle]) {
    return testimonialImages[nameWithoutTitle];
  }
  
  // Try reverse lookup - check if any image filename contains key parts of the client name
  const nameParts = normalizedClientName.split(' ').filter(part => part.length > 2);
  for (const [imageKey, imageValue] of Object.entries(testimonialImages)) {
    const normalizedImageKey = normalizeName(imageKey);
    // Check if at least 2 name parts match
    const matchingParts = nameParts.filter(part => normalizedImageKey.includes(part));
    if (matchingParts.length >= 2) {
      return imageValue;
    }
    // Also try reverse - if image key parts are in client name
    const imageKeyParts = normalizedImageKey.split(' ').filter(part => part.length > 2);
    const reverseMatches = imageKeyParts.filter(part => normalizedClientName.includes(part));
    if (reverseMatches.length >= 2) {
      return imageValue;
    }
  }
  
  return null;
}

// Featured Testimonial Card Component - Top-Down Layout
const FeaturedTestimonialCard = memo(function FeaturedTestimonialCard({ testimonial, index }) {
  const imageSrc = getClientImage(testimonial.name);
  const [expanded, setExpanded] = useState(false);
  const testimonialText = testimonial.testimonial;
  const isLongText = testimonialText.length > 200;

  return (
    <article className="featured-testimonial-card">
      {/* Profile Image Section */}
      <div className="testimonial-image-wrapper">
        {imageSrc ? (
          <ImageWithLoader
            alt={testimonial.name}
            src={imageSrc}
            className="testimonial-image"
            style={{ objectPosition: 'center 20%' }}
          />
        ) : (
          <div className="testimonial-image testimonial-image-placeholder">
            <span className="text-3xl font-bold text-white">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="testimonial-content">
        {/* Client Name */}
        <h3 className="testimonial-name">{testimonial.name}</h3>

        {/* Quote Icon */}
        <div className="quote-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
          </svg>
        </div>

        {/* Testimonial Text */}
        <p className={`testimonial-text ${expanded ? 'expanded' : ''}`}>
          {testimonialText}
        </p>

        {/* Read More Button for Long Testimonials */}
        {isLongText && (
          <button 
            className="read-more-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>
    </article>
  );
});

// Regular Testimonial Card Component (for All Testimonials section)
function TestimonialCard({ testimonial, index, isCarousel = false }) {
  const [expanded, setExpanded] = useState(false);
  const imageSrc = getClientImage(testimonial.name);
  const topCredentials = testimonial.credentials.slice(0, 3);
  const remainingCredentials = testimonial.credentials.slice(3);

  return (
    <div className={isCarousel ? 'px-4' : ''}>
      <article className="card p-6 sm:p-8 transition-all duration-300 hover:shadow-xl relative border-l-4 border-[color:var(--gold-primary)]">
        {/* Decorative quote */}
        <div className="absolute top-0 left-4 text-[color:var(--gold-primary)] opacity-10 text-9xl font-[var(--font-heading)] leading-none pointer-events-none">
          "
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="flex-shrink-0">
            {imageSrc ? (
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-slate-100 shadow-md">
                <ImageWithLoader
                  alt={testimonial.name}
                  src={imageSrc}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            ) : (
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[color:var(--brand-2)]/20 to-[color:var(--brand)]/20 flex items-center justify-center ring-4 ring-slate-100 shadow-md">
                <span className="text-3xl sm:text-4xl font-bold text-[color:var(--brand-2)]">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 min-w-0">
            {/* Name */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-2">
              {testimonial.name}
            </h3>

            {/* Top Credentials as Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {topCredentials.map((cred, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-[color:var(--teal-accent)]/10 to-[color:var(--navy-medium)]/10 text-[color:var(--navy-dark)] border border-[color:var(--teal-accent)]/20"
                >
                  {cred}
                </span>
              ))}
              {testimonial.credentials.length > 3 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-[color:var(--gold-primary)]/10 to-[color:var(--gold-light)]/10 text-[color:var(--navy-dark)] border border-[color:var(--gold-primary)]/30 hover:bg-gradient-to-r hover:from-[color:var(--gold-primary)]/20 hover:to-[color:var(--gold-light)]/20 transition-all duration-300"
                >
                  {expanded ? 'View Less' : `+${testimonial.credentials.length - 3} More`}
                </button>
              )}
            </div>

            {/* Testimonial Quote - Most Prominent */}
            <div className="bg-gradient-to-br from-[color:var(--warm-white)] to-[color:var(--light-gray)] border-l-4 border-[color:var(--gold-primary)] p-4 sm:p-5 rounded-r-lg my-4 relative">
              <p className="text-base sm:text-lg italic text-[#2d3748] leading-relaxed relative z-10">
                <span className="text-3xl sm:text-4xl text-[color:var(--gold-primary)]/30 leading-none mr-2 font-[var(--font-heading)]">"</span>
                {testimonial.testimonial}
                <span className="text-3xl sm:text-4xl text-[color:var(--gold-primary)]/30 leading-none ml-1 font-[var(--font-heading)]">"</span>
              </p>
            </div>

            {/* Expanded Credentials List */}
            {expanded && remainingCredentials.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
                <p className="text-sm font-semibold text-slate-700 mb-2">Additional Credentials:</p>
                <ul className="space-y-1.5">
                  {remainingCredentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600">
                      <span className="text-[color:var(--brand-2)] mr-2 mt-1">•</span>
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

const testimonialSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

export default function Testimonials() {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    // Delay carousel initialization to ensure DOM is ready
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Featured testimonials - always show grid, carousel is optional enhancement
  const featuredTestimonials = testimonialsData.slice(0, 6);
  
  // Debug logging
  useEffect(() => {
    console.log('✅ Testimonials Page Rendered');
    console.log('✅ Testimonials Data Count:', testimonialsData?.length || 0);
    console.log('✅ Featured Testimonials Count:', featuredTestimonials?.length || 0);
    console.log('✅ All content should be visible immediately (no scroll animations)');
    
    // Verify content is visible
    setTimeout(() => {
      const featuredSection = document.querySelector('.featured-grid');
      const allSection = document.querySelector('.all-testimonials');
      if (featuredSection) {
        const styles = window.getComputedStyle(featuredSection);
        console.log('✅ Featured Section Visibility:', {
          opacity: styles.opacity,
          visibility: styles.visibility,
          display: styles.display
        });
      }
    }, 100);
  }, []);

  // Ensure we have testimonials data
  if (!testimonialsData || testimonialsData.length === 0) {
    return (
      <>
        <section className="bg-[color:var(--brand)] text-white">
          <div className="container-x section text-center">
            <h1 className="h1 text-white font-[var(--font-heading)]">Client Testimonials</h1>
            <p className="lead text-slate-100 mt-2">
              What our clients say about working with us.
            </p>
          </div>
        </section>
        <section className="section bg-[color:var(--base)]">
          <div className="container-x text-center">
            <p>No testimonials available at this time.</p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section - No animation wrapper, render immediately */}
      <section className="bg-[color:var(--brand)] text-white">
        <div className="container-x section text-center">
          <h1 className="h1 text-white font-[var(--font-heading)]">Client Testimonials</h1>
          <p className="lead text-slate-100 mt-2">
            What our clients say about working with us.
          </p>
        </div>
      </section>

      {/* Main Content Section - NO ANIMATIONS - Render immediately */}
      <section className="section bg-[color:var(--base)] testimonials-content" style={{ 
        position: 'relative', 
        zIndex: 2, 
        minHeight: '400px',
        opacity: 1,
        visibility: 'visible',
        display: 'block',
        animation: 'none',
        transition: 'none'
      }}>
        <div className="container-x">
          {/* Featured testimonials */}
          <div className="mb-12">
            <h2 className="h2 text-center mb-8 font-[var(--font-heading)]">Featured Testimonials</h2>
            {showCarousel && Slider ? (
              <div style={{ opacity: 1, visibility: 'visible' }}>
                <Slider {...testimonialSettings}>
                  {featuredTestimonials.map((testimonial, index) => (
                    <div key={`carousel-${index}`} className="px-4">
                      <FeaturedTestimonialCard 
                        testimonial={testimonial} 
                        index={index}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className="featured-grid">
                {featuredTestimonials.map((testimonial, index) => (
                  <FeaturedTestimonialCard 
                    key={`featured-${index}`}
                    testimonial={testimonial} 
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>

          {/* All testimonials list - NO ANIMATIONS - Direct render */}
          <div className="mt-12">
            <h2 className="h2 text-center mb-8 font-[var(--font-heading)]">All Testimonials</h2>
            <div className="space-y-6">
              {testimonialsData.map((testimonial, index) => (
                <div key={`all-${index}`} style={{ opacity: 1, transform: 'none', visibility: 'visible' }}>
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
