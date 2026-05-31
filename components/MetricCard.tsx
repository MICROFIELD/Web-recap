type MetricCardProps = {
  label: string;
  value: string;
  helper: string;
  trend?: string;
};

export function MetricCard({ label, value, helper, trend }: MetricCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/70 bg-white/70 p-4 shadow-glow backdrop-blur-xl">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
          <p className="mt-3 text-3xl font-black tracking-tight text-ink">{value}</p>
        </div>
        {trend ? (
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
            {trend}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{helper}</p>
    </article>
  );
}
