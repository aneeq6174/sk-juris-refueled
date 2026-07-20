import React, { useState } from 'react';

/**
 * Image component with smooth skeleton shimmer loading state.
 * While the image loads, a shimmer placeholder (matching the image dimensions)
 * is shown. The image fades in smoothly once loaded — no blank space, no layout shift.
 *
 * @param {string} src - Image source
 * @param {string} alt - Image alt text
 * @param {string} className - CSS classes applied to the <img> (including h-*, w-*, object-*)
 * @param {boolean} absolute - Whether the image should be absolutely positioned (hero backgrounds)
 */
export default function ImageWithLoader({ src, alt, className = '', absolute = false, style, ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoading(false);
  const handleError = () => { setIsLoading(false); setHasError(true); };

  /* ─── Hero / absolute-positioned images ─────────────────────── */
  if (absolute) {
    return (
      <>
        {/* Shimmer fills the hero until the image is ready */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 bg-[color:var(--navy-dark)] shimmer-skeleton z-10" />
        )}
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-slate-400">
            <span>Failed to load image</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            loading="eager"
            decoding="async"
            className={`absolute inset-0 ${className} transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            style={style}
            {...props}
          />
        )}
      </>
    );
  }

  /* ─── Regular images ─────────────────────────────────────────── */
  // The wrapper uses the same h-* class as the image to reserve space and prevent layout shift.
  // We extract just the height/width class from className to give the skeleton the same size.
  return (
    <div className="relative w-full overflow-hidden">
      {/* Skeleton shimmer — matches container dimensions */}
      {isLoading && !hasError && (
        <div className={`${className} w-full shimmer-skeleton`} aria-hidden="true" />
      )}

      {hasError ? (
        <div className={`${className} flex items-center justify-center bg-slate-100 text-slate-400 min-h-[120px]`}>
          <span>Failed to load image</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          className={`${className} transition-opacity duration-500 ${isLoading ? 'opacity-0 absolute inset-0' : 'opacity-100 relative'}`}
          style={style}
          {...props}
        />
      )}
    </div>
  );
}
