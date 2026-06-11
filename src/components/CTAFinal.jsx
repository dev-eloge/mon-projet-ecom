import { IconArrowRight } from "@tabler/icons-react";

export default function CTAFinal({ start }) {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white" data-scroll-animate>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Prêt à savoir si ton produit est rentable ?</h2>
        <p className="text-xl text-slate-600 mb-10">
          Aucune inscription. Aucune carte bancaire. Juste le calcul dont tu as besoin.
        </p>
        
        <button
          onClick={start}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Lancer le simulateur
          <IconArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
