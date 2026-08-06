import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

// Dynamically import all logo images from the logos folder
const logoModules = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });
// Helper to normalize and title-case display names
function formatName(raw) {
  if (!raw || typeof raw !== 'string') return raw;
  let s = raw.replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim();
  // remove trailing commas/periods
  s = s.replace(/[.,]+$/g, '');
  // Split words and title-case each
  return s
    .split(' ')
    .map((w) => {
      // preserve parentheses and inner punctuation
      return w
        .split(/(\(|\)|\/)/)
        .map((part) => (/[A-Za-z]/.test(part) ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase() : part))
        .join('');
    })
    .join(' ');
}

const clientLogos = Object.entries(logoModules).map(([path, mod]) => {
  const rawName = path.split('/').pop().replace(/\.(png|jpg|jpeg|PNG|JPG|JPEG)$/, '');
  return {
    src: typeof mod === 'string' ? mod : mod.default,
    name: formatName(rawName),
  };
});

// Client names without logos - displayed as a text list below
const clientNamesOnly = [
  // Public Companies, Trade Organizations, NGOs, Trusts & Welfare Institutions
  'Federation of Pakistan Chamber of Commerce and Industry',
  'Lahore Chamber of Commerce and Industry',
  'Islamabad Chamber of Commerce and Industry',
  'Faisalabad Chamber of Commerce and Industry',
  'Rawalpindi Chamber of Commerce and Industry',
  'Sialkot Chamber of Commerce and Industry',
  'Gujranwala Chamber of Commerce and Industry',
  'Kasur Chamber of Commerce and Industry',
  'Chakwal Chamber of Commerce and Industry',
  'Rahim Yar Khan Chamber of Commerce and Industry',
  'Rice Exporters Association of Pakistan',
  'All Pakistan Meat Exporters and Processors Association',
  'Pakistan Fasteners Manufacturers and Traders Association',
  'Pakistan Solar Association',
  'Wazirabad Chamber of Commerce and Industry',
  'Islamabad Chamber of Small Traders and Small Industry',
  'Rawalpindi Women Chamber of Commerce and Industry',
  'Pakistan Azerbaijan Joint Chamber of Commerce and Industry',
  'Pakistan Coating Association',
  'Sundar Industrial Estate Association Lahore',
  'DHA Estate Agents Association, Lahore',
  'All Lahore Realtors Association',
  'Pakistan Overseas Community Global (POCG) – UK-Based Welfare Organization for Overseas Pakistanis',
  'Door of Awareness',
  'The Noor Project of For the Needy and Hungary Foundation (Trust)',
  'Pakistan Steel Line Pipe Industry Association - A company under section 42 of the Companies Act 2017',
  'Friends of Economics and Business Reforms (FEBR) - A company under section 42 of the Companies Act 2017',
  'Lahore Conservation Society',
  'Brandreth Road Electrical Traders Association (BRETA) – Trade Organization',
  'Textile Traders Association – Trade Organization',
  'Jamia tul Muntazir (Hussaini Trust)',
  'Heaven Humanity Welfare Trust - Private Trust',
  'Talent Exploration – NGO',
  'Fatima Welfare Trust for Women - Public Trust',
  'Citizen Network for Health & Education – NGO',
  'The Little Art – NGO',
  // Industry and Trade Sector
  'AMK Engineering (Pvt) Ltd',
  'Qaisar LG Petro-Chemicals (Pvt) Ltd.,',
  'Cannon Foam Industries (Pvt) Ltd',
  'Sonary Bank Ltd',
  'Fauji Security Services (Pvt) Ltd',
  'Ruba Digital (Pvt) Ltd',
  'Ruba Automotive Pakistan Pvt. Ltd',
  'Forvil Cosmetics (Pvt) Ltd.,',
  'Symtera Technologies (Pvt) Ltd',
  'Dogar Publishers (Pvt) Ltd.,',
  'H. Wahid & Sons Manufacturing Corporation (Pvt.) Ltd',
  'Yasir Tent and Textile (Pvt) Ltd.,',
  'Elite Traders',
  'Dynamic Links Corporation',
  'Noor Pipe Industries (Pvt) Ltd – Plastic Pipe Manufacturers',
  'A.N Pipe Industries (Pvt) Ltd - Steel Pipe Manufacturers',
  'Moreno Iglesias Research Laboratory (Pvt.) Ltd. - Pharmaceutical Concern',
  'Shephard Pharma – Pharmaceutical Manufacturers',
  'Brothers Enterprises – Multi Enterprises',
  'Aslam Supermarket (Pvt) LTD- Chain Departmental Store',
  'Gold Panel International - Leather Products Manufacturers and Exporters',
  'HH Cold Rolling and Tube Mills (Pvt) Ltd - Steel Cold Roll Manufacturer',
  'Cosmopolitan Entreprises Pvt Ltd - Leather Products Manufacturers and Exporters',
  'Kumail Enterprises - Leather Products Manufacturers & Exporters',
  'RS Glove Company Poland - Leather Products Importers',
  'HH Industries - Steel Pipe Manufacturers',
  'Haider Industries - Steel Products Manufacturers',
  'Hamza Industries – Iron and Steel Products Manufacturers',
  'Bilal Steel - Steel Pipe Manufacturers',
  'AMK Modern House – Construction, Hardware & Home Furnishing Items',
  'New Modern Hardware and Plywood Store - Construction, Hardware & Home Furnishing Items',
  'Banera Roof Top Restaurant',
  'Multi International Inc – Travel and Tours',
  'Multi Travels (Pvt) Ltd - Travel and Tours',
  'Multi International (Pvt) Ltd - Travel and Tours',
  'Pak Aims (Pvt) Ltd - Travel and Tours',
  'Angel Enterprises - Cosmetics Manufacturing',
  'Dogar Carz – Car Traders',
  'Advance Packaging (Pvt) Ltd',
  'IRIS International (Pvt) Ltd – Advertising Company',
  'Quick Continental Hotel & Restaurant - Hoteling',
  'Hub Enterprises - Advertising',
  'Polysacks (Pvt.) Ltd. – Manufacturers',
  'Spring Advertising (Pvt.) Ltd. - Advertisement Services',
  'BrandHub & Kashmir Events Management Company',
  // Real Estate and Construction Sector
  'DHA Estates Agents Association',
  'Lahore Realtors Association',
  'Grace City Gwadar',
  'Free Port Housing Society Gwadar',
  'Palm Springs Housing Project Gwadar',
  'Bahria Country Club Lahore',
  'Q Links Developers and Estate Advisers',
  'Askari Estate',
  'National Estate',
  'Dream Homes',
  'Dream Homes Marketing (Pvt) Ltd – Real Estate Marketing',
  'Sarfraz Hamid Properties',
  'IQL Developers',
  'Forecasters Real Estate Experts',
  'Eagle Developers (Pvt) Ltd',
  'Eagle Marketing (Pvt) Ltd',
  'Eagle Town',
  'Jayedad.pk',
  'Dream Galleria',
  'City Club Gujranwala',
  'City Galleria',
  'Estate Planners',
  'Jasmine Mall, Bahria Town',
  'Deluxium (Pvt) Ltd - Real Estate Investors',
  'HKG Construction (Pvt) Ltd.',
];

