import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

export function Card({ className, children, icon, title, description }: CardProps) {
  return (
    <div className={cn("bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow", className)}>
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      {title && <h3 className="text-xl md:text-2xl font-semibold text-primary-dark mb-3">{title}</h3>}
      {description && <p className="text-neutral-600 leading-relaxed">{description}</p>}
      {!title && !description && children}
    </div>
  );
}

export interface StepCardProps {
  step: number;
  title: string;
  description: string;
  className?: string;
}

export function StepCard({ step, title, description, className }: StepCardProps) {
  return (
    <div className={cn("relative bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100", className)}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
          {step}
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-primary-dark mb-2">{title}</h3>
          <p className="text-neutral-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
