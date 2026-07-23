import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import LenisProvider from "@/components/LenisProvider";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zenistsu Studios — AI-Powered Cinematic Production",
    template: "%s | Zenistsu Studios",
  },
  description:
    "Zenistsu Studios crafts cinematic AI advertisements, luxury commercials, and premium brand films. Hollywood-grade production powered by artificial intelligence.",
  keywords: [
    "AI advertising",
    "cinematic AI ads",
    "luxury commercials",
    "AI video production",
    "real estate marketing films",
    "AI avatars",
    "UGC ads",
    "brand storytelling",
    "premium video production",
  ],
  openGraph: {
    title: "Zenistsu Studios — AI-Powered Cinematic Production",
    description:
      "We create cinematic AI films that sell. Premium advertising, luxury commercials, and brand storytelling powered by AI.",
    siteName: "Zenistsu Studios",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenistsu Studios — AI-Powered Cinematic Production",
    description:
      "We create cinematic AI films that sell. Premium advertising, luxury commercials, and brand storytelling powered by AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050505] font-sans text-white">
        <LenisProvider>
          <LoadingScreen />
          <CustomCursor />
          <Navbar />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
