import React, { useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ImageWithLoader from '../components/ImageWithLoader';
import Button from '../components/Button';

// Import hero image
import heroImage from '../Recognitions/recognitions hero image.jpg';

// Dynamically import all achievement images from the achievements folder
// File name (without extension) becomes the achievement title
const achievementModules = import.meta.glob(
  '../Recognitions/achievements/*.{jpg,jpeg,JPG,JPEG,png,PNG}',
  { eager: true }
);
const achievementImages = Object.entries(achievementModules).map(([path, mod]) => ({
  image: typeof mod === 'string' ? mod : mod.default,
  title: path.split('/').pop().replace(/\.(jpg|jpeg|JPG|JPEG|png|PNG)$/, ''),
}));

export default function Recognitions() {
  useEffect(() => {
    console.log('✅ Recognitions Page Rendered');
    console.log('✅ Achievements data:', achievementImages);
    console.log('✅ Achievements count:', achievementImages?.length || 0);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <AnimatedSection>
        <section className="bg-[color:var(--base)]">
          <div className="container-x section grid gap-10 lg:grid-cols-2 items-center">
            <AnimatedSection delay={100}>
              <div>
                <p className="text-sm uppercase tracking-widest text-[color:var(--gold-primary)] font-[var(--font-accent)]">Recognitions</p>
                <h1 className="h1 mt-4 font-[var(--font-heading)]">Recognizing Excellence in Advocacy</h1>
                <p className="lead mt-3">
                  A curated collection of milestones, awards, and memorable moments that highlight our team's dedication to international
                  legal excellence.
                </p>
                <div className="mt-6 flex gap-3 flex-wrap">
                  <Button to="/contact" variant="primary">
                    Connect with Us
                  </Button>
                  <Button to="/services" variant="outline">
                    Services
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="rounded-xl overflow-hidden shadow-md">
                <ImageWithLoader
                  alt="Recognition moments collage"
                  className="w-full h-64 object-cover"
                  src={heroImage}
                />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Awards and Moments Section ── */}
      <section
        id="awards-and-moments"
        className="section bg-[color:var(--surface)]"
        style={{
          opacity: 1,
          visibility: 'visible',
          display: 'block',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="container-x">
          <header className="mb-8" style={{ opacity: 1, visibility: 'visible' }}>
            <h2 className="h2">Awards and Moments</h2>
            <p className="lead mt-2">
              A gallery of our awards, recognitions, and memorable moments — all in one place.
            </p>
          </header>

          {achievementImages && achievementImages.length > 0 ? (
            <div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              style={{ opacity: 1, visibility: 'visible' }}
            >
              {achievementImages.map((item, idx) => (
                <article
                  key={item.title || idx}
                  className="card overflow-hidden group transition-all duration-300 hover:scale-[1.05] hover:shadow-xl border-2 border-transparent hover:border-[color:var(--gold-primary)]"
                  style={{ opacity: 1, visibility: 'visible', display: 'block' }}
                >
                  <div className="overflow-hidden">
                    <ImageWithLoader
                      alt={item.title}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      src={item.image}
                    />
                  </div>
                  <div className="p-5 transition-colors duration-300 group-hover:bg-[color:var(--base)]">
                    <h3 className="font-semibold font-[var(--font-accent)]">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12" style={{ opacity: 1, visibility: 'visible' }}>
              <p className="text-slate-600 mb-4">No achievements found at this time.</p>
              <p className="text-sm text-slate-500">
                Please add images to the <code>src/Recognitions/achievements/</code> folder.
                The filename (without extension) will be used as the achievement title.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Moments — Videos (unchanged) ── */}
      <AnimatedSection>
        <section id="moments-videos" className="section">
          <div className="container-x">
            <AnimatedSection>
              <header className="mb-6">
                <p className="text-sm uppercase tracking-widest text-[color:var(--brand-2)]">Moments</p>
                <h2 className="h2 mt-2">Moments — Videos</h2>
                <p className="lead mt-2">Reserved space for video recaps and interviews.</p>
              </header>
            </AnimatedSection>
            <div className="card p-6 text-slate-600">
              Video highlights will be embedded here soon. Placeholder content for now.
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── CTA ── */}
      <AnimatedSection>
        <section className="section bg-[color:var(--surface)]">
          <div className="container-x text-center">
            <h2 className="h2">Have a Recognition to Share?</h2>
            <p className="lead mt-2">Connect with our team to feature collaborative milestones and awards.</p>
            <div className="mt-6">
              <Button to="/contact" variant="primary">
                Contact Team
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
