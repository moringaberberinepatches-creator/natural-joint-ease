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
  ArrowRight,
} from "lucide-react";

const OFFICIAL_URL =
  "https://5d7d7dfic5b81t1g8jvo3g2vzs.hop.clickbank.net/?&traffic_source=google&traffic_type=search&campaign=berberine_patch_us&creative=review_v1";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Berberine Patch — A Descoberta Natural Que Está Transformando o Controle do Açúcar e da Gordura Abdominal" },
      {
        name: "description",
        content:
          "Conheça o adesivo natural de Berberina que age 24 horas por dia ajudando a equilibrar o açúcar no sangue, reduzir gordura abdominal e devolver sua energia. Acesse a página oficial.",
      },
      { property: "og:title", content: "Berberine Patch — Equilíbrio Metabólico Natural 24h" },
      {
        property: "og:description",
        content:
          "Pare de lutar contra a balança e a glicose. Descubra o adesivo natural que está mudando vidas — acesse a página oficial do produtor.",
      },
      { property: "og:image", content: produto },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: Activity, title: "Equilibra o Açúcar no Sangue", text: "A Berberina é estudada há anos por seu efeito direto no metabolismo da glicose." },
  { icon: Flame, title: "Acelera a Queima de Gordura", text: "Ajuda o corpo a usar gordura como energia — especialmente na região abdominal." },
  { icon: Sparkles, title: "Tecnologia Transdérmica", text: "O ativo é liberado lentamente pela pele, sem passar pelo estômago, sem enjoo." },
  { icon: Bone, title: "Mais Energia o Dia Todo", text: "Sem picos e quedas de açúcar — você acorda disposto e termina o dia inteiro." },
  { icon: Leaf, title: "100% Natural e Discreto", text: "Adesivo fino, sem cheiro, invisível por baixo da roupa. Use e esqueça." },
  { icon: ShieldCheck, title: "Sem Comprimidos, Sem Dietas Loucas", text: "Funciona em silêncio enquanto você vive sua rotina normalmente." },
];

