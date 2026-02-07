"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, StepCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuoteForm } from "@/components/pricing/QuoteForm";
import { Check, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const pricingFAQs: FAQItem[] = [
  {
    question: "Does this replace my front desk?",
    answer: "No. Polaris handles overflow and after-hours coverage only. Your team manages primary intake during business hours. We catch the calls and texts they miss when busy or closed, so nothing falls through the cracks.",
  },
  {
    question: "Do you integrate with my booking system?",
    answer: "Yes. We integrate with most major scheduling platforms (Boulevard, Vagaro, Mindbody, Acuity, etc.). We can send booking links via SMS or help schedule appointments directly depending on your preference and system capabilities.",
  },
  {
    question: "How fast can we go live?",
    answer: "Most clinics go live within 7-14 days from kickoff. This includes setup, custom intake flow design, hours and overflow logic configuration, SMS template approval, and thorough testing.",
  },
  {
    question: "What affects pricing?",
    answer: "Pricing depends on your call volume, number of services offered, booking flow complexity, and channels (phone, SMS, Instagram DM, webchat). During the free audit, we'll assess your specific needs and provide a custom quote.",
  },
  {
    question: "What if I already use a CRM?",
    answer: "Great! We can send lead summaries directly to most CRMs via email, webhook, or API integration. If you're using a system like HubSpot, Salesforce, or a specialized medspa platform, we can usually integrate directly.",
  },
  {
    question: "Can you handle after-hours and weekends?",
    answer: "Absolutely. We're available 24/7/365. You set your business hours, and we automatically take over when your team is unavailable — evenings, weekends, holidays, or when your staff is busy with in-person clients.",
  },
  {
    question: "Can we start month-to-month after 90 days?",
    answer: "Yes. After the initial 90-day ramp-up period (to ensure everything is optimized), we move to flexible month-to-month billing. No long-term contracts or cancellation fees.",
  },
  {
    question: "What about SMS compliance and TCPA?",
    answer: "We follow all SMS compliance regulations including TCPA, CTIA guidelines, and carrier requirements. All messages include proper identification, opt-out language, and consent tracking. You stay compliant, always.",
  },
];

function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {pricingFAQs.map((faq, index) => (
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
  );
}

export default function PricingPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const includedFeatures = [
    "AI front desk for calls, texts, and missed leads",
    "Appointment booking and confirmations",
    "No-show reduction with automated follow-ups",
    "Lead reactivation for dormant prospects",
    "Real-time reporting and lead summaries",
    "Ongoing optimization and support",
    "CRM and booking system integration",
  ];

  const goodFitItems = [
    "You're missing calls during peak hours or after closing",
    "You want to reduce no-shows and fill last-minute cancellations",
    "You're spending too much on ads without converting leads",
    "You have a booking system but need help getting leads into it",
    "You want 24/7 coverage without hiring more staff",
  ];

  const notFitItems = [
    "You're looking for a solution under $500/month",
    "You only get a few leads per month and don't need overflow support",
    "You need someone to provide medical advice or clinical triage",
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="pt-12 md:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
            How Pricing Works
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Custom pricing based on your call volume, services, and booking flow. Most clinics invest <span className="font-semibold text-primary-dark">$1–2k/month after setup</span>, with implementation typically between <span className="font-semibold text-primary-dark">$1.5k–$2.5k</span>.
          </p>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Pricing depends on your call volume, number of services, booking flow complexity, and channels (calls, SMS, Instagram DM, webchat). The best way to get an accurate quote is a <strong>free 15-minute audit</strong>.
          </p>
        </div>
      </Section>

      {/* What's Included */}
      <Section background="gray">
        <SectionHeader
          title="What's included"
          subtitle="Everything you need to never miss a lead again"
          centered
        />
        <div className="max-w-3xl mx-auto">
          <Card>
            <ul className="space-y-4">
              {includedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mt-0.5">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="text-lg text-neutral-600">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white">
        <SectionHeader
          title="How it works"
          subtitle="From audit to go-live in 3 simple steps"
          centered
        />
        <div className="max-w-4xl mx-auto space-y-6">
          <StepCard
            step={1}
            title="Quick audit (15 minutes)"
            description="We analyze your current call flow, booking process, and lead volume. You'll walk away with a clear picture of how many leads you're missing and what it's costing you."
          />
          <StepCard
            step={2}
            title="Build + connect (7–14 days)"
            description="We design your custom intake flow, set up hours and overflow logic, create SMS templates, and integrate with your booking system. You approve everything before we go live."
          />
          <StepCard
            step={3}
            title="Monitor + optimize (ongoing)"
            description="We deliver real-time lead summaries, monthly performance reports, and continuously optimize based on your feedback. You stay in control with full visibility."
          />
        </div>
      </Section>

      {/* Good Fit / Not a Fit */}
      <Section background="gray">
        <SectionHeader title="Is this right for you?" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Good Fit */}
          <Card className="border-2 border-primary">
            <h3 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <Check size={20} strokeWidth={3} />
              </div>
              Good fit if...
            </h3>
            <ul className="space-y-4">
              {goodFitItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1.5 text-lg">•</span>
                  <span className="text-neutral-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Not a Fit */}
          <Card className="border-2 border-neutral-300">
            <h3 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-600 text-white flex items-center justify-center flex-shrink-0">
                <X size={20} strokeWidth={3} />
              </div>
              Not a fit if...
            </h3>
            <ul className="space-y-4">
              {notFitItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-neutral-600 mt-1.5 text-lg">•</span>
                  <span className="text-neutral-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* FAQs */}
      <Section background="white">
        <SectionHeader title="Frequently asked questions" centered />
        <PricingFAQ />
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          {!showQuoteForm ? (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
                Ready to stop missing leads?
              </h2>
              <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
                Get a free 15-minute audit and see exactly how many leads you're missing — and what it's costing you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Get a Free Audit
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => setShowQuoteForm(true)}
                >
                  Request a Quote
                </Button>
              </div>
              <p className="text-sm text-neutral-600 mt-6">
                No pressure. No obligation. Just real insight into your lead flow.
              </p>
            </div>
          ) : (
            <div>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                  Request Your Custom Quote
                </h2>
                <p className="text-lg text-neutral-600">
                  Tell us about your clinic and we'll provide a tailored quote within 1 business day.
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <Card>
                  <QuoteForm />
                </Card>
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowQuoteForm(false)}
                  className="text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  ← Back to pricing
                </button>
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
