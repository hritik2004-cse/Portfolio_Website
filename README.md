# 🚀 Hritik Sharma's Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing my skills, experience, and projects. Features smooth animations, interactive components, and a clean, professional design.

## ✨ Features

- **Modern Design**: Clean, professional UI with a dark theme
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Interactive Components**: Custom navigation, sheets, and transitions
- **Type Animations**: Dynamic text effects with react-type-animation
- **Performance Optimized**: Built with Next.js 15 and Tailwind CSS v4 (Turbopack enabled)
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.10
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS v4 + tailwind-scrollbar
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives (Dialog, ScrollArea, Tooltip)
- **Icons**: Lucide React & React Icons
- **Font**: Sometype Mono (Google Fonts via `next/font/google`)
- **Carousel**: Swiper.js
- **Count-up Animations**: react-countup
- **Type Animation**: react-type-animation

## 📁 Project Structure

```
├── app/
│   ├── about/                   # About page
│   ├── contact/                 # Contact page with form
│   ├── experience/              # Experience page
│   ├── portfolio/               # Portfolio/Projects page
│   ├── layout.jsx               # Root layout (font, nav, transitions)
│   ├── page.jsx                 # Home page
│   ├── globals.css              # Global styles & design tokens
│   └── manifest.json            # PWA manifest
├── components/
│   ├── ui/                      # Reusable UI components (Button, Input, Select, etc.)
│   ├── Header.jsx               # Mobile navigation header
│   ├── MainNav.jsx              # Desktop sidebar navigation
│   ├── NavLinks.jsx             # Navigation link definitions
│   ├── PageTransition.jsx       # Page transition wrapper
│   ├── RectangleTransition.jsx  # Animated rectangle transition effect
│   ├── Stats.jsx                # Statistics counter component
│   ├── Skills.jsx               # Skills showcase
│   ├── Socials.jsx              # Social media links
│   ├── Info.jsx                 # Personal info component
│   ├── Journey.jsx              # Journey/timeline component
│   ├── Blob.jsx                 # Animated blob background
│   ├── Gradient.jsx             # Background gradient
│   └── Pattern.jsx              # Background pattern
├── lib/
│   └── utils.js                 # Utility functions (clsx + tailwind-merge)
└── public/
    └── assets/                  # Images and icons (avatar, etc.)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hritik2004-cse/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📜 Available Scripts

- `npm run dev` - Start development server (with Turbopack)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The color scheme is defined in `app/globals.css` using CSS custom properties:
- Primary: `#0d091a` (Dark purple background)
- Secondary: `#140e25` (Sidebar background)
- Tertiary: `#201837`
- Accent: `#5810ff` (Purple — buttons, highlights)
- Accent Hover: `#4a0bde`

### Typography
Using **Sometype Mono** font family loaded via `next/font/google` for a modern, monospace aesthetic.

### Components
All components are modular and reusable. Key components include:
- **Navigation**: Responsive navigation with mobile sheet overlay and desktop sidebar
- **Page Transitions**: Smooth page-to-page animations with rectangle slide effect
- **Interactive Elements**: Buttons, cards, and hover effects
- **Socials**: Links to Facebook, Instagram, LinkedIn, GitHub, and YouTube

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/new)
3. Import your repository
4. Deploy with zero configuration

### Other Platforms

This Next.js app can be deployed on any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Hritik Sharma**
- LinkedIn: [hritik-sharma-oct04](https://www.linkedin.com/in/hritik-sharma-oct04/)
- GitHub: [@hritik2004-cse](https://github.com/hritik2004-cse)
- Email: [hritiksharma08725@gmail.com](mailto:hritiksharma08725@gmail.com)
- YouTube: [@hritik_is_coding](https://youtube.com/@hritik_is_coding)
- Instagram: [@hritik_sharma_2004](https://www.instagram.com/hritik_sharma_2004/)

---

⭐ **If you found this project helpful, please give it a star!**
