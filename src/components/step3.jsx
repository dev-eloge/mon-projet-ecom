export default function Step3({ form, setForm, prev, calculate }) {
  return (
    <>
      <h2 className="text-3xl font-bold mb-2">Comment tu veux vendre ?</h2>
      <p className="text-slate-500 mb-6">Unité seule ou pack ? Ce choix impacte directement ta marge et ton attractivité client.</p>

      <div className="border rounded-2xl p-6">
        <label className="text-sm text-slate-700">Format de vente</label>
        <select
          value={String(form.offre_type)}
          onChange={(e) => setForm({ ...form, offre_type: Number(e.target.value) })}
          className="border rounded-xl p-3 w-full mt-2"
        >
          <option value={1}>Unité simple — Je vends le produit à l'unité</option>
          <option value={2}>Pack × 2 — Je vends 2 pièces ensemble</option>
          <option value={3}>Pack × 3 — Idéal pour boxers, chaussettes, soins</option>
          <option value={5}>Pack × 5 — Offre volumique</option>
        </select>

        <label className="text-sm text-slate-700 mt-4 block">Catégorie produit</label>
        <input
          type="text"
          value={form.category || ""}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border rounded-xl p-3 mt-2 w-full"
          placeholder="Type de produit (ex : santé, beauté, mode)"
        />
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={prev} className="border px-6 py-3 rounded-xl">← Modifier</button>
        <button onClick={calculate} className="bg-indigo-600 text-white px-6 py-3 rounded-xl">Voir mon prix de vente →</button>
      </div>
    </>
  );
}