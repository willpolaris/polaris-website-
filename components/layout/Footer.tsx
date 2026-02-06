import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: siteConfig.urls.privacy, label: "Privacy" },
    { href: siteConfig.urls.contact, label: "Contact" },
    { href: siteConfig.urls.pricing, label: "Pricing" },
  ];

  return (
    <footer className="bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <Link href={siteConfig.urls.home} className="flex items-center">
            <Image
              src="/logos/horizontal.png"
              alt={siteConfig.name}
              width={180}
              height={45}
              className="h-9 w-auto"
            />
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-600 hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-neutral-600 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
