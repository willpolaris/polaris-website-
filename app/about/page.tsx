import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTAButtons } from "@/components/CTAButtons";
import { Target, Shield, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Polaris Medspa Ops and our approach to medspa intake and follow-up.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <Zap size={32} />,
      title: "Reliability over novelty",
      description: "We focus on proven systems that work every day, not experimental technology.",
    },
    {
      icon: <Shield size={32} />,
      title: "Clear boundaries",
      description: "We stay within non-clinical intake only and escalate complex inquiries to your team.",
    },
    {
      icon: <Heart size={32} />,
      title: "Patient experience first",
      description: "Every interaction is designed to feel professional, warm, and helpful.",
    },
    {
      icon: <Target size={32} />,
      title: "Simple systems that work daily",
      description: "No complexity, no training burden. Just reliable overflow and after-hours coverage.",
    },
  ];

  return (
    <>
      <Section background="white" className="pt-12 md:pt-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Built for medspas that value speed, clarity, and patient experience."
            centered
          />

          <div className="prose prose-lg max-w-none space-y-6 text-neutral-600">
            <p className="text-lg md:text-xl leading-relaxed">
              Polaris Medspa Ops solves the problem of missed calls and slow follow-up. When your front desk is swamped during peak hours or your clinic is closed, new leads often go unanswered. That means lost revenue and frustrated patients.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Our intake systems are designed to feel like a professional front desk while staying within safe, non-clinical boundaries. We capture essential information, confirm interest via SMS, and deliver clean summaries to your team for follow-up.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              This is overflow and after-hours coverage that supports your team, not replaces them. Your staff handles primary intake during business hours. We catch everything else.
            </p>
          </div>
        </div>
      </Section>

      {/* Values Grid */}
      <Section background="gray">
        <SectionHeader title="Our values" centered />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
            See it in action
          </h2>
          <CTAButtons className="justify-center" />
        </div>
      </Section>
    </>
  );
}
