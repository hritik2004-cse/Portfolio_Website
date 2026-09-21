import { Sometype_Mono } from "next/font/google";
import "./globals.css";
// components
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";

const someTypeMono = Sometype_Mono({
  variable: "--font-family-primary",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://hritik.is-a.dev";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hritik Sharma | Full-Stack Web Developer & Portfolio",
    template: "%s | Hritik Sharma",
  },
  description:
    "Portfolio of Hritik Sharma — Full-Stack Web Developer & CS Student based in Chandigarh, India. Building modern, user-friendly websites with React, Next.js, Node.js & MongoDB.",
  keywords: [
    "Hritik Sharma",
    "Full-Stack Developer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "MERN Stack",
    "Frontend Developer",
    "Chandigarh",
    "India",
    "CS Student",
    "Nova Coders",
  ],
  authors: [{ name: "Hritik Sharma", url: SITE_URL }],
  creator: "Hritik Sharma",
  publisher: "Hritik Sharma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Hritik Sharma — Portfolio",
    title: "Hritik Sharma | Full-Stack Web Developer & Portfolio",
    description:
      "Portfolio of Hritik Sharma — Full-Stack Web Developer & CS Student. Building modern, user-friendly websites with React, Next.js, Node.js & MongoDB.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hritik Sharma — Full-Stack Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hritik Sharma | Full-Stack Web Developer & Portfolio",
    description:
      "Portfolio of Hritik Sharma — Full-Stack Web Developer & CS Student. Building modern, user-friendly websites.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/icon0.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hritik Sharma",
  jobTitle: "Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer & CS Student based in Chandigarh, India. Co-founder of Nova Coders.",
  url: SITE_URL,
  email: "hritiksharma08725@gmail.com",
  telephone: "+91-9548474709",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chandigarh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/hritik2004-cse",
    "https://www.linkedin.com/in/hritik-sharma-oct04/",
    "https://www.instagram.com/hritik_sharma_2004/",
    "https://youtube.com/@hritik_is_coding",
    "https://www.facebook.com/profile.php?id=100031941365349",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${someTypeMono.variable} antialiased overflow-hidden relative`}
        style={{ fontFamily: "var(--font-family-primary)" }}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className="flex">
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto">
              <Header />
              <main id="main-content">{children}</main>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
