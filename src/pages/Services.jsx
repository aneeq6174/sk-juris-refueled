import AnimatedSection from '../components/AnimatedSection.jsx';
import Button from '../components/Button.jsx';

const services = [
  {
    number: '01',
    title: 'Taxation Law',
    description:
      'Practical guidance for businesses and individuals navigating Pakistan’s tax framework. We help clients understand their obligations, respond to regulatory requirements, and address tax questions that arise in day-to-day operations and significant transactions.',
    areas: [
      'Tax planning and compliance',
      'Income and sales tax matters',
      'Tax notices, audits, and assessments',
      'Representation in tax disputes and appeals',
    ],
  },
  {
    number: '02',
    title: 'International Commercial Law',
    description:
      'Advice for commercial matters involving international counterparties, cross-border transactions, and trade or investment activity. We help clients assess applicable legal frameworks, structure commercial arrangements, and identify issues that may arise across jurisdictions.',
    areas: [
      'International commercial contracts and negotiations',
      'Cross-border trade and investment arrangements',
      'Jurisdiction, governing law, and enforcement considerations',
      'Coordination of cross-border commercial disputes',
    ],
  },
  {
    number: '03',
    title: 'Corporate Law',
    description:
      'Clear, business-focused advice throughout the life of a company, from formation and governance to structural change and ongoing compliance. Our approach is to help decision-makers understand their legal options and document them carefully.',
    areas: [
      'Company formation and structuring',
      'Corporate governance and regulatory filings',
      'Shareholder arrangements and restructuring',
      'Mergers, acquisitions, and transaction support',
    ],
  },
];

function ServiceSection({ service, index }) {
  const isAlternate = index % 2 === 1;

  return (
    <section
      id={service.title.toLowerCase().replaceAll(' ', '-')}
      className={`section scroll-mt-24 ${isAlternate ? 'bg-white' : ''}`}
    >
      <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <AnimatedSection>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--teal-accent)]">
              Practice area · {service.number}
            </p>
            <h2 className="h2 mt-4 font-[var(--font-heading)] text-[color:var(--navy-dark)]">
              {service.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              {service.description}
            </p>
            <Button to="/contact" variant="outline" className="mt-7">
              Discuss your matter
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="border-t-2 border-[color:var(--gold-primary)] pt-5">
            <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[color:var(--navy-dark)]">
              How we can assist
            </h3>
            <ul className="mt-4 divide-y divide-slate-200">
              {service.areas.map((area) => (
                <li
                  key={area}
                  className="flex gap-4 py-4 text-slate-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold-primary)]"
                  />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <section className="bg-[color:var(--navy-dark)] text-white">
        <div className="container-x section">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-primary)]">
              SKJC · Legal expertise
            </p>
            <h1 className="h1 mt-4 font-[var(--font-heading)] text-white">
              Expertise
            </h1>
            <p className="lead mt-4 max-w-3xl text-white/75">
              Practical legal guidance shaped around your business, your
              obligations, and the decisions ahead.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {services.map((service, index) => (
        <ServiceSection key={service.number} service={service} index={index} />
      ))}
    </>
  );
}
