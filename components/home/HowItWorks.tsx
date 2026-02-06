import React from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { StepCard } from "@/components/ui/Card";

export function HowItWorks() {
  const steps = [
    {
      title: "Cover Missed Calls",
      description: "We handle overflow calls when your team is busy and all after-hours inquiries when your clinic is closed.",
    },
    {
      title: "Capture Lead Details",
      description: "We collect the caller's name, phone number, and which service they're interested in (Botox, fillers, etc.).",
    },
    {
      title: "Confirm & Summarize",
      description: "Lead gets an instant SMS with booking link. Your team receives a clean summary to follow up and schedule.",
    },
  ];

  return (
    <Section background="gray">
      <SectionHeader title="How it works" centered />
      <div className="space-y-6 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            step={index + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </Section>
  );
}
