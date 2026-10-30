import logoImage from '../assets/SKJ logo.png';

export default function BrandWordmark({ tone = 'light', size = 'default', className = '' }) {
  const isDark = tone === 'dark';
  const imageSize =
    size === 'navbar'
      ? 'h-12 w-48 sm:h-14 sm:w-56'
      : 'h-14 w-56 sm:h-16 sm:w-64';

  return (
    <span
      className={`inline-flex items-center ${isDark ? 'text-[color:var(--navy-dark)]' : 'text-white'} ${className}`}
      aria-label="SKJ logo"
    >
      <img
        src={logoImage}
        alt="SKJ logo"
        className={`${imageSize} object-cover object-center`}
      />
    </span>
  );
}
