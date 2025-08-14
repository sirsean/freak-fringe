import React from 'react';
import SparklyDivider from './SparklyDivider';

/**
 * Figurehead
 *
 * Purpose:
 * - Display the main figurehead.jpg prominently in a centered figure element.
 *
 * Key Tailwind classes:
 * - mx-auto mb-6 w-72 sm:w-96 md:w-[28rem]: centered figure with responsive width
 * - rounded-lg border border-brand-500/60 shadow-neon: retro framed image with neon glow
 */
const Figurehead: React.FC = () => {
  return (
    <>
        <SparklyDivider />
        <p className="paragraph-lg">Each issue of Freak Fringe were written under a different pen name; Anchor Man, The Courier, STLPGN, to name a few. But most Freakers now commonly believe these are all the alias of a single individual known only as The Figurehead and concealed within the pages of Freak Fringe is his message.
</p>
      <div className="flex items-center justify-center gap-3 md:gap-6 mb-6">
        <img src="/images/tamagotchi-clark.gif" alt="Bouncing Tamagotchi Clark" className="w-12 md:w-16 rotate-[-6deg]" />
        <h2 className="font-retro text-cyber-400 text-glow-cyan text-lg md:text-2xl tracking-wide drop-shadow">Who is the Figurehead???</h2>
        <img src="/images/tamagotchi-clark.gif" alt="Bouncing Tamagotchi Clark" className="w-12 md:w-16 rotate-[6deg]" />
      </div>
      
      <div className="flex items-center justify-center gap-4 mb-6">
        {/* left column */}
        <div className="flex flex-col items-center gap-2">
          <img src="/images/clarkjump.gif" alt="Clark jump" className="w-12 md:w-16" />
          <img src="/images/party-clark.gif" alt="Party Clark" className="w-12 md:w-16" />
        </div>
        {/* center figure */}
        <figure className="mx-auto w-72 sm:w-96 md:w-[28rem]">
          <img src="/images/figurehead.jpg" alt="The enigmatic Figurehead portrait" className="rounded-lg border border-brand-500/60 shadow-neon" />
          <figcaption className="sr-only">The mysterious Figurehead artist's portrait</figcaption>
        </figure>
        {/* right column */}
        <div className="flex flex-col items-center gap-2">
          <img src="/images/party-clark.gif" alt="Party Clark" className="w-12 md:w-16" />
          <img src="/images/clarkjump.gif" alt="Clark jump" className="w-12 md:w-16" />
        </div>
      </div>
      
      <h3 className="text-center font-retro text-cyber-400 text-glow-cyan text-base md:text-xl drop-shadow-sm">What is the message???</h3>
    </>
  );
};

export default Figurehead;

