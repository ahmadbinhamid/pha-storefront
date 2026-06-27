import { ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CATEGORIES = [
  {
    title: "Engine Parts",
    desc: "Pistons, gaskets, timing belts & more",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=800&fit=crop",
  },
  {
    title: "Brake System",
    desc: "Pads, rotors, calipers & brake lines",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=800&fit=crop",
  },
  {
    title: "Suspension",
    desc: "Shocks, struts, control arms & springs",
    img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=800&fit=crop",
  },
  {
    title: "Electrical",
    desc: "Batteries, alternators, starters & sensors",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=800&fit=crop",
  },
];

export function Categories() {
  const headRef = useScrollReveal<HTMLDivElement>(0.2);
  const gridRef = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section id="categories" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="reveal mb-16 text-center">
          <h2 className="font-display text-3xl font-black tracking-wider text-fg sm:text-5xl">
            BROWSE BY <span className="text-accent">CATEGORY</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-fg-muted">
            Find exactly what you need from our comprehensive collection of automotive components.
          </p>
        </div>

        <div ref={gridRef} className="stagger grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="category-card h-80 cursor-pointer rounded-2xl"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                <h3 className="font-display text-xl font-bold text-white">{cat.title}</h3>
                <p className="mt-1 text-sm text-white/65">{cat.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-transform group-hover:translate-x-2">
                  Explore <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
