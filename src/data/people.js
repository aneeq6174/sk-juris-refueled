const partnerImages = import.meta.glob('../team/Partners/*.{png,jpg,jpeg,PNG,JPG,JPEG}', {
  eager: true,
});
const teamImages = import.meta.glob('../team/*.{png,jpg,jpeg,PNG,JPG,JPEG}', {
  eager: true,
});

function getImageUrl(imageModules, fileBasename) {
  const expectedBasename = fileBasename.replace(/\.[^.]+$/, '');
  const entry = Object.entries(imageModules).find(([path]) =>
    path.slice(path.lastIndexOf('/') + 1).replace(/\.[^.]+$/, '') === expectedBasename
  );
  return entry ? entry[1].default : null;
}

export const partners = [
  {
    slug: 'sheikh-khurram-shehzad',
    name: 'Sheikh Khurram Abbas',
    designation: 'Founder & Advocate High Court',
    filename: 'Sheikh Khurram Shehzad-Founder.JPG',
  },
  {
    slug: 'syed-taqi-abbas',
    name: 'Syed Taqi Abbas',
    designation: 'Advocate High Court',
    filename: 'Syed Taqi Abbas-Advocate High Court.jpeg',
  },
  {
    slug: 'nisar-safdar-naqvi',
    name: 'Nisar Safdar Naqvi',
    designation: 'Partner',
    filename: 'Nisar Safdar Naqvi.jpeg',
  },
  {
    slug: 'naghmana-shehzadi',
    name: 'Naghmana Shehzadi',
    designation: 'Barrister-at-Law · Senior Advocate High Court',
    filename: 'Naghmana Shehzadi - Senior Advocate High Court.jpeg',
  },
].map((partner) => ({
  ...partner,
  image: getImageUrl(partnerImages, partner.filename),
}));

export const teamMembers = [
  {
    name: 'Muhammad Younas',
    designation: 'Advocate High Court',
    filename: '03 - Muhammad Younas - Advocate High Court.jpeg',
  },
  {
    name: 'Atif Raja',
    designation: 'Advocate High Court',
    filename: '04 - Atif Raja Advocate - High Court.jpeg',
  },
  {
    name: 'Amir Rasheed Bhatti',
    designation: 'Advocate High Court',
    filename: '05 - Amir Rasheed Bhatti - Advocate High Court.jpeg',
  },
  {
    name: 'Usman Azmat',
    designation: 'Advocate High Court',
    filename: '06 - Usman Azmat - Advocate High Court.jpeg',
  },
  {
    name: 'Muhammad Usman Wagha',
    designation: 'Advocate High Court',
    filename: '07 - Muhammad Usman Wagha - Advocate High Court.jpeg',
  },
  {
    name: 'Lubna Khurram Khan',
    designation: 'Advocate',
    filename: '08 - Lubna Khurram Khan - Advocate.jpeg',
  },
  {
    name: 'Maqsood Ahmad Bhatti',
    designation: 'Attorney at Law',
    filename: '09 - Maqsood Ahmad Bhatti - Attorney at Law.jpeg',
  },
  {
    name: 'Ahsan Bhatti',
    designation: 'Attorney at Law',
    filename: '10 - Ahsan Bhatti - Attorney at Law.jpeg',
  },
  {
    name: 'Adil Hussain',
    designation: 'Attorney at Law',
    filename: '11 - Adil Hussain - Attorney at Law.jpeg',
  },
  {
    name: 'Waseem Zafar',
    designation: 'Attorney at Law',
    filename: '12 - Waseem Zafar - Attorney at Law.jpeg',
  },
  {
    name: 'Hussain Nasir',
    designation: 'Advocate',
    filename: '13 - Hussain Nasir - Advocate.jpeg',
  },
  {
    name: 'Azib Amin',
    designation: 'Advocate High Court',
    filename: '14 - Azib Amin - Advocate High Court.jpeg',
  },
  {
    name: 'Rana Waheed Ahmad',
    designation: 'Advocate High Court',
    filename: '15 - Rana Waheed Ahmad - Advocate High Court.jpeg',
  },
].map((member) => ({
  ...member,
  image: getImageUrl(teamImages, member.filename),
}));
