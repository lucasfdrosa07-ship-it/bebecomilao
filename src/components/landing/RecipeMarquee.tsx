import bites from '@/assets/receita-bites.png.asset.json';
import torrada from '@/assets/receita-torrada.png.asset.json';
import iogurte from '@/assets/receita-iogurte.png.asset.json';
import crepes from '@/assets/receita-crepes.jpg.asset.json';
import maracuja from '@/assets/receita-maracuja.jpg.asset.json';

const recipes = [
  { src: bites.url, alt: 'Receita de bites de banana e iogurte', width: 1078, height: 1460 },
  { src: torrada.url, alt: 'Receita de torrada francesa de mirtilos', width: 1086, height: 1448 },
  { src: iogurte.url, alt: 'Receita de iogurte com cobertura de frutas', width: 1098, height: 1433 },
  { src: crepes.url, alt: 'Receita de crepes de brócolis', width: 1024, height: 1024 },
  { src: maracuja.url, alt: 'Receita de sobremesa de maracujá', width: 1024, height: 1024 },
];

export default function RecipeMarquee() {
  return (
    <div className="recipe-marquee overflow-hidden w-full pb-12 md:pb-16" aria-label="Exemplos de receitas do Bebê Comilão">
      <div className="recipe-marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-0" aria-hidden={copy === 1 ? true : undefined}>
            {recipes.map((recipe) => (
              <img
                key={recipe.src}
                src={recipe.src}
                alt={copy === 0 ? recipe.alt : ''}
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