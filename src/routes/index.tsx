import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/landing/Hero";
import ProductExplanation from "@/components/landing/ProductExplanation";
import Features from "@/components/landing/Features";
import RecipeDistribution from "@/components/landing/RecipeDistribution";
import Testimonials from "@/components/landing/Testimonials";
import Offer from "@/components/landing/Offer";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";

// CONFIGURAÇÕES EDITÁVEIS
const CHECKOUT_ESSENCIAL = "https://pay.cakto.com.br/3bnucyt_1159010";
const CHECKOUT_COMPLETO = "https://pay.cakto.com.br/hm66pnw_1159018";
const URL_VSL = "INSERIR_VIDEO_AQUI";
const depoimentos = [
  "https://i.ibb.co/fVsDS3q3/Whats-App-Image-2026-09-30-at-20-59-38.jpg",
  "https://i.ibb.co/0V24gg1h/Whats-App-Image-2026-09-30-at-21-03-29.webp",
  "https://i.ibb.co/57N4tFF/Whats-App-Image-2026-09-30-at-21-05-35.webp",
  "https://i.ibb.co/rGRhSsYN/Whats-App-Image-2026-09-30-at-21-09-40.webp",
  "https://i.ibb.co/0pdsh2bC/Whats-App-Image-2026-09-30-at-21-14-44.webp",
  "https://i.ibb.co/mF59WXnj/Whats-App-Image-2026-09-30-at-21-20-49.webp",
];
const imagemBonusEspecial = "INSERIR_IMAGEM_DO_BONUS_AQUI";
const nomeProfissional = "[NOME DA PROFISSIONAL]";
const credenciaisProfissional = "[CRM / CREDENCIAIS REAIS]";

const TITLE = "Bebê Comilão | 365 Receitas para Facilitar a Alimentação do Seu Bebê";
const DESC =
  "365 receitas organizadas para facilitar a introdução alimentar e a organização das refeições do seu bebê.";

export const Route = createFileRoute("/")({
  head: () => ({
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
      <Hero vslUrl={URL_VSL} />
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
