import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export interface CTAButtonsProps {
  className?: string;
}

export function CTAButtons({ className }: CTAButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className || ""}`}>
      <Link href={`tel:${siteConfig.phone}`}>
        <Button variant="primary" size="lg" className="w-full sm:w-auto">
          Call Live Demo
        </Button>
      </Link>
      <Link href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="secondary" size="lg" className="w-full sm:w-auto">
          Book a 15-min Call
        </Button>
      </Link>
    </div>
  );
}
