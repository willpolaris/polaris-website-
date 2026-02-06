import QRCode from "qrcode";

/**
 * Generate a QR code as a data URL
 */
export async function generateQRCode(text: string): Promise<string> {
  try {
    return await QRCode.toDataURL(text, {
      width: 200,
      margin: 2,
      color: {
        dark: "#1E5468", // Primary dark color from brand
        light: "#FFFFFF",
      },
    });
  } catch (error) {
    console.error("Failed to generate QR code:", error);
    return "";
  }
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
    return false;
  }
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, "");

  // Format as (XXX) XXX-XXXX if it's a US number
  if (cleaned.length === 11 && cleaned.startsWith("1")) {
    return `(${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  } else if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }

  return phone;
}

/**
 * Utility to combine class names
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
