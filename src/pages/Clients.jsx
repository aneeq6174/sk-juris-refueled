import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const logoModules = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });

const clientCategories = [
  {
    title: 'Public Companies, Trade Organizations, NGOs, Trusts & Welfare Institutions',
    logos: [
      'All Pakistan Meat Exporters',
      'Board of Management Sundar Industrial Estate',
      'Chakwal Chamber',
      'Door of Awareness',
      'Faislabad Chamber of Commerce and Industry',
      'FEBR Friends of Economic and Business Reforms',
      'FPCCI',
      'FWT Fatima Welfare Trust',
      'GCCI Gujranwala Chamber of Commerce and Industries',
      'Islamabad Chamber of Commerce and Industries',
      'Islamabad Chamber of Small Traders',
      'JTM',
      'Kasur Chamber of Commerce and Industries',
      'LCCI',
      'LCS Lahore Conservation Society',
      'Pakistan Afghanistan Joint Chamber of Commerce and Industry',
      'PCA Pakistan Coating Assocaitio',
      'PIAF',
      'POC Pakistan Overseas Community',
      'PSA Pakistan Solar Association',
      'PSL Pakistan Steel Line',
      'Rahim Yar Khan Chamber',
      'Rawalpindi Women Chamber of Commercec and Industry',
      'Rice Exporters Association of Pakistan',
      'Sahiwal Chamber of Commerec and Industry',
      'The Noor Project',
      'Wazirabad Chamber of Commerce and Industry',
      'HWT Humanity Welfare Trust',
    ],
  },
  {
    title: 'Industry and Trade Sector',
    logos: [
      'Advance Packaging',
      'AMK Modern',
      'AMK Solutions',
      'Angel Enterprise',
      'Aslam Stores',
      'Banera Restaurant',
      'Bilal Steel',
      'Brothers Enterprise',
      'Canon Foam',
      'Cosmo Enterprise',
      'Dogar Carz',
      'Dynamic Link',
      'Forvil Cosmetics',
      'FSS Fuji Security Services',
      'Gold Pannel Group',
      'HC Haider Chemical',
      'HH Industries',
      'HI Hamza Industries',
      'Hub Enterprises',
      'IRIS International Co.',
      'Kumail Interprise',
      'MI Moreno Iglisias',
      'MT Multi Travels',
      'NPI Noor Plastic Industries',
      'Pak AIMS',
      'Qaiser LG Petrochemicals',
      'QCH Quick Continental Hotel',
      'RD Ruba Digital',
      'RS Gloves',
      'Shephard',
      'SM Spring Marketing',
      'Soneri Bank',
      'Symtera Technology',
      'Wahid Sons Trading Company',
    ],
  },
  {
    title: 'Real Estate and Construction Sector',
    logos: [
      'Askari Estate Builders',
      'Banera Country Club Lahore',
      'City Club',
      'City Galeria',
      'DHA Estate assiciaion',
      'Dream Galleria',
      'Dreams Home',
      'Eagle Developers',
      'Eagle Town',
      'FSB Forecast State Builders',
      'Jayedad Pk',
      'JM Jasmine Mall Lahore',
      'NEB National Estate Builders',
      'Palm City Gawadar',
      'PSH Properties Srfraz Hamid',
      'QLINKS',
      'The Dream House',
    ],
  },
];

const logosByCategory = clientCategories.map((category) => ({
  ...category,
  logos: category.logos
    .map((name) => {
      const entry = Object.entries(logoModules).find(([path]) => {
        const filename = path.slice(path.lastIndexOf('/') + 1).replace(/\.[^.]+$/, '');
        return filename === name;
      });

      if (!entry) return null;

      const [path, mod] = entry;
      return {
        src: typeof mod === 'string' ? mod : mod.default,
        name,
        path,
      };
    })
    .filter(Boolean),
}));

export default function Clients() {
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

      <section className="section bg-[color:var(--surface)]">
        <div className="container-x space-y-14">
          {logosByCategory.map((category) => (
            <section key={category.title}>
              <AnimatedSection>
                <h3 className="mb-7 max-w-4xl font-[var(--font-heading)] text-2xl font-semibold text-[color:var(--navy-dark)] sm:text-3xl">
                  {category.title}
                </h3>
              </AnimatedSection>
              <div className="grid items-stretch gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {category.logos.map((logo, index) => (
                  <AnimatedSection key={logo.path} delay={(index % 8) * 60}>
                    <div className="flex h-full min-h-[160px] items-center justify-center rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-[color:var(--gold-primary)]">
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="max-h-24 w-auto object-contain transition-all duration-300"
                      />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
