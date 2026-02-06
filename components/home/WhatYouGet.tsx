import React from "react";
import { Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

export function WhatYouGet() {
  const features = [
    "Overflow and after-hours call handling",
    "Basic non-clinical lead qualification",
    "SMS follow-up and booking link delivery",
    "Internal lead summaries for your team",
    "Safe escalation rules for complex inquiries",
  ];

  return (
    <Section background="white">
      <SectionHeader title="What you get" centered />
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mt-1">
                <Check size={16} />
              </div>
              <span className="text-lg text-neutral-900">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
