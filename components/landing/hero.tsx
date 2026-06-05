import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Highlight } from "./highlight";
import { Navbar } from "./navbar";

/** Stylised laptop showing a lesson — stands in for the comp's illustration. */
function LaptopMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden>
      {/* Screen */}
      <div className="rounded-2xl border-8 border-brand-ink bg-white shadow-2xl">
        <div className="space-y-3 p-5">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-brand-coral" />
            <span className="size-2.5 rounded-full bg-brand-green" />
            <span className="size-2.5 rounded-full bg-brand-ink/20" />
          </div>
          <div className="flex gap-3">
            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-coral text-white">
              <Play className="size-5 fill-current" />
            </div>
            <div className="flex-1 space-y-2 pt-1.5">
              <div className="h-2.5 w-3/4 rounded-full bg-brand-ink/15" />
              <div className="h-2.5 w-1/2 rounded-full bg-brand-ink/10" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="h-12 rounded-lg bg-brand-green-soft" />
            <div className="h-12 rounded-lg bg-brand-coral-soft" />
            <div className="h-12 rounded-lg bg-brand-sand" />
          </div>
        </div>
      </div>
      {/* Base */}
      <div className="mx-auto h-3 w-[112%] -translate-x-[5%] rounded-b-xl bg-brand-ink" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      {/* Angled green backdrop shared with the navbar */}
      <div className="absolute inset-x-0 -top-48 -z-10 h-[620px] -skew-y-6 bg-brand-green-soft" />
      <div className="absolute -top-24 right-0 -z-10 h-[560px] w-1/2 -skew-y-6 bg-brand-green/15" />

      {/* Decorative dots */}
      <span className="absolute left-[8%] top-40 -z-10 size-3 rounded-full bg-brand-coral" />
      <span className="absolute right-[12%] top-24 -z-10 size-4 rounded-full bg-brand-green" />
      <span className="absolute left-1/2 top-72 -z-10 size-2 rounded-full bg-brand-coral/70" />

      <Navbar />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-6 sm:px-6 md:grid-cols-2 md:pb-28 md:pt-12">
        <div className="space-y-6">

          <h1
            id="hero-heading"
            className="text-4xl font-extrabold leading-tight text-brand-ink sm:text-5xl lg:text-6xl"
          >
            Nauči Engleski <Highlight>ONLINE</Highlight> već danas
          </h1>

          <p className="max-w-md text-base text-brand-ink/70 sm:text-lg">
            Interaktivni kursevi, materijali i praćenje napretka — sve na jednom
            mestu. Uči svojim tempom, uz pomoć profesora i AI povratnih
            informacija.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              render={<Link href="/register" />}
              size="lg"
              className="h-12 rounded-full bg-brand-coral px-8 text-base text-white hover:bg-brand-coral-dark"
            >
              Registruj se
            </Button>
            <Button
              render={<Link href="#kursevi" />}
              size="lg"
              variant="ghost"
              className="h-12 rounded-full px-6 text-base text-brand-ink hover:bg-white/60"
            >
              Pogledaj kurseve
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 mx-auto size-72 rounded-full bg-brand-green/30 blur-2xl md:size-96" />
          <LaptopMockup />
        </div>
      </div>
    </section>
  );
}
