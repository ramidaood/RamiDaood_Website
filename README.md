# Rami Daood - Portfolio Website

A modern, professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, featuring a stunning yellow theme and smooth animations.

## Features

- Modern and responsive design optimized for all devices
- Smooth scroll animations with Framer Motion
- Professional yellow/gold color scheme
- Interactive sections including:
  - Hero section with contact information
  - About section with highlights
  - Skills showcase with categorized technologies
  - Featured projects with detailed information
  - Work experience timeline
  - Education with relevant courses
  - Responsive navigation with mobile menu
  - Scroll-to-top button
  - Social media links

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   └── website.json
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Customization

### Update Portfolio Data

Edit `app/data/website.json` to update your personal information, projects, skills, experience, and education.

### Modify Theme Colors

Edit `tailwind.config.ts` to customize the color scheme. The current theme uses yellow/gold as the primary color.

### Add New Sections

Create new components in `app/components/` and import them in `app/page.tsx`.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Performance Features

- Optimized images and assets
- Code splitting and lazy loading
- Server-side rendering (SSR)
- Static generation where possible
- Smooth animations with GPU acceleration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Rami Daood. All rights reserved.

## Contact

- Email: daoodrami52@gmail.com
- LinkedIn: [linkedin.com/in/rami-daood-8a5106250](https://linkedin.com/in/rami-daood-8a5106250)
- GitHub: [github.com/ramidaood](https://github.com/ramidaood)
