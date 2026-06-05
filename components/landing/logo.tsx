import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "ink" | "light";
};

/**
 * Learn English Bre! wordmark. `tone="light"` for use on dark/coral backgrounds.
 */
export function Logo({ className, tone = "ink" }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-extrabold tracking-tight",
        className,
      )}
    >
      <span className="grid size-8 place-items-center rounded-xl bg-brand-green text-white shadow-sm">
        <GraduationCap className="size-5" aria-hidden />
      </span>
      <span
        className={cn(
          "whitespace-nowrap text-lg leading-none",
          tone === "light" ? "text-white" : "text-brand-ink",
        )}
      >
        Learn English <span className="text-brand-coral">Bre!</span>
      </span>
    </span>
  );
}
