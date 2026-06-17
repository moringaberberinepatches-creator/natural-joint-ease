import { createFileRoute } from "@tanstack/react-router";
import produto from "@/assets/produto-real.png";
import dorJoelho from "@/assets/dor-joelho.jpg";
import dorColuna from "@/assets/dor-coluna.jpg";
import casalFeliz from "@/assets/casal-feliz.jpg";
import heroVideo from "@/assets/berberine-hero.mp4.asset.json";
import {
  ShieldCheck,
  Flame,
  Bone,
  Sparkles,
  Activity,
  Leaf,
  CheckCircle2,
  Star,
  Truck,
  Lock,
  BadgeCheck,
  ChevronDown,
  AlertTriangle,
  Heart,
  ArrowRight,
  Eye,
} from "lucide-react";

const OFFICIAL_URL =
  "https://5d7d7dfic5b81t1g8jvo3g2vzs.hop.clickbank.net/?&traffic_source=google&traffic_type=search&campaign=berberine_patch_us&creative=review_v1";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Berberine Patch — The Natural Secret Reshaping Women Over 40" },
      {
        name: "description",
        content:
          "The natural Berberine patch helping women burn stubborn belly fat, balance blood sugar and feel confident again. Try it risk-free for 30 days.",
      },
      { property: "og:title", content: "Berberine Patch — Become The Woman He Can't Stop Looking At" },
      {
        property: "og:description",
        content:
          "Burn stubborn fat, balance blood sugar and reclaim your confidence — 30-day money-back guarantee.",
      },
      { property: "og:image", content: produto },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: Activity, title: "Balances Blood Sugar", text: "Berberine has been studied for years for its direct effect on glucose metabolism." },
  { icon: Flame, title: "Burns Stubborn Fat", text: "Helps your body use fat as fuel — especially around the belly and hips." },
  { icon: Sparkles, title: "Transdermal Technology", text: "Released slowly through the skin — no stomach upset, no pills to swallow." },
  { icon: Bone, title: "All-Day Energy", text: "No sugar crashes. Wake up light, stay sharp until bedtime." },
  { icon: Leaf, title: "Discreet & 100% Natural", text: "Thin, odorless, invisible under any outfit. Wear it and forget it." },
  { icon: ShieldCheck, title: "No Pills, No Crazy Diets", text: "Works quietly in the background while you live your normal life." },
];

