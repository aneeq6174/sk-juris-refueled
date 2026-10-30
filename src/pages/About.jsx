import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection.jsx';
import { partners, teamMembers } from '../data/people.js';

function PersonCard({ person, partner = false }) {
  const content = (
    <>
      <div className="h-48 shrink-0 overflow-hidden bg-[color:var(--light-gray)] sm:h-36 sm:w-36">
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div
            className="flex h-full items-center justify-center text-sm text-slate-500"
            role="img"
            aria-label={`Portrait unavailable for ${person.name}`}
          >
            Photo unavailable
          </div>
        )}
      </div>
      <div className="flex min-h-36 flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[color:var(--navy-dark)]">
            {person.name}
          </h3>
          <p className="mt-2 text-sm text-slate-600">{person.designation}</p>
        </div>
        {partner && (
          <span className="mt-5 self-end bg-[color:var(--light-gray)] px-4 py-2 text-sm text-[color:var(--navy-dark)] transition-colors group-hover:bg-[color:var(--gold-primary)]">
            See full profile <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </>
  );

  const className =
    'group flex flex-col overflow-hidden border-y border-slate-300 bg-white transition-colors hover:border-[color:var(--gold-primary)] sm:flex-row';

  return partner ? (
    <Link
      to={`/partners/${person.slug}`}
      className={className}
      aria-label={`View ${person.name}'s profile`}
    >
      {content}
    </Link>
  ) : (
    <article className={className}>{content}</article>
  );
}

export default function About() {
  return (
    <>
      <section className="bg-[color:var(--navy-dark)] text-white">
        <div className="container-x section text-center">
          <h1 className="h1 font-[var(--font-heading)] text-white">About Us</h1>
          <p className="lead mx-auto mt-5 max-w-3xl text-white">
            SKJC is a Pakistan-based corporate law firm offering specialized
            legal services across a broad range of practice areas. Our lawyers
            draw on collective expertise and experience to deliver effective,
            practical solutions for clients who demand the sophistication of a
            leading law firm.
          </p>
        </div>
      </section>

      <AnimatedSection>
        <section className="section">
          <div className="container-x">
            <header className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="h2 font-[var(--font-heading)]">Who We Are</h2>
              <p className="lead mt-4">
                We serve a diversified client base, including prominent
                industrialists, entrepreneurs, and national and multinational
                corporations. Our task-based teams focus on speedy, resourceful,
                and efficient legal solutions grounded in practical outcomes.
              </p>
            </header>
          </div>
        </section>
      </AnimatedSection>

      <section className="section bg-[color:var(--surface)]">
        <div className="container-x">
          <header className="mb-10 text-center">
            <h2 className="h2 font-[var(--font-heading)]">Our Partners</h2>
          </header>
          <div className="grid gap-x-8 gap-y-6 lg:grid-cols-2">
            {partners.map((partner, index) => (
              <AnimatedSection key={partner.slug} delay={index * 100}>
                <PersonCard person={partner} partner />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="section scroll-mt-24">
        <div className="container-x">
          <header className="mb-10 text-center">
            <h2 className="h2 font-[var(--font-heading)]">Our Team</h2>
            <p className="lead mt-3">
              Meet the professionals dedicated to your success.
            </p>
          </header>
          <div className="grid gap-x-8 gap-y-6 lg:grid-cols-2">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.filename} delay={(index % 4) * 100}>
                <PersonCard person={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
