const partnerImages = import.meta.glob('../team/Partners/*.{png,jpg,jpeg,PNG,JPG,JPEG}', {
  eager: true,
});
const regionalPartnerImages = import.meta.glob('../team/Regional Partners/*.{png,jpg,jpeg,PNG,JPG,JPEG}', {
  eager: true,
});
const teamImages = import.meta.glob('../team/*.{png,jpg,jpeg,PNG,JPG,JPEG}', {
  eager: true,
});

function getImageUrl(imageModules, fileBasename) {
  const normalize = (filename) =>
    filename
      .replace(/\.[^.]+$/, '')
      .normalize('NFKC')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');
  const expectedBasename = normalize(fileBasename);
  const entry = Object.entries(imageModules).find(([path]) =>
    normalize(path.slice(path.lastIndexOf('/') + 1)) === expectedBasename
  );
  return entry ? entry[1].default : null;
}

export const partners = [
  {
    slug: 'sheikh-khurram-shehzad',
    name: 'Sheikh Khurram Abbas',
    designation: 'Founder & Advocate High Court',
    filename: 'Sheikh Khurram Shehzad-Founder.jpeg',
  },
  {
    slug: 'syed-taqi-abbas',
    name: 'Sayed Taqqi Abbas',
    designation: 'Advocate High Court',
    filename: 'Syed Taqi Abbas-Advocate High Court.jpeg',
  },
  {
    slug: 'nisar-safdar-naqvi',
    name: 'Nisar Safdar Naqvi',
    designation: 'Senior Advocate Supreme Court',
    filename: 'Nisar Safdar Naqvi-Advocate Supreme Court.jpeg',
  },
  {
    slug: 'naghmana-shehzadi',
    name: 'Naghmana Shehzadi',
    designation: 'Barrister-at-Law · Senior Advocate High Court',
    filename: 'Naghmana Shehzadi - Senior Advocate High Court.jpeg',
  },
  {
    slug: 'waqas-kasuri',
    name: 'Waqas Mahmood Kasuri',
    designation: 'Advocate High Court · Partner',
    filename: 'Waqas Kasuri-Advocate High Court.jpeg',
  },
].map((partner) => ({
  ...partner,
  image: getImageUrl(partnerImages, partner.filename),
}));

export const regionalPartners = [
  {
    slug: 'madiha-latif',
    name: 'Madeeha Lateef',
    designation: 'Managing Director · Regional Partner',
    region: 'Sharjah, U.A.E.',
    filename: 'Madiha Latif-Reigonal Partner.jpeg',
  },
  {
    slug: 'gohar-zaman',
    name: 'Gohar Zaman',
    region: 'Virginia, USA',
    designation: 'Regional Partner · Virginia, USA',
    filename: 'Gohar Zaman -Vergenia USA.jpeg',
  },
  {
    slug: 'barkat-ullah-khan',
    name: 'Barkat Ullah Khan',
    region: 'Peshawar',
    designation: 'Regional Partner · Peshawar',
    filename: 'Barkat Ullah Khan-Peshawar.jpeg',
  },
  {
    slug: 'zeeshan-ahmad',
    name: 'Zeeshan Ahmad',
    region: 'Karachi',
    designation: 'Regional Partner · Karachi',
    filename: 'Zeeshan Ahmad-Karachi.jpg',
  },
].map((partner) => ({
  ...partner,
  image: getImageUrl(regionalPartnerImages, partner.filename),
}));

function parseTeamMember(filename, image) {
  const nameWithoutExtension = filename.replace(/\.[^.]+$/, '');
  const withoutOrderNumber = nameWithoutExtension.replace(/^\d+\s*-\s*/, '');
  const [rawName, ...designationParts] = withoutOrderNumber.split(/\s*-\s*/);
  let name = rawName.trim();
  let designation = designationParts.join(' · ').trim();

  if (/\s+Advocate$/i.test(name) && /^High Court\b/i.test(designation)) {
    name = name.replace(/\s+Advocate$/i, '').trim();
    designation = `Advocate ${designation}`;
  }

  designation = designation
    .replace(/^\(([^)]+)\)\s*/, '$1 · ')
    .replace(/\bhigh court\b/gi, 'High Court')
    .replace(/\badvocate\b/gi, 'Advocate')
    .replace(/\battorney at law\b/gi, 'Attorney at Law')
    .replace(/\bcoporate\b/gi, 'Corporate');

  return {
    name,
    designation: designation || 'Team Member',
    filename,
    image,
  };
}

export const teamMembers = Object.entries(teamImages)
  .filter(([path]) => !/team hero/i.test(path))
  .map(([path, module]) => {
    const filename = path.slice(path.lastIndexOf('/') + 1);
    return parseTeamMember(filename, module.default);
  })
  .sort((a, b) => {
    const getOrder = (filename) => {
      const match = filename.match(/^(\d+)\s*-/);
      return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
    };

    return getOrder(a.filename) - getOrder(b.filename) || a.name.localeCompare(b.name);
  });
