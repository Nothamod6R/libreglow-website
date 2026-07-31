"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/modules/header";
import MagneticSpotlightMarquee from "@/components/ui/magnetic-spotlight-marquee";

const API = "https://api.npoint.io/0ef1d8f53048b0a61008";

type Release = {
  title: string;
  version: string;
  stable: boolean;
  publishedAt: string;
  asset: {
    name: string;
    size: number;
    downloads: number;
  };
  download: {
    appImage: string;
    releasePage: string;
  };
};

export default function Glowsnap() {
  const [release, setRelease] = useState<Release | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const cached = localStorage.getItem("glowsnap-release");
        const cachedAt = Number(
          localStorage.getItem("glowsnap-release-time") || "0"
        );

        if (cached && Date.now() - cachedAt < 24 * 60 * 60 * 1000) {
          setRelease(JSON.parse(cached));
          return;
        }

        const response = await fetch(API);
        const json = await response.json();

        const latest = json.projects.glowsnap;

        setRelease(latest);

        localStorage.setItem(
          "glowsnap-release",
          JSON.stringify(latest)
        );

        localStorage.setItem(
          "glowsnap-release-time",
          Date.now().toString()
        );
      } catch (error) {
        console.error(error);
      }
    }

    load();
  }, []);

  const size =
    release &&
    `${(release.asset.size / 1024 / 1024).toFixed(1)} MB`;

  return (
    <main className="mx-auto mt-[8vh] flex min-h-screen max-w-6xl flex-col items-center px-6 pb-32 text-center">
      <Header />
      <Badge variant="secondary">
        Linux • Open Source
      </Badge>

      <img
        src="https://github.com/libreglow/glowsnap/raw/main/packaging/io.github.libreglow.glowsnap.png"
        alt="GlowSnap"
        className="mt-8 h-32 w-32 rounded-3xl"
      />

      <h1 className="mt-8 text-6xl font-extrabold tracking-tight">
        GlowSnap
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        A modern open-source screenshot and visual editing tool for Linux.
        Capture, edit, annotate, and organize screenshots with a clean
        native experience.
      </p>

      {release && (
        <div className="mt-8 flex flex-wrap justify-center gap-3">

          <Badge variant="outline">
            {release.version}
          </Badge>

          <Badge variant="outline">
            {release.stable ? "Stable Beta" : "Preview"}
          </Badge>

          <Badge variant="outline">
            {size}
          </Badge>

        </div>
      )}

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <Button
          size="lg"
          disabled={!release}
        >
          {release ? (
            <Link href={release.download.appImage}>
              Download AppImage
            </Link>
          ) : (
            <span>Loading...</span>
          )}
        </Button>

        <Button
          variant="outline"
          size="lg"
          disabled={!release}
        >
          {release ? (
            <Link
              href={release.download.releasePage}
              target="_blank"
            >
              Latest Release
            </Link>
          ) : (
            <span>Loading...</span>
          )}
        </Button>

      </div>

      <div className="mt-24 grid w-full gap-8 md:grid-cols-2">

        <img
          src="https://github.com/libreglow/glowsnap/raw/main/docs/images/studio.png"
          alt="GlowSnap Studio"
          className="rounded-2xl border shadow-sm transition duration-300 hover:scale-[1.02]"
        />

        <img
          src="https://github.com/libreglow/glowsnap/raw/main/docs/images/editor.png"
          alt="GlowSnap Editor"
          className="rounded-2xl border shadow-sm transition duration-300 hover:scale-[1.02]"
        />

      </div>

      <div className="mt-24 grid w-full gap-10 md:grid-cols-3 text-left">

        <div>
          <h3 className="text-lg font-semibold">
            Screenshot Studio
          </h3>

          <p className="mt-3 text-muted-foreground">
            Capture the entire screen or any selected region using a fast,
            native Linux workflow.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Powerful Editor
          </h3>

          <p className="mt-3 text-muted-foreground">
            Annotate screenshots with arrows, text, shapes, freehand
            drawing, colors, numbering, and crop tools.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Built for Linux
          </h3>

          <p className="mt-3 text-muted-foreground">
            Developed with Go, Wails and React to provide a lightweight,
            native experience while remaining completely open-source.
          </p>
        </div>

      </div>

      {release && (
        <Link
          href={release.download.releasePage}
          target="_blank"
          className="mt-24 flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          View release notes

          <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}

      <div>
        <MagneticSpotlightMarquee />
      </div>

    </main>
  );
}