import { navItems } from "@/data";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { AboutGrid } from "@/components/AboutGrid";
import Projects from "@/components/Projects";
import MovingCards from "@/components/MovingCards";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <FloatingNav navItems={navItems} />
      <main className="min-w-screen h-screen min-h-screen w-screen">
        <Suspense>
          <Hero />
        </Suspense>
      </main>
      <Suspense>
        <AboutGrid />
      </Suspense>
      <Suspense>
        <Projects />
      </Suspense>
      <Suspense>
        <MovingCards />
      </Suspense>
    </div>
  );
}
