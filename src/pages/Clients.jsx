import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const logoModules = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });

const clientCategories = [
  {
    title: 'Trade Organizations, NGOs, Trusts & Welfare Institutions',
    names: [
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
      'Islamabad Chamber of Small Traders and Small Industry',
      'Hafizabad Chamber of Small Traders and Small Industry',
      'Rice Exporters Association of Pakistan',
      'Pakistan Chemical Manufacturers Association',
      'All Pakistan Meat Exporters and Processors Association',
      'Pakistan Coating Association',
      'Pakistan Fasteners Manufacturers and Traders Association',
      'All Pakistan Corrugated Carton Manufacturers Association',
      'Pakistan Ferrous and Non-Ferrous Metals Association',
      'Pakistan Yarn Manufacturers Association (North Zone)',
      'DHA Estate Agents Association, Lahore',
      'All Lahore Realtors Association',
      'Pakistan Overseas Community Global (POCG) - UK-Based Welfare Organization for Overseas Pakistanis',
      'Pakistan Steel Line Pipe Industry Association',
      'Friends of Economics and Business Reforms (FEBR) - A company under section 42 of the Companies Act 2017',
      'Lahore Conservation Society',
      'Brandreth Road Electrical Traders Association (BRETA) - Trade Organization',
      'Textile Traders Association',
      'Door of Awareness',
      'The Noor Project of For the Needy and Hungary Foundation (Trust)',
      'Jamia tul Muntazir (Hussaini Trust)',
      'Heaven Humanity Welfare Trust - Private Trust',
      'Talent Exploration - NGO',
      'Fatima Welfare Trust for Women - Public Trust',
      'Citizen Network for Health & Education - NGO',
      'The Little Art - NGO',
    ],
  },
  {
    title: 'Industry and Trade Sector',
    names: [
      'Cannon Foam Industries (Pvt) Ltd',
      'Sonary Bank Ltd',
      'Ruba Digital (Pvt) Ltd',
      'Ruba Automotive Pakistan Pvt. Ltd',
      'Forvil Cosmetics (Pvt) Ltd.',
      'Fauji Security Services (Pvt) Ltd',
      'AMK Engineering (Pvt) Ltd',
      'Qaisar LG Petro-Chemicals (Pvt) Ltd.',
      'Symtera Technologies (Pvt) Ltd',
      'Dogar Publishers (Pvt) Ltd.',
      'H. Wahid & Sons Manufacturing Corporation (Pvt.) Ltd',
      'MAWA Dairy and MAWA Foods (Firm)',
      'Yasir Tent and Textile (Pvt) Ltd.',
      'Elite Traders',
      'Dynamic Links Corporation',
      'Noor Pipe Industries (Pvt) Ltd - Plastic Pipe Manufacturers',
      'A.N Pipe Industries (Pvt) Ltd - Steel Pipe Manufacturers',
      'Moreno Iglesias Research Laboratory (Pvt.) Ltd. - Pharmaceutical Concern',
      'Shephard Pharma - Pharmaceutical Manufacturers',
      'Brothers Enterprises - Multi Enterprises',
      'Aslam Supermarket (Pvt) LTD- Chain Departmental Store',
      'Gold Panel International - Leather Products Manufacturers and Exporters',
      'HH Cold Rolling and Tube Mills (Pvt) Ltd - Steel Cold Roll Manufacturer',
      'Cosmopolitan Entreprises Pvt Ltd - Leather Products Manufacturers and Exporters',
      'Kumail Enterprises - Leather Products Manufacturers & Exporters',
      'RS Glove Company Poland - Leather Products Importers',
      'HH Cold Rolling and Tube Mills (Pvt) Ltd - Steel Cold Roll Manufacturers',
      'HH Industries - Steel Pipe Manufacturers',
      'Haider Industries - Steel Products Manufacturers',
      'Hamza Industries - Iron and Steel Products Manufacturers',
      'Bilal Steel - Steel Pipe Manufacturers',
      'AMK Modern House - Construction, Hardware & Home Furnishing Items',
      'New Modern Hardware and Plywood Store - Construction, Hardware & Home Furnishing Items',
      'Banera Roof Top Restaurant',
      'Multi International Inc - Travel and Tours',
      'Multi Travels (Pvt) Ltd - Travel and Tours',
      'Multi International (Pvt) Ltd - Travel and Tours',
      'Pak Aims (Pvt) Ltd - Travel and Tours',
      'Angel Enterprises - Cosmetics Manufacturing',
      'Dogar Carz - Car Traders',
      'Advance Packaging (Pvt) Ltd',
      'IRIS International (Pvt) Ltd - Advertising Company',
      'Quick Continental Hotel & Restaurant - Hoteling',
      'Hub Enterprises - Advertising',
      'Polysacks (Pvt.) Ltd. - Manufacturers',
      'Spring Advertising (Pvt.) Ltd. - Advertisement Services',
      'BrandHub & Kashmir Events Management Company',
    ],
  },
  {
    title: 'Real Estate and Construction Sector',
    names: [
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
      'Dream Homes Marketing (Pvt) Ltd - Real Estate Marketing',
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
    ],
  },
];

