"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  clinicName: string;
  email: string;
  phone: string;
  bookingSystem: string;
  monthlyLeadVolume: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  clinicName?: string;
  email?: string;
  phone?: string;
  bookingSystem?: string;
  monthlyLeadVolume?: string;
  consent?: string;
}

export function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    clinicName: "",
    email: "",
    phone: "",
    bookingSystem: "",
    monthlyLeadVolume: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.clinicName.trim()) {
      newErrors.clinicName = "Clinic name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.bookingSystem.trim()) {
      newErrors.bookingSystem = "Please specify your booking system";
    }

    if (!formData.monthlyLeadVolume.trim()) {
      newErrors.monthlyLeadVolume = "Please estimate your monthly lead volume";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to be contacted";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // TODO: Integrate with email service or CRM
    // For now, just simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Quote request submitted:", formData);

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form
    setFormData({
      name: "",
      clinicName: "",
      email: "",
      phone: "",
      bookingSystem: "",
      monthlyLeadVolume: "",
      consent: false,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-primary-light bg-opacity-10 border-2 border-primary rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-primary-dark mb-2">
          Thank you for your interest!
        </h3>
        <p className="text-neutral-600">
          We&apos;ll review your information and get back to you within 1 business day with a custom quote and next steps.
        </p>
        <Button
          variant="outline"
          size="md"
          className="mt-6"
          onClick={() => setIsSuccess(false)}
        >
          Request another quote
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.name ? "border-red-500" : "border-neutral-300"
          }`}
          placeholder="Your full name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Clinic Name */}
      <div>
        <label htmlFor="clinicName" className="block text-sm font-medium text-neutral-900 mb-2">
          Clinic Name *
        </label>
        <input
          type="text"
          id="clinicName"
          name="clinicName"
          value={formData.clinicName}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.clinicName ? "border-red-500" : "border-neutral-300"
          }`}
          placeholder="Your clinic or medspa name"
        />
        {errors.clinicName && <p className="text-red-500 text-sm mt-1">{errors.clinicName}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.email ? "border-red-500" : "border-neutral-300"
          }`}
          placeholder="you@clinic.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.phone ? "border-red-500" : "border-neutral-300"
          }`}
          placeholder="(555) 123-4567"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Current Booking System */}
      <div>
        <label htmlFor="bookingSystem" className="block text-sm font-medium text-neutral-900 mb-2">
          Current Booking System *
        </label>
        <select
          id="bookingSystem"
          name="bookingSystem"
          value={formData.bookingSystem}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.bookingSystem ? "border-red-500" : "border-neutral-300"
          }`}
        >
          <option value="">Select your system</option>
          <option value="Boulevard">Boulevard</option>
          <option value="Vagaro">Vagaro</option>
          <option value="Mindbody">Mindbody</option>
          <option value="Acuity">Acuity Scheduling</option>
          <option value="Calendly">Calendly</option>
          <option value="Jane">Jane</option>
          <option value="Other">Other</option>
          <option value="None">No system yet</option>
        </select>
        {errors.bookingSystem && <p className="text-red-500 text-sm mt-1">{errors.bookingSystem}</p>}
      </div>

      {/* Monthly Lead Volume */}
      <div>
        <label htmlFor="monthlyLeadVolume" className="block text-sm font-medium text-neutral-900 mb-2">
          Estimated Monthly Lead Volume *
        </label>
        <select
          id="monthlyLeadVolume"
          name="monthlyLeadVolume"
          value={formData.monthlyLeadVolume}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.monthlyLeadVolume ? "border-red-500" : "border-neutral-300"
          }`}
        >
          <option value="">Select range</option>
          <option value="0-50">0-50 leads/month</option>
          <option value="50-100">50-100 leads/month</option>
          <option value="100-200">100-200 leads/month</option>
          <option value="200-500">200-500 leads/month</option>
          <option value="500+">500+ leads/month</option>
          <option value="Not sure">Not sure yet</option>
        </select>
        {errors.monthlyLeadVolume && <p className="text-red-500 text-sm mt-1">{errors.monthlyLeadVolume}</p>}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-primary border-neutral-300 rounded focus:ring-2 focus:ring-primary"
          />
          <span className="text-sm text-neutral-600">
            By submitting, you agree to be contacted about Polaris Medspa Ops. *
          </span>
        </label>
        {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
      >
        Get Your Custom Quote
      </Button>
    </form>
  );
}
