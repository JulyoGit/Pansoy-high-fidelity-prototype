import { ArrowUpRight, Building2, GraduationCap, HeartPulse, MapPin } from "lucide-react";

const iconMap = {
  Government: Building2,
  Health: HeartPulse,
  Education: GraduationCap,
  Community: MapPin
};

export default function LocationCard({ location, onClick }) {
  const Icon = iconMap[location.type] || MapPin;

  return (
    <button onClick={onClick} className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-blue-300 hover:bg-blue-50/50 focus-visible:outline-blue-500">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
        <Icon size={21} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-bold text-slate-900">{location.name}</span>
        <span className="mt-1 block text-xs text-slate-500">{location.address}</span>
        <span className="mt-1 inline-block rounded-md bg-blue-100 px-2 py-0.5 text-[10px] font-bold uppercase text-blue-900">{location.type}</span>
      </span>
      <ArrowUpRight size={18} className="shrink-0 text-slate-400" />
    </button>
  );
}