const logoAliases = {
  'All Pakistan Meat Exporters and Processors Association': 'All Pakistan Meat Exporters',
  'Chakwal Chamber of Commerce and Industry': 'Chakwal Chamber',
  'DHA Estate Agents Association, Lahore': 'DHA Estate assiciaion',
  'Door of Awareness': 'Door of Awareness',
  'Faisalabad Chamber of Commerce and Industry': 'Faislabad Chamber of Commerce and Industry',
  'Friends of Economics and Business Reforms (FEBR) - A company under section 42 of the Companies Act 2017': 'FEBR Friends of Economic and Business Reforms',
  'Federation of Pakistan Chamber of Commerce and Industry': 'FPCCI',
  'Fatima Welfare Trust for Women - Public Trust': 'FWT Fatima Welfare Trust',
  'Gujranwala Chamber of Commerce and Industry': 'GCCI Gujranwala Chamber of Commerce and Industries',
  'Islamabad Chamber of Commerce and Industry': 'Islamabad Chamber of Commerce and Industries',
  'Islamabad Chamber of Small Traders and Small Industry': 'Islamabad Chamber of Small Traders',
  'Kasur Chamber of Commerce and Industry': 'Kasur Chamber of Commerce and Industries',
  'Lahore Chamber of Commerce and Industry': 'LCCI',
  'Lahore Conservation Society': 'LCS Lahore Conservation Society',
  'All Lahore Realtors Association': 'PIAF',
  'Pakistan Overseas Community Global (POCG) - UK-Based Welfare Organization for Overseas Pakistanis': 'POC Pakistan Overseas Community',
  'Pakistan Coating Association': 'PCA Pakistan Coating Assocaitio',
  'Pakistan Steel Line Pipe Industry Association': 'PSL Pakistan Steel Line',
  'Rahim Yar Khan Chamber of Commerce and Industry': 'Rahim Yar Khan Chamber',
  'Rice Exporters Association of Pakistan': 'Rice Exporters Association of Pakistan',
  'The Noor Project of For the Needy and Hungary Foundation (Trust)': 'The Noor Project',
  'Wazirabad Chamber of Commerce and Industry': 'Wazirabad Chamber of Commerce and Industry',
  'Advance Packaging (Pvt) Ltd': 'Advance Packaging',
  'AMK Modern House - Construction, Hardware & Home Furnishing Items': 'AMK Modern',
  'AMK Engineering (Pvt) Ltd': 'AMK Solutions',
  'Angel Enterprises - Cosmetics Manufacturing': 'Angel Enterprise',
  'Aslam Supermarket (Pvt) LTD- Chain Departmental Store': 'Aslam Stores',
  'Banera Roof Top Restaurant': 'Banera Restaurant',
  'Bilal Steel - Steel Pipe Manufacturers': 'Bilal Steel',
  'Brothers Enterprises - Multi Enterprises': 'Brothers Enterprise',
  'Cannon Foam Industries (Pvt) Ltd': 'Canon Foam',
  'Cosmopolitan Entreprises Pvt Ltd - Leather Products Manufacturers and Exporters': 'Cosmo Enterprise',
  'Dogar Carz - Car Traders': 'Dogar Carz',
  'Dynamic Links Corporation': 'Dynamic Link',
  'Forvil Cosmetics (Pvt) Ltd.': 'Forvil Cosmetics',
  'Fauji Security Services (Pvt) Ltd': 'FSS Fuji Security Services',
  'Gold Panel International - Leather Products Manufacturers and Exporters': 'Gold Pannel Group',
  'Haider Industries - Steel Products Manufacturers': 'HC Haider Chemical',
  'HH Industries - Steel Pipe Manufacturers': 'HH Industries',
  'Hamza Industries - Iron and Steel Products Manufacturers': 'HI Hamza Industries',
  'Hub Enterprises - Advertising': 'Hub Enterprises',
  'IRIS International (Pvt) Ltd - Advertising Company': 'IRIS International Co.',
  'Kumail Enterprises - Leather Products Manufacturers & Exporters': 'Kumail Interprise',
  'Moreno Iglesias Research Laboratory (Pvt.) Ltd. - Pharmaceutical Concern': 'MI Moreno Iglisias',
  'Multi Travels (Pvt) Ltd - Travel and Tours': 'MT Multi Travels',
  'Noor Pipe Industries (Pvt) Ltd - Plastic Pipe Manufacturers': 'NPI Noor Plastic Industries',
  'Pak Aims (Pvt) Ltd - Travel and Tours': 'Pak AIMS',
  'Qaisar LG Petro-Chemicals (Pvt) Ltd.': 'Qaiser LG Petrochemicals',
  'Quick Continental Hotel & Restaurant - Hoteling': 'QCH Quick Continental Hotel',
  'Ruba Digital (Pvt) Ltd': 'RD Ruba Digital',
  'RS Glove Company Poland - Leather Products Importers': 'RS Gloves',
  'Shephard Pharma - Pharmaceutical Manufacturers': 'Shephard',
  'Spring Advertising (Pvt.) Ltd. - Advertisement Services': 'SM Spring Marketing',
  'Sonary Bank Ltd': 'Soneri Bank',
  'Symtera Technologies (Pvt) Ltd': 'Symtera Technology',
  'H. Wahid & Sons Manufacturing Corporation (Pvt.) Ltd': 'Wahid Sons Trading Company',
  'Askari Estate': 'Askari Estate Builders',
  'Bahria Country Club Lahore': 'Banera Country Club Lahore',
  'City Club Gujranwala': 'City Club',
  'City Galleria': 'City Galeria',
  'DHA Estates Agents Association': 'DHA Estate assiciaion',
  'Dream Galleria': 'Dream Galleria',
  'Dream Homes': 'Dreams Home',
  'Eagle Developers (Pvt) Ltd': 'Eagle Developers',
  'Eagle Town': 'Eagle Town',
  'Forecasters Real Estate Experts': 'FSB Forecast State Builders',
  'Jayedad.pk': 'Jayedad Pk',
  'Jasmine Mall, Bahria Town': 'JM Jasmine Mall Lahore',
  'National Estate': 'NEB National Estate Builders',
  'Palm Springs Housing Project Gwadar': 'Palm City Gawadar',
  'Sarfraz Hamid Properties': 'PSH Properties Srfraz Hamid',
  'Q Links Developers and Estate Advisers': 'QLINKS',
  'Dream Homes Marketing (Pvt) Ltd - Real Estate Marketing': 'The Dream House',
};

