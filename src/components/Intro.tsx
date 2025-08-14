import React from 'react';
import SparklyDivider from './SparklyDivider';
import FireDivider from './FireDivider';

/**
 * Intro
 *
 * Purpose:
 * - Hero section that introduces the site with retro-styled heading and copy.
 *
 * Key Tailwind classes:
 * - font-retro uppercase text-pink-500 text-3xl..: branded retro headline
 * - max-w-prose mx-auto: readable line length, centered
 * - text-glow-pink opacity-90: CRT-inspired glow and subtle transparency on ornament
 */
const Intro: React.FC = () => {
  return (
    <section className="text-center">
      <div className="ff-gif-banner">
        <img src="/images/drifter.gif" alt="drifter" className="drifter drifter-left" />
        <img src="/images/fs.gif" alt="Freak Fringe logo" className="logo" />
        <img src="/images/drifter.gif" alt="drifter" className="drifter" />
      </div>
      <FireDivider />
      <p className="paragraph-lg mt-3 text-cyber-400/90 text-glow-cyan max-w-prose mx-auto">
        Welcome to the REAL #1 Freaker community on the grid for collectors of Freak Fringe!!!
      </p>
      <p className="paragraph-lg text-cyber-400/90">
       (Peco if you're reading this I still want my Vort wristbox back)
      </p>
      <SparklyDivider />
      <p className="paragraph-lg text-cyber-400/90">Freak Fringe was a comic book published by the Maven Corporation. It briefly surged in popularity after the powerball boom and subsequent expansion; capturing the imagination of drifters with it's tales of the weird and wonderful undiscovered Fringe.
</p>
<p className="paragraph-lg text-cyber-400/90">However Freak Fringe disappeared as swiftly as it arrived and with little to no explanation. Today only a few dedicated Freakers work to preserve it's existence and uncover it's many mysteries. We all know the rumours, prophetic events, pages that rewrote themselves, copies disappearing and reappearing in impossible places.
</p>
      <SparklyDivider />
    </section>
  );
};

export default Intro;

