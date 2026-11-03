import AnimatedSection from '../components/AnimatedSection.jsx';
import Button from '../components/Button.jsx';

const services = [
  {
    number: '01',
    id: 'taxation-law',
    title: 'Taxation Law',
    description:
      'Advising businesses, investors and individuals on tax obligations, transactions, cross-border income and disputes — in Pakistan and overseas.',
    areas: [
      ['Corporate & Business Tax', 'Business income, structures, deductions, group arrangements and sector-specific tax treatment.'],
      ['International Tax & Treaties', 'Residence, permanent establishment, double taxation relief and treaty eligibility.'],
      ['Transfer Pricing', 'Related-party transactions, arm’s-length analysis, documentation and adjustments.'],
      ['Sales Tax, VAT & Excise', 'Classification, registration, input tax, refunds and cross-border supplies.'],
      ['Withholding & Payroll', 'Deductions, non-resident payments, gross-up clauses and employee benefits.'],
      ['Transaction Tax', 'Structuring, tax due diligence, warranties and indemnities for M&A and investments.'],
      ['Personal & Non-Resident Tax', 'Residence, relocation, foreign income and assets, overseas Pakistanis.'],
      ['Digital & Service Exports', 'E-commerce, freelancers, software businesses and platform income.'],
      ['Compliance & Refunds', 'Registration, returns, corrections and refund claims.'],
      ['Audits, Appeals & Litigation', 'Notices, assessments, appeals before CIR(A) and ATIR, tax references, ADR and FTO complaints.'],
    ],
    frameworks:
      'Income Tax Ordinance 2001, Sales Tax Act 1990, Federal Excise Act 2005, Customs Act 1969, and provincial services tax laws (PRA, SRB, KPRA, BRA, ICT).',
  },
  {
    number: '02',
    id: 'real-estate-law',
    title: 'Real Estate Law',
    description:
      'Advising owners, buyers, investors, developers and businesses on property transactions, development, leasing, financing and disputes.',
    areas: [
      ['Acquisitions & Due Diligence', 'Title review, chain of ownership, encumbrances, sale deeds and completion.'],
      ['Ownership & Family Property', 'Co-ownership, gifts, inheritance, partition and record corrections.'],
      ['Leasing & Property Management', 'Commercial, residential and industrial leases, rent recovery and eviction.'],
      ['Development & Approvals', 'Land use, layout plans, building approvals, commercialisation and regulatory notices.'],
      ['Construction Contracts', 'FIDIC-based and bespoke contracts, payment security, variations, delay and defects.'],
      ['Developer & Purchaser Matters', 'Development agreements, allotments, instalment plans, cancellations and refunds.'],
      ['Investment & Finance', 'SPVs, joint ventures, mortgages, REIT structuring and distressed projects.'],
      ['Property Tax & Compliance', 'Transaction taxes, stamp duty, withholding and rental income.'],
      ['Litigation & Disputes', 'Title, possession, encroachment, specific performance, construction claims and acquisition compensation.'],
    ],
    frameworks:
      'Transfer of Property Act 1882, Registration Act 1908, Stamp Act 1899, Specific Relief Act 1877, Illegal Dispossession Act 2005, provincial land revenue laws, and CDA, LDA and SBCA regulations.',
  },
  {
    number: '03',
    id: 'international-commercial-law',
    title: 'International Commercial Law',
    description:
      'Advising businesses on cross-border contracts, trade, market entry, payments and commercial disputes.',
    areas: [
      ['International Contracts', 'Sale, supply, manufacturing and services agreements; governing law and jurisdiction.'],
      ['Agency, Distribution & Franchising', 'Market entry, exclusivity, territories, commissions and termination.'],
      ['Shipping & Logistics', 'Incoterms 2020, carriage and freight agreements, cargo loss, demurrage and delivery disputes.'],
      ['Trade Finance & Payments', 'Letters of credit, guarantees, documentary disputes and foreign exchange requirements.'],
      ['Cross-Border Investment & JVs', 'Subsidiaries, joint ventures, share and asset acquisitions, due diligence.'],
      ['Technology & Licensing', 'Software, technology transfer, outsourcing and digital commerce agreements.'],
      ['Trade Compliance', 'Import/export controls, sanctions, rules of origin and anti-dumping proceedings.'],
      ['International Arbitration', 'ICC and ad hoc proceedings, interim measures and award enforcement.'],
      ['Commercial Litigation & Recovery', 'Contractual claims, foreign judgments and negotiated settlements.'],
    ],
    frameworks:
      'CISG, UCP 600, URDG 758, New York Convention 1958, Customs Act 1969, Foreign Exchange Regulation Act 1947, and the 2011 Recognition and Enforcement Act.',
  },
  {
    number: '04',
    id: 'intellectual-property-law',
    title: 'Intellectual Property Law',
    description:
      'Protecting intellectual property. Defining ownership. Structuring its commercial use.',
    areas: [
      ['IP Strategy & Portfolio', 'Audits, protection strategy, ownership arrangements and renewals.'],
      ['Trademarks & Brands', 'Searches, registration, oppositions, assignments and infringement actions.'],
      ['Patents & Inventions', 'Filing strategy, applications, examination responses and international protection.'],
      ['Copyright & Software', 'Ownership, registration, licensing, commissioned work and infringement.'],
      ['Designs & Specialised Rights', 'Industrial designs, geographical indications, plant breeders’ and layout-design rights.'],
      ['Licensing & Technology Transfer', 'Royalties, exclusivity, franchising, know-how and recordals.'],
      ['Trade Secrets', 'NDAs, internal safeguards and misuse disputes.'],
      ['Digital & Online Enforcement', 'Domain disputes, UDRP, counterfeit listings and platform takedowns.'],
      ['IP in Transactions', 'Due diligence, chain of title, warranties and post-completion assignments.'],
      ['Disputes & Enforcement', 'Legal notices, IP Tribunal proceedings, injunctions and customs border measures.'],
    ],
    frameworks:
      'IPO Pakistan Act 2012, Trade Marks Ordinance 2001, Patents Ordinance 2000, Copyright Ordinance 1962, Registered Designs Ordinance 2000, and the Madrid System for international filings.',
  },
  {
    number: '05',
    id: 'corporate-law',
    title: 'Corporate Law',
    description:
      'Advising companies, founders, investors, directors and shareholders on structures, governance, transactions and disputes.',
    areas: [
      ['Formation & Structuring', 'Company incorporation, holding structures, SPVs and constitutional documents.'],
      ['Governance & Board Advisory', 'Directors’ duties, resolutions, conflicts, shareholder arrangements and policies.'],
      ['Commercial Contracts', 'Supply, distribution, agency, consultancy, licensing and confidentiality agreements.'],
      ['M&A & Investments', 'Transaction structuring, due diligence, SPAs, shareholders’ agreements and completion.'],
      ['Corporate Finance', 'Financing agreements, security documents, fundraising and regulated entities.'],
      ['Restructuring & Exit', 'Reorganisations, buyouts, succession, schemes, winding up and dissolution.'],
      ['Corporate Disputes', 'Shareholder oppression, board disputes, injunctions, arbitration and mediation.'],
    ],
    frameworks:
      'Companies Act 2017, Securities Act 2015, Banking Companies Ordinance 1962, Insurance Ordinance 2000, NBFC Rules 2003, Competition Act 2010, and Trade Organizations Act 2013.',
  },
  {
    number: '06',
    id: 'arbitration',
    title: 'Domestic & International Arbitration',
    description:
      'Representing businesses, investors and individuals in commercial arbitration — from drafting clauses to enforcing awards.',
    areas: [
      ['Arbitration Agreements', 'Clause drafting, seat and rules selection, arbitrability and submission agreements.'],
      ['Case Assessment & Strategy', 'Claims analysis, notices, limitation, exposure and early settlement.'],
      ['Tribunal Formation', 'Appointments, conflicts, challenges and jurisdictional objections.'],
      ['Representation & Advocacy', 'Pleadings, document production, witness and expert evidence, hearings.'],
      ['Interim & Urgent Relief', 'Emergency arbitrator applications, asset preservation and court assistance.'],
      ['Commercial & Corporate Disputes', 'Contracts, joint ventures, M&A warranties, agency and cross-border trade.'],
      ['Construction Arbitration', 'Payment, delay, variations, defects and FIDIC-based project disputes.'],
      ['Awards & Enforcement', 'Challenges, recognition, resisting enforcement and recovery strategy.'],
      ['Court Proceedings', 'Stay applications, appointments, filing of domestic awards and enforcement of foreign awards.'],
      ['Mediation & Settlement', 'Negotiated outcomes, consent awards and implementation.'],
    ],
    frameworks:
      'Arbitration Act 1940, Recognition and Enforcement (Arbitration Agreements and Foreign Arbitral Awards) Act 2011, New York Convention 1958, ADR Act 2017, and ICC, LCIA, SIAC and UNCITRAL rules.',
  },
];

