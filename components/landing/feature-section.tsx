import { Highlight } from "./highlight";
import { Check } from "lucide-react";

const POINTS = [
  "Lekcije, video materijali i vežbe u jednom toku",
  "Jasan pregled napretka po svakom kursu",
  "Pristup sa računara, tableta i telefona",
];

/** Whiteboard-style illustration placeholder. */
function BoardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden>
      <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-brand-ink/5">
        <div className="space-y-4">
          <div className="h-2.5 w-24 rounded-full bg-brand-green" />
          <div className="space-y-2">
            <div className="h-2 w-full rounded-full bg-brand-ink/10" />
            <div className="h-2 w-5/6 rounded-full bg-brand-ink/10" />
            <div className="h-2 w-2/3 rounded-full bg-brand-ink/10" />
          </div>
          <div className="flex items-end gap-3 pt-2">
            <div className="h-16 w-1/3 rounded-xl bg-brand-coral-soft" />
            <div className="h-24 w-1/3 rounded-xl bg-brand-green-soft" />
            <div className="h-12 w-1/3 rounded-xl bg-brand-sand" />
          </div>
        </div>
      </div>
      <span className="absolute -left-3 -top-3 size-6 rounded-full bg-brand-coral" />
      <span className="absolute -bottom-2 right-6 size-4 rounded-full bg-brand-green" />
    </div>
  );
}

export function FeatureSection() {
  return (
    <section className="bg-brand-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <BoardMockup />
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
            Sve na <Highlight>JEDNOM</Highlight> mestu!
          </h2>
          <p className="max-w-md text-brand-ink/70">
            Bez prebacivanja između alata. Kursevi, materijali, zadaci i tvoj
            napredak — sve te čeka na jednom, preglednom mestu.
          </p>
          <ul className="space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-green text-white">
                  <Check className="size-4" aria-hidden />
                </span>
                <span className="text-brand-ink/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