const testimonials = [
  { name: "Maria L., 58 anos", text: "Em poucas semanas minha glicose de jejum caiu de forma que meu médico fez questão de me perguntar o que eu estava fazendo diferente. Voltei a confiar no meu corpo." },
  { name: "José R., 62 anos", text: "Eu vivia cansado, com aquela barriga teimosa que não saía. Comecei a usar o adesivo e em um mês minhas roupas começaram a caber de novo. Sem dieta maluca." },
  { name: "Cleusa M., 54 anos", text: "Acabou aquela vontade descontrolada de doce no fim da tarde. Parece bobagem, mas mudou tudo na minha rotina e no meu peso." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white text-center text-sm py-2 px-4 font-bold tracking-wide">
        🔥 OFERTA OFICIAL POR TEMPO LIMITADO • ESTOQUE REDUZIDO • ENVIO INTERNACIONAL
      </div>

      {/* HERO */}
      <section className="bg-infinite px-4 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-orange-500/30 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-orange-400 uppercase tracking-wider">
              <Leaf className="w-4 h-4" /> Berberina • Tecnologia Transdérmica
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl leading-[1.05] font-black uppercase">
              O segredo natural que está <span className="text-gradient-orange">equilibrando o açúcar</span> e derretendo a gordura abdominal.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80">
              Milhares de pessoas acima dos 40 já trocaram comprimidos pesados e dietas restritivas pelo
              <strong className="text-white"> Berberine Patch</strong> — um adesivo discreto que age 24 horas por dia
              pela tecnologia transdérmica. <strong className="text-orange-400">Veja por que ele virou febre nos Estados Unidos.</strong>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer sponsored" className="btn-orange text-base md:text-lg inline-flex items-center gap-2">
                Acessar página oficial <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <div className="flex gap-0.5 text-orange-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400" />)}
                </div>
                4.9/5 • milhares de clientes
              </div>
            </div>
          </div>

          <div className="product-3d">
            <div className="product-glow" />
            <div className="product-3d-inner relative z-10">
              <img
                src={produto}
                alt="Berberine Patch — adesivo natural de berberina"
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
            { icon: Truck, t: "Envio Internacional" },
            { icon: ShieldCheck, t: "Garantia 60 dias" },
            { icon: Lock, t: "Checkout Oficial Seguro" },
            { icon: BadgeCheck, t: "Fórmula Estudada" },
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
              <AlertTriangle className="w-4 h-4" /> Você vive isso todos os dias?
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase">
              O açúcar descontrolado está <span className="text-gradient-orange">acelerando seu envelhecimento</span> — em silêncio.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img
                src={dorJoelho}
                alt="Pessoa cansada, sem energia ao acordar"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full rounded-3xl border border-white/10 shadow-2xl"
              />
              <p className="text-lg text-white/80 leading-relaxed">
                <strong className="text-white">Você acorda pesado, sem energia.</strong> A gordura na barriga não vai embora nem com dieta.
                À tarde bate aquela sonolência, e a vontade de doce parece mais forte que sua força de vontade.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src={dorColuna}
                alt="Pessoa preocupada com saúde e exames"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full rounded-3xl border border-white/10 shadow-2xl"
              />
              <p className="text-lg text-white/80 leading-relaxed">
                <strong className="text-white">Os exames vêm preocupando.</strong> Glicose subindo, colesterol alterado, pressão instável.
                O médico já avisou que se nada mudar, o próximo passo é começar uma medicação forte — pra vida toda.
              </p>
            </div>
          </div>

          <div className="mt-14 max-w-3xl mx-auto bg-card border-l-4 border-orange-500 rounded-2xl p-6 md:p-8">
            <p className="text-xl md:text-2xl text-white font-bold leading-snug">
              O problema <span className="text-gradient-orange">não é falta de esforço</span>.
              É a <span className="text-gradient-orange">resistência à insulina</span> sabotando seu corpo silenciosamente — e isso tem solução natural.
            </p>
          </div>
        </div>
      </section>

      {/* Solução com imagem real */}
      <section className="px-4 py-20 bg-honeycomb">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src={casalFeliz}
            alt="Casal feliz e saudável após usar Berberine Patch"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full rounded-3xl border border-orange-500/20 shadow-[0_30px_80px_-20px_rgba(255,90,30,0.45)]"
          />
          <div>
            <span className="inline-flex items-center gap-2 text-orange-400 text-sm font-bold uppercase tracking-wider">
              <Heart className="w-4 h-4" /> A solução chegou — e cabe num adesivo
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase">
              Conheça o <span className="text-gradient-orange">Berberine Patch.</span>
            </h2>
            <p className="mt-6 text-lg text-white/80">
              É um adesivo discreto que entrega <strong className="text-white">Berberina pura</strong> diretamente pela pele —
              o composto natural que cientistas já compararam à eficácia da Metformina nos estudos clínicos.
              Sem comprimidos, sem enjoo, sem esforço.
            </p>

            <ul className="mt-6 space-y-3 text-lg">
              {[
                "Açúcar no sangue mais estável o dia inteiro.",
                "Menos vontade de doce e de beliscar fora de hora.",
                "Gordura abdominal cedendo semana após semana.",
                "Energia constante, sem aquela queda da tarde.",
                "Roupas voltando a servir — sem dieta torturante.",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-white/90">{t}</span>
                </li>
              ))}
            </ul>

            <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer sponsored" className="btn-orange mt-8 text-base inline-flex items-center gap-2">
              Ver oferta na página oficial <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase">
              Por que o <span className="text-gradient-orange">Berberine Patch</span> funciona
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Liberação contínua de berberina pela pele — sem perder potência no estômago.
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
            Quem usou, <span className="text-gradient-orange">virou fã</span>
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
            <BadgeCheck className="w-4 h-4" /> Compra exclusiva no site oficial
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-black uppercase">
            Garanta seu <span className="text-gradient-orange">Berberine Patch</span> direto com o produtor
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Para proteger você de cópias e garantir o preço promocional, a venda é feita
            <strong className="text-white"> apenas na página oficial do fabricante</strong>.
            Lá você encontra os kits com desconto, o checkout seguro e a garantia de 60 dias.
          </p>

          <div className="mt-10 bg-card border border-orange-500/30 rounded-3xl p-8 text-left">
            <h3 className="text-xl text-white">O que você verá na próxima página:</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Os kits oficiais com até 60% de desconto",
                "Frete promocional e bônus exclusivos",
                "Garantia incondicional de 60 dias",
                "Checkout 100% seguro (ClickBank)",
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
            Ir para a página oficial <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-white/60 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Você será redirecionado ao site oficial do fabricante
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
          <h2 className="text-3xl md:text-4xl font-black uppercase">Garantia incondicional de 60 dias</h2>
          <p className="mt-4 text-lg text-white/75">
            Teste o Berberine Patch por 60 dias inteiros pela página oficial. Se você não sentir
            <strong className="text-orange-400"> diferença real</strong> na sua energia, peso e disposição,
            o produtor devolve <strong className="text-orange-400">100% do seu dinheiro</strong>. Sem perguntas. O risco é todo dele.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 bg-infinite">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            Sua nova versão <span className="text-gradient-orange">começa agora</span>.
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Cada dia adiando é mais um dia perdendo energia, saúde e tempo com sua família.
            O próximo passo está a um clique de distância — na página oficial do produtor.
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
            Quero conhecer o Berberine Patch <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="px-4 py-8 text-center text-sm text-white/40 border-t border-white/5">
        © {new Date().getFullYear()} 100DORES Plus • Suplemento alimentar. Não substitui uma alimentação equilibrada.
      </footer>
    </main>
  );
}
