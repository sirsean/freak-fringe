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
    id: 8,
    title: "Blood Vessel",
    thumb: "/thumbs/Blood_Vessel.jpg",
    thumb2x: "/thumbs/Blood_Vessel@2x.jpg",
    full: "/comics/Blood_Vessel.jpg",
    full2x: "/comics/Blood_Vessel.jpg", // we serve the same file for 2x
    description: "How could the missing gastrotechs still be alive!",
    width: 2325,
    height: 3150
  },
  {
    id: 23,
    title: "Fusion Cuisine",
    thumb: "/thumbs/Fusion_Cuisine.jpg",
    thumb2x: "/thumbs/Fusion_Cuisine@2x.jpg",
    full: "/comics/Fusion_Cuisine.jpg",
    full2x: "/comics/Fusion_Cuisine.jpg",
    description: "Tales from the unfathomed fringe!",
    width: 2325,
    height: 3150
  }
];

export default comics;