const logoEntries = Object.entries(logoModules).reduce((entries, [path, mod]) => {
  const filename = path.slice(path.lastIndexOf('/') + 1).replace(/\.[^.]+$/, '');
  entries[filename] = {
    src: typeof mod === 'string' ? mod : mod.default,
    path,
  };
  return entries;
}, {});

const clientsByCategory = clientCategories.map((category) => ({
  ...category,
  clients: category.names.map((name) => {
    const logoName = logoAliases[name];
    const logo = logoName ? logoEntries[logoName] : null;
    return logo ? { name, logo } : { name };
  }),
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
          {clientsByCategory.map((category) => (
            <section key={category.title}>
              <AnimatedSection>
                <h3 className="mb-7 max-w-4xl font-[var(--font-heading)] text-2xl font-semibold text-[color:var(--navy-dark)] sm:text-3xl">
                  {category.title}
                </h3>
              </AnimatedSection>
              <div className="grid items-stretch gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {category.clients.map((client, index) => (
                  <AnimatedSection key={client.name} delay={(index % 8) * 60}>
                    <div className="flex h-full min-h-[160px] flex-col items-center justify-center gap-4 rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-[color:var(--gold-primary)]">
                      {client.logo ? (
                        <>
                          <img
                            src={client.logo.src}
                            alt=""
                            className="max-h-20 w-full max-w-full object-contain transition-all duration-300"
                          />
                          <p className="font-[var(--font-heading)] text-sm font-semibold leading-6 text-[color:var(--navy-dark)]">
                            {client.name}
                          </p>
                        </>
                      ) : (
                        <p className="font-[var(--font-heading)] text-sm font-semibold leading-6 text-[color:var(--navy-dark)] sm:text-base">
                          {client.name}
                        </p>
                      )}
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
