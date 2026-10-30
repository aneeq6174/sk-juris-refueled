import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import { partners } from '../data/people.js';
import Button from '../components/Button.jsx';

const khurramProfile = {
  focus: [
    'Corporate & Commercial Law',
    'Tax',
    'Trade & Investment',
    'Dispute Resolution',
  ],
  memberships: [
    'Punjab Bar Council practice licence, 2004',
    'Life member, Lahore Bar Association',
    'Life member, Lahore High Court Bar Association',
    'Life member, Lahore Tax Bar Association',
  ],
  leadership: [
    {
      title: 'Chairman',
      organization: 'Law Reforms and Research Committee, Lahore Bar Association',
    },
    {
      title: 'Co-Chairman',
      organization: 'Civil Law Reforms Committee, Lahore High Court Bar Association',
    },
    {
      title: 'Chairman',
      organization: 'LCCI Standing Committee on Corporate and Business Law',
    },
  ],
  clients: [
    'Federation of Pakistan Chambers of Commerce and Industry',
    'Lahore Chamber of Commerce and Industry',
    'Islamabad Chamber of Commerce and Industry',
    'Sialkot Chamber of Commerce and Industry',
    'Faisalabad Chamber of Commerce and Industry',
    'Rawalpindi Chamber of Commerce and Industry',
    'Gujranwala Chamber of Commerce and Industry',
    'Pakistan Chemical Manufacturers Association',
    'All Pakistan Meat Exporters and Processors Association',
    'Rice Exporters Association of Pakistan',
    'All Pakistan Corrugated Carton Manufacturers Association',
    'Pakistan Fasteners Manufacturers and Traders Association',
    'Pakistan Ferrous and Non-Ferrous Metals Association',
    'Pakistan Coating Association',
    'Pakistan Yarn Manufacturers Association (North Zone)',
  ],
};

const naghProfile = {
  affiliations: [
    "The Honourable Society of Lincoln's Inn, London",
    'International Bar Association (IBA), United Kingdom',
    'Punjab Bar Council, Pakistan',
    'Lahore Bar Association',
    'Lahore Chamber of Commerce & Industry (since 2010)',
    'Federal Board of Revenue (FBR) registered practice',
    'The Law Society of the United Kingdom, London',
    'International Lawyers Association (ILA), United Kingdom',
    'Lahore High Court Bar Association',
    'Lahore Tax Bar Association',
    'Ferozepur Road Industrial Association (FRIA), Executive Member',
    'IPO Pakistan registered practice',
  ],
};

