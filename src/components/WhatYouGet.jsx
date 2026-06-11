import { IconCheck } from "@tabler/icons-react";

export default function WhatYouGet() {
  const outputs = [
    "Le coût de revient réel de ton produit (fournisseur + transit + import)",
    "Le prix de vente minimum pour ne pas perdre d'argent",
    "Le prix recommandé pour atteindre ton objectif de bénéfice",
    "Ton bénéfice net projeté sur la période",
    "Ton ROAS estimé (rentabilité de ta pub)",
    "Des offres alternatives si un pack ×2 ou ×3 est plus rentable pour toi",
    "Des conseils concrets si les chiffres ne tiennent pas"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" data-scroll-animate>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">En quelques clics, tu sais exactement :</h2>
        
        <div className="space-y-4">
          {outputs.map((output) => (
            <div key={output} className="flex gap-4 items-start bg-white rounded-xl p-4 border border-slate-200">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <IconCheck size={16} className="text-indigo-600" />
              </div>
              <p className="text-slate-700">{output}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
