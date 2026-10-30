import { createElement, useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function TypewriterHeading({
  as: Heading = 'h2',
  text,
  className = '',
  interval = 90,
}) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const characters = useMemo(() => Array.from(text), [text]);
  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: true,
    rootMargin: '0px 0px -60px 0px',
  });
  const isComplete = visibleCharacters >= characters.length;

  useEffect(() => {
    setVisibleCharacters(0);

    if (!inView) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleCharacters(characters.length);
      return undefined;
    }

    let characterIndex = 0;
    let timeoutId;

    const typeNextCharacter = () => {
      characterIndex += 1;
      setVisibleCharacters(characterIndex);

      if (characterIndex < characters.length) {
        timeoutId = window.setTimeout(typeNextCharacter, interval);
      }
    };

    timeoutId = window.setTimeout(typeNextCharacter, interval);
    return () => window.clearTimeout(timeoutId);
  }, [characters.length, inView, interval, text]);

  return createElement(
    Heading,
    { ref, className, 'aria-label': text, 'aria-live': 'off' },
    <>
      <span className="inline-grid max-w-full align-middle text-left">
        <span className="invisible col-start-1 row-start-1" aria-hidden="true">
          {text}
        </span>
        <span className="col-start-1 row-start-1" aria-hidden="true">
          {characters.slice(0, visibleCharacters).join('')}
          {!isComplete && <span className="typewriter-caret" />}
        </span>
      </span>
    </>
  );
}
