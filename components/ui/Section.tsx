import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
  background?: "white" | "gray";
}

export function Section({ className, children, background = "white" }: SectionProps) {
  const bgStyles = {
    white: "bg-white",
    gray: "bg-neutral-50",
  };

  return (
    <section className={cn("py-16 md:py-24", bgStyles[background], className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">{title}</h2>
      {subtitle && <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}
