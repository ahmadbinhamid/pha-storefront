import { Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const POPULAR = ["Brake Pads", "Oil Filters", "Spark Plugs", "Air Filters", "Batteries", "Radiators"];

export function Search() {
  return (
    <section
      className="relative z-20 -mt-16 mx-4 rounded-2xl border border-border bg-bg-2/95 px-5 py-7 shadow-card backdrop-blur-md sm:mx-8 sm:px-8 sm:py-8 lg:mx-16"
    >
      <div className="mx-auto max-w-4xl">
        {/* Search bar */}
        <div className="flex flex-col gap-2 rounded-2xl border border-border bg-bg p-2 shadow-sm transition-shadow focus-within:shadow-[0_0_0_3px_hsl(var(--accent)/0.25)] sm:flex-row sm:rounded-full sm:gap-3">
          <div className="flex flex-1 items-center gap-3 px-3 py-2 sm:px-4 sm:py-0">
            <SearchIcon className="h-5 w-5 shrink-0 text-fg-muted" />
            <input
              type="text"
              placeholder="Search by part number, vehicle model…"
              className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-fg-muted"
            />
          </div>
          <Button size="md" className="w-full shrink-0 sm:w-auto">
            Search Parts
          </Button>
        </div>

        {/* Popular tags */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">Popular:</span>
          {POPULAR.map((tag) => (
            <button
              key={tag}
              type="button"
              className="rounded-full border border-border bg-bg px-4 py-1.5 text-xs font-medium text-fg-muted transition-all hover:border-accent/40 hover:bg-accent/8 hover:text-accent"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
