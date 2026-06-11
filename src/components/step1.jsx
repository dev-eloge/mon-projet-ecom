import { useState } from "react";

export default function Step1({ form, setForm, next }) {
  const [error, setError] = useState("");

  const handleContinue = () => {
    setError("");

    if (!form.obj_net || Number(form.obj_net) <= 0) {
      setError("Remplis ce champ pour continuer — il est nécessaire pour le calcul.");
      return;
    }

    if (!form.start_date || !form.end_date) {
      setError("Choisis une date de début et une date de fin pour ton objectif.");
      return;
    }

    const startDate = new Date(form.start_date);
    const endDate = new Date(form.end_date);
    if (endDate < startDate) {
      setError("La date de fin doit être après la date de début.");
      return;
    }

    next();
  };

  return (
    <>
      <div className="mb-4">
        <h2 className="text-3xl font-bold">Quel est ton objectif ?</h2>

        <p className="text-slate-500 mt-1">On part de ce que tu veux gagner pour calculer tout le reste. Pas l'inverse.</p>
      </div>

      <div className="border rounded-2xl p-6 mb-4">
        <h3 className="uppercase text-xs tracking-wider text-slate-400 mb-4">Objectif</h3>

        <label className="text-sm text-slate-700">Bénéfice net visé (FCFA)</label>
        <input
          type="number"
          placeholder="ex : 1 500 000"
          value={form.obj_net}
          onChange={(e) => setForm({ ...form, obj_net: e.target.value })}
          className="border rounded-xl p-3 mt-2 w-full"
        />

        <label className="text-sm text-slate-700 mt-4 block">Période de l'objectif</label>
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          <div>
            <label className="text-xs uppercase tracking-widest text-slate-400">Début</label>
            <input
              type="date"
              value={form.start_date}
              onChange={(e) => {
                const start = e.target.value;
                const end = form.end_date;
                const startDate = new Date(start);
                const endDate = new Date(end);
                const diffDays = Math.max(1, Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)));
                setForm({ ...form, start_date: start, delai: diffDays + 1 });
              }}
              className="border rounded-xl p-3 w-full"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-slate-400">Fin</label>
            <input
              type="date"
              value={form.end_date}
              onChange={(e) => {
                const end = e.target.value;
                const start = form.start_date;
                const startDate = new Date(start);
                const endDate = new Date(end);
                const diffDays = Math.max(1, Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)));
                setForm({ ...form, end_date: end, delai: diffDays + 1 });
              }}
              className="border rounded-xl p-3 w-full"
            />
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-500">
          Durée estimée : <strong>{form.delai} jour{form.delai > 1 ? "s" : ""}</strong>
        </div>

        <div className="mt-4 p-3 bg-slate-50 rounded-md text-sm text-slate-600 border border-slate-100">
          💡 Tu peux définir une date de début et une date de fin pour ton objectif. Le simulateur utilise la durée entre ces deux dates pour estimer le budget pub nécessaire.
        </div>
      </div>

      <div className="border rounded-2xl p-6">
        <h3 className="uppercase text-xs tracking-wider text-slate-400 mb-4">Paramètres pub & COD</h3>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Removed delivery rate input — not required. We assume confirmed orders = delivered (capped by stock). */}

          <div>
            <label className="text-sm text-slate-700">Frais de livraison et closing (FCFA)</label>
            <input
              type="number"
              placeholder="ex : 500"
              value={form.closer}
              onChange={(e) => setForm({ ...form, closer: e.target.value })}
              className="border rounded-xl p-3 mt-2 w-full"
            />
              <p className="text-xs text-slate-500 mt-1">Montant fixe par commande : inclut la livraison locale et la commission de closing.</p>
          </div>

          <div>
            <label className="text-sm text-slate-700">Frais fixes / mois (FCFA)</label>
            <input
              type="number"
              placeholder="ex : 50 000"
              value={form.fixes}
              onChange={(e) => setForm({ ...form, fixes: e.target.value })}
              className="border rounded-xl p-3 mt-2 w-full"
            />
            <p className="text-xs text-slate-500 mt-1">Shopify, abonnements, outils — si aucun, mets 0.</p>
          </div>
        </div>

        <div className="grid gap-4 mt-4">
          <div>
            <label className="text-sm text-slate-700">Pub par produit (FCFA)</label>
            <input
              type="number"
              placeholder="ex : 800"
              value={form.pub_pu}
              onChange={(e) => setForm({ ...form, pub_pu: e.target.value })}
              className="border rounded-xl p-3 mt-2 w-full"
            />
            <p className="text-xs text-slate-500 mt-1">Coût publicitaire moyen pour vendre une seule pièce. Le simulateur calcule tes frais pub par produit, pas par jour.</p>
          </div>
        </div>
      </div>

      {error && <div className="mt-4 text-sm text-red-600">{error}</div>}

      <div className="flex justify-end mt-6">
        <button onClick={handleContinue} className="bg-indigo-600 text-white px-6 py-3 rounded-xl">
          Continuer →
        </button>
      </div>
    </>
  );
}