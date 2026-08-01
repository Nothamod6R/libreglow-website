"use client";

import { motion } from "motion/react";

import { GradientText } from "@/components/grootstudio/gradient-text-fill";
import { ShimmerTextFlip } from "@/components/grootstudio/shimmer-text-flip";
import { SolarSystem } from "@/components/ui/solar-system";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const role = [
  "Beautiful Open Source Software.",
  "Built for Linux.",
  "Community First.",
  "Privacy Respecting.",
  "Modern Desktop Experiences.",
  "Free. Open. Transparent.",
  "Crafted with Passion.",
  "Powered by LibreGlow.",
];


export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <GradientText className="text-5xl font-black leading-none sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Free Software
          </GradientText>

          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
            Building beautiful, modern and open-source applications
            designed for Linux.
          </p>

          <ShimmerTextFlip
            interval={2.8}
            as={motion.div}
            className="font-mono text-base sm:text-lg md:text-xl"
          >
            {role}
          </ShimmerTextFlip>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-12 w-full max-w-5xl"
        >
          <SolarSystem />
        </motion.div>
        <Link className="w-full" href={"https://github.com/libreglow"} target="_blank">
          <div className="w-full block md:hidden">
            <Button className={"w-1/2"}>
              github
            </Button>
          </div>          
        </Link>


      </div>
    </section>
  );
}