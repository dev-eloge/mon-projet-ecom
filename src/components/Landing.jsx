export default function Landing({ start }) {
  return (
    <section className="py-24 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <span className="inline-flex px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
          Simulateur E-commerce COD
        </span>

        <h1 className="text-6xl font-bold mt-8 leading-tight">
          Trouve le prix idéal
          <br />
          pour vendre avec profit.
        </h1>

        <p className="text-slate-500 text-lg mt-6 max-w-2xl mx-auto">
          Calcule ton coût de revient, ta marge,
          ton ROAS cible et ton bénéfice net
          avant même de lancer tes campagnes.
        </p>

        <button
          onClick={start}
          className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl"
        >
          Commencer maintenant
        </button>

      </div>

    </section>
  );
}