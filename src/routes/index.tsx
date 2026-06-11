import { createFileRoute } from "@tanstack/react-router";
import produto from "@/assets/produto-transparente.png";
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
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "100DORES Plus — Pare de Aceitar a Dor Como Parte da Sua Vida" },
      {
        name: "description",
        content:
          "Fórmula natural com 17 ativos + Cúrcuma para alívio das dores nas articulações. Recupere mobilidade e qualidade de vida. Frete grátis.",
      },
      { property: "og:title", content: "100DORES Plus — Alívio Natural das Dores" },
      {
        property: "og:description",
        content:
          "Volte a caminhar, subir escadas e aproveitar a família — sem dor.",
      },
      { property: "og:image", content: produto.url },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: Flame, title: "Reduz a Inflamação", text: "Combate as citocinas pró-inflamatórias responsáveis pelas dores." },
  { icon: Bone, title: "Fortalece os Ossos", text: "Suporte ao tecido ósseo, reduzindo o risco de lesões." },
  { icon: Sparkles, title: "Alta Concentração", text: "4 ativos naturais extraídos em laboratório com pureza máxima." },
  { icon: Activity, title: "Mais Flexibilidade", text: "Recupere a mobilidade perdida pelo processo inflamatório." },
  { icon: Leaf, title: "Regenera Cartilagem", text: "Estimula a produção e retarda a degeneração articular." },
  { icon: ShieldCheck, title: "100% Natural", text: "Suplemento seguro, sem efeitos colaterais conhecidos." },
];

const offers = [
  { qty: 1, label: "1 Frasco", sub: "Tratamento inicial", price: "R$ 97", perUnit: "R$ 97,00 cada", cta: "Quero 1 Frasco" },
  { qty: 3, label: "3 Frascos", sub: "Mais vendido • Tratamento completo", price: "R$ 197", perUnit: "R$ 65,67 cada", cta: "Quero 3 Frascos", highlight: true },
  { qty: 5, label: "5 Frascos", sub: "Tratamento prolongado", price: "R$ 297", perUnit: "R$ 59,40 cada", cta: "Quero 5 Frascos" },
];

