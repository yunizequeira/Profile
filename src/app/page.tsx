'use client';
import Banner from "@/components/Banner";
import Projects from "@/components/MyProject";
import SkillBanner from "@/components/SkillsBanner";
import WhatIDo from "@/components/WhatIDo";
import { Croissant_One } from "next/font/google";
const croissant = Croissant_One({ weight: ["400"], subsets: ["latin"] });
import { Section } from "@/components/Section";
import {  useEffect, useState } from "react";
import {useMenu} from "@/store/menu";
import Resume from "@/components/Resume";
import Testimonials from "@/components/Testimonial";
export default function Home() {
  const [activeId, setActiveId] = useState<string>('');
  const {asignarId} = useMenu();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let closestSectionId = '';
      let minDistance = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < minDistance) {
          minDistance = distance;
          closestSectionId = section.id;
        }
      });

      setActiveId(closestSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // ejecuta al cargar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeId) {
      asignarId(activeId);
    }
  }, [activeId, asignarId]);

  return (
    <main className="overflow-hidden bg-gradient-to-r min-h-screen mt-20">
      <Section id="home">
        <div className="border-b border-black/10">
          <Banner font={` ${croissant.className}`} />
        </div>
      </Section>
      <Section  id ="features">
        <WhatIDo />
      </Section>
      <Section id="skills">
        <SkillBanner />
      </Section>
      <Section id="portfolio">
        <Projects />
      </Section>
      <Section  id="resume">
        <Resume />
      </Section>
      <Section  id="testimonials">
        <Testimonials/>
      </Section>
    </main>
  );
}
