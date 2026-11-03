import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import { partners, regionalPartners } from '../data/people.js';
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

const waqasProfile = {
  focus: [
    'Corporate & Commercial Law',
    'Taxation',
    'Regulatory Compliance',
    'Litigation',
    'Institutional Advisory',
  ],
  credentials: [
    'Advocate High Court, licensed by the Punjab Bar Council',
    'Member, Lahore High Court Bar Association',
    'Member, Lahore Tax Bar Association',
  ],
  education: [
    'Bachelor of Laws (LL.B.), University of the Punjab, Lahore',
    'Bachelor of Business Administration (BBA), University of Lahore',
  ],
  clientCategories: [
    'Private limited companies',
    'Business owners and traders',
    'Trade associations',
    'Exporters and manufacturers',
    'Individuals',
  ],
};

const zeeshanProfile = {
  focus: [
    'Constitutional Law',
    'Labour & Employment Law',
    'Industrial Relations',
    'Workplace Harassment Litigation',
    'Corporate Advisory',
    'Civil & Commercial Litigation',
  ],
  clients: [
    'GSK',
    'Haleon',
    'ENGRO',
    'Prime Global Energies',
    'Karwan-e-Hayat',
    'Bank Alfalah',
    'BankIslami',
    'MCB Bank',
    'Faysal Bank',
  ],
  forums: [
    'High Courts',
    'National Industrial Relations Commission (NIRC)',
    'Labour Courts and Labour Appellate Tribunals',
    'Federal Ombudsperson for Protection against Harassment (FOSPAH)',
    'Other statutory authorities',
  ],
};

const sayedTaqiProfile = {
  focus: ['Property Law', 'Company Law', 'Constitutional Law'],
};

const goharProfile = {
  focus: ['Business & Commercial Law', 'Banking & Financial Law'],
};

const nisarProfile = {
  focus: ['Constitutional Law'],
};

