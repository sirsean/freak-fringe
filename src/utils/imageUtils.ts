/**
 * Utility functions for handling responsive images and accessibility
 */

import type { ComicPage } from '../data/comics';

/**
 * Generate a 2x resolution URL from a standard image URL
 * For demo purposes with picsum.photos, doubles the dimensions
 */
export function generate2xUrl(url: string): string {
  // For picsum.photos URLs, extract dimensions and double them
  const picsumMatch = url.match(/(\d+)\/(\d+)/);
  if (picsumMatch) {
    const [, width, height] = picsumMatch;
    return url.replace(`${width}/${height}`, `${parseInt(width) * 2}/${parseInt(height) * 2}`);
  }
  
  // For real applications, you might have a different URL pattern
  // e.g., filename@2x.jpg or a query parameter like ?dpr=2
  return url;
}

/**
 * Generate srcSet string for responsive images
 */
export function generateSrcSet(baseUrl: string, highResUrl?: string): string {
  const twoXUrl = highResUrl || generate2xUrl(baseUrl);
  return `${baseUrl} 1x, ${twoXUrl} 2x`;
}

/**
 * Generate comprehensive alt text for comic pages
 */
export function generateAltText(comic: ComicPage, isFullSize = false): string {
  if (comic.description) {
    return comic.description;
  }
  
  const prefix = isFullSize ? 'Full comic page' : 'Comic page thumbnail';
  return `${prefix}: ${comic.title}`;
}

/**
 * Calculate aspect ratio for layout shift prevention
 */
export function calculateAspectRatio(width?: number, height?: number): number | undefined {
  if (!width || !height) return undefined;
  return height / width;
}

/**
 * Generate image dimensions for responsive layout
 */
export function generateImageDimensions(
  comic: ComicPage, 
  targetWidth: number
): { width?: number; height?: number } {
  if (!comic.width || !comic.height) {
    return {};
  }
  
  const aspectRatio = comic.height / comic.width;
  return {
    width: targetWidth,
    height: Math.round(targetWidth * aspectRatio)
  };
}
