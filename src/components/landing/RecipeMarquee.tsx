import { useEffect, useRef } from 'react';
import bites from '@/assets/receita-bites.png.asset.json';
import torrada from '@/assets/receita-torrada.png.asset.json';
import iogurte from '@/assets/receita-iogurte.png.asset.json';
import crepes from '@/assets/receita-crepes.jpg.asset.json';
import maracuja from '@/assets/receita-maracuja.jpg.asset.json';
import panquecas from '@/assets/receita-panquecas-maca.png.asset.json';
import sopa from '@/assets/receita-sopa-frango.png.asset.json';
import tortinhas from '@/assets/receita-tortinhas-cenoura.png.asset.json';

const recipes = [
  { src: bites.url, alt: 'Receita de bites de banana e iogurte', width: 1078, height: 1460 },
  { src: torrada.url, alt: 'Receita de torrada francesa de mirtilos', width: 1086, height: 1448 },
  { src: iogurte.url, alt: 'Receita de iogurte com cobertura de frutas', width: 1098, height: 1433 },
  { src: crepes.url, alt: 'Receita de crepes de brócolis', width: 1024, height: 1024 },
  { src: maracuja.url, alt: 'Receita de sobremesa de maracujá', width: 1024, height: 1024 },
  { src: panquecas.url, alt: 'Receita de panquecas de maçã', width: 768, height: 1024 },
  { src: sopa.url, alt: 'Receita de sopa de frango', width: 768, height: 1024 },
  { src: tortinhas.url, alt: 'Receita de tortinhas de cenoura', width: 768, height: 1024 },
];

export default function RecipeMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const touchingRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const mobile = window.matchMedia('(max-width: 639px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let previousTime = performance.now();

    const centerSequence = () => {
      if (!mobile.matches) return;
      const sequenceWidth = marquee.scrollWidth / 3;
      if (sequenceWidth > 0) marquee.scrollLeft = sequenceWidth;
    };

    const keepCircular = () => {
      if (!mobile.matches) return;
      const sequenceWidth = marquee.scrollWidth / 3;
      if (sequenceWidth <= 0) return;
      if (marquee.scrollLeft < sequenceWidth * 0.45) marquee.scrollLeft += sequenceWidth;
      if (marquee.scrollLeft > sequenceWidth * 1.55) marquee.scrollLeft -= sequenceWidth;
    };

    const animate = (time: number) => {
      const elapsed = Math.min(time - previousTime, 32);
      previousTime = time;
      if (mobile.matches && !reducedMotion.matches && !touchingRef.current) {
        marquee.scrollLeft += elapsed * 0.035;
        keepCircular();
      }
      frame = window.requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(centerSequence);
    resizeObserver.observe(marquee);
    centerSequence();
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const pauseForTouch = () => {
    touchingRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const resumeAfterTouch = () => {
    resumeTimerRef.current = setTimeout(() => {
      touchingRef.current = false;
    }, 900);
  };

  return (
    <div
      ref={marqueeRef}
      className="recipe-marquee w-full pb-12 md:pb-16"
      aria-label="Exemplos de receitas do Bebê Comilão"
      onPointerDown={pauseForTouch}
      onPointerUp={resumeAfterTouch}
      onPointerCancel={resumeAfterTouch}
      onScroll={() => {
        const marquee = marqueeRef.current;
        if (!marquee || window.innerWidth >= 640) return;
        const sequenceWidth = marquee.scrollWidth / 3;
        if (sequenceWidth > 0 && marquee.scrollLeft < sequenceWidth * 0.4) marquee.scrollLeft += sequenceWidth;
        if (sequenceWidth > 0 && marquee.scrollLeft > sequenceWidth * 1.6) marquee.scrollLeft -= sequenceWidth;
      }}
    >
      <div className="recipe-marquee-track flex w-max">
        {[0, 1, 2].map((copy) => (
          <div key={copy} className="recipe-marquee-sequence flex shrink-0 gap-0" aria-hidden={copy !== 1 ? true : undefined}>
            {recipes.map((recipe) => (
              <img
                key={`${copy}-${recipe.src}`}
                src={recipe.src}
                alt={copy === 1 ? recipe.alt : ''}
                width={recipe.width}
                height={recipe.height}
                className="h-56 sm:h-72 md:h-80 w-auto shrink-0 object-contain"
                loading="eager"
                decoding="async"
                fetchPriority="low"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}