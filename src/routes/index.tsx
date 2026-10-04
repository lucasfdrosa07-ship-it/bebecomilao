import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/landing/Hero";
import ProductExplanation from "@/components/landing/ProductExplanation";
import Features from "@/components/landing/Features";
import RecipeDistribution from "@/components/landing/RecipeDistribution";
import Testimonials from "@/components/landing/Testimonials";
import Offer from "@/components/landing/Offer";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import OfferCountdown from "@/components/landing/OfferCountdown";
import RecipeMarquee from "@/components/landing/RecipeMarquee";
import heroMockup from "@/assets/hero-mockup.png.asset.json";

// CONFIGURAÇÕES EDITÁVEIS
const CHECKOUT_ESSENCIAL = "https://pay.cakto.com.br/3bnucyt_1159010";
const CHECKOUT_COMPLETO = "https://pay.cakto.com.br/hm66pnw_1159018";
const depoimentos = [
  "/__l5e/assets-v1/152cc18e-4183-4637-bb4d-85940dca7392/depo1.jpg",
  "/__l5e/assets-v1/5b728522-bbdc-4ab0-b0f1-cd23bf937aef/depo2.webp",
  "/__l5e/assets-v1/f9bea314-ef88-4a55-8117-1041a4a86a59/depo4.webp",
  "/__l5e/assets-v1/f046f93c-63dc-4f89-86c1-a2f364138f3e/depo5.webp",
  "/__l5e/assets-v1/c3332524-1449-4042-a4f2-bb8a0886118a/depo6.webp",
];
const imagemBonusEspecial = "INSERIR_IMAGEM_DO_BONUS_AQUI";
const nomeProfissional = "[NOME DA PROFISSIONAL]";
const credenciaisProfissional = "[CRM / CREDENCIAIS REAIS]";

const TITLE = "Bebê Comilão | 365 Receitas para Facilitar a Alimentação do Seu Bebê";
const DESC =
  "365 receitas organizadas para facilitar a introdução alimentar e a organização das refeições do seu bebê.";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "preload", as: "image", href: heroMockup.url, fetchPriority: "high" },
      {
        rel: "preload",
        as: "image",
        href: "/__l5e/assets-v1/acc518fa-15c4-4af2-8a04-6207582a1112/logo.png",
        fetchPriority: "high",
      },
    ],
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#292524] font-sans antialiased overflow-x-hidden selection:bg-[#FB7185]/20 selection:text-[#292524]">
      <OfferCountdown />
      <Hero />
      <RecipeMarquee />
      <ProductExplanation />
      <Features />
      <RecipeDistribution />
      <Testimonials images={depoimentos} />
      <Offer
        checkoutEssencial={CHECKOUT_ESSENCIAL}
        checkoutCompleto={CHECKOUT_COMPLETO}
        imagemBonus={imagemBonusEspecial}
        nomeProfissional={nomeProfissional}
        credenciaisProfissional={credenciaisProfissional}
      />
      <FAQ />
      <FinalCTA checkoutEssencial={CHECKOUT_ESSENCIAL} checkoutCompleto={CHECKOUT_COMPLETO} />
      <footer className="py-8 px-4 text-center text-xs text-[#A8A29E] border-t border-[#F3E8DF]">
        <p className="max-w-xl mx-auto">
          Bebê Comilão — Coleção de 365 receitas práticas para introdução alimentar.
        </p>
        <p className="mt-2 text-[11px]">© Bebê Comilão. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
