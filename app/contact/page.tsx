import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/contact/ContactForm";
import { DemoCallout } from "@/components/DemoCallout";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Polaris Medspa Ops or try our live demo.",
};

export default function ContactPage() {
  return (
    <>
      <Section background="white" className="pt-12 md:pt-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Get in touch"
            subtitle="Send us a message or try the live demo to hear our system in action."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <ContactForm />
              </Card>
            </div>

            {/* Live Demo */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  Try the Live Demo
                </h3>
                <p className="text-neutral-600 mb-6">
                  The fastest way to understand how Polaris Medspa Ops works is to call our live demo line and experience it yourself.
                </p>
              </div>

              <DemoCallout />

              <div className="bg-neutral-50 rounded-lg p-6">
                <h4 className="font-semibold text-primary-dark mb-2">
                  What to expect:
                </h4>
                <ul className="space-y-2 text-neutral-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Professional greeting and intake process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>SMS confirmation within 60 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Clean lead summary delivered to demo inbox</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
