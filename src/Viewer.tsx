import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { comics } from './data/comics';
import type { ComicPage } from './data/comics';
import { generateSrcSet, generateAltText } from './utils/imageUtils';

const Viewer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<ComicPage | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Find current page by ID
  useEffect(() => {
    if (id) {
      const pageId = parseInt(id, 10);
      const page = comics.find(comic => comic.id === pageId);
      setCurrentPage(page || null);
      setIsLoading(false);
    }
  }, [id]);

  // Preload adjacent images
  useEffect(() => {
    if (currentPage && comics.length > 1) {
      const currentIndex = comics.findIndex(comic => comic.id === currentPage.id);
      const preloadLinks: HTMLLinkElement[] = [];
      
      // Preload next image (with looping)
      const nextIndex = currentIndex < comics.length - 1 ? currentIndex + 1 : 0;
      const nextPage = comics[nextIndex];
      const nextImg = new Image();
      nextImg.src = nextPage.full;
      
      // Also add preload link to head
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = nextPage.full;
      document.head.appendChild(preloadLink);
      preloadLinks.push(preloadLink);
      
      // Preload previous image (with looping)
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : comics.length - 1;
      const prevPage = comics[prevIndex];
      const prevImg = new Image();
      prevImg.src = prevPage.full;
      
      // Also add preload link to head
      const preloadLinkPrev = document.createElement('link');
      preloadLinkPrev.rel = 'preload';
      preloadLinkPrev.as = 'image';
      preloadLinkPrev.href = prevPage.full;
      document.head.appendChild(preloadLinkPrev);
      preloadLinks.push(preloadLinkPrev);
      
      // Clean up function to remove preload links
      return () => {
        preloadLinks.forEach(link => {
          if (document.head.contains(link)) {
            document.head.removeChild(link);
          }
        });
      };
    }
  }, [currentPage]);

  // Navigation functions
  const goToNext = useCallback(() => {
    if (currentPage) {
      const currentIndex = comics.findIndex(comic => comic.id === currentPage.id);
      // Loop to first page if at the end
      const nextIndex = currentIndex < comics.length - 1 ? currentIndex + 1 : 0;
      const nextPage = comics[nextIndex];
      navigate(`/page/${nextPage.id}`);
    }
  }, [currentPage, navigate]);

  const goToPrevious = useCallback(() => {
    if (currentPage) {
      const currentIndex = comics.findIndex(comic => comic.id === currentPage.id);
      // Loop to last page if at the beginning
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : comics.length - 1;
      const prevPage = comics[prevIndex];
      navigate(`/page/${prevPage.id}`);
    }
  }, [currentPage, navigate]);

  const goToGallery = useCallback(() => {
    navigate('/');
  }, [navigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case 'Escape':
          event.preventDefault();
          goToGallery();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNext, goToPrevious, goToGallery]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backgroundColor: 'var(--color-dark-bg)'}}>
        <div className="w-10 h-10 border-2 rounded-full animate-spin" style={{
          borderColor: 'rgba(255, 149, 0, 0.2)', // --color-brand-500 with alpha
          borderTopColor: 'var(--color-brand-500)',
          boxShadow: '0 0 20px var(--color-brand-500)'
        }}></div>
      </div>
    );
  }

  if (!currentPage) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center" style={{backgroundColor: 'var(--color-dark-bg)'}}>
        <h2 className="mb-5 font-light text-xl" style={{color: 'var(--color-brand-500)', textShadow: '0 0 10px var(--color-brand-500)'}}>Page not found</h2>
        <button 
          onClick={goToGallery} 
          className="px-6 py-3 text-sm transition-all duration-200 rounded border" 
          style={{
            color: 'var(--color-brand-500)',
            borderColor: 'var(--color-brand-500)',
            backgroundColor: 'transparent',
            boxShadow: '0 0 10px rgba(255, 149, 0, 0.3)' // --color-brand-500 with alpha
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 149, 0, 0.1)'; // --color-brand-500 with alpha
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 149, 0, 0.5)'; // --color-brand-500 with alpha
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 149, 0, 0.3)'; // --color-brand-500 with alpha
          }}
        >
          Back to Gallery
        </button>
      </div>
    );
  }

  const currentIndex = comics.findIndex(comic => comic.id === currentPage.id);
  // Since navigation loops, buttons are never disabled unless there's only one page
  const hasPrevious = comics.length > 1;
  const hasNext = comics.length > 1;

  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{backgroundColor: 'var(--color-dark-bg)'}}>
      {/* Navigation bar */}
      <nav className="flex items-center justify-between px-4 h-14 backdrop-blur-md" style={{
        backgroundColor: 'rgba(15, 8, 3, 0.9)', // --color-dark-bg with alpha
        borderBottom: '1px solid var(--color-dark-border)',
        boxShadow: '0 0 10px rgba(255, 149, 0, 0.2)' // --color-brand-500 with alpha
      }}>
        <button 
          onClick={goToGallery} 
          className="px-3 py-2 text-sm transition-all duration-200 rounded border"
          style={{
            color: 'var(--color-brand-500)',
            borderColor: 'var(--color-brand-500)',
            backgroundColor: 'transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 149, 0, 0.1)'; // --color-brand-500 with alpha
            e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 149, 0, 0.5)'; // --color-brand-500 with alpha
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
          }}
          title="Back to Gallery (ESC)"
        >
          ✕
        </button>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={goToPrevious} 
            disabled={!hasPrevious}
            className="px-3 py-2 text-sm transition-all duration-200 rounded border disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              color: 'var(--color-brand-500)',
              borderColor: 'var(--color-brand-500)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 149, 0, 0.1)'; // --color-brand-500 with alpha
                e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 149, 0, 0.5)'; // --color-brand-500 with alpha
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
            }}
            title="Previous page (← - loops to end)"
          >
            ←
          </button>
          
          <span className="text-sm font-mono" style={{
            color: 'var(--color-brand-500)',
            textShadow: '0 0 5px var(--color-brand-500)'
          }}>
            {currentIndex + 1}/{comics.length}
          </span>
          
          <button 
            onClick={goToNext} 
            disabled={!hasNext}
            className="px-3 py-2 text-sm transition-all duration-200 rounded border disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              color: 'var(--color-brand-500)',
              borderColor: 'var(--color-brand-500)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 149, 0, 0.1)'; // --color-brand-500 with alpha
                e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 149, 0, 0.5)'; // --color-brand-500 with alpha
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
            }}
            title="Next page (→ - loops to beginning)"
          >
            →
          </button>
        </div>
      </nav>

      {/* Image wrapper */}
      <div className="flex-1 flex items-center justify-center p-4 relative">
        <picture>
          <img
            src={currentPage.full}
            srcSet={generateSrcSet(currentPage.full, currentPage.full2x)}
            alt={generateAltText(currentPage, true)}
            className="max-w-full max-h-full w-auto h-auto object-contain block"
            loading="eager"
            width={currentPage.width}
            height={currentPage.height}
          />
        </picture>
        
        {/* Click areas for navigation */}
        {hasPrevious && (
          <div 
            className="absolute inset-y-0 left-0 w-1/3 cursor-w-resize pointer-events-auto" 
            onClick={goToPrevious}
            title="Previous page (loops to end)"
          />
        )}
        {hasNext && (
          <div 
            className="absolute inset-y-0 right-0 w-1/3 cursor-e-resize pointer-events-auto" 
            onClick={goToNext}
            title="Next page (loops to beginning)"
          />
        )}
      </div>
    </div>
  );
};

export default Viewer;
