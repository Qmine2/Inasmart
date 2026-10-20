import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import MetaPixel from "@/components/MetaPixel";
import { SEO_KEYWORDS, SEO_KEYWORDS_AR, SITE_URL } from "@/lib/content";
import { ibmPlexSans, ibmPlexSansArabic, spaceGrotesk } from "@/lib/fonts";
import { DEFAULT_LOCALE, LOCALES, dirFor, isValidLocale, type Lang } from "@/lib/locale";
import "../globals.css";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;

  const title =
    lang === "ar"
      ? "إينا سمارت | تكامل الأنظمة والحلول الذكية وتوريد التقنية في قطر"
      : "INA SMART | System Integrator & Smart Technology Solutions in Qatar";
  const description =
    lang === "ar"
      ? "إينا سمارت شركة تكامل أنظمة وتوريد تقنية متقدمة في الدوحة، قطر: حلول صوتية ومرئية وفصول ذكية ومختبرات روبوتات وأتمتة صناعية وتتبع مستودعات ولوحات ذكية — من جهاز واحد إلى حل متكامل."
      : "INA SMART is a Doha-based system integrator and advanced technology supplier in Qatar — AV and meeting room solutions, smart classrooms, STEM and robotics labs, industrial automation, warehouse tracking and smart dashboards, from a single device to a complete connected solution.";

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: "%s" },
    description,
    keywords: lang === "ar" ? SEO_KEYWORDS_AR : SEO_KEYWORDS,
    alternates: { canonical: `/${lang}`, languages: { en: "/en", ar: "/ar" } },
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
      locale: lang === "ar" ? "ar_QA" : "en_QA",
      title,
      description,
      url: `/${lang}`,
      images: [
        {
          url: "/og-image-1200x630.png",
          width: 1200,
          height: 630,
          alt: "INA SMART",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image-1200x630.png"],
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const dir = dirFor(lang);
  const fontVars = `${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexSansArabic.variable}`;
  const fontStyle =
    lang === "ar"
      ? ({ "--font-display": "var(--font-arabic)", "--font-body": "var(--font-arabic)" } as React.CSSProperties)
      : ({ "--font-display": "var(--font-display-latin)", "--font-body": "var(--font-body-latin)" } as React.CSSProperties);

  return (
    <html lang={lang} dir={dir} className={fontVars}>
      <body style={fontStyle} className="flex min-h-screen flex-col font-body text-ink">
        <MetaPixel />
        <JsonLd lang={lang} />
        <Header lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
