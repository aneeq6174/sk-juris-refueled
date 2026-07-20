import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import ImageWithLoader from '../components/ImageWithLoader';
import AnimatedCountUp from '../components/CountUp';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';

// Import team hero image
import teamHeroImage from '../team/team hero.JPG';

// Parse filename format: "number - name - position.ext"
// e.g. "01 - Waqas Mahmood Kasuri - Advocate.jpg"
// Robust to inconsistent spacing around dashes, e.g. "01-Name-Position.jpg"
function parseTeamFilename(filename) {
  const nameWithoutExt = filename.replace(/\.(jpg|jpeg|JPG|JPEG)$/, '');
  // split on a dash with optional surrounding whitespace, instead of requiring " - " exactly
  const parts = nameWithoutExt.split(/\s*-\s*/).filter(Boolean);

  // Check whether the first part is actually a number (the new ordering prefix)
  const firstIsNumber = parts.length > 0 && /^\d+$/.test(parts[0].trim());

  if (firstIsNumber && parts.length >= 3) {
    const parsedNumber = parseInt(parts[0], 10);
    const name = parts[1].trim();
    // in case the position itself contained a dash, join the remaining parts
    const position = parts.slice(2).join(' - ').trim();
    return {
      name,
      position,
      displayNumber: String(parsedNumber),
      filename,
      sortKey: parsedNumber,
    };
  } else if (firstIsNumber && parts.length === 2) {
    return {
      name: parts[1].trim(),
      position: '',
      displayNumber: parts[0].trim(),
      filename,
      sortKey: parseInt(parts[0], 10),
    };
  } else if (parts.length >= 3) {
    // fallback: old format "name - position - number.ext"
    const number = parts[parts.length - 1].trim();
    const name = parts[0].trim();
    const position = parts.slice(1, parts.length - 1).join(' - ').trim();
    const parsedNumber = parseInt(number, 10);
    return {
      name,
      position,
      displayNumber: Number.isNaN(parsedNumber) ? '' : String(parsedNumber),
      filename,
      sortKey: Number.isNaN(parsedNumber) ? 999 : parsedNumber,
    };
  } else if (parts.length === 2) {
    return {
      name: parts[0].trim(),
      position: parts[1].trim(),
      displayNumber: '',
      filename,
      sortKey: 999,
    };
  }
  return {
    name: nameWithoutExt.trim(),
    position: '',
    displayNumber: '',
    filename,
    sortKey: 999,
  };
}

// Dynamically import partner images lazily
const partnerModules = import.meta.glob('../team/Partners/*.{jpg,jpeg,JPG,JPEG}');
const partnerEntries = Object.entries(partnerModules)
  .map(([path, importer]) => {
    const filename = path.split('/').pop();
    const parsed = parseTeamFilename(filename);
    return {
      ...parsed,
      importer,
    };
  })
  .sort((a, b) => a.sortKey - b.sortKey);

// Dynamically import team member images lazily (excluding Partners folder, hero image, and Khurram Shehzad)
const teamModules = import.meta.glob('../team/*.{jpg,jpeg,JPG,JPEG}');
const teamEntries = Object.entries(teamModules)
  .filter(([path]) => {
    const filename = path.split('/').pop().toLowerCase();
    return !filename.includes('hero') &&
           !path.includes('Partners');
  })
  .map(([path, importer]) => {
    const filename = path.split('/').pop();
    const parsed = parseTeamFilename(filename);
    return {
      ...parsed,
      importer,
    };
  })
  .sort((a, b) => a.sortKey - b.sortKey);

// Per-photo crop tuning. Add one entry per filename as needed (use the exact new filename, e.g. "01 - Waqas Mahmood Kasuri - Advocate.jpg").
// Accepts any valid CSS object-position value, e.g. 'top', 'center 20%', '50% 30%'.
const CROP_OVERRIDES = {
  // '01 - Waqas Mahmood Kasuri - Advocate.jpg': 'center 20%',
};

