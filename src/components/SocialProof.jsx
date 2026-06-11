import { IconQuote } from "@tabler/icons-react";

export default function SocialProof() {
  const testimonials = [
    {
      quote: "Avant j'utilisais Excel et je me trompais toujours sur les frais de transit. Là en 3 minutes j'ai su que mon prix devait être à 8 500 FCFA et pas 7 000 comme je pensais.",
      author: "Commerçant",
      location: "Lomé"
    },
    {
      quote: "J'allais lancer mon produit à perte sans m'en rendre compte. Le simulateur m'a montré qu'il me manquait les frais du closer dans mon calcul.",
      author: "Vendeuse",
      location: "Dakar"
    },
    {
      quote: "Simple, rapide, adapté au COD africain. C'est le seul outil qui prend en compte le taux de livraison réel.",
      author: "E-commerçant",
      location: "Niamey"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white" data-scroll-animate>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Ils ont lancé avec les bons chiffres</h2>
        <p className="text-center text-slate-400 mb-12">Des vrais commerçants, des vrais résultats</p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-slate-800 rounded-2xl p-8 border border-slate-700" data-scroll-animate>
              <div className="flex mb-4">
                <IconQuote size={24} className="text-indigo-400" />
              </div>
              <p className="text-slate-200 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="border-t border-slate-700 pt-4">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-slate-400 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
