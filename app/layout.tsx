import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import { RootProvider } from 'fumadocs-ui/provider/next';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const siteUrl =
//   process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";


export const metadata: Metadata = {
  metadataBase: "https://libreglow.pages.dev",

  title: {
    default: "LibreGlow",
    template: "%s • LibreGlow",
  },

  description:
    "LibreGlow is an open-source organization building modern, privacy-respecting software for creators, developers, and everyday users.",

  keywords: [
    "LibreGlow",
    "Open Source",
    "Linux",
    "Go",
    "Next.js",
    "Wails",
    "Software",
    "Privacy",
  ],

  authors: [
    {
      name: "LibreGlow",
    },
  ],

  openGraph: {
    title: "LibreGlow",
    description:
      "Building modern open-source software for everyone.",
    url: "/",
    siteName: "LibreGlow",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LibreGlow",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LibreGlow",
    description:
      "Building modern open-source software for everyone.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootProvider
                    search={{
                      options: {
                        type: 'static', 
                      },
                    }}
                  >
          {children}
            
          </RootProvider>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
