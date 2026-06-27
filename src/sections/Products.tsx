import { useState } from "react";
import { Heart, Plus, Check, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PRODUCTS = [
  {
    tag: "BESTSELLER",
    tagColor: "bg-accent text-accent-fg",
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&h=500&fit=crop",
    title: "Performance Brake Kit",
    desc: "Ceramic compound · Fits most SUVs",
    rating: 5,
    reviews: 248,
    price: 289,
    oldPrice: 350,
  },
  {
    tag: "IN STOCK",
    tagColor: "bg-ok text-ok-fg",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&h=500&fit=crop",
    title: "High-Flow Air Filter",
    desc: "Washable · Lifetime warranty",
    rating: 4,
    reviews: 186,
    price: 89,
    oldPrice: null,
  },
  {
    tag: "NEW",
    tagColor: "bg-purple-600 text-white",
    img: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=500&h=500&fit=crop",
    title: "Platinum Spark Plugs",
    desc: "Set of 4 · 100k km lifespan",
    rating: 5,
    reviews: 312,
    price: 45,
    oldPrice: 60,
  },
  {
    tag: "TOP RATED",
    tagColor: "bg-blue-600 text-white",
    img: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?w=500&h=500&fit=crop",
    title: "Heavy Duty Battery",
    desc: "750 CCA · 3 year warranty",
    rating: 5,
    reviews: 421,
    price: 199,
    oldPrice: null,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`h-3.5 w-3.5 ${i <= rating ? "text-accent" : "text-bg-3"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[0] }) {
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  function handleAdd() {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="product-card flex flex-col overflow-hidden rounded-2xl bg-bg-2">
      <div className="relative h-60 overflow-hidden shine">
        <img
          src={product.img}
          alt={product.title}
          className="card-img h-full w-full object-cover"
          loading="lazy"
        />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold tracking-wide ${product.tagColor}`}>
          {product.tag}
        </span>
        <button
          onClick={() => setWishlisted((v) => !v)}
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-colors ${wishlisted ? "bg-accent text-accent-fg" : "bg-black/30 text-white hover:bg-accent hover:text-accent-fg"}`}
        >
          <Heart className={`h-4 w-4 ${wishlisted ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-[11px] text-fg-muted">({product.reviews})</span>
        </div>
        <h3 className="mb-1 font-bold text-fg transition-colors group-hover:text-accent">{product.title}</h3>
        <p className="mb-4 text-xs text-fg-muted">{product.desc}</p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-accent">${product.price}</span>
            {product.oldPrice && (
              <span className="text-sm text-fg-muted/60 line-through">${product.oldPrice}</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${added ? "bg-ok text-ok-fg" : "bg-accent text-accent-fg hover:brightness-110"}`}
          >
            {added ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  const headRef = useScrollReveal<HTMLDivElement>(0.2);
  const gridRef = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section id="products" className="bg-bg-2/40 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="reveal mb-16 flex flex-col items-end justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="font-display text-3xl font-black tracking-wider text-fg sm:text-5xl">
              FEATURED <span className="text-accent">PRODUCTS</span>
            </h2>
            <p className="mt-3 text-fg-muted">Top-rated parts handpicked by our experts</p>
          </div>
          <button className="flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3">
            View All Products <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div ref={gridRef} className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
