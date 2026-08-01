import { CursorCard } from "@/components/ui/cursor-card";

export default function About() {
  return (
    <section id="about" className="container mx-auto max-w-6xl px-6 py-24">
      <span className="text-sm font-medium text-muted-foreground">
        About
      </span>

      <h2 className="mt-3 text-4xl font-bold tracking-tight">
        Building software that belongs to everyone.
      </h2>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        LibreGlow is an open-source organization dedicated to building modern,
        privacy-respecting software for creators, developers, and everyday
        users. We believe software should be open-source, privacy-first, and
        crafted with attention to every detail.

        {" "}
        Our first project,{" "}
        <CursorCard
          image="https://github.com/libreglow/glowsnap/raw/main/docs/images/editor.png"
          description="GlowSnap — A modern open-source screenshot and visual editing tool for Linux."
        >
          GlowSnap
        </CursorCard>
        , brings a premium screenshot workflow to Linux by combining fast
        screen capture, a powerful annotation editor, and an elegant gallery
        into a single native application. Built with Go, Wails, React, and
        Tailwind CSS, it enables developers, content creators, testers, and
        Linux enthusiasts to transform ordinary screenshots into polished,
        professional visuals while remaining completely open-source and
        respectful of user privacy.
      </p>
    </section>
  );
}