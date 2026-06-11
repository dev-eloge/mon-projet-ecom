import { IconArrowRight } from "@tabler/icons-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Logo />
              </div>
              <h2 className="text-xl font-bold">
                Price <span className="text-indigo-400">Wise</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Fixe ton prix de vente. En 2 minutes, chiffres en main.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-slate-300">
              Produit
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Simulateur
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Tarification
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-slate-300">
              Ressources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Tutoriels
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Communauté
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-slate-300">
              Newsletter
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Reçois nos astuces pricing chaque semaine.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="ton@email.com"
                className="flex-1 px-4 py-2 rounded-l-lg bg-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-slate-500"
              />
              <button className="px-4 py-2 rounded-r-lg bg-indigo-600 hover:bg-indigo-700 transition-colors">
                <IconArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8">
          <p className="text-slate-400 text-sm">
            © 2026 Price Wise. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
