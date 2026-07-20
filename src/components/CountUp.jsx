import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

/**
 * Animated counter component that counts from 0 to target value
 * @param {string|number} value - Target value (e.g., "500+", "25+", "50+")
 * @param {number} duration - Animation duration in seconds
 * @param {string} suffix - Additional suffix (overrides auto-detected)
 * @param {string} prefix - Prefix to add before number
 */
export default function AnimatedCountUp({ 
  value, 
  duration = 2.5,
  suffix = '',
  prefix = ''
}) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  // Extract numeric value and suffix from string like "500+"
  const match = String(value).match(/(\d+)(.*)/);
  const end = match ? parseInt(match[1], 10) : 0;
  const autoSuffix = match ? match[2] : '';
  const finalSuffix = suffix || autoSuffix;

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          end={end}
          duration={duration}
          suffix={finalSuffix}
          prefix={prefix}
          separator=","
        />
      ) : (
        `0${finalSuffix}`
      )}
    </div>
  );
}

