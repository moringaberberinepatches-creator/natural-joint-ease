import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import produto from "@/assets/produto-real.png";
import heroEn from "@/assets/hero-en.png";
import heroPt from "@/assets/hero-pt.png";
import baSarah from "@/assets/before-after-sarah.jpg";
import baLinda from "@/assets/before-after-linda.jpg";
import baJessica from "@/assets/before-after-jessica.jpg";
import guaranteeBadge from "@/assets/guarantee-badge.png";
import benefitBloodSugar from "@/assets/benefit-blood-sugar.jpg";
import benefitBurnFat from "@/assets/benefit-burn-fat.jpg";
import benefitTransdermal from "@/assets/benefit-transdermal.jpg";
import benefitEnergy from "@/assets/benefit-energy.jpg";
import benefitNatural from "@/assets/benefit-natural.jpg";
import benefitNoPills from "@/assets/benefit-no-pills.jpg";
import productPouch from "@/assets/produto-pouch.webp.asset.json";
import productAntesDepois from "@/assets/produto-antes-depois.webp.asset.json";
import productMedidas from "@/assets/produto-medidas.webp.asset.json";
import productDiscreto from "@/assets/produto-discreto.webp.asset.json";
import productDesign from "@/assets/produto-design.webp.asset.json";
import productIngredientes from "@/assets/produto-ingredientes.webp.asset.json";
import {
  ShieldCheck,
  Flame,
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
  Globe,
  Zap,
} from "lucide-react";

