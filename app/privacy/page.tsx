import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Polaris Medspa Ops.",
};

export default function PrivacyPage() {
  return (
    <Section background="white" className="pt-12 md:pt-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Privacy Policy"
          subtitle="Last updated: February 2025"
          centered
        />

        <div className="prose prose-lg max-w-none space-y-8 text-neutral-600">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Introduction</h2>
            <p>
              Polaris Medspa Ops (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Contact information (name, email address, phone number)</li>
              <li>Clinic or business information</li>
              <li>Messages and inquiries submitted through our contact form</li>
              <li>Call recordings and transcripts from demo calls (for demonstration purposes only)</li>
            </ul>
            <p className="mt-3">
              We may also automatically collect certain information about your device and usage of our website through cookies and similar technologies, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver and improve our services</li>
              <li>Send you updates, marketing communications, and service announcements (with your consent)</li>
              <li>Analyze usage patterns and improve our website</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Data Sharing and Disclosure</h2>
            <p>
              We do not sell, rent, or share your personal information with third parties for their marketing purposes. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Service providers who assist us in operating our business (e.g., hosting, analytics)</li>
              <li>Professional advisors (e.g., lawyers, accountants)</li>
              <li>Law enforcement or regulatory authorities when required by law</li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mt-3">
              Email:{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:underline">
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>

          {/* Changes to Policy */}
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
