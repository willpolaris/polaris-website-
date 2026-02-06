import { Hero } from "@/components/home/Hero";
import { LiveDemo } from "@/components/home/LiveDemo";
import { OutcomeCards } from "@/components/home/OutcomeCards";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhatYouGet } from "@/components/home/WhatYouGet";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LiveDemo />
      <OutcomeCards />
      <HowItWorks />
      <WhatYouGet />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
