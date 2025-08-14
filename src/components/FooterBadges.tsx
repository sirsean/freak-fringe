import React from 'react';

/**
 * FooterBadges
 *
 * Purpose:
 * - Simple footer with brand-colored decorative badges and copyright text.
 *
 * Key Tailwind classes:
 * - flex items-center justify-center gap-4: horizontally align content with spacing
 * - border-t .../30: subtle top border divider using brand color
 * - h-4 w-12 rounded: pill-shaped badge placeholders
 */
const FooterBadges: React.FC = () => {
  return (
    <footer className="flex items-center justify-center gap-4 pt-6 border-t border-[var(--color-brand-500)]/30">
      <div className="flex items-center gap-2">
        <span className="h-4 w-12 rounded bg-[var(--color-brand-500)]/20" />
        <span className="h-4 w-12 rounded bg-[var(--color-brand-500)]/20" />
      </div>
    </footer>
  );
};

export default FooterBadges;