export default function Clients() {
  const formattedClientNames = clientNamesOnly.map(formatName);

  return (
    <>
      <AnimatedSection>
        <section className="container-x section">
          <header className="mb-10">
            <h1 className="h1 font-[var(--font-heading)]">Clients</h1>
            <p className="lead mt-3">We partner with organizations across sectors and geographies.</p>
          </header>
        </section>
      </AnimatedSection>

      {/* ── Logo Section ── */}
      {clientLogos.length > 0 && (
        <section className="section bg-[color:var(--surface)]">
          <div className="container-x">
            <AnimatedSection>
              <header className="mb-8">
                <p className="text-sm uppercase tracking-widest text-[color:var(--gold-primary)] font-[var(--font-accent)]">Our Partners</p>
                  <h2 className="h2 mt-2">Client Logos</h2>
                <p className="lead mt-2">Recognized organizations we are proud to have served.</p>
              </header>
            </AnimatedSection>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
                {clientLogos.map((logo, index) => (
                  <AnimatedSection key={logo.name || index} delay={(index % 8) * 60}>
                    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm ring-1 ring-slate-200 p-6 h-full min-h-[140px] transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-[color:var(--gold-primary)] group">
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="max-h-20 w-auto object-contain transition-all duration-300"
                      />
                      <p className="mt-3 text-sm text-center text-slate-500 leading-tight font-[var(--font-accent)] line-clamp-2">
                        {logo.name}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
          </div>
        </section>
      )}

      {/* ── Text-only clients list ── */}
      <section className="section">
        <div className="container-x">
          <AnimatedSection>
            <header className="mb-8">
              <p className="text-sm uppercase tracking-widest text-[color:var(--brand-2)] font-[var(--font-accent)]">Our Clientele</p>
              <h2 className="h2 mt-2">All Clients</h2>
              <p className="lead mt-2">A comprehensive list of the organizations we have proudly served.</p>
            </header>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formattedClientNames.map((client, i) => (
              <AnimatedSection key={i} delay={(i % 3) * 80}>
                <div className="card p-5 flex items-start gap-3 hover:shadow-lg transition-shadow duration-300 group">
                  <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-[color:var(--gold-primary)] group-hover:scale-150 transition-transform duration-300" />
                  <p className="font-medium text-[color:var(--navy-dark)] leading-snug">{client}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
