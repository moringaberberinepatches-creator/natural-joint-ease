import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Flame,
  ShieldCheck,
  Truck,
  Lock,
  BadgeCheck,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  X,
  Globe,
  ArrowRight,
} from "lucide-react";

import heroImg from "@/assets/cl-hero-overlooked.png.asset.json";
import ba1 from "@/assets/cl-before-after-1.png.asset.json";
import ba2 from "@/assets/cl-before-after-2.png.asset.json";
import ba3 from "@/assets/cl-before-after-3.png.asset.json";
import ba4 from "@/assets/cl-before-after-4.png.asset.json";
import ba5 from "@/assets/cl-before-after-5.png.asset.json";
import pPouch from "@/assets/cl-product-pouch.webp.asset.json";
import pResults from "@/assets/cl-product-results.webp.asset.json";
import pDesign from "@/assets/cl-product-design.webp.asset.json";
import pDiscreet from "@/assets/cl-product-discreet.webp.asset.json";
import pBox from "@/assets/cl-product-box.webp.asset.json";
import appHome from "@/assets/cl-purisaki-app-home-en.png.asset.json";
import appGuide from "@/assets/cl-purisaki-app-guide-en.png.asset.json";

const OFFICIAL_URL =
  "https://5d7d7dfic5b81t1g8jvo3g2vzs.hop.clickbank.net/?&traffic_source=google&traffic_type=search&campaign=berberine_patch_us&creative=review_v1";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Berberine Patch — Become the woman he can't stop staring at" },
      {
        name: "description",
        content:
          "The Berberine Patch — a discreet transdermal adhesive working 24/7 for natural weight management. Free U.S. shipping and 30-day money-back guarantee.",
      },
      { property: "og:title", content: "Berberine Patch — Natural Alternative to Ozempic" },
      {
        property: "og:description",
        content:
          "Thousands of women over 40 have swapped pills and diets for the Berberine Patch. See why it became a phenomenon in the U.S.",
      },
      { property: "og:image", content: heroImg.url },
    ],
  }),
  component: Page,
});

/* ---------------- Carousel (generic) ---------------- */
function useCarousel(length: number) {
  const [i, setI] = useState(0);
  const touchX = useRef<number | null>(null);
  const go = (n: number) => setI((p) => (p + n + length) % length);
  const set = (n: number) => setI(((n % length) + length) % length);
  const onTouchStart = (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };
  return { i, set, go, onTouchStart, onTouchEnd };
}

/* ---------------- Section header ---------------- */
function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
      {children}
    </div>
  );
}

