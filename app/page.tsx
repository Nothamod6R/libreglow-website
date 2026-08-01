"use client";
import Header from "@/modules/header";
import { InteractiveParticles } from "@/components/ui/interactive-particles"
import About from "@/modules/about";
import Projects from "@/modules/projects";
import Community from "@/modules/community";
import { MagneticSpotlightMarquee } from "@/components/ui/magnetic-spotlight-marquee"
import Hero from "@/modules/hero";



export default function Landing() {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col">
      <Header />
      <Hero />
      <div className="relative flex justify-center items-center flex-col mt-[10vh] w-full overflow-hidden rounded-xl  bg-black p-5">
        <h1 className="text-4xl sm:text-5xl   font-extrabold  text-white">Modern free software</h1>
        <p className="mt-4 text-gray-400">
          Crafted for performance, designed for total freedom
        </p>

        <InteractiveParticles src="https://avatars.githubusercontent.com/u/310168718?s=200&v=4"     />
      </div>

      <div>
        <About />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Community />
      </div>
      <div>
        <MagneticSpotlightMarquee />
      </div>
    </div>
  )
}
