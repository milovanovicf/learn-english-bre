"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";

const NAV_LINKS = [
  { label: "Kursevi", href: "#kursevi" },
  { label: "Resursi", href: "#resursi" },
  { label: "Kako radi", href: "#kako-radi" },
];

function SearchBox({ className }: { className?: string }) {
  return (
    <form role="search" className={className}>
      <label htmlFor="site-search" className="sr-only">
        Pretraži kurseve
      </label>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          id="site-search"
          type="search"
          placeholder="Pretraži kurseve…"
          className="rounded-full border-transparent bg-white pl-9 shadow-sm"
        />
      </div>
    </form>
  );
}

export function Navbar() {
  return (
    <header className="relative z-20">
      <nav
        aria-label="Glavna navigacija"
        className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-6 sm:px-6"
      >
        <Link href="/" aria-label="LinguaSrb početna" className="shrink-0">
          <Logo />
        </Link>

        <SearchBox className="hidden flex-1 md:block md:max-w-xs" />

        <ul className="ml-auto hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-brand-ink/80 transition-colors hover:text-brand-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-2 md:flex lg:ml-6">
          <Button
            render={<Link href="/login" />}
            variant="ghost"
            size="lg"
            className="rounded-full px-5 text-brand-ink hover:bg-white/60"
          >
            Uloguj se
          </Button>
          <Button
            render={<Link href="/register" />}
            size="lg"
            className="rounded-full bg-brand-coral px-6 text-white hover:bg-brand-coral-dark"
          >
            Registruj se
          </Button>
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger
            className="ml-auto md:hidden"
            render={
              <Button variant="ghost" size="icon" aria-label="Otvori meni" />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 px-4">
              <SearchBox />
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-lg px-2 py-2 text-sm font-medium text-brand-ink hover:bg-brand-green-soft"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex flex-col gap-2">
                <Button
                  render={<Link href="/login" />}
                  variant="outline"
                  className="rounded-full"
                >
                  Uloguj se
                </Button>
                <Button
                  render={<Link href="/register" />}
                  className="rounded-full bg-brand-coral text-white hover:bg-brand-coral-dark"
                >
                  Registruj se
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
