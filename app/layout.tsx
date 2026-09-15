import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "INA SMART",
  description: "INA SMART | System Integrator & Smart Technology Solutions in Qatar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
