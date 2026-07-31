import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GlowSnap – Open Source Screenshot Tool for Linux | LibreGlow",
  description:
    "GlowSnap is a modern open-source screenshot and visual editing tool for Linux. Capture, annotate, edit, and organize screenshots with a beautiful native experience.",

  keywords: [
    "GlowSnap",
    "Linux screenshot tool",
    "Linux screenshot",
    "Linux screen capture",
    "Open source",
    "Screenshot editor",
    "Annotation tool",
    "Go",
    "Wails",
    "LibreGlow",
  ],

  openGraph: {
    title: "GlowSnap – Open Source Screenshot Tool for Linux",
    description:
      "Capture, edit, annotate, and organize screenshots with a modern native Linux experience.",
    url: "https://libreglow.pages.dev/glowsnap",
    siteName: "LibreGlow",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GlowSnap",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GlowSnap – Open Source Screenshot Tool for Linux",
    description:
      "A modern open-source screenshot and visual editing tool built for Linux.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://libreglow.pages.dev/glowsnap",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}