import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTAButtons } from "@/components/CTAButtons";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple pricing aligned to outcomes for Polaris Medspa Ops.",
};

export default function PricingPage() {
  const implementationFeatures = [
    "Setup and configuration",
    "Hours and overflow logic",
    "Custom intake flow design",
    "SMS template creation",
    "Testing and validation",
  ];

  const monthlyFeatures = [
    "24/7 overflow coverage",
    "SMS follow-up automation",
    "Lead summary delivery",
    "Ongoing system maintenance",
    "Monthly performance reports",
  ];

  const notes = [
    "Month-to-month billing, no long-term contract",
    "One phone line and one location in v1",
    "Additional locations scoped separately",
  ];

  return (
    <>
      <Section background="white" className="pt-12 md:pt-20">
        <SectionHeader
          title="Simple pricing, aligned to outcomes."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Implementation Card */}
          <Card className="flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary-dark mb-2">Implementation</h3>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-4">
                $1,500 - $2,500
              </div>
              <p className="text-neutral-600">One-time setup fee</p>
            </div>

            <div className="flex-grow">
              <h4 className="font-semibold text-primary-dark mb-3">Includes:</h4>
              <ul className="space-y-3">
                {implementationFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center mt-0.5">
                      <Check size={14} />
                    </div>
                    <span className="text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Monthly Card */}
          <Card className="flex flex-col border-2 border-primary">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary-dark mb-2">Monthly</h3>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-4">
                $750 - $1,500
              </div>
              <p className="text-neutral-600">Per month</p>
            </div>

            <div className="flex-grow">
              <h4 className="font-semibold text-primary-dark mb-3">Includes:</h4>
              <ul className="space-y-3">
                {monthlyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center mt-0.5">
                      <Check size={14} />
                    </div>
                    <span className="text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        {/* Notes */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-neutral-50">
            <h4 className="font-semibold text-primary-dark mb-4">Important Notes:</h4>
            <ul className="space-y-2">
              {notes.map((note, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-600">
                  <span className="text-primary mt-1">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
            Ready to get started?
          </h2>
          <CTAButtons className="justify-center" />
        </div>
      </Section>
    </>
  );
}
