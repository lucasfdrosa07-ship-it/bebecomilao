import { motion } from 'motion/react';
import { BookOpen, CalendarDays, ShoppingBag, FolderTree } from 'lucide-react';

export default function Features() {
  const features = [
    { 
      title: "365 RECEITAS POR FASE", 
      desc: "Uma grande variedade de preparações para você ter opções e evitar a repetição.", 
      icon: BookOpen 
    },
    { 
      title: "RECEITAS ORGANIZADAS", 
      desc: "Encontre opções de forma muito mais prática, sem ficar procurando em vários lugares.", 
      icon: FolderTree 
    },
    { 
      title: "LISTA DE COMPRAS COMPLETA", 
      desc: "Tenha mais facilidade para organizar os ingredientes da sua semana.", 
      icon: ShoppingBag 
    },
    { 
      title: "MENOS IMPROVISO, MAIS CLAREZA", 
      desc: "Mais clareza para planejar as refeições e reduzir a improvisação.", 
      icon: CalendarDays 
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292524] mb-3 tracking-tight text-balance"
          >
            Tudo para você parar de começar a refeição do zero.
          </motion.h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Praticidade pensada especialmente para o dia a dia real de quem cuida de um bebê.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 sm:p-7 bg-[#FFFDFB] border border-[#F3E8DF] rounded-2xl hover:border-[#FB7185]/30 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF1EE] text-[#FB7185] flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#292524] mb-2 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
