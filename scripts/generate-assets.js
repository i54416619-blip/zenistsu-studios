const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images',
  'public/images/portfolio',
  'public/images/testimonials',
  'public/images/team'
];

dirs.forEach(d => {
  const fullPath = path.join(process.cwd(), d);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

const generateSVG = (title, category, color1, color2) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color1}" />
      <stop offset="100%" stop-color="${color2}" />
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c8a96e" />
      <stop offset="100%" stop-color="#e8d5a8" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#c8a96e" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#050505" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)" />
  <circle cx="600" cy="375" r="400" fill="url(#glow)" />
  <circle cx="900" cy="200" r="250" fill="#c8a96e" opacity="0.08" />
  <circle cx="300" cy="600" r="300" fill="#8b5cf6" opacity="0.05" />
  <!-- Grid overlay -->
  <path d="M 0 150 L 1200 150 M 0 300 L 1200 300 M 0 450 L 1200 450 M 0 600 L 1200 600" stroke="white" stroke-opacity="0.03" stroke-width="1" />
  <path d="M 300 0 L 300 750 M 600 0 L 600 750 M 900 0 L 900 750" stroke="white" stroke-opacity="0.03" stroke-width="1" />
  <text x="600" y="360" text-anchor="middle" fill="url(#gold)" font-family="sans-serif" font-size="20" letter-spacing="6" opacity="0.8">${category.toUpperCase()}</text>
  <text x="600" y="410" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="38" font-weight="200" letter-spacing="2">${title}</text>
</svg>`;

const images = [
  { path: 'public/images/portfolio/noir-fragrance.jpg', title: 'NOIR FRAGRANCE', cat: 'Luxury Commercial', c1: '#0f0b08', c2: '#1a120b' },
  { path: 'public/images/portfolio/skyline-residences.jpg', title: 'SKYLINE RESIDENCES', cat: 'Real Estate Film', c1: '#0a1018', c2: '#121e2b' },
  { path: 'public/images/portfolio/vitality-wellness.jpg', title: 'VITALITY APP', cat: 'UGC Campaign', c1: '#0d1814', c2: '#152922' },
  { path: 'public/images/portfolio/aurora-watches.jpg', title: 'AURORA CHRONOS', cat: 'Luxury Product', c1: '#120f18', c2: '#201a2b' },
  { path: 'public/images/portfolio/nexus-avatar.jpg', title: 'NEXUS AI CONCIERGE', cat: 'AI Avatar', c1: '#141416', c2: '#222228' },
  { path: 'public/images/portfolio/terra-origin.jpg', title: 'RETURN TO EARTH', cat: 'Brand Origin Film', c1: '#13180e', c2: '#222b19' },
  { path: 'public/images/team/arjun.jpg', title: 'ARJUN RAVISHANKAR', cat: 'Founder & Creative Director', c1: '#18140f', c2: '#050505' },
  { path: 'public/images/team/elena.jpg', title: 'ELENA VASQUEZ', cat: 'Head of AI Production', c1: '#12161a', c2: '#050505' },
  { path: 'public/images/team/david.jpg', title: 'DAVID KIM', cat: 'Lead Editor & Colorist', c1: '#181216', c2: '#050505' },
  { path: 'public/images/team/priya.jpg', title: 'PRIYA PATEL', cat: 'Head of Strategy', c1: '#141812', c2: '#050505' },
];

images.forEach(img => {
  const fullPath = path.join(process.cwd(), img.path);
  fs.writeFileSync(fullPath, generateSVG(img.title, img.cat, img.c1, img.c2));
});

console.log('Generated mock image SVG assets successfully.');
