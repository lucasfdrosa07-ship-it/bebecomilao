import { motion } from 'motion/react';
import type { MouseEvent } from 'react';
import { Sparkles, ShieldCheck, Smartphone } from 'lucide-react';
import heroMockup from '@/assets/mockup-365-receitas.png.asset.json';

export default function Hero() {
  const scrollToOffer = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const offer = document.getElementById('kit-completo');
    if (!offer) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      offer.scrollIntoView();
      window.history.replaceState(null, '', '#kit-completo');
      return;
    }

    const start = window.scrollY;
    const target = offer.getBoundingClientRect().top + start;
    const distance = target - start;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const duration = isMobile ? 3000 : 1600;
    const startedAt = performance.now();

    const animateScroll = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      window.scrollTo({ top: start + distance * eased });
      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
      } else {
        window.history.replaceState(null, '', '#kit-completo');
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  return (
    <section className="pt-8 pb-10 md:pt-12 md:pb-12 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* 1. HEADLINE */}
      <motion.h1 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#292524] mb-6 md:mb-8 tracking-tight leading-snug md:leading-tight max-w-3xl mx-auto text-balance"
      >
        +365 Receitas caseiras para seu bebê de +6 meses crescer saudável na introdução alimentar.
      </motion.h1>

      {/* Mockup principal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex justify-center mb-6 md:mb-8"
      >
        <img
          src={heroMockup.url}
          alt="Coleção Bebê Comilão com 365 receitas"
          width="1336"
          height="760"
          className="w-full max-w-[600px] h-auto object-contain"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </motion.div>

      {/* 3. SUBHEADLINE */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-[#57534E] mb-5 max-w-2xl mx-auto leading-relaxed"
      >
        365 receitas organizadas por fase para variar as refeições, facilitar sua rotina e apoiar o crescimento saudável do seu bebê.
      </motion.p>

      {/* 4. LINHA DE CONFIANÇA */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-[#78716C] mb-8"
      >
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#FB7185]" />
          365 receitas
        </span>
        <span aria-hidden="true" className="text-[#D6D3D1]">•</span>
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FB7185]" />
          Organização prática
        </span>
        <span aria-hidden="true" className="text-[#D6D3D1]">•</span>
        <span className="inline-flex items-center gap-1.5">
          <Smartphone className="w-3.5 h-3.5 text-[#FB7185]" />
          Acesso digital
        </span>
      </motion.div>

      {/* Primeiro botão de compra */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a 
          href="#oferta"
          onClick={scrollToOffer}
          className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 sm:py-4.5 bg-[#FB7185] hover:bg-[#F43F5E] text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.99] tracking-wide"
        >
          QUERO AS 365 RECEITAS
        </a>
      </motion.div>
    </section>
  );
}