const testimonials = [
  { name: "Sarah M., 47", text: "Within a few weeks my fasting glucose dropped so much my doctor literally asked what I was doing differently. I feel like ME again." },
  { name: "Linda K., 52", text: "I lived tired, with that stubborn belly that wouldn't go away. After one month with the patch, my clothes started fitting again. No crazy diet." },
  { name: "Jessica T., 44", text: "The late-afternoon sugar cravings? Gone. Sounds small but it changed my entire routine — and my body." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white text-center text-sm py-2 px-4 font-bold tracking-wide">
        🔥 OFFICIAL LIMITED-TIME OFFER • LOW STOCK • FREE U.S. SHIPPING
      </div>

      {/* HERO */}
      <section className="bg-infinite px-4 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-orange-500/30 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-orange-400 uppercase tracking-wider">
              <Leaf className="w-4 h-4" /> Berberine • Transdermal Technology
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl leading-[1.05] font-black uppercase">
              Become the woman <span className="text-gradient-orange">he can't stop</span> looking at.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80">
              Thousands of women over 40 traded harsh pills and impossible diets for the
              <strong className="text-white"> Berberine Patch</strong> — a discreet adhesive that works 24/7
              through transdermal technology. <strong className="text-orange-400">See why it became a phenomenon in the U.S.</strong>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer sponsored" className="btn-orange text-base md:text-lg inline-flex items-center gap-2">
                Visit official site <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <div className="flex gap-0.5 text-orange-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400" />)}
                </div>
                4.9/5 • thousands of happy women
              </div>
            </div>
          </div>

          <div className="product-3d">
            <div className="product-glow" />
            <div className="product-3d-inner relative z-10">
              <video
                src={heroVideo.url}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <ChevronDown className="w-8 h-8 text-orange-500 animate-bounce" />
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          {[
            { icon: Truck, t: "Free U.S. Shipping" },
            { icon: ShieldCheck, t: "30-Day Guarantee" },
            { icon: Lock, t: "Secure Checkout" },
            { icon: BadgeCheck, t: "Studied Formula" },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex flex-col items-center gap-2">
              <Icon className="w-7 h-7 text-orange-500" />
              <span className="font-bold text-white/90">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STORY — restaurant scene */}
      <section className="px-4 py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-red-400 text-sm font-bold uppercase tracking-wider">
            <Eye className="w-4 h-4" /> A moment every woman knows
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase leading-tight">
            Imagine yourself, all dressed up, at a <span className="text-gradient-orange">special restaurant</span> with your husband.
          </h2>
          <div className="mt-10 space-y-6 text-xl md:text-2xl text-white/85 leading-relaxed font-medium">
            <p>The perfect night.</p>
            <p>Until a stunning woman walks past your table.</p>
            <p className="text-white">And he can't stop looking.</p>
            <p className="text-orange-400 font-bold">It hurts, doesn't it?</p>
            <p className="pt-4 text-2xl md:text-3xl text-white font-black">
              Now imagine that woman <span className="text-gradient-orange">is you</span> — with Berberine Patch.
            </p>
          </div>

          <div className="mt-12 inline-block bg-card border border-orange-500/40 rounded-3xl px-6 py-5 text-left max-w-xl">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-7 h-7 text-orange-500 shrink-0 mt-1" />
              <p className="text-white/90">
                Try it for <strong className="text-orange-400">30 full days</strong>. If you're not surprised by what you see in the mirror, we refund
                <strong className="text-orange-400"> 100% of your money</strong>. The risk is entirely on us.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href={OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-orange text-base md:text-lg inline-flex items-center gap-2"
            >
              I want to be that woman <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Problema com imagens reais */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-red-400 text-sm font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" /> Does this sound like you?
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase">
              Unbalanced blood sugar is <span className="text-gradient-orange">aging you faster</span> — silently.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img
                src={dorJoelho}
                alt="Tired woman waking up with no energy"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full rounded-3xl border border-white/10 shadow-2xl"
              />
              <p className="text-lg text-white/80 leading-relaxed">
                <strong className="text-white">You wake up heavy and exhausted.</strong> Belly fat refuses to leave no matter what diet you try.
                Afternoons hit with brain fog, and sugar cravings feel stronger than your willpower.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src={dorColuna}
                alt="Worried woman thinking about her health"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full rounded-3xl border border-white/10 shadow-2xl"
              />
              <p className="text-lg text-white/80 leading-relaxed">
                <strong className="text-white">Your bloodwork is starting to worry you.</strong> Rising glucose, off-balance cholesterol, unstable pressure.
                Your doctor already warned: if nothing changes, the next step is heavy medication — for life.
              </p>
            </div>
          </div>

          <div className="mt-14 max-w-3xl mx-auto bg-card border-l-4 border-orange-500 rounded-2xl p-6 md:p-8">
            <p className="text-xl md:text-2xl text-white font-bold leading-snug">
              The problem <span className="text-gradient-orange">isn't your effort</span>.
              It's <span className="text-gradient-orange">insulin resistance</span> quietly sabotaging your body — and it has a natural solution.
            </p>
          </div>
        </div>
      </section>

      {/* Solução com imagem real */}
      <section className="px-4 py-20 bg-honeycomb">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src={casalFeliz}
            alt="Confident, happy woman with her husband after Berberine Patch"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full rounded-3xl border border-orange-500/20 shadow-[0_30px_80px_-20px_rgba(255,90,30,0.45)]"
          />
          <div>
            <span className="inline-flex items-center gap-2 text-orange-400 text-sm font-bold uppercase tracking-wider">
              <Heart className="w-4 h-4" /> The solution fits in a single patch
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase">
              Meet the <span className="text-gradient-orange">Berberine Patch.</span>
            </h2>
            <p className="mt-6 text-lg text-white/80">
              A discreet adhesive that delivers <strong className="text-white">pure Berberine</strong> straight through your skin —
              the natural compound scientists have compared to Metformin in clinical studies.
              No pills. No nausea. No effort.
            </p>

            <ul className="mt-6 space-y-3 text-lg">
              {[
                "Stable blood sugar throughout the day.",
                "Fewer sweet cravings and late-night snacking.",
                "Belly fat melting away week after week.",
                "Steady energy — no afternoon crash.",
                "Your favorite clothes fitting again — without torture diets.",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-white/90">{t}</span>
                </li>
              ))}
            </ul>

            <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer sponsored" className="btn-orange mt-8 text-base inline-flex items-center gap-2">
              See the offer on the official site <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase">
              Why <span className="text-gradient-orange">Berberine Patch</span> works
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Continuous berberine release through the skin — no potency lost in your stomach.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-card border border-white/5 rounded-2xl p-6 transition hover:-translate-y-1 hover:border-orange-500/40"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: "var(--gradient-primary)", boxShadow: "0 8px 24px -8px rgba(255,90,30,0.5)" }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-white">{title}</h3>
                <p className="mt-2 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-5xl font-black uppercase">
            Real women, <span className="text-gradient-orange">real results</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-white/5 rounded-2xl p-6">
                <div className="flex gap-1 text-orange-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400" />)}
                </div>
                <p className="text-white/90">"{t.text}"</p>
                <p className="mt-4 text-sm font-bold text-orange-400">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pré-venda — direciona pro produtor */}
      <section id="ofertas" className="px-4 py-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-2 rounded-full text-xs font-bold text-orange-400 uppercase tracking-wider">
            <BadgeCheck className="w-4 h-4" /> Available only on the official site
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-black uppercase">
            Get your <span className="text-gradient-orange">Berberine Patch</span> direct from the maker
          </h2>
          <p className="mt-5 text-lg text-white/75">
            To protect you from counterfeits and guarantee the promo pricing, Berberine Patch is sold
            <strong className="text-white"> only on the official manufacturer page</strong>.
            That's where the discounted kits, secure checkout and 30-day guarantee live.
          </p>

          <div className="mt-10 bg-card border border-orange-500/30 rounded-3xl p-8 text-left">
            <h3 className="text-xl text-white">What you'll see on the next page:</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Official kits with up to 60% off",
                "Free shipping and exclusive bonuses",
                "Unconditional 30-day money-back guarantee",
                "100% secure checkout (ClickBank)",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-white/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={OFFICIAL_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-orange mt-10 text-base md:text-lg inline-flex items-center gap-2"
          >
            Go to the official site <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-white/60 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> You'll be redirected to the official manufacturer page
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto bg-card border border-orange-500/30 rounded-3xl p-8 md:p-12 text-center">
          <div className="inline-flex w-20 h-20 rounded-full items-center justify-center mb-4"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-orange)" }}>
            <ShieldCheck className="w-10 h-10 text-white"/>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase">30-Day Money-Back Guarantee</h2>
          <p className="mt-4 text-lg text-white/75">
            Try Berberine Patch for 30 full days through the official site. If you're not
            <strong className="text-orange-400"> genuinely surprised</strong> by the change in your body, energy and confidence,
            the maker refunds <strong className="text-orange-400">100% of your money</strong>. No questions asked. The risk is entirely on us.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 bg-infinite">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            Your new version <span className="text-gradient-orange">starts today</span>.
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Every day you wait is another day losing energy, confidence and time with the people you love.
            The next step is one click away — on the official manufacturer page.
          </p>
          <div className="mt-10 flex justify-center">
            <ArrowRight className="w-10 h-10 text-orange-500 animate-bounce -rotate-90" />
          </div>
          <a
            href={OFFICIAL_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-orange mt-6 text-base md:text-lg inline-flex items-center gap-2"
          >
            Try Berberine Patch now <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="px-4 py-8 text-center text-sm text-white/40 border-t border-white/5">
        © {new Date().getFullYear()} 100DORES Plus • Suplemento alimentar. Não substitui uma alimentação equilibrada.
      </footer>
    </main>
  );
}
