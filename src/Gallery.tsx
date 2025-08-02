import React from 'react';
import { useNavigate } from 'react-router-dom';
import { comics } from './data/comics';
import { generateSrcSet, generateAltText } from './utils/imageUtils';

const Gallery: React.FC = () => {
  const navigate = useNavigate();

  const handleImageClick = (comicId: number) => {
    navigate(`/page/${comicId}`);
  };

  return (
    <div className="mx-auto max-w-screen-xl p-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {comics.map((comic) => (
        <div
          key={comic.id}
          className="group relative cursor-pointer rounded-xl overflow-hidden transition hover:-translate-y-1"
          style={{
            backgroundColor: 'var(--color-dark-surface)',
            border: '1px solid var(--color-dark-border)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 149, 0, 0.1)', // --color-brand-500 with alpha
            transition: 'all 0.3s ease'
          }}
          onClick={() => handleImageClick(comic.id)}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 149, 0, 0.3)'; // --color-brand-500 with alpha
            e.currentTarget.style.borderColor = 'var(--color-brand-500)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 149, 0, 0.1)'; // --color-brand-500 with alpha
            e.currentTarget.style.borderColor = 'var(--color-dark-border)';
          }}
        >
          <img
            src={comic.thumb}
            srcSet={generateSrcSet(comic.thumb, comic.thumb2x)}
            alt={generateAltText(comic, false)}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover transition group-hover:scale-105"
          />
          <div 
            className="absolute inset-x-0 bottom-0 p-3 text-sm opacity-0 group-hover:opacity-100"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)',
              color: 'var(--color-brand-500)',
              textShadow: '0 0 5px var(--color-brand-500)'
            }}
          >
            {comic.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
