function n(value) {
  if (value === null || value === undefined || value === "") {
    return 0;
  }

  return Number(String(value).replace(",", ".")) || 0;
}

export function compute(f) {
  const pack = parseInt(f.offre_type) || 1;

  const qte = n(f.qte);
  const delai = n(f.delai);
  const fixes = n(f.fixes);
  const obj_net = n(f.obj_net);

  const prix_fo = n(f.prix_fo);
  const taux = n(f.taux);

  const poids_colis = n(f.poids_colis);
  const transit_kg = n(f.transit_kg);

  const pub_pu = n(f.pub_pu);
  const closer = n(f.closer);
  const emb = n(f.emb);

  const delivered = qte > 0 ? Math.floor(qte) : 0;

  const fixes_total = fixes * (delai / 30);

  const cout_fo_fcfa = prix_fo * taux;

  const transit_total =
    poids_colis > 0 && transit_kg > 0
      ? poids_colis * transit_kg
      : 0;

  const cout_transit_u =
    delivered > 0
      ? transit_total / delivered
      : 0;

  const cout_revient_u = cout_fo_fcfa + cout_transit_u;

  const cout_revient_pack = cout_revient_u * pack;

  const pub_total = pub_pu * delivered;

  const cout_pub_u = pub_pu;

  const fixes_u =
    delivered > 0
      ? fixes_total / delivered
      : 0;

  const benef_net_u =
    delivered > 0
      ? obj_net / delivered
      : 0;

  const cout_var_u =
    cout_revient_pack +
    closer +
    emb +
    cout_pub_u;

  const cout_total_u = cout_var_u + fixes_u;

  const prix_seuil =
    Math.ceil(cout_total_u / 500) * 500;

  const prix_obj =
    delivered > 0
      ? Math.ceil(
          (
            cout_var_u +
            fixes_u +
            benef_net_u
          ) / 500
        ) * 500
      : prix_seuil;

  const prix_rec = Math.max(prix_seuil, prix_obj);

  const ca = prix_rec * delivered;

  const benef =
    ca -
    cout_var_u * delivered -
    fixes_total;

  const marge =
    ca > 0
      ? (benef / ca) * 100
      : 0;

  const roas =
    pub_total > 0
      ? ca / pub_total
      : 0;

  const gap = benef - obj_net;

  let required_stock = null;
  let pub_needed = null;

  const contribution = prix_rec - cout_var_u;

  if (contribution > 0) {
    required_stock = Math.ceil(
      (obj_net + fixes_total) / contribution
    );

    pub_needed =
      pub_pu > 0
        ? required_stock * pub_pu
        : null;
  }

  const conseils = [];

  if (marge < 20) {
    conseils.push({
      type: "bad",
      title: `Marge critique (${marge.toFixed(1)}%)`,
      txt: "En dessous de 20%, le moindre retour efface ton bénéfice."
    });
  }

  if (pub_total > 0 && roas < 2) {
    conseils.push({
      type: "bad",
      title: `ROAS trop bas (${roas.toFixed(2)}x)`,
      txt: "Travaille tes créatifs et ton ciblage pour faire baisser ton coût pub par vente."
    });
  }

  if (gap < 0) {
    conseils.push({
      type: "warn",
      title: "Objectif non atteint",
      txt: "Augmente le prix ou améliore le taux de livraison."
    });
  }

  if (
    gap >= 0 &&
    marge >= 20 &&
    (pub_total === 0 || roas >= 2)
  ) {
    conseils.push({
      type: "ok",
      title: "Produit viable",
      txt: "Les chiffres sont cohérents pour lancer le produit."
    });
  }

  return {
    pack,
    delivered,

    pub_total,
    fixes_total,

    transit_total,
    cout_fo_fcfa,
    cout_transit_u,
    cout_revient_u,
    cout_revient_pack,

    cout_var_u,
    cout_pub_u,
    fixes_u,
    benef_net_u,
    cout_total_u,

    prix_seuil,
    prix_obj,
    prix_rec,

    ca,
    benef,
    marge,
    roas,
    gap,

    required_stock,
    pub_needed,

    conseils,
  };
}