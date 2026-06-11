export default function ResultCard({
  title,
  value,
  suffix = "",
}) {
  return (
    <div className="border rounded-2xl p-6 text-center">

      <div className="text-3xl font-bold">
        {value}
        {suffix}
      </div>

      <div className="text-slate-500 mt-2 text-sm">
        {title}
      </div>

    </div>
  );
}