export default function Team() {
  const [partners, setPartners] = useState(
    partnerEntries.map((member) => ({ ...member, image: null, error: false }))
  );
  const [team, setTeam] = useState(
    teamEntries.map((member) => ({ ...member, image: null, error: false }))
  );

  useEffect(() => {
    partnerEntries.forEach((member) => {
      member
        .importer()
        .then((mod) => {
          const image = typeof mod === 'string' ? mod : mod.default;
          setPartners((prev) =>
            prev.map((item) =>
              item.filename === member.filename ? { ...item, image } : item
            )
          );
        })
        .catch(() => {
          setPartners((prev) =>
            prev.map((item) =>
              item.filename === member.filename ? { ...item, error: true } : item
            )
          );
        });
    });

    teamEntries.forEach((member) => {
      member
        .importer()
        .then((mod) => {
          const image = typeof mod === 'string' ? mod : mod.default;
          setTeam((prev) =>
            prev.map((item) =>
              item.filename === member.filename ? { ...item, image } : item
            )
          );
        })
        .catch(() => {
          setTeam((prev) =>
            prev.map((item) =>
              item.filename === member.filename ? { ...item, error: true } : item
            )
          );
        });
    });
  }, []);

  return (
    <>
      {/* Banner */}
      <section className="bg-(--brand) text-white">
        <div className="container-x section text-center">
          <h1 className="h1 text-white">Meet the Legal Team</h1>
          <p className="lead text-slate-100 mt-2">
            International legal experts with decades of combined experience.
          </p>
        </div>
      </section>

      {/* Group image */}
      <AnimatedSection>
        <section className="section">
          <div className="container-x">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithLoader
                alt="Team"
                className="w-full h-72 sm:h-96 object-cover transition-transform duration-300 hover:scale-105"
                src={teamHeroImage}
                style={{ objectPosition: 'top' }}
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Partners Section */}
      <AnimatedSection>
        <section className="section pt-0">
          <div className="container-x">
            <AnimatedSection>
              <header className="mb-10 text-center">
                <h2 className="h2">Partners</h2>
                <p className="lead mt-2">Our founding partners leading with vision and expertise.</p>
              </header>
            </AnimatedSection>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((member, i) => (
                <TeamMemberCard key={member.filename} member={member} index={i % 3} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection>
        <section className="section pt-0 bg-(--surface)">
          <div className="container-x">
            <AnimatedSection>
              <header className="mb-10 text-center">
                <h2 className="h2">Team</h2>
                <p className="lead mt-2">Each member brings unique expertise and dedication.</p>
              </header>
            </AnimatedSection>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, i) => (
                <TeamMemberCard key={member.filename} member={member} index={i % 3} />
              ))}
            </div>

            <AnimatedSection delay={300}>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 card p-6">
                <Stat value="25+" label="Years of Excellence" />
                <Stat value="500+" label="Cases Won" />
                <Stat value="50+" label="Countries Served" />
                <Stat value="98%" label="Client Satisfaction" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="mt-10 text-center">
                <Button to="/contact" variant="primary">
                  Schedule Consultation
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}

function TeamMemberCard({ member, index }) {
  return (
    <AnimatedSection delay={index * 100}>
      <article className="card overflow-hidden relative">
        <div className="overflow-hidden relative bg-slate-100">
          {member.error ? (
            <div className="h-56 w-full flex items-center justify-center bg-slate-100 text-slate-400 text-sm text-center px-4">
              Photo unavailable
            </div>
          ) : member.image ? (
            <ImageWithLoader
              alt={member.name}
              src={member.image}
              width={384}
              height={224}
              className="h-56 w-full object-cover team-member-image"
              style={{ objectPosition: CROP_OVERRIDES[member.filename] || 'center' }}
              placeholder={<LoadingSpinner size="lg" />}
            />
          ) : (
            <div className="h-56 w-full flex items-center justify-center bg-slate-100">
              <LoadingSpinner size="lg" />
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="font-semibold">{member.name}</h3>
          <p className="text-sm text-(--brand-2)">{member.position}</p>
        </div>
      </article>
    </AnimatedSection>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center group">
      <div className="text-3xl sm:text-4xl font-(--font-accent) text-(--gold-primary) transition-all duration-300 group-hover:scale-110">
        <AnimatedCountUp value={value} duration={2.5} />
      </div>
      <div className="text-sm text-slate-600 mt-1 font-medium">{label}</div>
    </div>
  );
}