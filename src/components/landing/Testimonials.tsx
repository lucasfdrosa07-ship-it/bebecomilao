import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsProps {
  images: string[];
}

export default function Testimonials({ images }: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(() => new Set());
  const pendingIndex = useRef<number | null>(null);
  const total = images.length;

  const showImage = (nextIndex: number) => {
    if (loadedImages.has(nextIndex)) {
      pendingIndex.current = null;
      setIndex(nextIndex);
      return;
    }

    pendingIndex.current = nextIndex;
  };

  const handleImageLoad = (imageIndex: number) => {
    setLoadedImages((current) => {
      const next = new Set(current);
      next.add(imageIndex);
      return next;
    });

    if (pendingIndex.current === imageIndex) {
      pendingIndex.current = null;
      setIndex(imageIndex);
    }
  };

  // Autoplay a cada 3000ms com loop infinito
  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % total;
        if (loadedImages.has(next)) return next;
        pendingIndex.current = next;
        return prev;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [loadedImages, total]);

  const handlePrev = () => {
    showImage((index - 1 + total) % total);
  };

  const handleNext = () => {
    showImage((index + 1) % total);
  };

  if (!images || images.length === 0) return null;

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#FAF6F3]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Título */}
        <motion.h2 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292524] mb-3 tracking-tight text-balance"
        >
          Mães que já usam o Bebê Comilão contam como o material mudou a rotina delas.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-[#78716C] mb-8 sm:mb-10 max-w-xl mx-auto"
        >
          Veja o que outras mães estão dizendo sobre a experiência com o material.
        </motion.p>
        
        {/* Container do Carrossel de Imagens Reais */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto px-6 sm:px-8">
          <div className="overflow-hidden rounded-2xl shadow-lg border border-[#EFE5DC] bg-white p-2 sm:p-3">
            <div className="relative w-full h-[380px] sm:h-[440px] md:h-[500px]">
              {images.map((image, imageIndex) => (
                <img
                  key={image}
                  src={image}
                  alt={`Depoimento real de mãe ${imageIndex + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain rounded-xl transition-opacity duration-300 ease-out ${
                    index === imageIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => handleImageLoad(imageIndex)}
                />
              ))}
            </div>
          </div>

          {/* Botões de Controle Manual (com posicionamento que evita quebra no mobile) */}
          <button 
            type="button"
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-white text-[#292524] hover:bg-stone-50 rounded-full shadow-md border border-[#E7E5E4] flex items-center justify-center transition-transform active:scale-95 z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button 
            type="button"
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-white text-[#292524] hover:bg-stone-50 rounded-full shadow-md border border-[#E7E5E4] flex items-center justify-center transition-transform active:scale-95 z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Indicadores / Dots */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => showImage(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`transition-all rounded-full ${
                  index === i 
                    ? "w-6 h-2 bg-[#FB7185]" 
                    : "w-2 h-2 bg-[#D6D3D1] hover:bg-[#A8A29E]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
