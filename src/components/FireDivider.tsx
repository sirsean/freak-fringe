import React from 'react';

/**
 * FireDivider
 *
 * Purpose:
 * - Reusable decorative divider with fire animation
 * - Provides consistent styling and spacing for content separation
 *
 * Key Tailwind classes:
 * - mx-auto: centers the image horizontally
 * - mt-4: adds top margin for spacing
 * - h-6: sets consistent height
 * - opacity-90: subtle transparency effect
 */
const FireDivider: React.FC = () => {
  return (
    <img
      src="/images/fire.gif"
      alt="fire divider"
      className="mx-auto mt-4 h-6 opacity-90"
    />
  );
};

export default FireDivider;
