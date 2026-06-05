import { Presentation } from "lucide-react";
import { Highlight } from "./highlight";

const STEPS = [
  {
    title: "Registruj se",
    text: "Napravi besplatan nalog za par sekundi.",
  },
  {
    title: "Izaberi kurs",
    text: "Pronađi kurs koji odgovara tvom nivou znanja.",
  },
  {
    title: "Kreni da učiš",
    text: "Prati lekcije i napreduj svojim tempom.",
  },
];

export function StepsSection() {
  return (
    <section id="kako-radi" className="bg-brand-ink py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div className="space-y-8">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Učenje <Highlight>nikad</Highlight> nije bilo brže
          </h2>
          <ol className="space-y-5">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex items-start gap-4">
                <span
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-coral font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-white">{step.title}</h3>
                  <p className="text-sm text-white/70">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative" aria-hidden>
          <div className="absolute inset-0 mx-auto size-72 rounded-full bg-brand-green/20 blur-2xl md:size-96" />
          <div className="relative mx-auto w-full max-w-sm rounded-3xl bg-brand-ink-soft p-6 ring-1 ring-white/10">
            <div className="grid size-14 place-items-center rounded-2xl bg-brand-green text-white">
              <Presentation className="size-7" />
            </div>
            <div className="mt-5 space-y-3">
              <div className="h-2.5 w-2/3 rounded-full bg-white/20" />
              <div className="h-2.5 w-full rounded-full bg-white/10" />
              <div className="h-2.5 w-5/6 rounded-full bg-white/10" />
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-brand-coral/15 p-3">
              <span className="size-9 rounded-full bg-brand-coral" />
              <div className="flex-1 space-y-1.5">
                <div className="h-2 w-1/2 rounded-full bg-white/25" />
                <div className="h-2 w-3/4 rounded-full bg-white/15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
