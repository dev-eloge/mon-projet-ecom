import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "C'est fait pour quel type de produit ?",
      a: "Tous les produits vendus en COD — santé, beauté, mode, boxers, fitness, maison, électro. Tu choisis la catégorie et le simulateur adapte ses recommandations."
    },
    {
      q: "Je commande en Chine, est-ce que ça prend en compte les frais de transit ?",
      a: "Oui. Tu renseignes le prix fournisseur en yuan ou en dollar, la quantité commandée et ce que tu paies au transitaire. On calcule le coût de revient à la pièce automatiquement."
    },
    {
      q: "C'est quoi le taux de livraison ?",
      a: "En COD Afrique de l'Ouest, toutes les commandes confirmées ne sont pas forcément livrées et payées. En moyenne, entre 55% et 65% des commandes arrivent à bon port. Ce pourcentage impacte ta rentabilité — c'est pour ça qu'on l'intègre dans le calcul."
    },
    {
      q: "Pourquoi il me propose un pack ×2 ou ×3 ?",
      a: "Parce que sur certains produits, vendre en pack permet d'augmenter le panier moyen sans augmenter le coût pub par produit. Résultat : plus de bénéfice par commande livrée. Le simulateur te montre automatiquement si c'est plus rentable pour toi."
    }
  ];

  return (
    <section className="py-20 bg-white" data-scroll-animate>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Questions fréquentes</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
              >
                <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                <IconChevronDown
                  size={20}
                  className={`text-indigo-600 transition-transform flex-shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
