// src/data.js
import Art1 from "../Assets/art-1.jpg";
import Art2 from "../Assets/art-2.jpg";
import Art3 from "../Assets/art-3.jpg";
import Art4 from "../Assets/art-4.jpg";
import Art5 from "../Assets/art-5.jpg";
import Art6 from "../Assets/art-6.jpg";


export const worksData = [
  {
    id: 1,
    image: Art1,
    category: 'cover-art',
    date: 'March 2025',
    title: 'Kizz Daniel Uncle K Tour',
    description: 'Complete visual identity for Kizz Daniel\'s Uncle K Tour, including stage design, merchandise, and promotional materials. Created a vibrant afrobeat aesthetic that resonated with fans across 12 countries.',
    client: 'Flyboy Inc',
    tools: ['Photoshop', 'Illustrator', 'Blender'],
    deliverables: ['Posters', 'Social Media Kit', 'Stage Visuals', 'Merchandise']
  },
  {
    id: 2,
    image: Art2,
    category: 'illustration',
    date: 'February 2025',
    title: 'Davido Timeless Tour',
    description: 'Conceptualized and executed the visual direction for Davido\'s Timeless Tour, blending futuristic elements with traditional African motifs. The design became iconic across all tour merchandise.',
    client: 'Davido Music Worldwide',
    tools: ['Procreate', 'After Effects', 'Cinema4D'],
    deliverables: ['Album Cover', 'Tour Posters', 'Digital Ads']
  },
  {
    id: 3,
    image: Art3,
    category: 'logo',
    date: 'January 2025',
    title: 'Wizkid More Love Tour',
    description: 'Developed a comprehensive visual system for Wizkid\'s More Love Tour, maintaining brand consistency across 30+ promotional materials while allowing for regional customization.',
    client: 'Starboy Entertainment',
    tools: ['Figma', 'Photoshop', 'Substance Painter'],
    deliverables: ['Logo', 'Color Palette', 'Typography System', 'Marketing Collateral']
  },
  {
    id: 4,
    image: Art4,
    category: 'Poster Series',
    date: 'December 2024',
    title: 'Burna Boy Love Damini',
    description: 'Created a limited edition poster series for Burna Boy\'s Love Damini album release. Each poster featured unique artwork representing different tracks from the album.',
    client: 'Spaceship Collective',
    tools: ['Procreate', 'Photoshop', 'InDesign'],
    deliverables: ['Series of 12 Posters', 'Digital Versions', 'NFT Collection']
  },
  {
    id: 5,
    image: Art5,
    category: 'Event Branding',
    date: 'November 2024',
    title: 'Tems Moonlight Experience',
    description: 'Designed the complete branding for Tems\' intimate Moonlight Experience concert series, creating a dreamy, ethereal aesthetic that matched her musical style.',
    client: 'RCA Records',
    tools: ['Illustrator', 'After Effects', 'Procreate'],
    deliverables: ['Stage Design', 'VIP Passes', 'Digital Assets']
  },
  {
    id: 6,
    image: Art6,
    category: 'Cover Art',
    date: 'October 2024',
    title: 'Rema Raves & Roses',
    description: 'Art direction and design for Rema\'s Raves & Roses deluxe edition, combining street art influences with high fashion photography for a distinctive look.',
    client: 'Mavin Records',
    tools: ['Photoshop', 'Blender', 'Substance Designer'],
    deliverables: ['Album Cover', 'Alternate Versions', 'Social Media Assets']
  },
  
];

export const getWorkById = (id) => {
  return worksData.find(work => work.id === Number(id));
};