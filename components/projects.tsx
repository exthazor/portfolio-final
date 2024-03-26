"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Player } from '@lottiefiles/react-lottie-player';

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          My Projects
          <Player
            autoplay
            loop
            src="/lotties/rocket.json"
            style={{
              height: '100px',
              width: '100px',
              marginLeft: '1px',
              marginTop: '-4px'
            }}
          />
        </div>
      </SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
