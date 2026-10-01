import { motion } from 'motion/react';
import { Play, Sparkles, ShieldCheck, Smartphone } from 'lucide-react';

interface HeroProps {
  vslUrl: string;
}

export default function Hero({ vslUrl }: HeroProps) {
  const isVideoConfigured = vslUrl && vslUrl !== "INSERIR_VIDEO_AQUI";

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* LOGOTIPO */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-5 md:mb-6"
      >
        <img 
          src="https://i.ibb.co/mrFz8mYF/Chat-GPT-Image-30-de-set-de-2026-18-36-28.png"
          alt="Bebê Comilão"
          className="h-11 sm:h-14 md:h-16 w-auto object-contain"
          loading="eager"
        />
      </motion.div>

      {/* 1. HEADLINE */}
      <motion.h1 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#292524] mb-6 md:mb-8 tracking-tight leading-snug md:leading-tight max-w-3xl mx-auto text-balance"
      >
        Cansada de decidir o que dar para o seu bebê todos os dias? Veja no vídeo como 365 receitas organizadas resolvem isso.
      </motion.h1>

      {/* 2. VSL (CONTAINER 16:9 OBRIGATÓRIO) */}
      {/* <!-- INSERIR VSL AQUI --> */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative w-full aspect-video bg-[#F5EBE6] rounded-2xl overflow-hidden shadow-xl border border-[#F3E2DB] mb-6 md:mb-8"
      >
        {isVideoConfigured ? (
          <iframe
            src={vslUrl}
            title="Vídeo de Apresentação Bebê Comilão"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#FFF9F6] to-[#FCEFEA]">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-2 bg-[#FB7185]/20 rounded-full blur-md group-hover:bg-[#FB7185]/30 transition-all" />
              <button 
                type="button"
                aria-label="Assistir apresentação em vídeo"
                className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#FB7185] hover:bg-[#F43F5E] text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 active:scale-95"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
              </button>
            </div>
            
            <p className="mt-4 text-xs sm:text-sm font-medium text-[#78716C] max-w-md">
              Aperte o play para ver como planejar as refeições de forma prática e sem complicação
            </p>
          </div>
        )}
      </motion.div>

      {/* 3. SUBHEADLINE */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-[#57534E] mb-5 max-w-2xl mx-auto leading-relaxed"
      >
        365 receitas organizadas por fase para você parar de decidir tudo do zero, variar as refeições e planejar a semana com mais clareza, mesmo com a rotina corrida.
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

      {/* 5. CTA 1 (LOGO ABAIXO DA VSL E SUBHEADLINE) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a 
          href="#oferta"
          className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 sm:py-4.5 bg-[#FB7185] hover:bg-[#F43F5E] text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.99] tracking-wide"
        >
          QUERO ORGANIZAR AS REFEIÇÕES DO MEU BEBÊ
        </a>
      </motion.div>
    </section>
  );
}
