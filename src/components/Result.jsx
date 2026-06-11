import { useState } from "react";
import ResultCard from "./ResultCard";

export default function Results({ result, form, restart, setStep }) {
  const [tab, setTab] = useState("decomp");

  return (
    <>
      <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 text-center">
        <p className="text-slate-500">Prix de vente recommandé</p>
        <h1 className="text-6xl font-bold text-indigo-600 mt-4">{Math.round(result.prix_rec).toLocaleString()}</h1>
        <p className="mt-2 text-slate-500">FCFA</p>

        <div className="mt-4 text-sm text-slate-600">En dessous de ce prix, tu perds de l'argent ou tu n'atteins pas ton objectif.</div>

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="p-3 bg-white rounded-md border text-sm">
            <div className="text-slate-500">Stock nécessaire pour atteindre ton objectif</div>
            <div className="text-lg font-semibold mt-1">{result.required_stock ? result.required_stock : "—"} pièces</div>
          </div>
          <div className="p-3 bg-white rounded-md border text-sm">
            <div className="text-slate-500">Budget pub nécessaire estimé</div>
            <div className="text-lg font-semibold mt-1">{result.pub_needed ? Math.round(result.pub_needed).toLocaleString() + ' FCFA' : '—'}</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <ResultCard title="Bénéfice" value={Math.round(result.benef).toLocaleString()} />
        <ResultCard title="Marge" value={result.marge.toFixed(1)} suffix="%" />
        <ResultCard title="ROAS" value={result.roas.toFixed(2)} suffix="x" />
      </div>

      <div className="mt-8">
        <div className="flex gap-2">
          <button className={`px-4 py-2 rounded-md ${tab === "decomp" ? "bg-indigo-600 text-white" : "bg-slate-100"}`} onClick={() => setTab("decomp")}>D'où vient ce prix ?</button>
          <button className={`px-4 py-2 rounded-md ${tab === "offers" ? "bg-indigo-600 text-white" : "bg-slate-100"}`} onClick={() => setTab("offers")}>Offres alternatives</button>
          <button className={`px-4 py-2 rounded-md ${tab === "conseils" ? "bg-indigo-600 text-white" : "bg-slate-100"}`} onClick={() => setTab("conseils")}>Conseils</button>
        </div>

        {tab === "decomp" && (
          <div className="mt-6 border rounded-2xl p-6 bg-white">
            <h3 className="text-lg font-semibold mb-4">Décomposition</h3>
            <ul className="text-sm space-y-2">
              <li>Prix fournisseur (FCFA) : <strong>{Math.round(result.cout_fo_fcfa).toLocaleString()} FCFA</strong></li>
              <li>Transit total (colis) : <strong>{Math.round(result.transit_total).toLocaleString()} FCFA</strong></li>
              <li>Transit & frais / pièce : <strong>{Math.round(result.cout_transit_u).toLocaleString()} FCFA</strong></li>
              <li>Coût de revient par pack : <strong>{Math.round(result.cout_revient_pack).toLocaleString()} FCFA</strong></li>
              <li>Frais de livraison et closing : <strong>{Number(form.closer || 0).toLocaleString()} FCFA</strong></li>
              <li>Emballage : <strong>{Number(form.emb || 0).toLocaleString()} FCFA</strong></li>
              <li>Coût pub par vente estimé : <strong>{Math.round(result.cout_pub_u).toLocaleString()} FCFA</strong></li>
              <li>Frais fixes par vente estimés : <strong>{Math.round(result.fixes_u).toLocaleString()} FCFA</strong></li>
              <li className="mt-3">Coût total à couvrir par vente : <strong>{Math.round(result.cout_total_u).toLocaleString()} FCFA</strong></li>
              <li className="text-green-700 mt-3">Prix recommandé : <strong>{Math.round(result.prix_rec).toLocaleString()} FCFA</strong></li>
            </ul>
          </div>
        )}

        {tab === "offers" && (
          <div className="mt-6 border rounded-2xl p-6 bg-white">
            <h3 className="text-lg font-semibold mb-4">Offres alternatives</h3>
            <p className="text-sm text-slate-600">Formats proposés selon ton choix :</p>
            <ul className="mt-3 text-sm space-y-2">
              <li>Unité : prix recommandé {Math.round(result.prix_rec).toLocaleString()} FCFA</li>
              <li>Pack ×2 : prix conseillé {Math.round(result.prix_rec * 2 * 0.95).toLocaleString()} FCFA (remise groupée)</li>
              <li>Pack ×3 : prix conseillé {Math.round(result.prix_rec * 3 * 0.9).toLocaleString()} FCFA</li>
            </ul>
          </div>
        )}

        {tab === "conseils" && (
          <div className="mt-6 border rounded-2xl p-6 bg-white">
            <h3 className="text-lg font-semibold mb-4">Conseils</h3>
            <div className="space-y-3">
              {result.conseils.map((c, i) => (
                <div key={i} className={`p-3 rounded-md ${c.type === "bad" ? "bg-red-50 border border-red-100" : c.type === "warn" ? "bg-yellow-50 border border-yellow-100" : "bg-green-50 border border-green-100"}`}>
                  <strong className="block">{c.title}</strong>
                  <div className="text-sm text-slate-700">{c.txt}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-3 justify-end mt-8">
        <button onClick={() => setStep(3)} className="border px-6 py-3 rounded-xl">← Modifier l'offre</button>
        <button onClick={restart} className="border px-6 py-3 rounded-xl">Recommencer</button>
      </div>
    </>
  );
}