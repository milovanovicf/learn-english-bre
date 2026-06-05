import { cn } from "@/lib/utils";

/** Coral "sticker" pill used to emphasise a word inside a heading. */
export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block -rotate-2 rounded-full bg-brand-coral px-3 py-0.5 text-white shadow-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
