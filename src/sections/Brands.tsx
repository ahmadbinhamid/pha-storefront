import { useScrollReveal } from "@/hooks/useScrollReveal";

const BRANDS = ["BOSCH", "NGK", "BREMBO", "MONROE", "MANN-FILTER", "DENSO", "ACDelco", "CASTROL", "BILSTEIN", "SACHS"];

export function Brands() {
  const ref = useScrollReveal<HTMLDivElement>(0.2);

  return (
    <section className="overflow-hidden border-y border-border bg-bg py-16">
      <div ref={ref} className="reveal mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-fg-muted">
          Trusted Brands We Stock
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

        <div className="flex animate-[marquee_30s_linear_infinite] items-center gap-16 whitespace-nowrap hover:[animation-play-state:paused]">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={i}
              className="font-display text-2xl font-bold tracking-wider text-bg-3 transition-colors hover:text-accent sm:text-3xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
