'use client';
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useEffect, useRef, useState } from 'react';
import useSound from "use-sound";

export default function Home() {

  const [play, { stop }] = useSound('/herbal_tea.mp3', { loop: true });
  
  // State to manage if the music is actively playing
  const [musicPlaying, setMusicPlaying] = useState(true);

  useEffect(() => {
    play();
    setMusicPlaying(true);
    return () => {
      stop();
      setMusicPlaying(false)
    }
  }, [play, stop]);

  const toggleMusic = () => {
    if (musicPlaying) {
      stop();
    } else {
      play();
    }
    setMusicPlaying(!musicPlaying);
  };

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <button onClick={toggleMusic} className="fixed bottom-4 left-4 z-50" style={{ background: 'none', border: 'none' }}>
        <img
          src="/vinyl.png" // Ensure the correct path
          alt="Toggle Music"
          className={`vinyl ${musicPlaying ? 'playing' : ''}`}
          style={{
            width: '50px',
            height: '50px',
            border: '2px solid black', // Black border
            boxShadow: '0 0 0 0.5px white', // Simulating white border outside the black one
            borderRadius: '50%', // Making sure the border wraps around the circle nicely
            transition: 'transform 0.5s ease-out',
          }}
        />
      </button>
    </main>
  );
}
