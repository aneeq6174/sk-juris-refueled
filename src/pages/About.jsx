import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ImageWithLoader from '../components/ImageWithLoader';
import founderImage from '../assets/sheikh khurram about us.JPG';

export default function About() {
  return (
    <>
      <AnimatedSection delay={100}>
        <section className="bg-[color:var(--brand)] text-white py-20">
          <div className="container-x section text-center">
            <h1 className="h1 text-white font-[var(--font-heading)]">About Us</h1>
            <p className="lead !text-white font-medium mt-5 max-w-3xl mx-auto text-lg sm:text-xl leading-9">
              SK Juris & Co. is a Pakistan-based corporate law firm offering specialized legal services across a broad range of practice areas. Our lawyers draw on collective expertise and experience to deliver effective, practical solutions for clients who demand the sophistication of a leading law firm.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <section className="section pt-0">
          <div className="container-x">
            <AnimatedSection>
              <header className="mb-10 text-center">
                <h2 className="h2 font-[var(--font-heading)]">Who We Are</h2>
              </header>
            </AnimatedSection>
            <p className="lead max-w-3xl mx-auto text-center text-slate-600">
              We provide a full range of legal services to a diversified client base, including prominent industrialists, entrepreneurs, and national and multinational corporations. Our task-based team of professional lawyers is committed to delivering speedy, resourceful, and efficient legal solutions — grounded in practical, feasible outcomes rather than theoretical complexity.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <section className="section pt-0 bg-[color:var(--surface)]">
          <div className="container-x">
            <AnimatedSection>
              <header className="mb-10 text-center">
                <h2 className="h2 font-[var(--font-heading)]">Our Expertise</h2>
              </header>
            </AnimatedSection>
            <p className="lead max-w-3xl mx-auto text-center text-slate-600">
              Our lawyers specialize in Corporate, Commercial, Finance, Taxation, Banking, Real Estate, Intellectual Property, and Industrial Law. We also advise on International Trade, cross-border business, and commercial agreements — supporting clients navigating both domestic and international legal landscapes.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={400}>
        <section className="section">
          <div className="container-x">
            <AnimatedSection>
              <header className="mb-10 text-center">
                <h2 className="h2 font-[var(--font-heading)]">Our Founder</h2>
              </header>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <article className="card p-6 transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-[color:var(--teal-accent)]">
                <div className="grid gap-6 lg:grid-cols-[280px_1fr] items-start">
                  <div className="overflow-hidden rounded-xl shadow-sm">
                    <ImageWithLoader
                      alt="Khurram Abbas Sheikh"
                      className="w-full h-72 object-cover"
                      src={founderImage}
                    />
                  </div>

                  <div className="space-y-4 text-slate-600">
                    <p>
                      Sheikh Khurram Abbas is the Founding and Senior Partner of SK Juris & Co. His practice centers on Company Law, Business and Commercial Law, Taxation Law, Property and Real Estate Law, International Trade Law, and Litigation.
                    </p>
                    <p>
                      With 25 years of experience, he has handled some of the most significant company litigation, taxation disputes, and commercial matters involving finance, real estate, insurance coverage, construction, and contractual disputes — securing record-setting verdicts, judgments, and settlements. His clientele spans the business community, private and public companies, real estate entrepreneurs, and various government sectors, alongside a broad individual client base.
                    </p>
                    <p>
                      His professional standing is reflected in an active life membership with the Lahore Bar Association, the Lahore High Court Bar Association, and the Lahore Tax Bar Association. He serves as Chairman of the Law Reforms & Research Committee at the Lahore District Bar Association, and as Co-Chairman of the Civil Law Reforms Committee at the Lahore High Court Bar Association, in addition to holding membership on the Bar's Executive Committee. He has also been elected Secretary of the Pak-India Lawyers Friendship Association and General Secretary of the Association of Lawyers for Philosophical Amelioration (ALPHA). Additionally, he serves as the Convener - Chairman of the Standing Committee on Corporate and Business Law at the Lahore Chamber of Commerce and Industry.
                    </p>
                    <p>
                      He is frequently invited to speak on complex litigation, emerging corporate issues, and recent legal amendments before the Lahore Chamber of Commerce and the Federation of Chambers of Commerce & Industry of Pakistan, and has lectured and chaired conferences nationwide. He is also a published legal scholar, with research articles regularly featured in PLD and PLJ.
                    </p>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}


