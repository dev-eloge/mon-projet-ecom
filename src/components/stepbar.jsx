export default function StepBar({ current }) {
  const steps = [
    "Objectif & Pub",
    "Produit & Import",
    "Offre",
    "Résultats",
  ];

  return (
    <div className="flex items-center mb-8 overflow-x-auto pb-2">
      {steps.map((step, index) => {
        const n = index + 1;

        const done = n < current;
        const active = n === current;

        return (
          <div
            key={step}
            className="flex items-center flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold
                ${
                  done
                    ? "bg-indigo-600 text-white"
                    : active
                    ? "border-2 border-indigo-600 text-indigo-600"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {done ? "✓" : n}
              </div>

              <span
                className={`text-xs whitespace-nowrap ${
                  active
                    ? "text-black font-medium"
                    : "text-slate-500"
                }`}
              >
                {step}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div className="w-8 h-px bg-slate-300 mx-2" />
            )}
          </div>
        );
      })}
    </div>
  );
}