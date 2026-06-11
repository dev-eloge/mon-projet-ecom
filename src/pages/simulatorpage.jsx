import { useState } from "react";

import Navbar from "../components/Navbar";
import StepBar from "../components/stepbar";

import Step1 from "../components/step1";
import Step2 from "../components/step2";
import Step3 from "../components/step3";
import Results from "../components/Result";

import { compute } from "../utils/calculator";

export default function SimulatorPage() {
  const today = new Date().toISOString().slice(0, 10);
  const thirtyDaysFromNow = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString().slice(0, 10);

  const [step, setStep] = useState(1);

  const [result, setResult] = useState(null);

  const [form, setForm] = useState({
    obj_net: "",
    delai: 30,
    start_date: today,
    end_date: thirtyDaysFromNow,

    closer: 0,
    fixes: 0,

    pub_pu: 800,

    prix_fo: "",
    devise: "USD",

    taux: 600,

    qte: "",
    poids_colis: 0,
    transit_kg: 10000,

    livraison: 2500,
    emb: 500,

    offre_type: 1,
  });

  const next = () => setStep((s) => s + 1);

  const prev = () => setStep((s) => s - 1);

  const calculate = () => {
    const res = compute({
      ...form,

      obj_net: Number(form.obj_net),
      delai: Number(form.delai),

      closer: Number(form.closer),
      fixes: Number(form.fixes),

      pub_pu: Number(form.pub_pu),

      prix_fo: Number(form.prix_fo),

      taux: Number(form.taux),

      qte: Number(form.qte),
      poids_colis: Number(form.poids_colis),
      transit_kg: Number(form.transit_kg),

      offre_type: Number(form.offre_type),
    });

    setResult(res);
    setStep(4);
  };

  const restart = () => {
    setResult(null);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar badge="Simulateur" />

      <div className="max-w-5xl mx-auto px-6 py-10">

        <StepBar current={step} />

        <div className="bg-white rounded-3xl shadow-sm p-8">

          {step === 1 && (
            <Step1
              form={form}
              setForm={setForm}
              next={next}
            />
          )}

          {step === 2 && (
            <Step2
              form={form}
              setForm={setForm}
              next={next}
              prev={prev}
            />
          )}

          {step === 3 && (
            <Step3
              form={form}
              setForm={setForm}
              prev={prev}
              calculate={calculate}
            />
          )}

          {step === 4 && result && (
            <Results
              result={result}
              form={form}
              restart={restart}
              setStep={setStep}
            />
          )}

        </div>

      </div>

    </div>
  );
}