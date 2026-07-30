import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function Community() {
  return (
    <section className="container py-24" id="community">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-primary">
          Community
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight">
          Join the LibreGlow community.
        </h2>

        <p className="mt-6 text-lg text-muted-foreground">
          Connect with developers, contributors, designers, and Linux
          enthusiasts. Share ideas, report bugs, showcase your work, and
          help build the future of LibreGlow.
        </p>

        <Button  size="lg" className="mt-8">
          <Link
            href="https://discord.gg/3YkPjwePZQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our Discord
          </Link>
        </Button>
      </div>
    </section>
  );
}