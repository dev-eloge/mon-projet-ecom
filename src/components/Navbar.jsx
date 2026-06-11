import Logo from "./Logo";

export default function Navbar({ badge }) {
  return (
    <nav className="h-16 border-b border-slate-100 px-8 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-3 group">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-indigo-400/50 transition-all duration-300">
          <Logo />
        </div>

        <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-indigo-700 transition-all duration-300">
          Price <span className="text-indigo-600">Wise</span>
        </h1>
      </div>

      <span className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-indigo-100 border border-indigo-200 text-indigo-600 font-medium shadow-sm">
        {badge}
      </span>
    </nav>
  );
}