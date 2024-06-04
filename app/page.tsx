"use client"
import Encryption from "@/components/main/Encryption";
import FAQ from "@/components/main/Faqs";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Contact from "../components/main/Contact"

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <FAQ/>
        <Contact/>
      </div>
    </main>
  );
}
