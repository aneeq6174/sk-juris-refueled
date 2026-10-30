export default function BrandWordmark({ tone = 'light', className = '' }) {
  const isDark = tone === 'dark';

  return (
    <span
      className={`inline-flex flex-col ${isDark ? 'text-[color:var(--navy-dark)]' : 'text-white'} ${className}`}
      aria-label="SKJC"
    >
      <span className="font-[var(--font-heading)] text-2xl font-semibold leading-none tracking-tight sm:text-3xl">
        SKJC
      </span>
      <span
        className={`mt-2 text-[0.55rem] font-semibold tracking-[0.2em] ${
          isDark ? 'text-[color:var(--teal-accent)]' : 'text-white/65'
        }`}
      >
        LAWYERS | CORPORATE ADVISORS
      </span>
    </span>
  );
}
