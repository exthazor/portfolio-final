'use client';
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useEffect, useRef } from 'react';
import useSound from "use-sound";

export default function Home() {

  useEffect(() => {
    const audio = new Audio('./herbal_tea.mp3');
    audio.loop = true;
    audio.play();
    return () => audio.pause();
  }, []);

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      
    </main>
  );
}
