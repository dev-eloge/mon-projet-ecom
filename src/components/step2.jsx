import { useState } from "react";

export default function Step2({ form, setForm, next, prev }) {
  const [error, setError] = useState("");

  const coutFournisseur = () => {
    const pf = Number(form.prix_fo);
    const taux = Number(form.taux);
    if (!pf || !taux) return null;
    return pf * taux;
  };

  const handleContinue = () => {
    setError("");
    if (!form.prix_fo || Number(form.prix_fo) <= 0) {
      setError("Le prix fournisseur ne peut pas être 0. Vérifie le prix unitaire sur ta page Alibaba ou 1688.");
      return;
    }
    if (!form.qte || Number(form.qte) < 1) {
      setError("Mets au moins 1 pièce pour qu'on puisse calculer le coût de revient à l'unité.");
      return;
    }

    next();
  };

  return (
    <>
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Ton produit</h2>
        <p className="text-slate-500 mt-1">On va calculer ce que te coûte vraiment chaque pièce — depuis la Chine jusqu'à ta main.</p>
      </div>

      <div className="border rounded-2xl p-6">
        <h3 className="uppercase text-xs tracking-wider text-slate-400 mb-4">Produit</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-700">Prix fournisseur (par pièce)</label>
            <input
              type="number"
              placeholder="ex : 5.50"
              value={form.prix_fo}
              onChange={(e) => setForm({ ...form, prix_fo: e.target.value })}
              className="border rounded-xl p-3 mt-2 w-full"
            />
            <p className="text-xs text-slate-500 mt-1">Prix d'une seule pièce sur Alibaba/1688. Pas le total de la commande.</p>
          </div>

          <div>
            <label className="text-sm text-slate-700">Devise</label>
            <select
              value={form.devise}
              onChange={(e) => setForm({ ...form, devise: e.target.value })}
              className="border rounded-xl p-3 mt-2 w-full"
            >
              <option value="CNY">Yuan chinois (CNY)</option>
              <option value="USD">Dollar américain (USD)</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-slate-700">Taux de change (1 CNY/USD = ? FCFA)</label>
            <input
              type="number"
              placeholder="Taux de change"
              value={form.taux}
              onChange={(e) => setForm({ ...form, taux: e.target.value })}
              className="border rounded-xl p-3 mt-2 w-full"
            />
            <p className="text-xs text-slate-500 mt-1">Vérifie le taux du jour sur Google.</p>
          </div>

          <div>
            <label className="text-sm text-slate-700">Quantité commandée</label>
            <input
              type="number"
              placeholder="ex : 100"
              value={form.qte}
              onChange={(e) => setForm({ ...form, qte: e.target.value })}
              className="border rounded-xl p-3 mt-2 w-full"
            />
            <p className="text-xs text-slate-500 mt-1">Nombre total de pièces dans ton colis.</p>
          </div>
        </div>

        {coutFournisseur() !== null && (
          <div className="mt-4 p-3 bg-slate-50 rounded-md border border-slate-100 text-sm">
            <strong>Coût fournisseur à la pièce :</strong> {Math.round(coutFournisseur()).toLocaleString()} FCFA — C'est ce que tu paies pour avoir une seule pièce dans les mains du transitaire.
          </div>
        )}

        <h3 className="uppercase text-xs tracking-wider text-slate-400 mt-8 mb-4">Importation</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-700">Poids total du colis (kg)</label>
            <input
              type="number"
              placeholder="ex : 4"
              value={form.poids_colis}
              onChange={(e) => setForm({ ...form, poids_colis: e.target.value })}
              className="border rounded-xl p-3 mt-2 w-full"
            />
            <p className="text-xs text-slate-500 mt-1">Poids total du colis envoyé depuis le fournisseur.</p>
          </div>

          <div>
            <label className="text-sm text-slate-700">Prix transitaire / kg (FCFA)</label>
            <input
              type="number"
              placeholder="ex : 10000"
              value={form.transit_kg}
              onChange={(e) => setForm({ ...form, transit_kg: e.target.value })}
              className="border rounded-xl p-3 mt-2 w-full"
            />
            <p className="text-xs text-slate-500 mt-1">Exemple : 10 000 FCFA / kg. Si le colis fait 4 kg, le transitaire te facture 40 000 FCFA.</p>
          </div>
        </div>

        {form.poids_colis > 0 && form.transit_kg > 0 && (
          <div className="mt-4 p-3 bg-slate-50 rounded-md border border-slate-100 text-sm">
            <strong>Coût transitaire total estimé :</strong> {Math.round(Number(form.poids_colis) * Number(form.transit_kg)).toLocaleString()} FCFA
          </div>
        )}

        <h3 className="uppercase text-xs tracking-wider text-slate-400 mt-8 mb-4">Emballage</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-700">Emballage / commande (FCFA)</label>
            <input
              type="number"
              placeholder="ex : 200"
              value={form.emb}
              onChange={(e) => setForm({ ...form, emb: e.target.value })}
              className="border rounded-xl p-3 mt-2 w-full"
            />
            <p className="text-xs text-slate-500 mt-1">Carton, scotch, film — tout ce qui emballe une commande.</p>
          </div>
        </div>
      </div>

      {error && <div className="mt-4 text-sm text-red-600">{error}</div>}

      <div className="flex justify-between mt-6">
        <button onClick={prev} className="border px-6 py-3 rounded-xl">← Modifier</button>
        <button onClick={handleContinue} className="bg-indigo-600 text-white px-6 py-3 rounded-xl">Continuer →</button>
      </div>
    </>
  );
}