function SectionHeading({ eyebrow, title, children, dark = false }) {
  return (
    <header className="mb-10 max-w-2xl">
      <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? 'text-[color:var(--gold-light)]' : 'text-[color:var(--teal-accent)]'}`}>
        {eyebrow}
      </p>
      <h2 className={`h2 mt-3 font-[var(--font-heading)] ${dark ? 'text-white' : 'text-[color:var(--navy-dark)]'}`}>
        {title}
      </h2>
      {children && (
        <p className={`lead mt-4 ${dark ? 'text-white/70' : ''}`}>{children}</p>
      )}
    </header>
  );
}

function ProfileSection({ id, className = '', children }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

function FocusList() {
  return (
    <ul className="mt-7 flex flex-wrap gap-2">
      {khurramProfile.focus.map((area) => (
        <li
          key={area}
          className="border border-white/25 px-3 py-2 text-sm text-white/90"
        >
          {area}
        </li>
      ))}
    </ul>
  );
}

function DetailList({ items }) {
  return (
    <ul className="divide-y divide-slate-200">
      {items.map((item) => (
        <li key={item} className="flex gap-4 py-4 text-slate-700">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold-primary)]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function KhurramProfile({ partner }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[color:var(--navy-dark)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-[34rem] w-[34rem] rounded-full border border-white/5"
        />
        <div className="container-x relative grid items-center gap-10 py-12 sm:py-16 lg:min-h-[42rem] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="mb-12 text-sm text-white/60">
              <Link to="/about" className="transition-colors hover:text-white">
                About Us
              </Link>
              <span aria-hidden="true" className="mx-3 text-[color:var(--gold-primary)]">/</span>
              <span>Our Partner</span>
            </nav>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-primary)]">
              Founder · Senior Partner
            </p>
            <h1 className="mt-5 max-w-xl font-[var(--font-heading)] text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Sheikh Khurram
              <span className="mt-1 block text-[color:var(--gold-light)]">Abbas</span>
            </h1>
            <p className="mt-5 text-lg font-medium text-white/85">
              Advocate · Senior Partner
            </p>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Advising local and international clients on corporate, tax and
              commercial law, trade and investment, and dispute resolution.
            </p>
            <FocusList />
            <div className="mt-9">
              <Button to="/contact" variant="primary">
                Contact the firm
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem]">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 right-8 top-8 border border-[color:var(--gold-primary)]/70"
            />
            <div className="relative aspect-[4/5] max-h-[42rem] overflow-hidden bg-[color:var(--navy-medium)]">
              <img
                src={partner.image}
                alt="Sheikh Khurram Abbas, Senior Partner at SKJC"
                className="h-full w-full object-cover object-[center_30%]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-dark)]/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.18em] text-white/80">
                SKJC
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container-x grid divide-y divide-slate-200 py-2 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {[
            ['2004', 'Punjab Bar Council licence'],
            ['2023', 'Awarded by the President of Pakistan'],
            ['13', 'Law books authored'],
            ['Lahore · Islamabad', 'Serving clients across Pakistan and internationally'],
          ].map(([value, label]) => (
            <div key={label} className="py-6 sm:px-6 lg:px-7">
              <p className="font-[var(--font-heading)] text-2xl text-[color:var(--navy-dark)]">
                {value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <ProfileSection>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Practice" title="Counsel built around the matter">
            A practice spanning disputes and transactions, informed by extensive
            work with chambers of commerce, national trade associations and
            businesses across diverse sectors.
          </SectionHeading>
          <div className="border-l-2 border-[color:var(--gold-primary)] py-1 pl-6 sm:pl-9">
            <p className="text-lg leading-8 text-slate-700">
              Sheikh Khurram Abbas combines litigation, arbitration and
              transactional counsel to help clients address complex legal and
              commercial questions. His work includes corporate and commercial
              law, taxation, trade and investment, and dispute resolution for
              both local and international clients.
            </p>
          </div>
        </div>
      </ProfileSection>

      <ProfileSection className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Professional leadership" title="Service to the profession" />
          <div className="space-y-0">
            {khurramProfile.leadership.map((role) => (
              <article
                key={role.organization}
                className="grid gap-2 border-t border-slate-200 py-6 sm:grid-cols-[7rem_1fr] sm:gap-6"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--teal-accent)]">
                  {role.title}
                </p>
                <h3 className="text-lg leading-7 text-[color:var(--navy-dark)]">
                  {role.organization}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </ProfileSection>

      <ProfileSection className="bg-[color:var(--warm-white)]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Honours" title="Recognition for legal work" />
            <div className="space-y-6">
              <article className="border-l-2 border-[color:var(--gold-primary)] pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--teal-accent)]">
                  2023
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[color:var(--navy-dark)]">
                  Awarded by the President of Pakistan
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  For corporate-law work concerning trade organisations.
                </p>
              </article>
              <article className="border-l-2 border-slate-300 pl-5">
                <h3 className="text-lg font-semibold text-[color:var(--navy-dark)]">
                  Certificates of Excellence
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Received from the Lahore, Islamabad, Faisalabad and Gujranwala
                  Chambers of Commerce and Industry.
                </p>
              </article>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Credentials" title="Bar memberships" />
            <DetailList items={khurramProfile.memberships} />
          </div>
        </div>
      </ProfileSection>

      <ProfileSection className="bg-[color:var(--navy-dark)] text-white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Arbitration & mediation" title="Resolving disputes across borders" dark>
            Senior arbitrator at the International Commercial Arbitration Center,
            Lahore Chamber of Commerce and Industry.
          </SectionHeading>
          <div className="border-t border-white/20 pt-6">
            <p className="text-lg leading-8 text-white/80">
              Experience includes disputes involving parties from the United
              States, the United Kingdom, Europe, Turkey, China and Pakistan.
              He is also a member of the LCCI ADRC Mediation Committee and an
              arbitration advisor to the DHA Estate Agents Association, Lahore.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-sm uppercase tracking-[0.14em] text-[color:var(--gold-light)]">
              {['United States', 'United Kingdom', 'Europe', 'Turkey', 'China', 'Pakistan'].map(
                (place) => <span key={place}>{place}</span>
              )}
            </div>
          </div>
        </div>
      </ProfileSection>

      <ProfileSection>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Client experience" title="Work across sectors" />
          <div className="grid gap-x-10 sm:grid-cols-2">
            {khurramProfile.clients.map((client) => (
              <p
                key={client}
                className="border-t border-slate-200 py-4 text-sm leading-6 text-slate-700"
              >
                {client}
              </p>
            ))}
          </div>
        </div>
      </ProfileSection>

      <ProfileSection className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Authorship & academia" title="Research, teaching and public discussion" />
          <div className="grid gap-8 sm:grid-cols-2">
            <article className="border-t-2 border-[color:var(--gold-primary)] pt-5">
              <h3 className="font-[var(--font-heading)] text-xl text-[color:var(--navy-dark)]">
                Legal scholarship
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Author of 13 law books, with research published in Pakistan
                Legal Decisions and Pakistan Law Journal.
              </p>
            </article>
            <article className="border-t-2 border-[color:var(--gold-primary)] pt-5">
              <h3 className="font-[var(--font-heading)] text-xl text-[color:var(--navy-dark)]">
                Teaching & analysis
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Visiting faculty member in corporate, business and commercial
                law; legal analyst on television and digital media.
              </p>
            </article>
          </div>
        </div>
      </ProfileSection>

      <section className="bg-[color:var(--teal-accent)] text-white">
        <div className="container-x flex flex-col gap-8 py-12 sm:py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              SK Juris &amp; Co.
            </p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl text-white">
              Discuss your legal requirements
            </h2>
            <p className="mt-3 text-white/80">
              Lahore · Islamabad
              <span className="mx-2" aria-hidden="true">·</span>
              +92 300 4931839
            </p>
            <a
              href="mailto:office@skjuris.com"
              className="mt-2 inline-block text-sm text-white/80 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
            >
              office@skjuris.com
            </a>
          </div>
          <Button
            to="/contact"
            variant="outline"
            className="w-fit border-white text-white hover:bg-white hover:text-[color:var(--navy-dark)]"
          >
            Contact the firm
          </Button>
        </div>
      </section>
    </>
  );
}

function NaghmanaProfile({ partner }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[color:var(--navy-dark)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-[34rem] w-[34rem] rounded-full border border-white/5"
        />
        <div className="container-x relative grid items-center gap-10 py-12 sm:py-16 lg:min-h-[42rem] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="mb-12 text-sm text-white/60">
              <Link to="/about" className="transition-colors hover:text-white">
                About Us
              </Link>
              <span aria-hidden="true" className="mx-3 text-[color:var(--gold-primary)]">/</span>
              <span>Our Partner</span>
            </nav>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-primary)]">
              Founder &amp; Legal Head, TCI
            </p>
            <h1 className="mt-5 max-w-xl font-[var(--font-heading)] text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Naghmana
              <span className="mt-1 block text-[color:var(--gold-light)]">Shehzadi</span>
            </h1>
            <p className="mt-5 text-lg font-medium text-white/85">
              Barrister-at-Law, Lincoln&apos;s Inn · Senior Advocate High Court
            </p>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Bringing more than two decades of corporate and commercial legal
              experience, with qualifications and professional affiliations
              spanning Pakistan and the United Kingdom.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {['Corporate & Commercial Law', 'International Economic Law', 'England & Wales · Pakistan'].map((area) => (
                <li
                  key={area}
                  className="border border-white/25 px-3 py-2 text-sm text-white/90"
                >
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button to="/contact" variant="primary">
                Contact the firm
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem]">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 right-8 top-8 border border-[color:var(--gold-primary)]/70"
            />
            <div className="relative aspect-[4/5] max-h-[42rem] overflow-hidden bg-[color:var(--navy-medium)]">
              <img
                src={partner.image}
                alt="Naghmana Shehzadi, Barrister-at-Law and Senior Advocate High Court"
                className="h-full w-full object-cover object-[center_30%]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-dark)]/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.18em] text-white/80">
                SKJC
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container-x grid divide-y divide-slate-200 py-2 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {[
            ['20+', 'Years in corporate and commercial law'],
            ['LL.M', 'International Economic & Corporate Law'],
            ['Lincoln’s Inn', 'Barrister-at-Law, England & Wales'],
            ['Since 2010', 'Lahore Chamber of Commerce & Industry'],
          ].map(([value, label]) => (
            <div key={label} className="py-6 sm:px-6 lg:px-7">
              <p className="font-[var(--font-heading)] text-2xl text-[color:var(--navy-dark)]">
                {value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <ProfileSection>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Profile" title="Strategic counsel with a global perspective">
            A senior practitioner at the forefront of Pakistan’s corporate and
            commercial legal landscape for more than two decades.
          </SectionHeading>
          <div className="border-l-2 border-[color:var(--gold-primary)] py-1 pl-6 sm:pl-9">
            <p className="text-lg leading-8 text-slate-700">
              Barrister Naghmana Shehzadi brings strategic counsel, courtroom
              experience and a strong commitment to professional integrity.
              Called to the Bar of England and Wales by the Honourable Society
              of Lincoln’s Inn and a Senior Advocate of the High Court of
              Pakistan, she offers clients experience across both legal
              jurisdictions.
            </p>
          </div>
        </div>
      </ProfileSection>

      <ProfileSection className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Education & credentials" title="A foundation in international legal practice" />
          <div className="space-y-0">
            {[
              ['Barrister-at-Law', 'England and Wales; called by the Honourable Society of Lincoln’s Inn.'],
              ['Senior Advocate', 'High Court of Pakistan.'],
              ['Master of Laws (LL.M)', 'Specialisation in International Economic and Corporate Law, University of the Punjab.'],
            ].map(([title, detail]) => (
              <article
                key={title}
                className="grid gap-2 border-t border-slate-200 py-6 sm:grid-cols-[12rem_1fr] sm:gap-6"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--teal-accent)]">
                  {title}
                </p>
                <p className="text-lg leading-7 text-[color:var(--navy-dark)]">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </ProfileSection>

      <ProfileSection className="bg-[color:var(--warm-white)]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Professional network" title="Connected across institutions and industries">
            Active engagement with bar associations, legal institutions and
            business organisations in Pakistan and internationally.
          </SectionHeading>
          <DetailList items={naghProfile.affiliations} />
        </div>
      </ProfileSection>

      <ProfileSection className="bg-[color:var(--navy-dark)] text-white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="International perspective" title="Legal insight across borders" dark />
          <div className="border-t border-white/20 pt-6">
            <p className="text-lg leading-8 text-white/80">
              Her professional and industry engagements extend across Pakistan,
              the United Kingdom, the Middle East and Asia. This cross-sector
              network informs the global perspective she brings to corporate
              and commercial legal matters.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-sm uppercase tracking-[0.14em] text-[color:var(--gold-light)]">
              {['Pakistan', 'United Kingdom', 'Middle East', 'Asia'].map((place) => (
                <span key={place}>{place}</span>
              ))}
            </div>
          </div>
        </div>
      </ProfileSection>

      <section className="bg-[color:var(--teal-accent)] text-white">
        <div className="container-x flex flex-col gap-8 py-12 sm:py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              SKJC
            </p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl text-white">
              Discuss your legal requirements
            </h2>
            <p className="mt-3 text-white/80">
              Lahore · Islamabad
              <span className="mx-2" aria-hidden="true">·</span>
              +92 300 4931839
            </p>
            <a
              href="mailto:office@skjuris.com"
              className="mt-2 inline-block text-sm text-white/80 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
            >
              office@skjuris.com
            </a>
          </div>
          <Button
            to="/contact"
            variant="outline"
            className="w-fit border-white text-white hover:bg-white hover:text-[color:var(--navy-dark)]"
          >
            Contact the firm
          </Button>
        </div>
      </section>
    </>
  );
}

export default function PartnerProfile() {
  const { slug } = useParams();
  const partner = partners.find((item) => item.slug === slug);

  if (!partner) return <NotFound />;

  if (partner.slug === 'sheikh-khurram-shehzad') {
    return <KhurramProfile partner={partner} />;
  }

  if (partner.slug === 'naghmana-shehzadi') {
    return <NaghmanaProfile partner={partner} />;
  }

  return (
    <>
      <section className="bg-[color:var(--navy-dark)] text-white">
        <div className="container-x grid min-h-[calc(100svh-5rem)] items-center gap-10 py-12 sm:min-h-[calc(100svh-6rem)] lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--gold-primary)]">
              Our Partner
            </p>
            <h1 className="h1 mt-4 font-[var(--font-heading)] text-white">
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
