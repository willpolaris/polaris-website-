import React from "react";
import { Section } from "@/components/ui/Section";
import { CTAButtons } from "@/components/CTAButtons";

export function FinalCTA() {
  return (
    <Section background="white" className="text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-8">
          Stop losing consults to missed calls.
        </h2>
        <CTAButtons className="justify-center" />
      </div>
    </Section>
  );
}
