# Longevity+ Landing Page

A modern, responsive landing page for a preventative longevity health platform built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimalist aesthetic with subtle animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Next.js 14 for optimal loading speeds
- **Accessible**: WCAG compliant with proper focus management
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Smooth Framer Motion animations and micro-interactions

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd longevity-landing
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page component
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Hero.tsx          # Hero section
│   ├── ProblemSection.tsx # Problem cards
│   ├── SolutionSection.tsx# Solution steps
│   ├── TestCategories.tsx # Health test categories
│   ├── SignupForm.tsx     # Early access form
│   ├── FAQ.tsx           # FAQ accordion
│   ├── ContactForm.tsx    # Contact form
│   └── Footer.tsx        # Footer with links
├── lib/                   # Utility functions
│   ├── constants.ts       # App constants and data
│   └── animations.ts      # Framer Motion configurations
└── public/               # Static assets
```

## Key Components

### Hero Section

- Gradient background with animated elements
- Call-to-action buttons with smooth scroll
- Responsive typography and spacing

### Problem Section

- Three-card layout highlighting healthcare issues
- Hover animations and statistics
- Responsive grid layout

### Solution Section

- Step-by-step process visualization
- Interactive elements and progress indicators
- Feature showcase with animations

### Test Categories

- Six health domain categories
- Hover effects revealing test details
- Responsive grid with smooth transitions

### Forms

- Early access signup with validation
- Contact form with error handling
- Success states and loading indicators

## Customization

### Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#0d9488', // Teal
    600: '#0d9488',
  },
  secondary: {
    500: '#fb7185', // Coral
  },
  // ... other colors
}
```

### Content

Modify content in `lib/constants.ts`:

```typescript
export const COMPANY_INFO = {
  name: "Your Company",
  email: "contact@yourcompany.com",
  // ... other details
};
```

### Animations

Customize animations in `lib/animations.ts` or components.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

1. Build the project:

```bash
npm run build
```

2. Export static files (if needed):

```bash
npm run export
```

## Performance

- Lighthouse score: 90+ on all metrics
- Optimized images and fonts
- Minimal JavaScript bundle
- Efficient CSS with Tailwind

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email hello@longevity-plus.com or join our Slack community.
