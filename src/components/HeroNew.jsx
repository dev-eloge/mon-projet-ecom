import { IconArrowRight } from "@tabler/icons-react";

export default function HeroNew({ start }) {
  return (
    <section className="py-20 md:py-32 bg-white" data-scroll-animate>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-1 text-indigo-600">
          Tu sais pas à quel prix vendre ton produit ?
        </h1>
        
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Renseigne ton objectif de bénéfice, ton prix fournisseur et tes frais — on te dit exactement à quel prix vendre pour être rentable.
        </p>
        
        <button
          onClick={start}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Calculer mon prix de vente
          <IconArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
