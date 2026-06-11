import { createFileRoute } from "@tanstack/react-router";
import produto from "@/assets/produto.asset.json";
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
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "100DORES Plus — Alívio Natural para Dores nas Articulações" },
      {
        name: "description",
        content:
          "Fórmula premium anti-inflamatória com 17 ativos + Cúrcuma. Alívio das dores, mais mobilidade e qualidade de vida. Frete grátis para todo Brasil.",
      },
      { property: "og:title", content: "100DORES Plus — Alívio Natural para Dores" },
      {
        property: "og:description",
        content:
          "17 ativos naturais + Cúrcuma. Reduza inflamação, fortaleça os ossos e recupere a flexibilidade.",
      },
      { property: "og:image", content: produto.url },
    ],
  }),
  component: Index,
});

const benefits = [
  {
    icon: Flame,
    title: "Redução da Inflamação",
    text: "Combate citocinas pró-inflamatórias responsáveis pelas dores no corpo.",
  },
  {
    icon: Bone,
    title: "Fortalecimento Ósseo",
    text: "Suporte adicional ao tecido ósseo, reduzindo o risco de lesões.",
  },
  {
    icon: Sparkles,
    title: "Resultados Potencializados",
    text: "4 ativos naturais com alta concentração e pureza laboratorial.",
  },
  {
    icon: Activity,
    title: "Mais Flexibilidade",
    text: "Recupere a mobilidade perdida pelo processo inflamatório.",
  },
  {
    icon: Leaf,
    title: "Estimula a Cartilagem",
    text: "Retarda a degeneração articular e estimula a produção de cartilagem.",
  },
  {
    icon: ShieldCheck,
    title: "100% Natural",
    text: "Suplemento natural seguro, sem efeitos colaterais conhecidos.",
  },
];

const offers = [
  {
    qty: 1,
    label: "1 Frasco",
    sub: "Tratamento inicial",
    price: "R$ 97",
    perUnit: "R$ 97,00 cada",
    cta: "Quero 1 Frasco",
  },
  {
    qty: 3,
    label: "3 Frascos",
    sub: "Mais vendido • Tratamento completo",
    price: "R$ 197",
    perUnit: "R$ 65,67 cada",
    cta: "Quero 3 Frascos",
    highlight: true,
  },
  {
    qty: 5,
    label: "5 Frascos",
    sub: "Tratamento prolongado",
    price: "R$ 297",
    perUnit: "R$ 59,40 cada",
    cta: "Quero 5 Frascos",
  },
];

