import React from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { DemoCallout } from "@/components/DemoCallout";

export function LiveDemo() {
  return (
    <Section background="gray">
      <SectionHeader title="Hear it in action" centered />
      <DemoCallout />
    </Section>
  );
}