const testimonials = [
  { name: "Maria L., 58 anos", text: "Em três semanas voltei a caminhar sem dor no joelho. Mudou minha vida!" },
  { name: "José R., 62 anos", text: "Acordo sem aquela rigidez nas mãos. Recomendo para todos da minha idade." },
  { name: "Cleusa M., 54 anos", text: "Voltei a brincar com meus netos sem sentir as dores nas costas." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white text-center text-sm py-2 px-4 font-bold tracking-wide">
        🔥 PROMOÇÃO RELÂMPAGO • FRETE GRÁTIS PARA TODO O BRASIL
      </div>

      {/* HERO */}
      <section className="bg-infinite px-4 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-orange-500/30 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-orange-400 uppercase tracking-wider">
              <Leaf className="w-4 h-4" /> Suplemento Natural • 45 Cápsulas
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl leading-[1.05] font-black uppercase">
              Pare de aceitar a <span className="text-gradient-orange">dor</span> como parte da sua vida.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75">
              Você acorda com dores nos joelhos? Precisa se apoiar para levantar da cama?
              Evita caminhar com os netos porque sabe que vai sofrer depois?
              <strong className="text-white"> Existe uma saída natural.</strong>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href="#ofertas" className="btn-orange text-base md:text-lg">
                Quero experimentar agora
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <div className="flex gap-0.5 text-orange-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400" />)}
                </div>
                +12.000 clientes
              </div>
            </div>
          </div>

          <div className="product-3d">
            <div className="product-glow" />
            <div className="product-3d-inner relative z-10">
              <img
                src={produto.url}
                alt="Frasco 100DORES Plus suplemento natural"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 relative z-10">
          <ChevronDown className="w-8 h-8 text-orange-500 animate-bounce" />
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          {[
            { icon: Truck, t: "Frete Grátis" },
            { icon: ShieldCheck, t: "Garantia 30 dias" },
            { icon: Lock, t: "Compra Segura" },
            { icon: BadgeCheck, t: "Aprovado Anvisa" },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex flex-col items-center gap-2">
              <Icon className="w-7 h-7 text-orange-500" />
              <span className="font-bold text-white/90">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Problema (VSL copy) */}
      <section className="px-4 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-center font-black uppercase">
          A dor está roubando <span className="text-gradient-orange">sua liberdade</span>
        </h2>
        <div className="mt-10 space-y-5 text-lg text-white/80 leading-relaxed">
          <p>Você <strong className="text-white">acorda com dores</strong> nos joelhos?</p>
          <p>Precisa se apoiar para <strong className="text-white">levantar da cama</strong> ou da cadeira?</p>
          <p>Evita caminhar, passear ou brincar com seus filhos e netos porque sabe que <strong className="text-white">vai sentir dor depois?</strong></p>
          <p>A verdade é que milhares de pessoas estão perdendo sua liberdade aos poucos por causa das dores nas articulações.</p>
          <p className="text-xl text-orange-400 font-bold">O pior não é apenas a dor. É a sensação de não conseguir mais fazer as coisas que antes eram simples.</p>
          <p>Foi pensando nisso que nasceu o <strong className="text-white">100DORES Plus</strong> — uma fórmula natural desenvolvida para auxiliar quem busca mais mobilidade, conforto e qualidade de vida.</p>
        </div>

        <div className="mt-10 bg-card border border-orange-500/20 rounded-2xl p-6 md:p-8">
          <p className="text-xl font-bold mb-5 text-white">Imagine voltar a:</p>
          <ul className="space-y-3 text-lg">
            {[
              "Caminhar com mais conforto.",
              "Subir escadas sem sofrimento.",
              "Levantar da cama com mais disposição.",
              "Aproveitar a família sem pensar na dor o tempo todo.",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-white/90">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-10">
          <a href="#ofertas" className="btn-orange text-base">Quero experimentar o 100DORES Plus</a>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase">
              O poder de <span className="text-gradient-orange">17 ativos naturais</span>
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Fórmula desenvolvida para tratar a inflamação na raiz.
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
            Quem provou, <span className="text-gradient-orange">voltou a viver</span>
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

      {/* Offers */}
      <section id="ofertas" className="px-4 py-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase">Escolha seu tratamento</h2>
            <p className="mt-4 text-lg text-white/70">
              Quanto maior o tratamento, melhores e mais duradouros os resultados.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {offers.map((o) => (
              <div
                key={o.qty}
                className={`relative bg-card rounded-3xl p-8 flex flex-col border transition ${
                  o.highlight ? "border-orange-500 scale-100 md:scale-105 shadow-[0_0_60px_-10px_rgba(255,90,30,0.5)]" : "border-white/10"
                }`}
              >
                {o.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
                    Mais Vendido
                  </span>
                )}
                <h3 className="text-2xl text-white">{o.label}</h3>
                <p className="text-sm text-white/60 mt-1">{o.sub}</p>
                <div className="my-6">
                  <div className="text-5xl font-black text-gradient-orange">{o.price}</div>
                  <div className="text-sm text-white/60 mt-1">{o.perUnit}</div>
                </div>
                <ul className="space-y-2 text-sm mb-6 text-white/80">
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Frete grátis</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Garantia 30 dias</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Envio em 24h</li>
                </ul>
                <a href="#" className="btn-orange mt-auto w-full">{o.cta}</a>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm text-white/60 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Pagamento 100% seguro • Pix, Cartão ou Boleto
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
          <h2 className="text-3xl md:text-4xl font-black uppercase">Garantia incondicional de 30 dias</h2>
          <p className="mt-4 text-lg text-white/75">
            Experimente o 100DORES Plus por 30 dias. Se você não sentir alívio real
            das suas dores, devolvemos <strong className="text-orange-400">100% do seu dinheiro</strong>. O risco é todo nosso.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 bg-infinite">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            Sua vida sem dor <span className="text-gradient-orange">começa hoje</span>.
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Não deixe que a dor controle mais nenhum dia da sua vida.
          </p>
          <p className="mt-8 text-2xl">👇👇👇</p>
          <a href="#ofertas" className="btn-orange mt-6 text-base md:text-lg">
            Quero experimentar o 100DORES Plus agora
          </a>
        </div>
      </section>

      <footer className="px-4 py-8 text-center text-sm text-white/40 border-t border-white/5">
        © {new Date().getFullYear()} 100DORES Plus • Suplemento alimentar. Não substitui uma alimentação equilibrada.
      </footer>
    </main>
  );
}