function ServiceSection({ service, index }) {
  const isAlternate = index % 2 === 1;

  return (
    <section
      id={service.id}
      className={`section scroll-mt-24 ${isAlternate ? 'bg-white' : ''}`}
    >
      <div className="container-x">
        <AnimatedSection>
          <header className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--teal-accent)]">
              Practice area · {service.number}
            </p>
            <h2 className="h2 mt-4 font-[var(--font-heading)] text-[color:var(--navy-dark)]">
              {service.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              {service.description}
            </p>
          </header>
        </AnimatedSection>

        <div className="mt-9 grid gap-x-10 sm:grid-cols-2 lg:gap-x-16">
          {service.areas.map(([title, description], areaIndex) => (
            <AnimatedSection
              key={title}
              delay={(areaIndex % 4) * 70}
            >
              <article className="h-full border-t border-slate-200 py-5">
                <h3 className="font-[var(--font-heading)] text-lg font-semibold text-[color:var(--navy-dark)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                  {description}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <p className="mt-5 border-t-2 border-[color:var(--gold-primary)] pt-5 text-sm leading-7 text-slate-600 sm:text-base">
            <span className="font-semibold text-[color:var(--navy-dark)]">
              Legal frameworks:
            </span>{' '}
            {service.frameworks}
          </p>
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
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">
              We advise remote and international clients across our practice
              areas, with support tailored to their location and matter.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      <section className="bg-[color:var(--navy-dark)] text-white">
        <div className="container-x flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-primary)]">
              SKJC
            </p>
            <h2 className="mt-3 font-[var(--font-heading)] text-2xl text-white sm:text-3xl">
              Discuss your legal requirements
            </h2>
          </div>
          <Button to="/contact" variant="primary" className="w-fit">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
