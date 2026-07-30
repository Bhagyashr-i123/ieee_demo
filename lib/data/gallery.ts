export interface GalleryItem {
  id: string;
  image: string;
  event: string;
  year: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600", event: "SignalHacks 2026", year: "2026" },
  { id: "g2", image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600", event: "Women in Engineering Summit", year: "2026" },
  { id: "g3", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600", event: "Embedded Systems Bootcamp", year: "2026" },
  { id: "g4", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600", event: "SignalHacks 2025", year: "2025" },
  { id: "g5", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600", event: "Annual Volunteer Meet", year: "2025" },
  { id: "g6", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", event: "Intro to FPGA Webinar", year: "2024" },
];
