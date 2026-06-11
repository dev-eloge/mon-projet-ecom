export default function HowItWorks() {

  const steps = [
    {
      number: "01",
      title: "Définis ton objectif",
      description: "Précise le coût de revient de ton produit"
    },
    {
      number: "02",
      title: "Renseigne ton produit",
      description: "Fournisseur, transport, douane inclus"
    },
    {
      number: "03",
      title: "Choisis ton offre",
      description: "Simple, VOD ou COD — nous calculons tout"
    },
    {
      number: "04",
      title: "Price Wise en main",
      description: "Marge, ROAS, seuil de rentabilité"
    },
  ];

  return (
    <section className="py-20 bg-slate-50" data-scroll-animate>

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Comment ça marche ?
        </h2>
        <p className="text-center text-slate-500 mb-12">
          Seulement 4 étapes avec Price Wise
        </p>

        <div className="grid md:grid-cols-4 gap-4">

          {steps.map((step, i) => (
            <div
              key={step.number}
              data-scroll-animate
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-3">
                {step.number}
              </div>

              <h3 className="font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>

              <p className="text-slate-500 text-sm">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-0.5 bg-indigo-200"></div>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}