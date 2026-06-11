import {
  IconCalculator,
  IconTrendingUp,
  IconTarget,
  IconCash,
} from "@tabler/icons-react";

export default function Features() {

  const features = [
    {
      icon: IconCalculator,
      title: "Calcul automatique",
      text: "Prix conseillé généré automatiquement."
    },
    {
      icon: IconTarget,
      title: "Objectifs financiers",
      text: "Définis ton bénéfice cible."
    },
    {
      icon: IconTrendingUp,
      title: "ROAS & marge",
      text: "Analyse ta rentabilité."
    },
    {
      icon: IconCash,
      title: "Coût de revient",
      text: "Calcule ton vrai coût produit."
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" data-scroll-animate>

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Fonctionnalités Price Wise
        </h2>
        <p className="text-center text-slate-500 mb-12">
          Avec Price Wise, tous les outils pour fixer ton prix
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, i) => (
            <div
              key={item.title}
              data-scroll-animate
              className="border border-slate-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <item.icon
                  size={24}
                  className="text-indigo-600"
                />
              </div>

              <h3 className="font-semibold mt-4 text-slate-900">
                {item.title}
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}