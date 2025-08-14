import React from 'react';

/**
 * Message
 *
 * Purpose:
 * - Non-critical, continuously scrolling news ticker with accessible labelling.
 *
 * Key Tailwind/classes:
 * - px-2: breathable horizontal padding for the marquee region
 * - marquee, marquee__track, marquee__item: utility classes defined in CSS for animation
 *   (kept minimal to respect reduced-motion preferences when applied globally)
 */
const latestItems = [
  'Freaker Station seeks to preserve all known issues of Freak Fringe',
  'contact Freaker Station if you have information about their whereabouts',
  'or Join our mailing list for more information',
];

const Message: React.FC = () => {
  // Duplicate items to create seamless scroll
  const items = [...latestItems, ...latestItems];

  return (
    <section className="px-2">
      <div
        role="marquee"
        aria-label="Latest news and site updates"
        className="marquee"
      >
        <div className="marquee__track">
          {items.map((text, idx) => (
            <span key={idx} className="marquee__item">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Message;
