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
    title: "The Beginning",
    thumb: "https://picsum.photos/300/400?random=1",
    full: "https://picsum.photos/800/1200?random=1",
    description: "A mysterious figure stands at the edge of reality, beginning their journey into the freak fringe",
    publishDate: "2024-01-01",
    tags: ["origin", "mystery"],
    width: 800,
    height: 1200
  },
  {
    id: 2,
    title: "First Encounter",
    thumb: "https://picsum.photos/300/400?random=2",
    full: "https://picsum.photos/800/1200?random=2",
    description: "Our protagonist meets their first otherworldly companion in a surreal landscape",
    publishDate: "2024-01-08",
    tags: ["encounter", "companion"],
    width: 800,
    height: 1200
  },
  {
    id: 3,
    title: "Strange Powers",
    thumb: "https://picsum.photos/300/400?random=3",
    full: "https://picsum.photos/800/1200?random=3",
    description: "Unusual abilities begin to manifest as reality bends around our heroes",
    publishDate: "2024-01-15",
    tags: ["powers", "supernatural"],
    width: 800,
    height: 1200
  },
  {
    id: 4,
    title: "The Revelation",
    thumb: "https://picsum.photos/300/400?random=4",
    full: "https://picsum.photos/800/1200?random=4"
  },
  {
    id: 5,
    title: "Allies and Enemies",
    thumb: "https://picsum.photos/300/400?random=5",
    full: "https://picsum.photos/800/1200?random=5"
  },
  {
    id: 6,
    title: "The Quest Begins",
    thumb: "https://picsum.photos/300/400?random=6",
    full: "https://picsum.photos/800/1200?random=6"
  },
  {
    id: 7,
    title: "Dark Secrets",
    thumb: "https://picsum.photos/300/400?random=7",
    full: "https://picsum.photos/800/1200?random=7"
  },
  {
    id: 8,
    title: "The Final Confrontation",
    thumb: "https://picsum.photos/300/400?random=8",
    full: "https://picsum.photos/800/1200?random=8"
  }
];

export default comics;
