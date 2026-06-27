import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TESTIMONIALS = [
  {
    text: "Ordered a new alternator for my Hilux at 2 PM, it arrived the next morning in Sydney. Unbeatable service and price.",
    name: "Mark D.",
    role: "Verified Buyer · NSW",
    initials: "MD",
    highlight: false,
  },
  {
    text: "The support team helped me identify exactly which brake pads I needed for my imported Skyline. Fit perfectly!",
    name: "Sarah L.",
    role: "Verified Buyer · QLD",
    initials: "SL",
    highlight: false,
  },
  {
    text: "As a mechanic running my own shop, I rely on Parts Hub weekly. Their trade pricing and reliability are unmatched.",
    name: "Tony J.",
    role: "Trade Partner · VIC",
    initials: "TJ",
    highlight: true,
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <svg key={i} className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const headRef = useScrollReveal<HTMLDivElement>(0.2);
  const gridRef = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section className="bg-bg py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="reveal mb-16 text-center">
          <h2 className="font-display text-3xl font-black tracking-wider text-fg sm:text-5xl">
            WHAT <span className="text-accent">DRIVERS</span> SAY
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-fg-muted">Don't just take our word for it.</p>
        </div>

        <div ref={gridRef} className="stagger grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`testimonial-card relative rounded-2xl border p-8 ${
                t.highlight
                  ? "border-accent/30 bg-accent/5"
                  : "border-border bg-bg-2"
              }`}
            >
              <Quote className="mb-4 h-7 w-7 text-accent/40" />
              <Stars />
              <p className="mt-4 text-sm leading-relaxed text-fg-muted italic">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full font-bold text-sm ${t.highlight ? "bg-accent text-accent-fg" : "bg-bg-3 text-fg"}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-fg">{t.name}</div>
                  <div className={`text-xs ${t.highlight ? "text-accent" : "text-fg-muted"}`}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
