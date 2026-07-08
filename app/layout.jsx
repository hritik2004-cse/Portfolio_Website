import { Sometype_Mono } from "next/font/google";
import "./globals.css";
// components
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from '@/components/Header'

const someTypeMono = Sometype_Mono({
  variable: "--font-family-primary",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hritik Sharma | Portfolio",
  description: "Modern and Stylish portfolio by Hritik Sharma — Full-Stack Developer & CS Student.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/icon0.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${someTypeMono.variable} antialiased overflow-hidden relative`} style={{fontFamily: 'var(--font-family-primary)'}} suppressHydrationWarning>
        <Gradient/>
        <RectangleTransition/>
        <PageTransition>
          <div className="flex">
          <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
            <MainNav />
          </div>
          <div className="w-full max-w-[1130px] px-[15px] mx-auto">
            <Header/>
            <main>{children}</main>
          </div>
        </div>
        </PageTransition>
      </body>
    </html>
  );
}
