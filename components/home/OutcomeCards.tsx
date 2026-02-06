import React from "react";
import { Phone, MessageSquare, ClipboardList } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function OutcomeCards() {
  const outcomes = [
    {
      icon: <Phone size={32} />,
      title: "Always Answered",
      description: "Overflow and after-hours coverage means no call goes unanswered when your team is busy or closed.",
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Instant Follow-Up",
      description: "SMS confirmation sent to leads in under 60 seconds with booking information and next steps.",
    },
    {
      icon: <ClipboardList size={32} />,
      title: "Cleaner Intake",
      description: "Staff receives concise lead summaries with contact info and service interest, ready to book.",
    },
  ];

  return (
    <Section background="white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {outcomes.map((outcome, index) => (
          <Card
            key={index}
            icon={outcome.icon}
            title={outcome.title}
            description={outcome.description}
          />
        ))}
      </div>
    </Section>
  );
}
