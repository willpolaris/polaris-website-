"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is this replacing my front desk?",
    answer: "No. This is overflow and after-hours coverage only. Your team handles primary intake during business hours. We catch the calls they miss when busy or closed.",
  },
  {
    question: "What if it says the wrong thing?",
    answer: "We follow strict non-clinical scripts focused on intake only. If a caller asks medical questions, the system escalates to your team. We never provide medical advice or treatment recommendations.",
  },
  {
    question: "How fast can we go live?",
    answer: "Typically 1-2 weeks from kickoff to launch. This includes setup, testing your hours logic, overflow rules, intake flow customization, and SMS template approval.",
  },
  {
    question: "Will it work with our booking link?",
    answer: "Yes. We can send your existing online booking link via SMS to new leads, or direct them to call back during business hours if you prefer manual scheduling.",
  },
  {
    question: "What does it cost?",
    answer: "Implementation runs $1,500 to $2,500 one-time. Monthly service is $750 to $1,500 depending on call volume and customization. Month-to-month, no long-term contract.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section background="gray">
      <SectionHeader title="Frequently asked questions" centered />
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-neutral-200 overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-neutral-50 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-lg text-primary-dark pr-8">
                {faq.question}
              </span>
              <ChevronDown
                size={24}
                className={cn(
                  "flex-shrink-0 text-primary transition-transform",
                  openIndex === index && "transform rotate-180"
                )}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-neutral-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
