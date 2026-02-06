"use client";

import React, { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateQRCode, copyToClipboard, formatPhoneNumber } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function DemoCallout() {
  const [qrCode, setQrCode] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if desktop
    setIsDesktop(window.innerWidth >= 768);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Generate QR code on mount (desktop only)
    if (isDesktop) {
      const telLink = `tel:${siteConfig.phone}`;
      generateQRCode(telLink).then(setQrCode);
    }
  }, [isDesktop]);

  const handleCopy = async () => {
    const success = await copyToClipboard(siteConfig.phone);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formattedPhone = formatPhoneNumber(siteConfig.phone);

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="space-y-6">
        {/* Phone Number */}
        <div className="text-center">
          <div className="text-sm font-medium text-neutral-600 mb-2">Live Demo Number</div>
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-3xl md:text-4xl font-bold text-primary-dark hover:text-primary transition-colors"
          >
            {formattedPhone}
          </a>
        </div>

        {/* Desktop Features: Copy Button and QR Code */}
        {isDesktop && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Copy Button */}
            <Button
              variant="outline"
              size="md"
              onClick={handleCopy}
              className="flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy Number
                </>
              )}
            </Button>

            {/* QR Code */}
            {qrCode && (
              <div className="flex flex-col items-center">
                <div className="bg-white p-2 rounded-lg border-2 border-neutral-100">
                  <img src={qrCode} alt="QR Code to call demo line" className="w-32 h-32" />
                </div>
                <p className="text-xs text-neutral-600 mt-2">Scan to call</p>
              </div>
            )}
          </div>
        )}

        {/* Instructions */}
        <div className="bg-neutral-50 rounded-lg p-4 md:p-6 space-y-3">
          <div className="text-sm font-medium text-neutral-900">
            Call and say:
          </div>
          <p className="text-base md:text-lg italic text-primary-dark">
            &quot;Hi, I&apos;m a new patient. I&apos;m interested in Botox.&quot;
          </p>
          <p className="text-xs text-neutral-600 border-t border-neutral-200 pt-3">
            <strong>Disclaimer:</strong> Demo environment. No medical advice.
          </p>
        </div>
      </div>
    </Card>
  );
}
