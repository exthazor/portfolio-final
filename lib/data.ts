import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuFileJson } from "react-icons/lu";
import wintImg from "@/public/wint.png";
import cherrycityImg from "@/public/cherrycity.png";
import angelImg from "@/public/angel.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated in Bachelor of Technology",
    location: "Manipal Institute of Technology, Manipal",
    description:
      "Completed my Bachelor of Technology degree with a focus on Information Technology and a minor in Big Data.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Developer",
    location: "Cerner Corporation, Bengaluru",
    description:
      "Contributed to developing and enhancing solutions that improved healthcare delivery and patient outcomes.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Software Developer - Backend",
    location: "Wint Wealth, Bengaluru",
    description:
      "Developed a two-factor authentication system and referral programs at Wint Wealth, conducted VAPT, boosting platform security, user engagement, and high business growth.",
    icon: React.createElement(LuFileJson),
    date: "2022 - 2024 (open to full-time opportunities)",
  },
] as const;

export const projectsData = [
  {
    title: "Wint Wealth",
    description:
      "I worked as a backend developer on this fintech startup for 2 years. I designed and developed the first 2FA system, and user referral programs.",
    tags: ["Spring Boot", "Kotlin", "PostgreSQL", "AWS", "Node.js"],
    imageUrl: wintImg,
  },
  {
    title: "Cherry City Cottage",
    description:
      "Fully designed and built the website of a popular hotel to facilitate bookings and integrate from 3rd party sources.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "tRPC"],
    imageUrl: cherrycityImg,
  },
  {
    title: "Angel Bot",
    description:
      "A discord moderation bot that sends user specific messages and entertains members with one liners.",
    tags: ["Discord.js", "TypeScript", "Discord Akairo", "Heroku"],
    imageUrl: angelImg,
  },
] as const;

export const skillsData = [
  "Kotlin",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "AWS",
  "JavaScript",
  "TypeScript",
  "Discord.js",
  "Strapi",
  "Python",
  "Django",
  "tRPC",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB"
] as const;
