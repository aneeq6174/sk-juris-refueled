import logoImage from '../assets/SKJ logo.png';

export default function BrandWordmark({ tone = 'light', className = '' }) {
  const isDark = tone === 'dark';

  return (
    <span
      className={`inline-flex items-center ${isDark ? 'text-[color:var(--navy-dark)]' : 'text-white'} ${className}`}
      aria-label="SKJ logo"
    >
      <img
        src={logoImage}
        alt="SKJ logo"
        className="h-11 w-auto object-contain sm:h-12"
      />
    </span>
  );
}
