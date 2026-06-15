import { createFileRoute } from "@tanstack/react-router";
import produto from "@/assets/produto-real.png";
import dorJoelho from "@/assets/dor-joelho.jpg";
import dorColuna from "@/assets/dor-coluna.jpg";
import casalFeliz from "@/assets/casal-feliz.jpg";
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
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "100DORES Plus — Alívio Natural Das Dores Articulares em 21 Dias" },
      {
        name: "description",
        content:
          "Fórmula natural com 17 ativos + Cúrcuma. Volte a caminhar, dormir e viver SEM dor. Mais de 12.000 vidas transformadas. Garantia de 30 dias.",
      },
      { property: "og:title", content: "100DORES Plus — Liberte-se da Dor Articular" },
      {
        property: "og:description",
        content:
          "Pare de perder os melhores momentos da sua vida por causa da dor. Existe uma solução natural.",
      },
      { property: "og:image", content: produto },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: Flame, title: "Combate a Inflamação na Raiz", text: "Neutraliza as citocinas pró-inflamatórias — a verdadeira causa da sua dor." },
  { icon: Bone, title: "Fortalece Ossos e Articulações", text: "Densidade óssea reforçada, menos risco de quedas e fraturas." },
  { icon: Sparkles, title: "4 Ativos de Alta Pureza", text: "Extraídos em laboratório com concentração até 6x maior que similares." },
  { icon: Activity, title: "Devolve Sua Mobilidade", text: "Caminhar, subir escada, brincar com os netos — sem travar, sem dor." },
  { icon: Leaf, title: "Regenera a Cartilagem", text: "Estimula a produção natural e retarda o desgaste articular." },
  { icon: ShieldCheck, title: "100% Natural e Seguro", text: "Sem efeitos colaterais. Aprovado pela Anvisa. Pode usar todo dia." },
];

const offers = [
  { qty: 1, label: "1 Frasco", sub: "Tratamento inicial — 30 dias", de: "R$ 297", price: "R$ 197", perUnit: "R$ 197,00 cada", cta: "Quero 1 Frasco", econ: "Economize R$ 100" },
  { qty: 3, label: "3 Frascos", sub: "★ Mais escolhido • Tratamento completo 90 dias", de: "R$ 891", price: "R$ 397", perUnit: "R$ 132,33 cada", cta: "Quero 3 Frascos", highlight: true, econ: "Economize R$ 494" },
  { qty: 5, label: "5 Frascos", sub: "Resultado máximo — 5 meses", de: "R$ 1.485", price: "R$ 597", perUnit: "R$ 119,40 cada", cta: "Quero 5 Frascos", econ: "Economize R$ 888" },
];

