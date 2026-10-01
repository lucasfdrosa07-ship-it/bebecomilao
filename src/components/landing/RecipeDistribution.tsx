import { motion } from 'motion/react';
import { Sunrise, Utensils, Coffee, Moon, Cookie, Sparkles } from 'lucide-react';

export default function RecipeDistribution() {
  const categories = [
    { name: "Café da manhã", count: 75, icon: Sunrise },
    { name: "Almoço", count: 85, icon: Utensils },
    { name: "Café da tarde", count: 65, icon: Coffee },
    { name: "Janta", count: 90, icon: Moon },
    { name: "Sobremesas", count: 50, icon: Cookie },
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-[#FAF6F3] border-t border-[#F3E8DF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FB7185] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Variedade Completa</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#292524] tracking-tight">
            Distribuição das 365 receitas
          </h3>
          <p className="text-xs sm:text-sm text-[#78716C] mt-2">
            Ideias práticas organizadas para cobrir todos os momentos da alimentação do seu bebê:
          </p>
        </div>

        {/* Bullet cards de categorias */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-6">
          {categories.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EFE5DC] shadow-xs hover:border-[#FB7185]/40 hover:shadow-sm transition-all flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFF1EE] text-[#FB7185] flex items-center justify-center mb-3">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-[#292524] tracking-tight tabular-nums">
                {item.count}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#57534E] mt-1 leading-tight">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Card de Total */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white max-w-sm mx-auto p-4 rounded-2xl border-2 border-[#FB7185]/30 shadow-xs flex items-center justify-between px-6"
        >
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FB7185] block">
              Total de receitas
            </span>
            <span className="text-sm text-[#78716C]">
              Opções para o ano todo
            </span>
          </div>
          <div className="text-right">
            <span className="text-3xl font-black text-[#292524] tracking-tight tabular-nums">
              365
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
