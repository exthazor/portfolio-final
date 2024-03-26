"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Player } from "@lottiefiles/react-lottie-player";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          About me
          <Player
            autoplay
            loop
            src="/lotties/baymax.json"
            style={{
              height: '60px',
              width: '60px',
              marginLeft: '10px',
              marginTop: '-22px'
            }}
          />
        </div>
      </SectionHeading>

      <p className="mb-3">

        After embarking on a journey through the fascinating world of {" "}
        <span className="font-medium">software development</span>, I've dedicated the past four years to coding, with a particular focus on {" "}
        <span className="font-medium">backend technologies and cloud infrastructure</span> ☁️. {" "}
        <span className="italic">My academic background laid the foundation, but my true passion lies in</span> solving complex problems and creating efficient, scalable solutions. 
       I find joy in cracking a problem that's had me stumped, like a light finally shining through the darkness. ☀️ 
       </p>
       <p className="mb-3">My core stack
        is{" "}
        <span className="font-medium">
          <span className="underline font-bold">Spring Boot</span>, <span className="underline font-bold">Node.js</span>, <span className="underline font-bold">AWS</span>, and <span className="underline font-bold">Relational Databases</span>.{" "}
        </span>
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. 💻 
      </p>
      <p>
        <span className="italic">Beyond the world of coding,</span> I balance my life with pursuits that keep me grounded and energized. 
        As a <span className="font-bold">national level powerlifter 🏅</span>, I understand the value of dedication, discipline, and continuous improvement, principles that I apply to my professional life as well 🎯.{" "}
      </p>
    </motion.section>
  );
}
