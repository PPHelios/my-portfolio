import { navItems } from "@/data";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { AboutGrid } from "@/components/AboutGrid";
import Projects from "@/components/Projects";
import MovingCards from "@/components/MovingCards";
import { Suspense } from "react";
import SideProjects from "@/components/SideProjects";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <FloatingNav navItems={navItems} />
      <main id="home" className="h-screen w-screen">
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
      <Suspense>
        <SideProjects />
      </Suspense>
      <Suspense>
        <Approach />
      </Suspense>
      <Contact />
      <Footer />
    </div>
  );
}
