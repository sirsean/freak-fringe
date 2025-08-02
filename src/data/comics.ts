export interface ComicPage {
  id: number;
  title: string;
  thumb: string;
  thumb2x?: string; // High-DPI thumbnail
  full: string;
  full2x?: string; // High-DPI full image
  description?: string; // For better accessibility
  publishDate?: string; // Metadata for future use
  tags?: string[]; // Categorization
  width?: number; // Image dimensions for aspect ratio
  height?: number;
}

export const comics: ComicPage[] = [
  {
    id: 1,
    title: "Freak Fringe",
    thumb: "/thumbs/freak-fringe.jpg",
    thumb2x: "/thumbs/freak-fringe@2x.jpg",
    full: "/comics/freak-fringe.jpg",
    full2x: "/comics/freak-fringe.jpg", // we serve the same file for 2x
    description: "How could the missing gastrotechs still be alive!",
    width: 2325,
    height: 3150
  },
  {
    id: 2,
    title: "Far Out",
    thumb: "/thumbs/fringe-far-out.jpg",
    thumb2x: "/thumbs/fringe-far-out@2x.jpg",
    full: "/comics/fringe-far-out.jpg",
    full2x: "/comics/fringe-far-out.jpg",
    description: "Tales from the unfathomed fringe.",
    width: 2325,
    height: 3150
  }
];

export default comics;
