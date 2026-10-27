import { useParams } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import { partners } from '../data/people.js';

export default function PartnerProfile() {
  const { slug } = useParams();
  const partner = partners.find((item) => item.slug === slug);

  if (!partner) return <NotFound />;

  return (
    <>
      <section className="bg-[color:var(--navy-dark)] text-white">
        <div className="container-x grid min-h-[calc(100svh-5rem)] items-center gap-10 py-12 sm:min-h-[calc(100svh-6rem)] lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--gold-primary)]">
              Our Partner
            </p>
            <h1 className="h1 mt-4 text-white font-[var(--font-heading)]">
              {partner.name}
            </h1>
            <p className="mt-4 text-lg text-white/80">{partner.designation}</p>
          </div>
          <div className="flex h-[50vh] min-h-64 items-end justify-center overflow-hidden bg-white/5 lg:h-[70vh]">
            {partner.image && (
              <img
                src={partner.image}
                alt={partner.name}
                className="h-full w-full object-contain object-bottom"
              />
            )}
          </div>
        </div>
      </section>

      <section
        aria-label={`${partner.name} profile details`}
        className="container-x min-h-[32rem] py-16"
      />
    </>
  );
}
