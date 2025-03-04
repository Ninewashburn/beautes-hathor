import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./fontawesome";

// Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent Font Awesome from adding its CSS since we did it manually above
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// Optimisation des polices
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Les Beautés d'Hathor | Institut de beauté inspiré par l'Égypte ancienne",
  description:
    "Institut de beauté à Normandie-Ville proposant des soins esthétiques inspirés par l'Égypte ancienne. Épilation, soins du visage, manucure, pédicure et massages.",
  generator: "Next.js",
  applicationName: "Les Beautés d'Hathor",
  keywords: [
    "institut de beauté",
    "soins esthétiques",
    "Égypte ancienne",
    "épilation",
    "soins du visage",
    "manucure",
    "pédicure",
    "Normandie-Ville",
  ],
  authors: [{ name: "Les Beautés d'Hathor" }],
  creator: "Les Beautés d'Hathor",
  publisher: "Les Beautés d'Hathor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Delius&family=Delius+Swash+Caps&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#f8f5e1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