const testimonials = [
  {
    name: "Maria L., 58 anos",
    text: "Em três semanas voltei a caminhar sem dor no joelho. Mudou minha vida!",
  },
  {
    name: "José R., 62 anos",
    text: "Acordo sem aquela rigidez nas mãos. Recomendo para todos da minha idade.",
  },
  {
    name: "Cleusa M., 54 anos",
    text: "Voltei a brincar com meus netos sem sentir as dores nas costas.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-center text-sm py-2 px-4 font-medium">
        🔥 PROMOÇÃO RELÂMPAGO — Frete Grátis para todo o Brasil
      </div>

      {/* Hero */}
      <section
        className="px-4 py-10 md:py-16"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-primary">
              <Leaf className="w-4 h-4" /> Suplemento Natural • 45 Cápsulas
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl leading-tight">
              Alívio Natural para as{" "}
              <span className="text-primary">Dores nas Articulações</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground">
              Fórmula premium anti-inflamatória com <strong>17 ativos + Cúrcuma</strong>.
              Recupere sua mobilidade, durma melhor e volte a fazer o que ama —
              <strong> sem dor</strong>.
            </p>

            <ul className="mt-6 space-y-2">
              {[
                "Reduz inflamações e dores crônicas",
                "Fortalece ossos e cartilagens",
                "Devolve a flexibilidade das articulações",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-base md:text-lg">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#ofertas"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition hover:scale-[1.02]"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-warm)" }}
              >
                QUERO ALIVIAR MINHAS DORES
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <span>+12.000 clientes satisfeitos</span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 blur-3xl rounded-full opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            />
            <img
              src={produto.url}
              alt="Frasco 100DORES Plus suplemento natural com cúrcuma"
              className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-y border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          {[
            { icon: Truck, t: "Frete Grátis" },
            { icon: ShieldCheck, t: "Garantia 30 dias" },
            { icon: Lock, t: "Compra Segura" },
            { icon: BadgeCheck, t: "Aprovado Anvisa" },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex flex-col items-center gap-2">
              <Icon className="w-7 h-7 text-primary" />
              <span className="font-semibold">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="px-4 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl">
          Cansado de acordar com <span className="text-primary">dor</span> todos os dias?
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Joelhos, coluna, ombros, mãos... as dores nas articulações roubam sua liberdade
          de viver. Caminhar, brincar com os netos, subir uma escada — tudo vira um
          sacrifício. E remédios fortes só mascaram o problema, sem tratar a causa.
        </p>
      </section>

      {/* Benefits */}
      <section className="px-4 py-16 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl">
              O poder de <span className="text-primary">17 ativos naturais</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Uma fórmula desenvolvida para tratar a inflamação na raiz e devolver sua
              qualidade de vida.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-card rounded-2xl p-6 transition hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl">
            Histórias de quem <span className="text-primary">voltou a viver</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-2xl p-6"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-foreground">"{t.text}"</p>
                <p className="mt-4 text-sm font-semibold text-muted-foreground">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="ofertas" className="px-4 py-16 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl">Escolha seu tratamento</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Quanto maior o tratamento, melhores e mais duradouros os resultados.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {offers.map((o) => (
              <div
                key={o.qty}
                className={`relative bg-card rounded-3xl p-8 flex flex-col transition ${
                  o.highlight ? "ring-4 ring-primary scale-100 md:scale-105" : ""
                }`}
                style={{ boxShadow: o.highlight ? "var(--shadow-warm)" : "var(--shadow-card)" }}
              >
                {o.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Mais Vendido
                  </span>
                )}
                <h3 className="text-2xl">{o.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{o.sub}</p>
                <div className="my-6">
                  <div className="text-5xl font-extrabold text-primary">{o.price}</div>
                  <div className="text-sm text-muted-foreground mt-1">{o.perUnit}</div>
                </div>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-success shrink-0"/> Frete grátis</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-success shrink-0"/> Garantia 30 dias</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-success shrink-0"/> Envio em 24h</li>
                </ul>
                <a
                  href="#"
                  className={`mt-auto block text-center rounded-full px-6 py-4 font-bold transition hover:scale-[1.02] ${
                    o.highlight
                      ? "text-primary-foreground"
                      : "bg-secondary-foreground/5 text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                  style={o.highlight ? { background: "var(--gradient-primary)" } : undefined}
                >
                  {o.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Pagamento 100% seguro • Pix, Cartão ou Boleto
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto bg-card rounded-3xl p-8 md:p-12 text-center"
          style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="inline-flex w-20 h-20 rounded-full items-center justify-center mb-4"
            style={{ background: "var(--gradient-primary)" }}>
            <ShieldCheck className="w-10 h-10 text-primary-foreground"/>
          </div>
          <h2 className="text-3xl md:text-4xl">Garantia Incondicional de 30 dias</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experimente o 100DORES Plus por 30 dias. Se você não sentir alívio real
            das suas dores, devolvemos 100% do seu dinheiro. Sem perguntas. O risco é todo nosso.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16" style={{ background: "var(--gradient-primary)" }}>
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl">
            Sua vida sem dor começa hoje.
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Não deixe a dor controlar mais nenhum dia da sua vida. Garanta agora.
          </p>
          <a
            href="#ofertas"
            className="mt-8 inline-block bg-white text-primary rounded-full px-10 py-5 text-lg font-bold shadow-2xl hover:scale-105 transition"
          >
            QUERO MEU 100DORES PLUS
          </a>
        </div>
      </section>

      <footer className="px-4 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} 100DORES Plus • Suplemento alimentar. Não substitui uma alimentação equilibrada.
      </footer>
    </main>
  );
}
