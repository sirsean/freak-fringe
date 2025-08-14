import React from 'react';
import Intro from '../components/Intro';
import FeaturedGalleryPreview from '../components/FeaturedGalleryPreview';
import Figurehead from '../components/Figurehead';
import Message from '../components/Message';
import FooterBadges from '../components/FooterBadges';

/**
 * RetroHome (page)
 *
 * Purpose:
 * - Landing page that assembles the retro-themed components into a narrow, readable column.
 *
 * Key Tailwind classes:
 * - max-w-[640px] mx-auto: constrains readable width and centers layout
 * - flex flex-col gap-12: vertical stack with generous spacing
 * - px-4 pb-16: comfortable padding for small screens and footer breathing room
 */
const RetroHome: React.FC = () => {
  return (
    <main style={{ backgroundColor: 'transparent' }}>
      {/* Narrow column wrapper */}
      <div className="max-w-[900px] mx-auto flex flex-col gap-12 px-4 pb-16 relative">
        <Intro />
        <FeaturedGalleryPreview />
        <Figurehead />
        <Message />
        <FooterBadges />
        {/* Construction image at bottom */}
        <div className="flex justify-center">
          <img 
            src="/images/construction.gif" 
            alt="Under construction" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default RetroHome;

