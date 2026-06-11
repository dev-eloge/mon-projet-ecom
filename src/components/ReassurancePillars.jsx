import { IconCheck } from "@tabler/icons-react";

export default function ReassurancePillars() {
  const pillars = [
    {
      title: "Gratuit",
      description: "Aucune inscription requise"
    },
    {
      title: "Fait pour le COD",
      description: "Togo, Sénégal, Niger, Guinée, Burkina, Bénin"
    },
    {
      title: "Résultat en 2 minutes",
      description: "Prix, marge, bénéfice net, ROAS"
    }
  ];

  return (
    <section className="py-12 border-y border-slate-200 bg-white" data-scroll-animate>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex items-start gap-4">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <IconCheck size={16} className="text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{pillar.title}</h3>
                <p className="text-slate-600 text-sm">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
