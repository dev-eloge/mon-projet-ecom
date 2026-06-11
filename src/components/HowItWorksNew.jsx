export default function HowItWorksNew() {
  const steps = [
    {
      number: "1",
      title: "Dis-nous ton objectif",
      description: "Combien tu veux gagner et en combien de temps. C'est ça qui guide tout le calcul."
    },
    {
      number: "2",
      title: "Renseigne ton produit",
      description: "Prix fournisseur en yuan ou en dollar, quantité commandée, frais de transit. On calcule automatiquement ton coût de revient à la pièce."
    },
    {
      number: "3",
      title: "Reçois ton prix de vente",
      description: "On te donne le prix exact à mettre sur ta page produit pour atteindre ton objectif. Avec la marge, le ROAS, et les conseils si les chiffres ne tiennent pas."
    },
  ];

  return (
    <section className="py-20 bg-slate-50" data-scroll-animate>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Simple comme 1, 2, 3</h2>
        <p className="text-center text-slate-600 mb-12">Sans prise de tête, juste les chiffres qu'il te faut</p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-8 border border-slate-200" data-scroll-animate>
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">
                {step.number}
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
