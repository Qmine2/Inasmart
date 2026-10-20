import type { Metadata } from "next";
import MetaPixel from "@/components/MetaPixel";
import { SITE_URL } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "INA SMART | Smart Technology & AI Automation in Qatar",
  description:
    "We deliver smart technology and build AI automation for schools, labs, offices and businesses in Qatar. Buy,Build, Solve",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "INA SMART",
    title: "INA SMART | System Integrator & Smart Technology Solutions in Qatar",
    description:
      "INA SMART is a Doha-based system integrator and advanced technology supplier in Qatar — AV and meeting room solutions, smart classrooms, STEM and robotics labs, industrial automation, warehouse tracking and smart dashboards.",
    url: SITE_URL,
    images: [
      {
        url: "/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "INA SMART — Smart Technology Solutions & System Integrator",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INA SMART | System Integrator & Smart Technology Solutions in Qatar",
    description:
      "INA SMART is a Doha-based system integrator and advanced technology supplier in Qatar — AV and meeting room solutions, smart classrooms, STEM and robotics labs, industrial automation, warehouse tracking and smart dashboards.",
    images: ["/og-image-1200x630.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}

