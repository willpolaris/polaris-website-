# Polaris Medspa Ops - Marketing Website

A production-ready marketing website for Polaris Medspa Ops, a medspa intake and follow-up service. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS v4
- **Responsive Design**: Mobile-first approach with premium medspa aesthetic
- **Live Demo System**: Phone number with QR code and copy-to-clipboard functionality
- **Interactive Components**: FAQ accordion, contact form with validation
- **SEO Optimized**: Proper metadata and semantic HTML throughout
- **Configurable**: Central config file for easy customization

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with navbar/footer
│   ├── page.tsx             # Home page
│   ├── pricing/page.tsx     # Pricing page
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact page
│   └── privacy/page.tsx     # Privacy policy
├── components/              # React components
│   ├── ui/                  # Core UI components
│   ├── layout/              # Navbar and Footer
│   ├── home/                # Home page sections
│   └── contact/             # Contact form
├── config/                  # Configuration files
│   └── site.ts             # Central site configuration
├── lib/                     # Utility functions
│   └── utils.ts            # QR code, clipboard, formatting
└── public/                  # Static assets
    └── logos/              # Brand logos
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- The logo files should be in the `public/logos/` directory:
  - `circular.png` (for favicon and mobile)
  - `horizontal.png` (for navbar and footer)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Configure the site settings in `config/site.ts`:

```typescript
export const siteConfig = {
  name: "Polaris Medspa Ops",
  description: "Never miss a medspa consult call again",
  phone: "+18005551234",        // Update with your demo phone number
  calendlyUrl: "https://calendly.com/placeholder",  // Update with your Calendly URL
  contactEmail: "will@polarisais.com",
  // ...
}
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build for Production

```bash
npm run build
npm run start
```

## Configuration

### Central Config (`config/site.ts`)

All site-wide settings are centralized in `config/site.ts`:

- **Brand Information**: Site name, description
- **Contact Details**: Phone number, email, Calendly URL
- **Navigation**: Page URLs and routes

Update this file to customize the site without touching component code.

### Color Palette

The color palette is derived from the Polaris logos and configured in `app/globals.css`:

- **Primary Dark**: `#1E5468` (dark teal/navy)
- **Primary**: `#4FB8AD` (turquoise)
- **Primary Light**: `#7DD3C0` (light teal)
- **Neutral**: Various grays for backgrounds and text

## Pages

### Home (`/`)
- Hero section with headline and CTAs
- Live demo callout with QR code
- Three outcome cards
- How it works (3 steps)
- What you get (feature list)
- FAQ accordion
- Final CTA section

### Pricing (`/pricing`)
- Two pricing cards (Implementation and Monthly)
- Feature lists
- Important notes section
- CTA section

### About (`/about`)
- Company mission and approach
- Values grid (4 values)
- CTA section

### Contact (`/contact`)
- Contact form with validation
- Live demo callout
- Success state handling
- TODO: Email/CRM integration needed

### Privacy (`/privacy`)
- Comprehensive privacy policy
- Data collection and usage
- User rights
- Contact information

## Key Components

### DemoCallout

Displays the demo phone number with:
- Formatted phone number
- Copy-to-clipboard button (desktop)
- QR code generation (desktop)
- Instructions and disclaimer

### CTAButtons

Reusable CTA button pair:
- "Call Live Demo" (primary)
- "Book a Call" (secondary)

### ContactForm

Full-featured contact form with:
- Client-side validation
- Error states
- Success state
- Consent checkbox
- TODO comments for backend integration

### FAQAccordion

Interactive FAQ section with:
- Expand/collapse functionality
- 5 common questions
- Smooth animations

## Development Notes

### Tailwind CSS v4

This project uses Tailwind CSS v4, which has a different configuration approach:
- Colors and themes are configured in `app/globals.css` using CSS variables
- No separate `tailwind.config.js` file needed
- Theme customization uses the `@theme` directive

### Font Configuration

The site uses Inter font from Google Fonts, configured in `app/layout.tsx`.

### QR Code Generation

QR codes are generated client-side using the `qrcode` library. The QR code encodes a `tel:` link for easy mobile scanning.

### Form Submission

The contact form currently shows a success state only. To integrate with an email service or CRM:

1. Open `components/contact/ContactForm.tsx`
2. Find the `TODO` comment in the `handleSubmit` function
3. Replace the simulated submission with your API call

Example integration:

```typescript
// TODO: Integrate with email service or CRM
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});

if (!response.ok) {
  // Handle error
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and configure everything
4. Deploy!

### Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Self-hosted with Node.js

Make sure to set the build command to `npm run build` and the start command to `npm run start`.

## Customization

### Updating Logo Colors

If you replace the logos:

1. Update the color values in `app/globals.css` to match your new logo colors
2. The color variables are under the `:root` selector
3. QR code colors can be updated in `lib/utils.ts` in the `generateQRCode` function

### Adding Analytics

To add analytics (Google Analytics, Plausible, etc.):

1. Add your analytics script to `app/layout.tsx`
2. Or use Next.js Script component for better performance

Example:

```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Script src="https://your-analytics.com/script.js" />
      </body>
    </html>
  );
}
```

## License

© 2025 Polaris Medspa Ops. All rights reserved.

## Support

For questions or issues, contact: hello@polarismedspaops.com
