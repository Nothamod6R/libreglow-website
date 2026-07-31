import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Link from "next/link";


export default function Header() {
  return (
    <header className="border-b w-full fixed backdrop-blur-2xl top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href={"/"}>
          <h1 className="text-xl font-bold tracking-tight">
            LibreGlow
          </h1>

        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#projects"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>

          <Link
            href="#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>

          <Link
            href="#community"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Community
          </Link>

          
        </nav>

        <div className="flex justify-center items-center flex-row gap-1">
          <Button >
            <Link
              href="https://github.com/libreglow"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Button>
          <Button  variant={"outline"}>
            <Link
              href="/docs"
              rel="noopener noreferrer"
            >
              docs
            </Link>
          </Button>
          <AnimatedThemeToggler />
       </div>

      </div>
    </header>
  );
}