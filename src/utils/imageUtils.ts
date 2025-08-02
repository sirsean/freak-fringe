/**
 * Utility functions for handling responsive images and accessibility
 */

import type { ComicPage } from '../data/comics';

/**
 * Generate srcSet string for responsive images
 */
export function generateSrcSet(baseUrl: string, highResUrl?: string): string {
  const twoX = highResUrl ?? baseUrl.replace(/(\.[^.]+)$/, '@2x$1');
  return `${baseUrl} 1x, ${twoX} 2x`;
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