const barkatProfile = {
  focus: ['Civil Litigation', 'Criminal Litigation'],
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

function ProfileHero({ partner, category, subtitle, description, focus }) {
  return (
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
            <span>{category}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-primary)]">
            {category}
          </p>
          <h1 className="mt-5 max-w-xl font-[var(--font-heading)] text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {partner.name}
          </h1>
          <p className="mt-5 text-lg font-medium text-white/85">{subtitle}</p>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
            {description}
          </p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {focus.map((area) => (
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
              alt={partner.name}
              className="h-full w-full object-cover object-[center_25%]"
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
  );
}

function WaqasProfile({ partner }) {
  return (
    <>
      <ProfileHero
        partner={partner}
        category="Our Partner"
        subtitle="Advocate High Court · Partner since 2022"
        description="Advising businesses and institutions on corporate and commercial matters, taxation, regulatory compliance and dispute resolution, with a commercially focused and precise approach."
        focus={waqasProfile.focus}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="container-x grid divide-y divide-slate-200 py-2 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {[
            ['2022', 'Joined SKJC as Partner'],
            ['5 years', 'Legal practice experience, as provided'],
            ['Lahore', 'Practice location'],
            ['Islamabad', 'Practice location'],
          ].map(([value, label]) => (
            <div key={label} className="py-6 sm:px-6 lg:px-7">
              <p className="font-[var(--font-heading)] text-2xl text-[color:var(--navy-dark)]">{value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <ProfileSection>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Practice" title="Commercially minded legal advice">
            Combining legal analysis with an understanding of business operations,
            regulatory frameworks and institutional requirements.
          </SectionHeading>
          <div className="border-l-2 border-[color:var(--gold-primary)] py-1 pl-6 sm:pl-9">
            <p className="text-lg leading-8 text-slate-700">
              Waqas Mahmood Kasuri advises on corporate governance, statutory
              compliance and dispute resolution. His work includes corporate
              and commercial law, income and sales taxation, civil and criminal
              litigation, banking and financial matters, trade-body advisory,
              intellectual property, customs and international trade.
            </p>
          </div>
        </div>
      </ProfileSection>

      <ProfileSection className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Education" title="Academic background" />
            <DetailList items={waqasProfile.education} />
          </div>
          <div>
            <SectionHeading eyebrow="Credentials" title="Professional memberships" />
            <DetailList items={waqasProfile.credentials} />
          </div>
        </div>
      </ProfileSection>

      <ProfileSection className="bg-[color:var(--warm-white)]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Client work" title="Serving businesses and individuals">
            Experience across a range of client types, with no individual client
            names included in the supplied profile.
          </SectionHeading>
          <DetailList items={waqasProfile.clientCategories} />
        </div>
      </ProfileSection>

      <ProfileSection className="bg-[color:var(--navy-dark)] text-white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Dispute resolution" title="Constructive paths to resolution" dark />
          <p className="border-t border-white/20 pt-6 text-lg leading-8 text-white/80">
            Practical experience in negotiation, mediation and arbitration,
            focused on amicable settlements and effective resolution of disputes.
          </p>
        </div>
      </ProfileSection>

      <ProfileCallToAction />
    </>
  );
}

function MadeehaProfile({ partner }) {
  return (
    <>
      <ProfileHero
        partner={partner}
        category="Regional Partner · Sharjah, U.A.E."
        subtitle="Managing Director"
        description="Madeeha Lateef is Managing Director at Business Center, Publishing City Free Zone, Sharjah, U.A.E. Her stated areas of expertise are intellectual property and corporate services."
        focus={['Intellectual Property', 'Corporate Services']}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="container-x grid divide-y divide-slate-200 py-2 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {[
            ['Managing Director', 'Professional role'],
            ['Sharjah, U.A.E.', 'Regional office'],
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
          <SectionHeading eyebrow="Areas of expertise" title="Intellectual property & corporate services">
            Her stated areas of expertise are intellectual property and
            corporate services, supporting organizations with the legal
            considerations involved in protecting ideas and conducting business.
          </SectionHeading>
          <div className="space-y-0">
            {[
              ['Intellectual Property', 'Matters involving the protection, management and commercial use of intellectual property rights.'],
              ['Corporate Services', 'Business support relating to corporate requirements and operations in Sharjah and the wider region.'],
            ].map(([title, description]) => (
              <article
                key={title}
                className="border-t border-slate-200 py-6"
              >
                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[color:var(--navy-dark)]">
                  {title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </ProfileSection>

      <ProfileSection className="bg-[color:var(--warm-white)]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Office" title="Business Center">
            Publishing City Free Zone
          </SectionHeading>
          <div className="border-l-2 border-[color:var(--gold-primary)] py-1 pl-6 sm:pl-9">
            <p className="text-lg leading-8 text-slate-700">
              Sharjah (SHJ), United Arab Emirates
            </p>
          </div>
        </div>
      </ProfileSection>

      <ProfileCallToAction />
    </>
  );
}

function SayedTaqiProfile({ partner }) {
  return (
    <>
      <ProfileHero
        partner={partner}
        category="Our Partner"
        subtitle="Advocate High Court"
        description="A legal professional with 12 years of experience, focusing on property, company and constitutional law."
        focus={sayedTaqiProfile.focus}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="container-x grid divide-y divide-slate-200 py-2 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {[
            ['12 years', 'Professional experience'],
            ['Advocate', 'High Court'],
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
          <SectionHeading eyebrow="Practice" title="Experience across core legal fields">
            With 12 years of experience, Sayed Taqqi Abbas focuses on property,
            company and constitutional law.
          </SectionHeading>
          <div className="space-y-0">
            {[
              ['Property Law', 'Property-related transactions, ownership issues and disputes.'],
              ['Company Law', 'Company structures, governance requirements and corporate matters.'],
              ['Constitutional Law', 'Constitutional questions, interpretation and related legal proceedings.'],
            ].map(([title, description]) => (
              <article key={title} className="border-t border-slate-200 py-6">
                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[color:var(--navy-dark)]">
                  {title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </ProfileSection>

      <ProfileCallToAction />
    </>
  );
}

function NisarProfile({ partner }) {
  return (
    <>
      <ProfileHero
        partner={partner}
        category="Our Partner"
        subtitle="Senior Advocate Supreme Court"
        description="A senior advocate practising before the Supreme Court, with a focus on constitutional law."
        focus={nisarProfile.focus}
      />

      <ProfileSection>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Practice" title="Constitutional law">
            Nisar Safdar Naqvi is a Senior Advocate of the Supreme Court whose
            stated focus is constitutional law.
          </SectionHeading>
          <div className="border-l-2 border-[color:var(--gold-primary)] py-1 pl-6 sm:pl-9">
            <p className="text-lg leading-8 text-slate-700">
              Constitutional law concerns the interpretation and application
              of the Constitution. Work in this field can involve fundamental
              rights, the exercise of public authority and constitutional
              questions raised in court proceedings.
            </p>
          </div>
        </div>
      </ProfileSection>

      <ProfileCallToAction />
    </>
  );
}

function GoharProfile({ partner }) {
  return (
    <>
      <ProfileHero
        partner={partner}
        category="Regional Partner · Virginia, USA"
        subtitle="Regional Partner"
        description="Supporting business and commercial matters, with a focus on banking and financial law, from Virginia, USA."
        focus={goharProfile.focus}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="container-x grid divide-y divide-slate-200 py-2 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {[
            ['Virginia', 'Regional office'],
            ['United States', 'Regional presence'],
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
          <SectionHeading eyebrow="Practice" title="Business and financial matters">
            Based in Virginia, USA, Gohar Zaman’s stated practice areas are
            business and commercial law, and banking and financial law.
          </SectionHeading>
          <div className="space-y-0">
            {[
              ['Business & Commercial Law', 'Commercial relationships, business arrangements and the legal terms that support day-to-day operations.'],
              ['Banking & Financial Law', 'Legal considerations related to banking activities, financial arrangements and associated obligations.'],
            ].map(([title, description]) => (
              <article key={title} className="border-t border-slate-200 py-6">
                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[color:var(--navy-dark)]">
                  {title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </ProfileSection>

      <ProfileSection className="bg-[color:var(--warm-white)]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Regional office" title="Virginia, USA" />
          <p className="border-l-2 border-[color:var(--gold-primary)] py-2 pl-6 text-lg leading-8 text-slate-700 sm:pl-9">
            Based in Virginia, United States, as a regional partner of SKJC.
          </p>
        </div>
      </ProfileSection>

      <ProfileCallToAction />
    </>
  );
}

function BarkatProfile({ partner }) {
  return (
    <>
      <ProfileHero
        partner={partner}
        category="Regional Partner · Peshawar"
        subtitle="Civil & Criminal Litigation"
        description="Barkat Ullah Khan’s stated practice areas are civil and criminal litigation, representing a focus on disputes and court proceedings."
        focus={barkatProfile.focus}
      />

      <ProfileSection>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Litigation practice" title="Civil & criminal matters">
            Based in Peshawar, Barkat Ullah Khan focuses on civil and criminal
            litigation.
          </SectionHeading>
          <div className="space-y-0">
            {[
              ['Civil Litigation', 'Disputes concerning legal rights and obligations, including preparation of claims, responses and supporting case materials.'],
              ['Criminal Litigation', 'Representation through criminal proceedings, with attention to the relevant facts, evidence and procedural requirements.'],
              ['Court Representation', 'Preparation for hearings, presentation of legal arguments and guidance through the stages of a case.'],
            ].map(([title, description]) => (
              <article key={title} className="border-t border-slate-200 py-6">
                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[color:var(--navy-dark)]">
                  {title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </ProfileSection>

      <ProfileSection className="bg-[color:var(--warm-white)]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Regional office" title="Peshawar" />
          <p className="border-l-2 border-[color:var(--gold-primary)] py-2 pl-6 text-lg leading-8 text-slate-700 sm:pl-9">
            Barkat Ullah Khan is listed as SKJC’s regional partner in Peshawar.
          </p>
        </div>
      </ProfileSection>

      <ProfileCallToAction />
    </>
  );
}

function ZeeshanProfile({ partner }) {
  return (
    <>
      <ProfileHero
        partner={partner}
        category="Regional Partner · Karachi"
        subtitle="Advocate High Court"
        description="A practice focused on employment and industrial relations, corporate advisory and civil and commercial litigation, including complex workplace disputes and harassment matters."
        focus={zeeshanProfile.focus}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="container-x grid divide-y divide-slate-200 py-2 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
          {[
            ['LL.B. (Hons.)', 'Shariah & Law'],
            ['IIUI', 'International Islamic University, Islamabad'],
            ['Karachi', 'Regional practice base'],
          ].map(([value, label]) => (
            <div key={label} className="py-6 sm:px-6 lg:px-7">
              <p className="font-[var(--font-heading)] text-2xl text-[color:var(--navy-dark)]">{value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <ProfileSection>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Employment law" title="Workplace matters and industrial relations">
            Advice and representation in employment disputes, workplace
            investigations and labour-related proceedings.
          </SectionHeading>
          <div className="border-l-2 border-[color:var(--gold-primary)] py-1 pl-6 sm:pl-9">
            <p className="text-lg leading-8 text-slate-700">
              His experience includes workplace harassment complaints, inquiry
              proceedings, statutory appeals and jurisdictional disputes. His
              broader work covers industrial disputes, trade union matters,
              disciplinary proceedings, service claims, employment policies and
              regulatory compliance.
            </p>
          </div>
        </div>
      </ProfileSection>

      <ProfileSection className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Representation" title="Experience before courts and tribunals" />
          <DetailList items={zeeshanProfile.forums} />
        </div>
      </ProfileSection>

      <ProfileSection className="bg-[color:var(--warm-white)]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Client experience" title="Work with leading organisations">
            The supplied profile describes work for multinational corporations,
            financial institutions and national organisations.
          </SectionHeading>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {zeeshanProfile.clients.map((client) => (
              <p key={client} className="border-t border-slate-200 py-4 text-sm leading-6 text-slate-700">
                {client}
              </p>
            ))}
          </div>
        </div>
      </ProfileSection>

      <ProfileSection className="bg-[color:var(--navy-dark)] text-white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Professional approach" title="Rigorous, strategic, practical" dark />
          <p className="border-t border-white/20 pt-6 text-lg leading-8 text-white/80">
            Combining meticulous legal research and strategic litigation with a
            commercially oriented understanding of corporate employment
            relationships. The focus is on sustainable legal positions,
            anticipating risk and practical solutions suited to each client’s
            operational and regulatory needs.
          </p>
        </div>
      </ProfileSection>

      <ProfileSection>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Education" title="Academic background" />
            <DetailList items={[
              'LL.B. (Hons.) in Shariah & Law, International Islamic University, Islamabad',
            ]} />
          </div>
          <div>
            <SectionHeading eyebrow="Office" title="Karachi" />
            <p className="border-t border-slate-200 py-4 leading-7 text-slate-700">
              Bungalow No. R-42, Street No. 18, Gate No. 2, Makhdom Bilawal
              Cooperative Housing Society, Korangi Crossing, Karachi.
            </p>
          </div>
        </div>
      </ProfileSection>

      <ProfileCallToAction />
    </>
  );
}

function ProfileCallToAction() {
  return (
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
            Lahore · Islamabad · Karachi
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
  );
}

export default function PartnerProfile() {
  const { slug } = useParams();
  const isRegionalPartner = regionalPartners.some((item) => item.slug === slug);
  const partner = [...partners, ...regionalPartners].find((item) => item.slug === slug);

  if (!partner) return <NotFound />;

  if (partner.slug === 'sheikh-khurram-shehzad') {
    return <KhurramProfile partner={partner} />;
  }

  if (partner.slug === 'naghmana-shehzadi') {
    return <NaghmanaProfile partner={partner} />;
  }

  if (partner.slug === 'syed-taqi-abbas') {
    return <SayedTaqiProfile partner={partner} />;
  }

  if (partner.slug === 'nisar-safdar-naqvi') {
    return <NisarProfile partner={partner} />;
  }

  if (partner.slug === 'gohar-zaman') {
    return <GoharProfile partner={partner} />;
  }

  if (partner.slug === 'barkat-ullah-khan') {
    return <BarkatProfile partner={partner} />;
  }

  if (partner.slug === 'madiha-latif') {
    return <MadeehaProfile partner={partner} />;
  }

  if (partner.slug === 'waqas-kasuri') {
    return <WaqasProfile partner={partner} />;
  }

  if (partner.slug === 'zeeshan-ahmad') {
    return <ZeeshanProfile partner={partner} />;
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[color:var(--navy-dark)] text-white">
        <div className="container-x relative grid items-center gap-10 py-12 sm:py-16 lg:min-h-[42rem] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="mb-12 text-sm text-white/60">
              <Link to="/about" className="transition-colors hover:text-white">
                About Us
              </Link>
              <span aria-hidden="true" className="mx-3 text-[color:var(--gold-primary)]">/</span>
              <span>{isRegionalPartner ? 'Regional Partner' : 'Our Partner'}</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-primary)]">
              {isRegionalPartner ? 'Regional Partner' : 'Our Partner'}
            </p>
            <h1 className="mt-5 max-w-xl font-[var(--font-heading)] text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {partner.name}
            </h1>
            <p className="mt-5 text-lg font-medium text-white/85">{partner.designation}</p>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              {partner.region
                ? `Based in ${partner.region}, contributing to SKJC’s regional presence.`
                : 'Partner profile details will be added soon.'}
            </p>
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
              {partner.image ? (
              <img
                src={partner.image}
                alt={partner.name}
                className="h-full w-full object-cover object-[center_25%]"
                fetchPriority="high"
              />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-white/60">
                  Portrait unavailable
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-dark)]/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.18em] text-white/80">
                SKJC
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-label={`${partner.name} profile details`}
        className="container-x min-h-[20rem] py-16 sm:py-20"
      >
        <p className="max-w-3xl border-l-2 border-[color:var(--gold-primary)] py-2 pl-6 text-base leading-8 text-slate-600 sm:pl-9 sm:text-lg">
          Detailed professional information for {partner.name} will be added
          here.
        </p>
      </section>
    </>
  );
}
