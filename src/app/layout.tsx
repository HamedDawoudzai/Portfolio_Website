import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hamed Dawoudzai | Software Engineer",
  description:
    "Computer Science student at the University of Toronto. Software Engineer Intern at Pinterest, incoming at Squarepoint Capital. Building scalable backend systems with Java, Spring Boot, React, and modern cloud technologies.",
  openGraph: {
    title: "Hamed Dawoudzai | Software Engineer",
    description:
      "Software Engineer Intern at Pinterest. Computer Science @ University of Toronto. Backend systems and full-stack development.",
  },
};

export const viewport: Viewport = {
  themeColor: "#e60023",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