/* ---------------- Topbar ---------------- */
function Topbar() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-primary via-[#1d6cf0] to-primary text-white text-xs sm:text-sm font-semibold py-2 px-4 text-center flex items-center justify-center gap-2">
        <Flame className="w-4 h-4" />
        <span>OFFICIAL LIMITED-TIME OFFER • LIMITED STOCK • FREE U.S. SHIPPING</span>
      </div>
      <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5">
            <span className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-600" />
            <span className="font-bold">Berberine Patch</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-primary/30 text-primary">30 PCS</span>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card/60 px-2 py-1 text-xs">
            <Globe className="w-3.5 h-3.5 text-muted-foreground" />
            <button className="px-2 py-0.5 rounded-full bg-primary text-white font-bold">EN</button>
            <button className="px-2 py-0.5 rounded-full text-muted-foreground font-semibold">PT</button>
          </div>
        </div>
      </header>
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <SectionTag>● Berberine • Transdermal Technology</SectionTag>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-extrabold uppercase">
            Become the woman <span className="text-gradient-blue">he can't stop</span> staring at.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
            Thousands of women over 40 have swapped harsh pills and impossible diets for the{" "}
            <strong className="text-foreground">Berberine Patch</strong> — a discreet adhesive that
            works 24/7 with transdermal technology.{" "}
            <span className="text-primary font-semibold">
              See why it became a phenomenon across the U.S.
            </span>
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="btn-blue">
              Visit the official site <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">4.9/5</strong> • thousands of happy women
              </span>
            </div>
          </div>
        </div>

        <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block">
          <div className="rounded-3xl overflow-hidden border border-primary/30 shadow-[0_20px_80px_-20px_rgba(46,136,255,0.6)]">
            <img
              src={heroImg.url}
              alt="Tired of being overlooked? Berberine Patch"
              className="w-full h-auto"
            />
          </div>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            { icon: Truck, label: "Free U.S. Shipping" },
            { icon: ShieldCheck, label: "30-Day Guarantee" },
            { icon: Lock, label: "Secure Checkout" },
            { icon: BadgeCheck, label: "Clinically-Studied Formula" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl border border-border bg-card/40"
            >
              <b.icon className="w-6 h-6 text-primary" />
              <p className="text-sm font-semibold">{b.label}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 text-primary/70 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Attention ---------------- */
function Attention() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTag>Attention</SectionTag>
        <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold">A moment every woman knows</h2>
        <div className="mt-8 space-y-4 text-lg text-muted-foreground">
          <p>Picture yourself, dressed to impress, at a special dinner with your husband.</p>
          <p>It's the perfect night.</p>
          <p>Until a stunning woman walks past your table.</p>
          <p>And he can't take his eyes off her.</p>
          <p className="text-foreground font-semibold">It hurts, doesn't it?</p>
        </div>

        <h3 className="mt-12 text-2xl sm:text-3xl font-extrabold">
          Now picture yourself wearing the <span className="text-gradient-blue">Berberine Patch.</span>
        </h3>
        <p className="mt-5 text-muted-foreground">
          Lose weight while you sleep — stick the patch on, easy and fast, and that's it: see results in{" "}
          <strong className="text-foreground">one week or your money back.</strong> The risk is entirely
          on us. Try it for <strong className="text-foreground">30 days.</strong> If you're not impressed
          looking in the mirror, we refund <strong className="text-foreground">100% of your money.</strong>
        </p>
        <div className="mt-8">
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="btn-blue">
            I want to be that woman <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Before/After ---------------- */
const BA = [
  { img: ba1.url, name: "Sarah, 47", caption: "Lost 14 lbs and got her confidence back." },
  { img: ba2.url, name: "Maria, 51", caption: "Flat belly for the first time in 10 years." },
  { img: ba3.url, name: "Camila, 44", caption: "Back in a bikini after two kids." },
  { img: ba4.url, name: "Renata, 39", caption: "Dropped 3 dress sizes in 30 days." },
  { img: ba5.url, name: "Linda, 49", caption: "Her old shorts now slide right off." },
];

function BeforeAfter() {
  const c = useCarousel(BA.length);
  return (
    <section className="py-16 sm:py-24 px-4 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto text-center">
        <SectionTag>Real before & after</SectionTag>
        <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold">
          What 30 days with the patch can do
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Real women, real transformations. Each one wore the Berberine Patch every day — no crash diets,
          no punishing workouts.
        </p>

        <div
          className="relative mt-10 select-none touch-pan-y"
          onTouchStart={c.onTouchStart}
          onTouchEnd={c.onTouchEnd}
        >
          <div className="overflow-hidden rounded-3xl border border-primary/30 bg-background">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${c.i * 100}%)` }}
            >
              {BA.map((b) => (
                <a
                  key={b.name}
                  href={OFFICIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex-shrink-0"
                >
                  <img src={b.img} alt={`${b.name} — before and after`} className="w-full h-auto" />
                  <div className="p-5 text-left bg-card/60">
                    <p className="font-bold text-lg">{b.name}</p>
                    <p className="text-muted-foreground">{b.caption}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => c.go(-1)}
            aria-label="Previous slide"
            className="absolute left-2 top-1/3 -translate-y-1/2 w-11 h-11 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => c.go(1)}
            aria-label="Next slide"
            className="absolute right-2 top-1/3 -translate-y-1/2 w-11 h-11 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-5">
            {BA.map((_, k) => (
              <button
                key={k}
                onClick={() => c.set(k)}
                className={`h-2 rounded-full transition-all ${
                  k === c.i ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
                aria-label={`Slide ${k + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Meet the patch ---------------- */
function MeetPatch() {
  const bullets = [
    "Stable blood sugar all day long.",
    "Fewer sweet cravings and less late-night snacking.",
    "Belly fat melting away week after week.",
    "Steady energy — without the afternoon crash.",
    "Your favorite clothes fitting again — with no crash diets.",
  ];
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <SectionTag>The solution fits in a single patch</SectionTag>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold">
            Meet the <span className="text-gradient-blue">Berberine Patch.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            A discreet adhesive that delivers pure Berberine straight through your skin — the natural
            compound researchers have compared to Metformin in clinical studies. No pills. No nausea.
            No effort.
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="btn-blue">
              See the offer on the official site <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
          <img src={pPouch.url} alt="Berberine Patch product" className="relative w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Compare ---------------- */
function Compare() {
  const patch = {
    title: "Berberine Patch",
    subtitle: "100% natural • transdermal",
    items: [
      "No needles, no injections",
      "100% natural — Berberine + botanicals",
      "No nausea or harsh side effects",
      "No prescription needed",
      "From $1.65 per day",
      "Discreet daily patch — works 24/7",
      "30-day money-back guarantee",
    ],
    good: true,
  };
  const oz = {
    title: "Ozempic",
    subtitle: "Semaglutide • injection",
    items: [
      "Weekly self-injection",
      "Synthetic GLP-1 hormone",
      "Frequent nausea, vomiting, fatigue",
      "Prescription required",
      "$900–$1,300 per month",
      "Weight often returns when you stop",
      "No money-back guarantee",
    ],
    good: false,
  };
  const mj = {
    title: "Mounjaro",
    subtitle: "Tirzepatide • injection",
    items: [
      "Weekly self-injection",
      "Dual synthetic hormone",
      "Nausea, diarrhea, pancreas warnings",
      "Prescription required",
      "$1,000–$1,500 per month",
      "Rebound weight gain reported",
      "No money-back guarantee",
    ],
    good: false,
  };

  return (
    <section className="py-16 sm:py-24 px-4 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionTag>The smart choice</SectionTag>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold">
            Berberine Patch <span className="text-gradient-blue">vs</span> Ozempic & Mounjaro
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Same goal — a slimmer body and steady blood sugar. Very different paths. See why thousands
            of women are switching to the natural patch.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[patch, oz, mj].map((col) => (
            <div
              key={col.title}
              className={`relative rounded-3xl p-6 border ${
                col.good
                  ? "border-primary bg-primary/10 shadow-[0_0_60px_-20px_rgba(46,136,255,0.6)]"
                  : "border-border bg-card/60"
              }`}
            >
              {col.good && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-extrabold">{col.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{col.subtitle}</p>
              <ul className="mt-5 space-y-3">
                {col.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm">
                    {col.good ? (
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    )}
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              {col.good && (
                <a
                  href={OFFICIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue mt-6 w-full"
                >
                  Choose the patch
                </a>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-8 max-w-3xl mx-auto">
          Berberine Patch is a natural dietary supplement, not a medication. Comparison is for
          informational purposes only and is not medical advice.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Product Carousel ---------------- */
const PRODUCT_SLIDES = [
  {
    img: pPouch.url,
    title: "Berberine Patch Original",
    desc: "30-day program — 30 transdermal patches with our proprietary berberine blend. Nature's Ozempic working 24/7.",
  },
  {
    img: pResults.url,
    title: "Real, Visible Results",
    desc: "Real women report a flatter belly, fewer cravings and more energy in weeks. No extreme diets. No needles.",
  },
  {
    img: pDesign.url,
    title: "Skin-Fitting Design",
    desc: "Secure adhesive that's unlikely to fall off — wear it while you work, sleep or rest at home.",
  },
  {
    img: pDiscreet.url,
    title: "Discreet & Invisible",
    desc: "Thin, inconspicuous and blends seamlessly under any outfit. Gentle formula suitable for most skin types.",
  },
  {
    img: pBox.url,
    title: "30-Patch Box",
    desc: "30 patches per pack — a full 30-day program at 7cm diameter, ready to start your transformation today.",
  },
];

function ProductCarousel() {
  const c = useCarousel(PRODUCT_SLIDES.length);
  useEffect(() => {
    const id = setInterval(() => c.go(1), 6000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <SectionTag>Meet the product</SectionTag>
        <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold">
          Inside the <span className="text-gradient-blue">Berberine Patch</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Every detail of the patch women everywhere are obsessing over to lose weight — without needles.
        </p>

        <div
          className="relative mt-10 select-none touch-pan-y"
          onTouchStart={c.onTouchStart}
          onTouchEnd={c.onTouchEnd}
        >
          <div className="overflow-hidden rounded-3xl border border-primary/30 bg-card/40">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${c.i * 100}%)` }}
            >
              {PRODUCT_SLIDES.map((s) => (
                <div key={s.title} className="w-full flex-shrink-0 grid md:grid-cols-2 gap-6 items-center p-6 md:p-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
                    <img src={s.img} alt={s.title} className="relative w-full max-w-sm mx-auto" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl sm:text-3xl font-extrabold">{s.title}</h3>
                    <p className="mt-4 text-muted-foreground">{s.desc}</p>
                    <a
                      href={OFFICIAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-blue mt-6"
                    >
                      I want mine now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => c.go(-1)}
            aria-label="Previous slide"
            className="absolute left-2 top-1/3 -translate-y-1/2 w-11 h-11 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => c.go(1)}
            aria-label="Next slide"
            className="absolute right-2 top-1/3 -translate-y-1/2 w-11 h-11 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-5">
            {PRODUCT_SLIDES.map((_, k) => (
              <button
                key={k}
                onClick={() => c.set(k)}
                className={`h-2 rounded-full transition-all ${
                  k === c.i ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
                aria-label={`Slide ${k + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const reviews = [
    {
      quote:
        "Within a few weeks my fasting glucose dropped so much my doctor literally asked what I was doing differently. I feel like ME again.",
      name: "Sarah M., 47",
    },
    {
      quote:
        "I lived tired, with that stubborn belly that wouldn't go away. After one month with the patch, my clothes started fitting again. No crazy diet.",
      name: "Linda K., 52",
    },
    {
      quote:
        "The late-afternoon sugar cravings? Gone. Sounds small but it changed my entire routine — and my body.",
      name: "Jessica T., 44",
    },
  ];
  return (
    <section className="py-16 sm:py-24 px-4 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto text-center">
        <SectionTag>Real women, real results</SectionTag>
        <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold">Women are talking.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-3xl p-6 border border-border bg-card/60 text-left"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="italic text-foreground">"{r.quote}"</p>
              <p className="mt-4 text-sm text-muted-foreground font-semibold">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Official CTA ---------------- */
function OfficialCTA() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTag>Available only on the official site</SectionTag>
        <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold">
          Get your Berberine Patch directly from the <span className="text-gradient-blue">maker</span>
        </h2>
        <p className="mt-5 text-muted-foreground">
          To protect you from counterfeits and lock in the promo price, the Berberine Patch is sold
          only on the official manufacturer page. That's where the discounted kits, secure checkout
          and 30-day guarantee live.
        </p>

        <div className="mt-10 rounded-3xl border border-primary/30 bg-card/60 p-6 sm:p-10 text-left">
          <h3 className="text-xl font-extrabold">What you'll see on the next page:</h3>
          <ul className="mt-5 space-y-3">
            {[
              "Official kits with up to 60% off",
              "Free shipping and exclusive bonuses",
              "Unconditional 30-day money-back guarantee",
              "100% secure checkout via ClickBank",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="btn-blue">
              Go to the official site <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              You'll be redirected to the official manufacturer page
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Free App Bonus ---------------- */
function FreeApp() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionTag>Free Bonus · Limited Time</SectionTag>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold">
            Get <span className="text-gradient-blue">Purisaki Life</span> — your 30-day companion app,
            FREE with every order.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A private 30-day program built around the Berberine Patch — daily guides, meal plans,
            recipes, mindset tips and progress tracking. Yours at no extra cost when you order today.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-4 justify-center">
            <img
              src={appHome.url}
              alt="Purisaki Life app screenshot 1"
              className="w-44 sm:w-56 rounded-3xl border border-border shadow-2xl rotate-[-6deg]"
            />
            <img
              src={appGuide.url}
              alt="Purisaki Life app screenshot 2"
              className="w-44 sm:w-56 rounded-3xl border border-border shadow-2xl rotate-[6deg] mt-8"
            />
          </div>

          <div>
            <h3 className="text-xl font-extrabold">What's inside the app:</h3>
            <ul className="mt-5 space-y-3">
              {[
                "Step-by-step User Guide — apply your patch the right way, every time",
                "30-Day Meal Plan — breakfast, lunch, dinner & snacks designed to support fat-burn",
                "Healthy Recipes — quick, simple, family-friendly",
                "Daily Mindset Tips — stay consistent and motivated",
                "Progress Tracker — see your wins week by week",
                "Direct Support — questions answered, no guesswork",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <div className="text-4xl">🎁</div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Value</p>
                <p className="font-extrabold text-2xl">
                  <span className="line-through text-muted-foreground mr-2">$97</span>
                  <span className="text-gradient-blue">FREE today</span>
                </p>
              </div>
            </div>
            <div className="mt-6">
              <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="btn-blue">
                Claim my patch + free app <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Instant access delivered by email after your order is confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Guarantee ---------------- */
function Guarantee() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex flex-col items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br from-primary to-[#0a4ed1] text-white font-extrabold uppercase shadow-[0_0_60px_-10px_rgba(46,136,255,0.7)]">
          <span className="text-4xl">30</span>
          <span className="text-xs">Day</span>
          <span className="text-xs">Money</span>
          <span className="text-xs">Back</span>
        </div>
        <h2 className="mt-8 text-3xl sm:text-5xl font-extrabold">30-Day Money-Back Guarantee</h2>
        <p className="mt-5 text-muted-foreground">
          Try the Berberine Patch for a full 30 days through the official site. If you're not genuinely
          amazed by the change in your body, energy and confidence, the maker refunds 100% of your
          money. No questions asked. The risk is entirely on us.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-card/30 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold">
          Your new version <span className="text-gradient-blue">starts today.</span>
        </h2>
        <p className="mt-5 text-muted-foreground">
          Every day you wait is another day of lost energy, lost confidence and lost time with the
          people you love. The next step is one click away — on the official manufacturer page.
        </p>
        <div className="mt-8">
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="btn-blue">
            Claim my Berberine Patch <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="py-10 px-4 text-center text-xs text-muted-foreground border-t border-border">
      <p>
        © {new Date().getFullYear()} Berberine Patch. All rights reserved. This site is not affiliated
        with Ozempic®, Mounjaro® or any pharmaceutical company.
      </p>
    </footer>
  );
}

/* ---------------- Page ---------------- */
function Page() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <Hero />
      <Attention />
      <BeforeAfter />
      <MeetPatch />
      <Compare />
      <ProductCarousel />
      <Testimonials />
      <OfficialCTA />
      <FreeApp />
      <Guarantee />
      <FinalCTA />
      <Footer />
    </div>
  );
}
