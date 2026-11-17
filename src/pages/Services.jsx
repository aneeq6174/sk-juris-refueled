import { useCallback, useEffect, useRef, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import Button from '../components/Button.jsx';
import serviceDetails from '../data/serviceDetails.json';
import { scrollToSection } from '../utils/scrollUtils.js';

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

const serviceOrder = [
  'corporate-law',
  'international-commercial-law',
  'intellectual-property-law',
  'arbitration',
  'real-estate-law',
  'taxation-law',
];

const orderedServices = serviceOrder.map((id, index) => ({
  ...services.find((service) => service.id === id),
  number: String(index + 1).padStart(2, '0'),
}));

function renderSegments(segments, keyPrefix) {
  return segments.map((segment, index) => {
    const key = `${keyPrefix}-${index}`;
    if (segment.bold && segment.italic) {
      return <strong key={key}><em>{segment.text}</em></strong>;
    }
    if (segment.bold) return <strong key={key}>{segment.text}</strong>;
    if (segment.italic) return <em key={key}>{segment.text}</em>;
    return <span key={key}>{segment.text}</span>;
  });
}

function ServiceDetailContent({ blocks }) {
  const content = [];
  let listItems = [];

  const flushList = () => {
    if (!listItems.length) return;
    content.push(
      <ul key={`list-${content.length}`} className="mt-4 space-y-3">
        {listItems.map((block, index) => (
          <li key={`item-${index}`} className="flex gap-3 text-sm leading-7 text-slate-600 sm:text-base">
            <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold-primary)]" />
            <span>{renderSegments(block.segments, `item-${index}`)}</span>
          </li>
        ))}
      </ul>
    );
    listItems = [];
  };

  blocks.forEach((block, index) => {
    if (block.type === 'item') {
      listItems.push(block);
      return;
    }

    flushList();
    const textKey = `detail-${index}`;

    if (block.type === 'heading') {
      const Heading = block.level === 3 ? 'h3' : 'h4';
      content.push(
        <Heading
          key={textKey}
          className={
            block.level === 3
              ? 'mt-10 border-t border-slate-200 pt-7 font-[var(--font-heading)] text-xl font-semibold text-[color:var(--navy-dark)] sm:text-2xl'
              : 'mt-6 font-[var(--font-heading)] text-lg font-semibold text-[color:var(--navy-dark)]'
          }
        >
          {renderSegments(block.segments, textKey)}
        </Heading>
      );
    } else if (block.type === 'tagline') {
      content.push(
        <p key={textKey} className="mt-5 font-[var(--font-heading)] text-lg font-semibold italic leading-8 text-[color:var(--navy-dark)]">
          {renderSegments(block.segments, textKey)}
        </p>
      );
    } else {
      content.push(
        <p key={textKey} className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {renderSegments(block.segments, textKey)}
        </p>
      );
    }
  });

  flushList();
  return <div>{content}</div>;
}

function ServiceSection({
  service,
  index,
  onExpandedChange,
  onViewLessVisibility,
}) {
  const isAlternate = index % 2 === 1;
  const [isExpanded, setIsExpanded] = useState(false);
  const summaryRef = useRef(null);
  const sectionRef = useRef(null);
  const handleDetailsToggle = useCallback(
    (event) => {
      const isOpen = event.currentTarget.open;
      setIsExpanded(isOpen);
      onExpandedChange(service.id, isOpen);
    },
    [onExpandedChange, service.id]
  );
  const handleViewLess = useCallback(() => {
    setIsExpanded(false);
    onExpandedChange(service.id, false);
    scrollToSection(service.id);
  }, [onExpandedChange, service.id]);

  useEffect(() => {
    if (!isExpanded || !summaryRef.current || !sectionRef.current) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      onViewLessVisibility(service.id, true, handleViewLess);
      return undefined;
    }

    let isSummaryVisible = true;
    let isSectionVisible = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === summaryRef.current) {
          isSummaryVisible = entry.isIntersecting;
        } else if (entry.target === sectionRef.current) {
          isSectionVisible = entry.isIntersecting;
        }
      });

      onViewLessVisibility(
        service.id,
        !isSummaryVisible && isSectionVisible,
        handleViewLess
      );
    });
    observer.observe(summaryRef.current);
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [handleViewLess, isExpanded, onViewLessVisibility, service.id]);

  return (
    <section
      ref={sectionRef}
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

        <details
          open={isExpanded}
          onToggle={handleDetailsToggle}
          className="group mt-8 border-t border-slate-200 pt-6"
        >
          <summary
            ref={summaryRef}
            className="flex w-fit cursor-pointer list-none items-center gap-3 rounded-lg border border-[color:var(--navy-medium)] bg-[color:var(--navy-medium)] px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:border-[color:var(--gold-primary)] hover:bg-[color:var(--gold-primary)] hover:text-[color:var(--navy-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gold-primary)] [&::-webkit-details-marker]:hidden"
          >
            <span>View detailed scope of services</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 transition-transform group-open:rotate-180"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <div className="mt-8 border-l-2 border-[color:var(--gold-primary)] pl-5 sm:pl-8">
            <ServiceDetailContent blocks={serviceDetails[service.id]} />
          </div>
        </details>
      </div>
    </section>
  );
}

export default function Services() {
  const [viewLessControl, setViewLessControl] = useState(null);
  const activeServiceIdRef = useRef(null);

  const handleExpandedChange = useCallback((serviceId, isOpen) => {
    if (isOpen) {
      activeServiceIdRef.current = serviceId;
      setViewLessControl(null);
      return;
    }

    if (activeServiceIdRef.current === serviceId) {
      activeServiceIdRef.current = null;
      setViewLessControl(null);
    }
  }, []);

  const handleViewLessVisibility = useCallback((serviceId, isVisible, onClick) => {
    if (activeServiceIdRef.current !== serviceId) {
      setViewLessControl((currentControl) =>
        currentControl?.serviceId === serviceId ? null : currentControl
      );
      return;
    }

    if (isVisible) {
      setViewLessControl({ serviceId, onClick });
      return;
    }

    setViewLessControl((currentControl) =>
      currentControl?.serviceId === serviceId ? null : currentControl
    );
  }, []);

  const viewLessService = orderedServices.find(
    (service) => service.id === viewLessControl?.serviceId
  );

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

      {orderedServices.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          index={index}
          onExpandedChange={handleExpandedChange}
          onViewLessVisibility={handleViewLessVisibility}
        />
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
      {viewLessService && (
        <button
          type="button"
          aria-label={`View less and return to ${viewLessService.title}`}
          onClick={viewLessControl.onClick}
          className="fixed bottom-6 left-6 z-40 inline-flex h-12 items-center gap-2 rounded-lg bg-[color:var(--navy-medium)] px-5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[color:var(--gold-primary)] hover:text-[color:var(--navy-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gold-primary)]"
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
          View Less
        </button>
      )}
    </>
  );
}
