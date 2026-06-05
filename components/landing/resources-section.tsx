import { BookOpen, FileText, Megaphone, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Highlight } from "./highlight";

const RESOURCES = [
  {
    icon: BookOpen,
    title: "Gramatičke lekcije",
    text: "Jasna objašnjenja sa primerima i prevodima na srpski.",
  },
  {
    icon: Video,
    title: "Video materijali",
    text: "Kratki video klipovi za slušanje i izgovor.",
  },
  {
    icon: FileText,
    title: "Vežbe i testovi",
    text: "Proveri znanje uz vežbe sa trenutnim rešenjima.",
  },
];

export function ResourcesSection() {
  return (
    <section id="resursi" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Dark banner */}
        <div className="relative overflow-hidden rounded-3xl bg-brand-ink px-6 py-10 sm:px-10 md:py-12">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Na raspolaganju su ti i naši{" "}
              <Highlight>besplatni</Highlight> resursi
            </h2>
            <p className="mt-3 max-w-md text-white/70">
              Počni bez ikakvih troškova i istraži materijale dostupne svim
              polaznicima.
            </p>
          </div>
          <Megaphone
            className="absolute -right-6 -top-6 z-0 size-48 rotate-12 text-brand-green/20 md:right-6 md:top-1/2 md:size-40 md:-translate-y-1/2"
            aria-hidden
          />
          <span className="absolute bottom-6 right-10 z-0 size-3 rounded-full bg-brand-coral" />
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map(({ icon: Icon, title, text }) => (
            <Card
              key={title}
              className="rounded-3xl border-transparent bg-brand-green text-white shadow-md transition-transform hover:-translate-y-1"
            >
              <CardContent className="space-y-3 p-6">
                <span className="grid size-12 place-items-center rounded-2xl bg-white/20">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-white/85">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
