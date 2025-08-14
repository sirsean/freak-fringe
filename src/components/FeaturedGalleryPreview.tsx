import React from 'react';
import { useNavigate } from 'react-router-dom';
import { comics } from '../data/comics';
import { generateSrcSet, generateAltText } from '../utils/imageUtils';

/**
 * FeaturedGalleryPreview
 *
 * Purpose:
 * - Displays a small grid of featured comics with accessible buttons that
 *   navigate to the corresponding full-page viewer.
 *
 * Key Tailwind classes:
 * - grid grid-cols-2 gap-3: responsive 2-column grid with spacing
 * - group + group-hover: enables image scale effect on hover
 * - aspect-square w-full overflow-hidden: consistent square tiles
 * - border-4 rounded: thick neon frame with rounded corners
 * - transition-transform duration-200: smooth hover scaling
 */
const FeaturedGalleryPreview: React.FC = () => {
  const navigate = useNavigate();
  const featured = comics.slice(0, 6);

  return (
    <section>
      <h2 className="text-xl font-medium text-center" style={{ color: 'var(--color-dark-text)' }}>
        <img src="/images/gallery.gif" alt="Featured Gallery" className="mx-auto block" />
      </h2>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {featured.map((comic) => (
          <div>
          <button
            key={comic.id}
            onClick={() => navigate(`/page/${comic.id}`)}
            className="group relative w-full overflow-hidden bg-black border-4 rounded"
            style={{
              borderColor: 'rgb(34 197 94)',
              boxShadow: '0 0 10px rgba(34,197,94,0.5)',
            }}
            aria-label={`Open ${comic.title}`}
          >
            <img
              src={comic.thumb}
              srcSet={generateSrcSet(comic.thumb, comic.thumb2x)}
              alt={generateAltText(comic, false)}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
            />
          </button>
          <p className="mt-1 text-center text-cyber-400 text-sm md:text-base font-mono">no {comic.id} "{comic.title}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGalleryPreview;

