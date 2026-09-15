import type { Metadata } from "next";
import SolutionFlow from "@/components/request/SolutionFlow";
import { sectors, useCases } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  return {
    title:
      lang === "ar"
        ? "اطلب حلاً ذكياً | أتمتة وتكامل أنظمة في قطر — إينا سمارت"
        : "Request a Smart Solution | Automation & System Integration Qatar | INA SMART",
    description:
      lang === "ar"
        ? "صِف التحدي وسنعود بمفهوم حل وميزانية تقديرية — أتمتة صناعية وذكاء اصطناعي وتكامل أنظمة ولوحات ذكية في قطر."
        : "Describe the challenge and we reply with a solution concept and indicative budget — industrial automation, AI, system integration and smart dashboards in Qatar.",
    keywords: ["System integrator Qatar", "Industrial automation Qatar", "Automation solutions Qatar", "Digital transformation Qatar", "Smart dashboards Qatar"],
    alternates: { canonical: `/${lang}/request/solution` },
  };
}

import { Suspense } from "react";

export default function RequestSolutionPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;

  return (
    <Suspense fallback={<div className="py-22 text-center text-ink-muted">Loading...</div>}>
      <SolutionFlow lang={lang} />
    </Suspense>
  );
}
