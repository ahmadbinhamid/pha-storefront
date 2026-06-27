import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onInquiry: () => void;
}

const STATS = [
  { value: 50000, suffix: "k+", label: "Parts Available", format: (v: number) => `${Math.floor(v / 1000)}k+` },
  { value: 15000, suffix: "k+", label: "Happy Customers", format: (v: number) => `${Math.floor(v / 1000)}k+` },
  { value: 99, suffix: "%", label: "Satisfaction Rate", format: (v: number) => `${v}%` },
  { value: 24, suffix: "h", label: "Expert Support", format: (v: number) => `${v}h` },
];

function useCounter(target: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const dur = 2000;
    const frames = Math.round(dur / (1000 / 60));
    let f = 0;
    const id = setInterval(() => {
      f++;
      const progress = f / frames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(target * eased));
      if (f >= frames) clearInterval(id);
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [target, active]);
  return val;
}

function StatCounter({ value, label, format }: (typeof STATS)[0] & { active: boolean }) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(value, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl font-black text-accent sm:text-4xl">{format(count)}</div>
      <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-fg-muted">{label}</div>
    </div>
  );
}

export function Hero({ onInquiry }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight ?? window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(Math.floor(window.innerWidth / 14), 120);
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.3,
      vy: (Math.random() - 0.5) * 0.4,
      vx: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.55 + 0.05,
    }));

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y -= p.vy;
        p.x += p.vx;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        ctx.fillStyle = `rgba(249,115,22,${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden grid-bg"
    >
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0" />

      {/* Radial gradients */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-bg via-transparent to-bg" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,hsl(var(--accent)/0.10),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex animate-[fadeUp_0.8s_ease_forwards] items-center gap-2.5 rounded-full border border-accent/25 bg-accent/10 px-5 py-2 opacity-0" style={{ animationDelay: "0.1s" }}>
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="text-sm font-semibold text-accent">Australia's #1 Auto Parts Destination</span>
        </div>

        {/* Headline */}
        <h1 className="mb-6">
          <span
            className="block animate-[fadeUp_0.9s_ease_forwards] font-display text-5xl font-black leading-tight text-fg opacity-0 sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "0.25s" }}
          >
            PREMIUM
          </span>
          <span
            className="block animate-[fadeUp_0.9s_ease_forwards] font-display text-5xl font-black leading-tight opacity-0 sm:text-7xl lg:text-8xl glow-orange"
            style={{ color: "hsl(var(--accent))", animationDelay: "0.4s" }}
          >
            AUTO PARTS
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-10 max-w-2xl animate-[fadeUp_0.9s_ease_forwards] text-lg leading-relaxed text-fg-muted opacity-0"
          style={{ animationDelay: "0.55s" }}
        >
          Engineered for performance. Trusted by professionals across Australia.
          Discover our extensive range of high-quality automotive components.
        </p>

        {/* CTAs */}
        <div
          className="flex animate-[fadeUp_0.9s_ease_forwards] flex-col items-center justify-center gap-4 opacity-0 sm:flex-row"
          style={{ animationDelay: "0.7s" }}
        >
          <Button size="lg" className="gap-2">
            <span>Explore Catalog</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="gap-2" onClick={onInquiry}>
            <Play className="h-4 w-4" />
            <span>Get in Touch</span>
          </Button>
        </div>

        {/* Stats */}
        <div
          className="mx-auto mt-24 grid max-w-3xl grid-cols-2 gap-8 animate-[fadeUp_0.9s_ease_forwards] opacity-0 md:grid-cols-4"
          style={{ animationDelay: "0.9s" }}
        >
          {STATS.map((s) => (
            <StatCounter key={s.label} {...s} active={true} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-fg-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
