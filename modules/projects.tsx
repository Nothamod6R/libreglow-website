import Link from "next/link";
import {
  ArrowUpRight,
  Monitor,
  Sparkles,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <Badge variant="secondary">Projects</Badge>

        <h2 className="mt-3 text-4xl font-bold tracking-tight">
          Open-source software built with care.
        </h2>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          Every LibreGlow project is built to be beautiful, privacy-respecting,
          and completely open-source.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        
        <Card className="flex flex-col relative overflow-hidden">
          
          <ShineBorder shineColor={"white"} />


          <CardHeader>
            <div className="flex items-center justify-between">

              <Badge>Linux</Badge>
            </div>

            <CardTitle className="mt-4 text-2xl">
              GlowSnap
            </CardTitle>

            <CardDescription>
              A modern open-source screenshot and visual editing tool for Linux.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-1 space-y-4">
            <img
              src="https://github.com/libreglow/glowsnap/raw/main/docs/images/editor.png"
              alt="GlowSnap"
              className="rounded-xl border"
            />

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Go</Badge>
              <Badge variant="outline">Wails</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
            </div>

            <p className="text-sm text-muted-foreground">
              Capture, annotate, organize, and transform screenshots into
              beautiful visuals with a modern Linux-native workflow.
            </p>
          </CardContent>

          <CardFooter className="gap-3">
            <Button >
              <Link
                href="https://github.com/libreglow/glowsnap"
                target="_blank"
              >
                GitHub
              </Link>
            </Button>

            
          </CardFooter>
        </Card>

        <Card className="border-dashed">
          
          <CardHeader>
            <div className="flex items-center justify-between">

              <Badge variant="secondary">
                Coming Soon
              </Badge>
            </div>

            <CardTitle className="mt-4 text-2xl">
              More Projects
            </CardTitle>

            <CardDescription>
              New open-source applications are currently in development.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-1 items-center justify-center">
            <p className="max-w-sm text-center text-muted-foreground">
              LibreGlow is building a growing ecosystem of modern Linux
              productivity tools. Stay tuned for future releases.
            </p>
          </CardContent>

          <CardFooter>
            <Button variant="outline" disabled className="w-full">
              Coming Soon
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}