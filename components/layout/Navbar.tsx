"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: siteConfig.urls.home, label: "Home" },
    { href: siteConfig.urls.pricing, label: "Pricing" },
    { href: siteConfig.urls.about, label: "About" },
    { href: siteConfig.urls.contact, label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={siteConfig.urls.home} className="flex items-center">
            <Image
              src="/logos/horizontal-cropped.png"
              alt={siteConfig.name}
              width={800}
              height={200}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-900 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href={`tel:${siteConfig.phone}`}>
              <Button variant="primary" size="md">
                Call Live Demo
              </Button>
            </Link>
            <Link href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="md">
                Book a Call
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-neutral-900 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-900 hover:text-primary font-medium transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <Link href={`tel:${siteConfig.phone}`} className="block">
                  <Button variant="primary" size="md" className="w-full">
                    Call Live Demo
                  </Button>
                </Link>
                <Link href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="secondary" size="md" className="w-full">
                    Book a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
