import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Highlight } from "./highlight";

const COURSES = [
  {
    title: "Engleski za početnike — A1",
    level: "Početni",
    text: "Osnove gramatike, izgovora i svakodnevnog rečnika.",
    tint: "from-brand-green to-brand-green-dark",
  },
  {
    title: "Konverzacija u praksi",
    level: "Srednji",
    text: "Govorne vežbe i situacije iz svakodnevnog života.",
    tint: "from-brand-coral to-brand-coral-dark",
  },
  {
    title: "Poslovni engleski",
    level: "Napredni",
    text: "Mejlovi, sastanci i prezentacije na engleskom jeziku.",
    tint: "from-brand-ink to-brand-ink-soft",
  },
];

export function PopularCourses() {
  return (
    <section id="kursevi" className="bg-brand-sand py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-brand-ink sm:text-4xl">
            Popularni <Highlight>kursevi</Highlight>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-brand-ink/70">
            Izaberi kurs i počni da učiš već danas.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <li key={course.title}>
              <Card className="h-full overflow-hidden rounded-3xl border-transparent bg-white pt-0 shadow-md transition-transform hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div
                    className={`flex h-36 items-end bg-gradient-to-br p-4 ${course.tint}`}
                  >
                    <Badge className="bg-white/90 text-brand-ink hover:bg-white">
                      {course.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 px-6">
                  <h3 className="text-lg font-bold text-brand-ink">
                    {course.title}
                  </h3>
                  <p className="text-sm text-brand-ink/70">{course.text}</p>
                </CardContent>
                <CardFooter className="px-6">
                  <Button
                    render={<Link href="/register" />}
                    variant="ghost"
                    className="px-0 text-brand-coral hover:bg-transparent hover:text-brand-coral-dark"
                  >
                    Saznaj više
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