const OFFICIAL_URL =
  "https://5d7d7dfic5b81t1g8jvo3g2vzs.hop.clickbank.net/?&traffic_source=google&traffic_type=search&campaign=berberine_patch_us&creative=review_v1";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Berberine Patch: Adesivo Natural para Emagrecimento — Alternativa ao Ozempic" },
      {
        name: "description",
        content:
          "Berberine Patch: adesivo natural para emagrecimento que acelera o metabolismo. Alternativa ao Ozempic sem agulhas, com garantia de 30 dias. Nature's Ozempic com berberina e suporte GLP-1 natural.",
      },
      {
        name: "keywords",
        content:
          "berberine patch, adesivo berberina, adesivo natural para emagrecimento, alternativa ao ozempic, ozempic natural, alternativa natural ao ozempic, nature's ozempic, natures ozempic, mounjaro natural, alternativa ao mounjaro, berberina, berberina emagrecimento, berberina para emagrecer, berberina ozempic, emagrecer com berberina, perda de peso com berberina, glp-1 natural, suporte glp-1 natural, alternativa glp-1, acelerar metabolismo, emagrecimento natural, adesivo emagrecedor, purisaki, purisaki berberine patch, berberine patches reviews, do berberine patches work",
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:type", content: "product" },
      { property: "og:title", content: "Berberine Patch — Adesivo Natural para Emagrecimento • Alternativa ao Ozempic" },
      {
        property: "og:description",
        content:
          "Adesivo natural com berberina que acelera o metabolismo. Nature's Ozempic sem agulhas, com suporte GLP-1 natural e garantia de 30 dias.",
      },
      { property: "og:url", content: "https://moringaberberinepatches.com/" },
      { property: "og:image", content: produto },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Berberine Patch — Alternativa Natural ao Ozempic" },
      {
        name: "twitter:description",
        content:
          "Adesivo natural com berberina para emagrecimento. Suporte GLP-1 natural, sem agulhas, com garantia de 30 dias.",
      },
      { name: "twitter:image", content: produto },

    ],
    links: [{ rel: "canonical", href: "https://moringaberberinepatches.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Purisaki Berberine Patch",
          alternateName: ["Berberine Patch", "Purisaki Patches", "Berberine Weight Loss Patch"],
          description:
            "Transdermal berberine weight-management patch with pomegranate and fucoxanthin. Supports healthy blood sugar, fat burning and steady energy.",
          brand: { "@type": "Brand", name: "Purisaki" },
          category: "Health & Personal Care › Weight Management",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "1273",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do Purisaki Berberine Patches work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The Purisaki Berberine Patch delivers berberine, pomegranate and fucoxanthin transdermally throughout the day to support blood sugar balance and weight management — many users report results within 30 days when worn daily.",
              },
            },
            {
              "@type": "Question",
              name: "Are Purisaki Berberine Patches legit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — Purisaki Berberine Patches are sold exclusively on the official manufacturer site with a 30-day money-back guarantee.",
              },
            },
            {
              "@type": "Question",
              name: "How do you use the Purisaki Berberine Patch?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Apply one patch per day to clean, dry skin on the lower abdomen or upper arm. Replace every 24 hours.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

type Lang = "en" | "pt";

const COPY = {
  en: {
    topBar: "🔥 OFFICIAL LIMITED-TIME OFFER • LOW STOCK • FREE U.S. SHIPPING",
    heroTag: "Berberine • Transdermal Technology",
    heroTitle1: "Become the woman",
    heroTitle2: "he can't stop",
    heroTitle3: "looking at.",
    heroSub:
      "Thousands of women over 40 traded harsh pills and impossible diets for the",
    heroSubStrong: " Berberine Patch ",
    heroSubEnd:
      "— a discreet adhesive that works 24/7 through transdermal technology.",
    heroSubEm: "See why it became a phenomenon in the U.S.",
    ctaHero: "Visit official site",
    rating: "4.9/5 • thousands of happy women",
    trust: [
      { t: "Free U.S. Shipping" },
      { t: "30-Day Guarantee" },
      { t: "Secure Checkout" },
      { t: "Studied Formula" },
    ],
    storyEyebrow: "A moment every woman knows",
    storyTitle1: "Imagine yourself, all dressed up, at a",
    storyTitle2: "special restaurant",
    storyTitle3: "with your husband.",
    storyLines: [
      "The perfect night.",
      "Until a stunning woman walks past your table.",
      "And he can't stop looking.",
    ],
    storyHurt: "It hurts, doesn't it?",
    storyNow1: "Now imagine that woman",
    storyNowEm: "is you",
    storyNow2: "— with Berberine Patch.",
    guaranteeBox:
      "Try it for 30 full days. If you're not surprised by what you see in the mirror, we refund 100% of your money. The risk is entirely on us.",
    guaranteeDays: "30 full days",
    guaranteeMoney: "100% of your money",
    ctaStory: "I want to be that woman",
    problemEyebrow: "Does this sound like you?",
    problemTitle1: "Unbalanced blood sugar is",
    problemTitleEm: "aging you faster",
    problemTitle2: "— silently.",
    baEyebrow: "Real before & after",
    baTitle1: "What",
    baTitleEm: "30 days",
    baTitle2: "with the patch can do",
    baSub:
      "Real women, real transformations. Each one wore the Berberine Patch daily — no diet shocks, no gym torture.",
    baCards: [
      { img: baSarah, name: "Sarah, 47", text: "Lost 14 lbs and got her confidence back." },
      { img: baLinda, name: "Linda, 52", text: "Flat belly for the first time in 10 years." },
      { img: baJessica, name: "Jessica, 44", text: "More energy than her own daughter." },
    ],
    solEyebrow: "The solution fits in a single patch",
    solTitle1: "Meet the",
    solTitleEm: "Berberine Patch.",
    solDesc:
      "A discreet adhesive that delivers pure Berberine straight through your skin — the natural compound scientists have compared to Metformin in clinical studies. No pills. No nausea. No effort.",
    solBullets: [
      "Stable blood sugar throughout the day.",
      "Fewer sweet cravings and late-night snacking.",
      "Belly fat melting away week after week.",
      "Steady energy — no afternoon crash.",
      "Your favorite clothes fitting again — without torture diets.",
    ],
    ctaSol: "See the offer on the official site",
    benefitsTitle1: "Why",
    benefitsTitleEm: "Berberine Patch",
    benefitsTitle2: "works",
    benefitsSub:
      "Continuous berberine release through the skin — no potency lost in your stomach.",
    benefits: [
      { img: benefitBloodSugar, title: "Balances Blood Sugar", text: "Berberine has been studied for years for its direct effect on glucose metabolism." },
      { img: benefitBurnFat, title: "Burns Stubborn Fat", text: "Helps your body use fat as fuel — especially around the belly and hips." },
      { img: benefitTransdermal, title: "Transdermal Technology", text: "Released slowly through the skin — no stomach upset, no pills to swallow." },
      { img: benefitEnergy, title: "All-Day Energy", text: "No sugar crashes. Wake up light, stay sharp until bedtime." },
      { img: benefitNatural, title: "Discreet & 100% Natural", text: "Thin, odorless, invisible under any outfit. Wear it and forget it." },
      { img: benefitNoPills, title: "No Pills, No Crazy Diets", text: "Works quietly in the background while you live your normal life." },
    ],
    testimonialsTitle1: "Real women,",
    testimonialsTitleEm: "real results",
    testimonials: [
      { name: "Sarah M., 47", text: "Within a few weeks my fasting glucose dropped so much my doctor literally asked what I was doing differently. I feel like ME again." },
      { name: "Linda K., 52", text: "I lived tired, with that stubborn belly that wouldn't go away. After one month with the patch, my clothes started fitting again. No crazy diet." },
      { name: "Jessica T., 44", text: "The late-afternoon sugar cravings? Gone. Sounds small but it changed my entire routine — and my body." },
    ],
    preBadge: "Available only on the official site",
    preTitle1: "Get your",
    preTitleEm: "Berberine Patch",
    preTitle2: "direct from the maker",
    preSub:
      "To protect you from counterfeits and guarantee the promo pricing, Berberine Patch is sold only on the official manufacturer page. That's where the discounted kits, secure checkout and 30-day guarantee live.",
    preList: [
      "Official kits with up to 60% off",
      "Free shipping and exclusive bonuses",
      "Unconditional 30-day money-back guarantee",
      "100% secure checkout (ClickBank)",
    ],
    preWhat: "What you'll see on the next page:",
    ctaPre: "Go to the official site",
    redirect: "You'll be redirected to the official manufacturer page",
    guaranteeTitle: "30-Day Money-Back Guarantee",
    guaranteeBody:
      "Try Berberine Patch for 30 full days through the official site. If you're not genuinely surprised by the change in your body, energy and confidence, the maker refunds 100% of your money. No questions asked. The risk is entirely on us.",
    finalTitle1: "Your new version",
    finalTitleEm: "starts today.",
    finalSub:
      "Every day you wait is another day losing energy, confidence and time with the people you love. The next step is one click away — on the official manufacturer page.",
    ctaFinal: "Try Berberine Patch now",
    footer: "Dietary supplement. Does not replace a balanced diet.",
  },
  pt: {
    topBar: "🔥 OFERTA OFICIAL POR TEMPO LIMITADO • ESTOQUE BAIXO • FRETE GRÁTIS",
    heroTag: "Berberina • Tecnologia Transdérmica",
    heroTitle1: "Seja a mulher",
    heroTitle2: "que ele não",
    heroTitle3: "consegue parar de olhar.",
    heroSub:
      "Milhares de mulheres acima dos 40 trocaram o Ozempic, o Mounjaro e dietas impossíveis pelo",
    heroSubStrong: " Berberine Patch — o adesivo natural para emagrecimento ",
    heroSubEnd:
      "com berberina, considerado o Nature's Ozempic: acelera o metabolismo 24h por dia através de tecnologia transdérmica, sem agulhas e sem comprimidos.",
    heroSubEm: "Alternativa natural ao Ozempic e suporte GLP-1 natural — veja por que virou febre nos EUA.",
    ctaHero: "Acessar site oficial",

    rating: "4.9/5 • milhares de mulheres satisfeitas",
    trust: [
      { t: "Frete Grátis" },
      { t: "Garantia de 30 dias" },
      { t: "Compra Segura" },
      { t: "Fórmula Estudada" },
    ],
    storyEyebrow: "Um momento que toda mulher conhece",
    storyTitle1: "Imagine você, toda arrumada, num",
    storyTitle2: "restaurante especial",
    storyTitle3: "com seu marido.",
    storyLines: [
      "A noite perfeita.",
      "Até que uma mulher linda passa pela sua mesa.",
      "E ele não consegue parar de olhar.",
    ],
    storyHurt: "Dói, não dói?",
    storyNow1: "Agora imagine que essa mulher",
    storyNowEm: "é você",
    storyNow2: "— com o Berberine Patch.",
    guaranteeBox:
      "Teste por 30 dias completos. Se você não se surpreender com o que vê no espelho, devolvemos 100% do seu dinheiro. O risco é todo nosso.",
    guaranteeDays: "30 dias completos",
    guaranteeMoney: "100% do seu dinheiro",
    ctaStory: "Quero ser essa mulher",
    problemEyebrow: "Isso se parece com você?",
    problemTitle1: "Açúcar no sangue desregulado está",
    problemTitleEm: "te envelhecendo mais rápido",
    problemTitle2: "— em silêncio.",
    baEyebrow: "Antes & depois reais",
    baTitle1: "O que",
    baTitleEm: "30 dias",
    baTitle2: "com o adesivo podem fazer",
    baSub:
      "Mulheres reais, transformações reais. Cada uma usou o Berberine Patch diariamente — sem dietas radicais, sem tortura na academia.",
    baCards: [
      { img: baSarah, name: "Sarah, 47", text: "Perdeu 6 kg e recuperou a confiança." },
      { img: baLinda, name: "Linda, 52", text: "Barriga lisa pela primeira vez em 10 anos." },
      { img: baJessica, name: "Jessica, 44", text: "Mais energia que a própria filha." },
    ],
    solEyebrow: "A solução cabe num único adesivo",
    solTitle1: "Conheça o",
    solTitleEm: "Berberine Patch.",
    solDesc:
      "O Berberine Patch é um adesivo natural para emagrecimento que libera berberina pura direto pela pele — o composto que cientistas chamam de Nature's Ozempic por oferecer suporte GLP-1 natural e ser comparado à Metformina, ao Ozempic e ao Mounjaro em estudos clínicos. Emagrecer com berberina ficou simples: sem agulhas, sem comprimidos, sem náusea.",
    solBullets: [
      "Alternativa natural ao Ozempic e ao Mounjaro — sem agulhas.",
      "Berberina para emagrecer com liberação contínua 24h.",
      "Acelera o metabolismo e ajuda a queimar a gordura da barriga.",
      "Suporte GLP-1 natural — menos fome e menos vontade de doce.",
      "Garantia de 30 dias: emagrecimento natural e sem risco.",
    ],
    ctaSol: "Ver oferta no site oficial",
    benefitsTitle1: "Por que o",
    benefitsTitleEm: "Berberine Patch",
    benefitsTitle2: "é o Nature's Ozempic",
    benefitsSub:
      "Berberina com liberação contínua pela pele — alternativa natural ao Ozempic e Mounjaro, com suporte GLP-1 natural e sem perder potência no estômago.",

    benefits: [
      { img: benefitBloodSugar, title: "Equilibra a Glicose", text: "A berberina é estudada há anos pelo seu efeito direto no metabolismo da glicose." },
      { img: benefitBurnFat, title: "Queima Gordura Teimosa", text: "Ajuda o corpo a usar gordura como combustível — principalmente barriga e quadril." },
      { img: benefitTransdermal, title: "Tecnologia Transdérmica", text: "Liberação lenta pela pele — sem irritar o estômago, sem comprimido." },
      { img: benefitEnergy, title: "Energia o Dia Todo", text: "Sem picos de açúcar. Acorde leve e se mantenha disposta até a noite." },
      { img: benefitNatural, title: "Discreto & 100% Natural", text: "Fino, sem cheiro, invisível embaixo de qualquer roupa. Cole e esqueça." },
      { img: benefitNoPills, title: "Sem Comprimidos, Sem Dietas Loucas", text: "Age em silêncio enquanto você vive sua vida normal." },
    ],
    testimonialsTitle1: "Mulheres reais,",
    testimonialsTitleEm: "resultados reais",
    testimonials: [
      { name: "Sarah M., 47", text: "Em poucas semanas minha glicose em jejum caiu tanto que meu médico perguntou o que eu estava fazendo de diferente. Voltei a me sentir EU." },
      { name: "Linda K., 52", text: "Vivia cansada, com aquela barriga teimosa que não saía. Depois de um mês com o adesivo, minhas roupas voltaram a servir. Sem dieta louca." },
      { name: "Jessica T., 44", text: "A vontade de doce no fim da tarde? Sumiu. Parece pouco, mas mudou toda a minha rotina — e meu corpo." },
    ],
    preBadge: "Disponível somente no site oficial",
    preTitle1: "Receba seu",
    preTitleEm: "Berberine Patch",
    preTitle2: "direto do fabricante",
    preSub:
      "Para te proteger de falsificações e garantir o preço promocional, o Berberine Patch é vendido somente na página oficial do fabricante. É lá que estão os kits com desconto, o checkout seguro e a garantia de 30 dias.",
    preList: [
      "Kits oficiais com até 60% de desconto",
      "Frete grátis e bônus exclusivos",
      "Garantia incondicional de 30 dias",
      "Checkout 100% seguro (ClickBank)",
    ],
    preWhat: "O que você vai ver na próxima página:",
    ctaPre: "Ir para o site oficial",
    redirect: "Você será redirecionada para a página oficial do fabricante",
    guaranteeTitle: "Garantia de 30 Dias",
    guaranteeBody:
      "Teste o Berberine Patch por 30 dias completos pelo site oficial. Se você não ficar genuinamente surpresa com a mudança no seu corpo, energia e confiança, o fabricante devolve 100% do seu dinheiro. Sem perguntas. O risco é todo nosso.",
    finalTitle1: "Sua nova versão",
    finalTitleEm: "começa hoje.",
    finalSub:
      "Cada dia que passa é mais um dia perdendo energia, confiança e tempo com as pessoas que você ama. O próximo passo está a um clique — na página oficial do fabricante.",
    ctaFinal: "Quero o Berberine Patch agora",
    footer: "Suplemento alimentar. Não substitui uma alimentação equilibrada.",
  },
} as const;

export function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const t = COPY[lang];
  const heroImg = lang === "en" ? heroEn : heroPt;

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white text-center text-sm py-2 px-4 font-bold tracking-wide">
        {t.topBar}
      </div>

      {/* Language switch */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-end">
          <div className="inline-flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
            <Globe className="w-4 h-4 text-white/60 ml-2" />
            <button
              onClick={() => setLang("en")}
              className={`text-xs font-bold px-3 py-1 rounded-full transition ${lang === "en" ? "bg-orange-500 text-white" : "text-white/70 hover:text-white"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pt")}
              className={`text-xs font-bold px-3 py-1 rounded-full transition ${lang === "pt" ? "bg-orange-500 text-white" : "text-white/70 hover:text-white"}`}
            >
              PT
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-infinite px-4 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-orange-500/30 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-orange-400 uppercase tracking-wider">
              <Leaf className="w-4 h-4" /> {t.heroTag}
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl leading-[1.05] font-black uppercase">
              {t.heroTitle1} <span className="text-gradient-orange">{t.heroTitle2}</span> {t.heroTitle3}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80">
              {t.heroSub}<strong className="text-white">{t.heroSubStrong}</strong>{t.heroSubEnd}{" "}
              <strong className="text-orange-400">{t.heroSubEm}</strong>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer sponsored" className="btn-orange text-base md:text-lg inline-flex items-center gap-2">
                {t.ctaHero} <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <div className="flex gap-0.5 text-orange-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400" />)}
                </div>
                {t.rating}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-orange-500/20 blur-3xl rounded-3xl" />
            <img
              src={heroImg}
              alt={lang === "en" ? "Tired of being overlooked? Berberine Patch" : "Cansada de ser ignorada? Berberine Patch"}
              width={1200}
              height={950}
              className="relative w-full rounded-3xl shadow-2xl border border-orange-500/20"
            />
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
            { icon: Truck, t: t.trust[0].t },
            { icon: ShieldCheck, t: t.trust[1].t },
            { icon: Lock, t: t.trust[2].t },
            { icon: BadgeCheck, t: t.trust[3].t },
          ].map(({ icon: Icon, t: label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="w-7 h-7 text-orange-500" />
              <span className="font-bold text-white/90">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="px-4 py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-red-400 text-sm font-bold uppercase tracking-wider">
            <Eye className="w-4 h-4" /> {t.storyEyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase leading-tight">
            {t.storyTitle1} <span className="text-gradient-orange">{t.storyTitle2}</span> {t.storyTitle3}
          </h2>
          <div className="mt-10 space-y-6 text-xl md:text-2xl text-white/85 leading-relaxed font-medium">
            {t.storyLines.map((line, i) => (
              <p key={i} className={i === 2 ? "text-white" : ""}>{line}</p>
            ))}
            <p className="text-orange-400 font-bold">{t.storyHurt}</p>
            <p className="pt-4 text-2xl md:text-3xl text-white font-black">
              {t.storyNow1} <span className="text-gradient-orange">{t.storyNowEm}</span> {t.storyNow2}
            </p>
          </div>

          <div className="mt-12 inline-block bg-card border border-orange-500/40 rounded-3xl px-6 py-5 text-left max-w-xl">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-7 h-7 text-orange-500 shrink-0 mt-1" />
              <p className="text-white/90">{t.guaranteeBox}</p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href={OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-orange text-base md:text-lg inline-flex items-center gap-2"
            >
              {t.ctaStory} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="px-4 py-20 bg-honeycomb">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-orange-400 text-sm font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> {t.baEyebrow}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase">
              {t.baTitle1} <span className="text-gradient-orange">{t.baTitleEm}</span> {t.baTitle2}
            </h2>
            <p className="mt-4 text-lg text-white/75">{t.baSub}</p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {t.baCards.map((c) => (
              <div key={c.name} className="bg-card border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/40 transition">
                <div className="relative">
                  <img
                    src={c.img}
                    alt={`${c.name} — before and after Berberine Patch`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 bg-zinc-900/80 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {lang === "en" ? "Before" : "Antes"}
                  </div>
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {lang === "en" ? "After" : "Depois"}
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-bold text-orange-400">{c.name}</p>
                  <p className="mt-1 text-white/85">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-orange-400 text-sm font-bold uppercase tracking-wider">
            <Heart className="w-4 h-4" /> {t.solEyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase">
            {t.solTitle1} <span className="text-gradient-orange">{t.solTitleEm}</span>
          </h2>
          <p className="mt-6 text-lg text-white/80">{t.solDesc}</p>

          <ul className="mt-8 space-y-3 text-lg text-left max-w-xl mx-auto">
            {t.solBullets.map((b) => (
              <li key={b} className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-white/90">{b}</span>
              </li>
            ))}
          </ul>

          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer sponsored" className="btn-orange mt-10 text-base inline-flex items-center gap-2">
            {t.ctaSol} <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Product Carousel */}
      <ProductCarousel lang={lang} />






      {/* Testimonials */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-5xl font-black uppercase">
            {t.testimonialsTitle1} <span className="text-gradient-orange">{t.testimonialsTitleEm}</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {t.testimonials.map((tt) => (
              <div key={tt.name} className="bg-card border border-white/5 rounded-2xl p-6">
                <div className="flex gap-1 text-orange-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400" />)}
                </div>
                <p className="text-white/90">"{tt.text}"</p>
                <p className="mt-4 text-sm font-bold text-orange-400">— {tt.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-sale */}
      <section id="ofertas" className="px-4 py-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-2 rounded-full text-xs font-bold text-orange-400 uppercase tracking-wider">
            <BadgeCheck className="w-4 h-4" /> {t.preBadge}
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-black uppercase">
            {t.preTitle1} <span className="text-gradient-orange">{t.preTitleEm}</span> {t.preTitle2}
          </h2>
          <p className="mt-5 text-lg text-white/75">{t.preSub}</p>

          <div className="mt-10 bg-card border border-orange-500/30 rounded-3xl p-8 text-left">
            <h3 className="text-xl text-white">{t.preWhat}</h3>
            <ul className="mt-4 space-y-3">
              {t.preList.map((p) => (
                <li key={p} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-white/90">{p}</span>
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
            {t.ctaPre} <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-white/60 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> {t.redirect}
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto bg-card border border-orange-500/30 rounded-3xl p-8 md:p-12 text-center">
          <img
            src={guaranteeBadge}
            alt="30-Day Money Back Guarantee — Berberine Patch"
            loading="lazy"
            width={1024}
            height={1024}
            className="mx-auto w-48 md:w-56 h-auto mb-4"
          />
          <h2 className="text-3xl md:text-4xl font-black uppercase">{t.guaranteeTitle}</h2>
          <p className="mt-4 text-lg text-white/75">{t.guaranteeBody}</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 bg-infinite">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            {t.finalTitle1} <span className="text-gradient-orange">{t.finalTitleEm}</span>
          </h2>
          <p className="mt-5 text-lg text-white/80">{t.finalSub}</p>
          <div className="mt-10 flex justify-center">
            <ArrowRight className="w-10 h-10 text-orange-500 animate-bounce -rotate-90" />
          </div>
          <a
            href={OFFICIAL_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-orange mt-6 text-base md:text-lg inline-flex items-center gap-2"
          >
            {t.ctaFinal} <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="px-4 py-8 text-center text-sm text-white/40 border-t border-white/5">
        © {new Date().getFullYear()} Berberine Patch • {t.footer}
      </footer>
    </main>
  );
}


function ProductCarousel({ lang }: { lang: Lang }) {
  const slides = lang === "pt"
    ? [
        { img: productPouch.url, title: "Berberine Patch Original", text: "Programa de 30 dias — 30 adesivos transdérmicos com berberina, fucoxantina, romã e bioperina. O Nature's Ozempic que age 24h por dia." },
        { img: productAntesDepois.url, title: "Resultados Reais e Visíveis", text: "Mulheres reais relatam barriga mais lisa, menos vontade de doce e mais energia em poucas semanas. Sem dieta extrema, sem agulhas." },
        { img: productIngredientes.url, title: "Fórmula Natural Premium", text: "Ingredientes botânicos que ativam o metabolismo suavemente, suportam o GLP-1 natural e refinam a silhueta com conforto." },
        { img: productDesign.url, title: "Tecnologia Transdérmica", text: "Adesivo fino que cola firme, libera o ativo direto na corrente sanguínea pela pele — sem irritar o estômago, sem comprimido, sem náusea." },
        { img: productDiscreto.url, title: "Discreto e Invisível", text: "Fino, sem cheiro, invisível embaixo de qualquer roupa. Use no trabalho, na academia ou dormindo. Cole e esqueça." },
        { img: productMedidas.url, title: "Caixa de 30 Unidades", text: "30 adesivos por caixa = 1 mês completo de programa. 7cm de diâmetro, prontos para começar a sua transformação hoje." },
      ]
    : [
        { img: productPouch.url, title: "Berberine Patch Original", text: "30-day program — 30 transdermal patches with berberine, fucoxanthin, pomegranate & bioperine. Nature's Ozempic working 24/7." },
        { img: productAntesDepois.url, title: "Real, Visible Results", text: "Real women report a flatter belly, fewer cravings and more energy in weeks. No extreme diets. No needles." },
        { img: productIngredientes.url, title: "Premium Natural Formula", text: "Botanical actives that gently fire up metabolism, support natural GLP-1 and refine your silhouette comfortably." },
        { img: productDesign.url, title: "Transdermal Technology", text: "Thin patch that sticks firmly and delivers actives through the skin — no stomach upset, no pills, no nausea." },
        { img: productDiscreto.url, title: "Discreet & Invisible", text: "Thin, odorless, invisible under any outfit. Wear it at work, at the gym, while you sleep. Stick it and forget it." },
        { img: productMedidas.url, title: "30-Patch Box", text: "30 patches per box = a full 30-day program. 7cm diameter, ready to start your transformation today." },
      ];

  const [idx, setIdx] = useState(0);
  const go = (n: number) => setIdx((idx + n + slides.length) % slides.length);

  return (
    <section className="px-4 py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-orange-400 text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> {lang === "pt" ? "Conheça o Produto" : "Meet the Product"}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black uppercase">
            {lang === "pt" ? "Por Dentro do " : "Inside the "}
            <span className="text-gradient-orange">Berberine Patch</span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            {lang === "pt"
              ? "Deslize e veja cada detalhe do adesivo que está virando obsessão das mulheres que querem emagrecer sem agulhas."
              : "Swipe and see every detail of the patch women everywhere are obsessing over to lose weight without needles."}
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {slides.map((s) => (
                <div key={s.title} className="min-w-full grid md:grid-cols-2">
                  <div className="bg-white aspect-square md:aspect-auto md:min-h-[460px] flex items-center justify-center p-6">
                    <img src={s.img} alt={s.title} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-black text-white">{s.title}</h3>
                    <p className="mt-4 text-white/75 text-lg leading-relaxed">{s.text}</p>
                    <a
                      href={OFFICIAL_URL}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="btn-orange mt-8 inline-flex items-center gap-2 self-start"
                    >
                      {lang === "pt" ? "Quero o meu agora" : "I want mine now"} <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => go(-1)}
            aria-label="Prev"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-orange-500 text-white w-11 h-11 rounded-full flex items-center justify-center border border-white/20"
          >
            ‹
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-orange-500 text-white w-11 h-11 rounded-full flex items-center justify-center border border-white/20"
          >
            ›
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-orange-500" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

