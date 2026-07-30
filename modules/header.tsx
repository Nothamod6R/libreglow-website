import { Button } from "@/components/ui/button";
import { GitGraphIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b w-full fixed backdrop-blur-2xl top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold tracking-tight">
          LibreGlow
        </h1>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#projects"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>

          <a
            href="#community"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Community
          </a>

          
        </nav>

        <Button >
          <a
            href="https://github.com/libreglow"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Button>
      </div>
    </header>
  );
}