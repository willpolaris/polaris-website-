import React from "react";
import { Section } from "@/components/ui/Section";
import { CTAButtons } from "@/components/CTAButtons";

export function Hero() {
  return (
    <Section background="white" className="pt-12 md:pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6 leading-tight">
          Never miss a medspa consult call again.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed">
          We cover missed calls and follow up with new leads instantly, so your front desk stops leaking booked consults.
        </p>
        <CTAButtons className="justify-center" />
        <p className="mt-8 text-sm md:text-base text-neutral-600 italic">
          Overflow and after-hours intake only. Not a staff replacement.
        </p>
      </div>
    </Section>
  );
}