const testimonials = [
  { name: "Maria L., 58 anos", text: "Em três semanas voltei a caminhar sem aquela dor cortante no joelho. Eu já tinha aceitado viver assim... que bom que tentei mais uma vez." },
  { name: "José R., 62 anos", text: "Acordo SEM aquela rigidez nas mãos. Voltei a abrir potes, dirigir longas distâncias e até trabalhar na marcenaria. Minha esposa não acredita." },
  { name: "Cleusa M., 54 anos", text: "Meus netos pedem pra brincar e eu não preciso mais inventar desculpa. A dor nas costas sumiu. Recomendo de olhos fechados." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white text-center text-sm py-2 px-4 font-bold tracking-wide">
        🔥 ÚLTIMAS 47 UNIDADES • FRETE GRÁTIS • ENTREGA EM 24H
      </div>

      {/* HERO */}
      <section className="bg-infinite px-4 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-orange-500/30 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-orange-400 uppercase tracking-wider">
              <Leaf className="w-4 h-4" /> Fórmula Natural • 17 Ativos
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl leading-[1.05] font-black uppercase">
              A dor articular <span className="text-gradient-orange">não é</span> para sempre.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80">
              Mais de <strong className="text-orange-400">12.000 brasileiros</strong> acima dos 45 já redescobriram o prazer de
              acordar sem dor, caminhar livremente e abraçar os netos sem medo.
              <strong className="text-white"> Agora é a sua vez.</strong>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href="#ofertas" className="btn-orange text-base md:text-lg">
                Quero viver sem dor agora
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <div className="flex gap-0.5 text-orange-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400" />)}
                </div>
                4.9/5 • +12.000 clientes
              </div>
            </div>
          </div>

          <div className="product-3d">
            <div className="product-glow" />
            <div className="product-3d-inner relative z-10">
              <img
                src={produto}
                alt="Frasco 100DORES Plus suplemento natural"
                className="w-full max-w-md mx-auto"
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

      {/* Problema com imagens reais */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-red-400 text-sm font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" /> Você se reconhece nessas cenas?
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase">
              A dor está roubando <span className="text-gradient-orange">os melhores anos</span> da sua vida.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img
                src={dorJoelho}
                alt="Idoso sentindo dor no joelho ao acordar"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full rounded-3xl border border-white/10 shadow-2xl"
              />
              <p className="text-lg text-white/80 leading-relaxed">
                <strong className="text-white">Você acorda travado.</strong> Precisa se apoiar pra sentar, pra levantar, pra dar o primeiro passo do dia.
                E o pior: já se acostumou a começar a manhã pedindo socorro pro próprio corpo.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src={dorColuna}
                alt="Idosa com dor nas costas e ombro"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full rounded-3xl border border-white/10 shadow-2xl"
              />
              <p className="text-lg text-white/80 leading-relaxed">
                <strong className="text-white">Você inventa desculpas pra não sair.</strong> Recusa convites, evita escadas, larga atividades que amava.
                A dor virou uma prisão silenciosa — e ninguém ao seu redor entende o tamanho do que você sente.
              </p>
            </div>
          </div>

          <div className="mt-14 max-w-3xl mx-auto bg-card border-l-4 border-orange-500 rounded-2xl p-6 md:p-8">
            <p className="text-xl md:text-2xl text-white font-bold leading-snug">
              O verdadeiro problema <span className="text-gradient-orange">não é a idade</span>.
              É a <span className="text-gradient-orange">inflamação crônica</span> destruindo suas articulações por dentro — e ninguém te contou isso até hoje.
            </p>
          </div>
        </div>
      </section>

      {/* Solução com imagem real */}
      <section className="px-4 py-20 bg-honeycomb">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src={casalFeliz}
            alt="Casal de idosos felizes caminhando livres da dor"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full rounded-3xl border border-orange-500/20 shadow-[0_30px_80px_-20px_rgba(255,90,30,0.45)]"
          />
          <div>
            <span className="inline-flex items-center gap-2 text-orange-400 text-sm font-bold uppercase tracking-wider">
              <Heart className="w-4 h-4" /> Imagine a sua vida assim
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase">
              Sua liberdade <span className="text-gradient-orange">está de volta.</span>
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Foi pra acabar com esse sofrimento silencioso que nasceu o <strong className="text-white">100DORES Plus</strong> —
              uma fórmula natural que ataca a inflamação na origem e devolve mobilidade real, todos os dias.
            </p>

            <ul className="mt-6 space-y-3 text-lg">
              {[
                "Acordar disposto, sem dor, sem rigidez.",
                "Caminhar quilômetros sem se arrepender depois.",
                "Subir escadas sem precisar segurar no corrimão.",
                "Brincar com seus netos até eles cansarem — não você.",
                "Voltar a dormir a noite inteira em paz.",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-white/90">{t}</span>
                </li>
              ))}
            </ul>

            <a href="#ofertas" className="btn-orange mt-8 text-base">Quero recuperar minha vida</a>
          </div>
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
              Cada cápsula trata a inflamação onde ela nasce — não esconde o sintoma.
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
              Especialistas recomendam <strong className="text-orange-400">no mínimo 3 meses</strong> de uso contínuo
              para resultados duradouros.
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
                  <div className="text-sm text-white/50 line-through">De {o.de}</div>
                  <div className="text-5xl font-black text-gradient-orange leading-none mt-1">{o.price}</div>
                  <div className="text-sm text-white/60 mt-2">{o.perUnit}</div>
                  <div className="inline-block mt-3 text-xs font-bold text-orange-300 bg-orange-500/10 border border-orange-500/30 rounded-full px-3 py-1">
                    {o.econ}
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-6 text-white/80">
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Frete grátis Brasil</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Garantia 30 dias</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Envio em 24h</li>
                </ul>
                <a href="#" className="btn-orange mt-auto w-full">{o.cta}</a>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm text-white/60 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Pagamento 100% seguro • Pix, Cartão (até 12x) ou Boleto
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
            Teste o 100DORES Plus por 30 dias inteiros. Se você não sentir uma diferença
            <strong className="text-orange-400"> real e perceptível</strong> nas suas dores,
            devolvemos <strong className="text-orange-400">100% do seu dinheiro</strong>. Sem perguntas. O risco é todo nosso.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 bg-infinite">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            Sua vida sem dor <span className="text-gradient-orange">começa hoje</span>.
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Cada dia que passa é mais um dia perdido em sofrimento. Você já esperou demais.
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
