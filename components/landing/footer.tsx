import Link from "next/link";
import { Logo } from "./logo";

const COLUMNS = [
  {
    heading: "Platforma",
    links: [
      { label: "Kursevi", href: "#kursevi" },
      { label: "Resursi", href: "#resursi" },
      { label: "Kako radi", href: "#kako-radi" },
    ],
  },
  {
    heading: "Nalog",
    links: [
      { label: "Uloguj se", href: "/login" },
      { label: "Registruj se", href: "/register" },
      { label: "Za profesore", href: "/register" },
    ],
  },
  {
    heading: "Podrška",
    links: [
      { label: "Često postavljana pitanja", href: "#" },
      { label: "Kontakt", href: "#" },
      { label: "Uslovi korišćenja", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-coral text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="space-y-3">
            <Logo tone="light" />
            <p className="max-w-xs text-sm text-white/80">
              Online platforma za učenje engleskog jezika za govornike srpskog.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-white/90">
                {col.heading}
              </h2>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 text-sm text-white/80 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Learn English Bre! Sva prava
            zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
