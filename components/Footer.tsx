import Image from "next/image";
import Link from "next/link";
import { CALENDLY_URL, CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP_DISPLAY, SOCIAL_LINKS, t } from "@/lib/content";
import type { Lang } from "@/lib/locale";
import WhatsAppLink from "./WhatsAppLink";

export default function Footer({ lang }: { lang: Lang }) {
  const copy = t(lang);

  const exploreLinks = [
    { key: "useCases", href: "use-cases", label: copy.useCasesSection.kicker },
    { key: "solution", href: "request/solution", label: copy.nav.solutionTitle },
    { key: "technology", href: "request/technology", label: copy.nav.techTitle },
    { key: "products", href: "products", label: copy.productsPage.title },
    { key: "sectors", href: "sectors", label: copy.sectorsSection.title },
    { key: "about", href: "about", label: copy.aboutPage.title },
    { key: "contact", href: "contact", label: copy.contactPage.title },
  ];

  return (
    <footer className="mt-auto border-t border-hairline-soft bg-surface">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-11 px-8 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="block h-[34px] w-[34px] overflow-hidden rounded-[9px] bg-indigo-mid">
              <Image src="/logo-mark.jpg" alt="" width={34} height={34} className="h-[34px] w-[34px] scale-[1.35] object-cover" />
            </span>
            <span className="font-display text-lg font-bold text-ink">
              INA<span className="text-primary">SMART</span>
            </span>
          </div>
          <p className="mt-3.5 max-w-xs text-sm leading-relaxed text-ink-muted">{copy.footer.tagline}</p>
          <p className="mt-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.footer.motto}</p>
          <div className="mt-5 flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline-soft bg-surface text-ink-muted transition-all duration-200 hover:border-primary hover:text-primary hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline-soft bg-surface text-ink-muted transition-all duration-200 hover:border-primary hover:text-primary hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline-soft bg-surface text-ink-muted transition-all duration-200 hover:border-primary hover:text-primary hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.887v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.footer.explore}</p>
          <div className="flex flex-col gap-2">
            {exploreLinks.map((item) => (
              <Link key={item.key} href={`/${lang}/${item.href}`} className="w-fit text-sm text-ink-soft transition-colors duration-200 hover:text-primary">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.footer.contact}</p>
          <div className="flex flex-col gap-2 text-sm text-ink-soft">
            <span dir="ltr" style={{ unicodeBidi: "isolate", display: "inline-block" }} className="w-fit">
              {CONTACT_EMAIL}
            </span>
            <span dir="ltr" style={{ unicodeBidi: "isolate", display: "inline-block" }} className="w-fit">
              {CONTACT_PHONE}
            </span>
            <WhatsAppLink className="w-fit transition-colors duration-200 hover:text-primary">
              {copy.whatsappNav}:{" "}
              <span dir="ltr" style={{ unicodeBidi: "isolate", display: "inline-block" }}>
                {CONTACT_WHATSAPP_DISPLAY}
              </span>
            </WhatsAppLink>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="w-fit transition-colors duration-200 hover:text-primary">
              {copy.nav.cta}
            </a>
            <span>{CONTACT_ADDRESS[lang]}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-hairline-soft py-5 text-center text-xs text-ink-faint">© 2026 INA SMART TRADING AND SERVICES W.L.L · CR 206976 · Doha, Qatar</div>
    </footer>
  );
}
