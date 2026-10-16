import { MapPin, Navigation } from "lucide-react";

export default function MapPreview({ full = false }) {
  return (
    <div className={`map-grid relative overflow-hidden rounded-2xl border border-slate-200 ${full ? "h-[430px] sm:h-[520px]" : "h-52"}`}>
      <div className="absolute left-[12%] top-[16%] h-20 w-12 rounded-full bg-green-200/70" />
      <div className="absolute right-[9%] top-[10%] h-28 w-16 rounded-full bg-green-200/70" />
      <div className="absolute bottom-[8%] left-[35%] h-16 w-24 rounded-full bg-green-200/80" />
      <div className="absolute left-[17%] top-[25%] h-[52%] w-[67%]">
        <div className="route-line absolute inset-0 bg-blue-600/90" />
      </div>
      <div className="absolute left-[13%] bottom-[12%] flex items-center gap-1 rounded-full bg-blue-900 px-3 py-2 text-xs font-bold text-white shadow-lg">
        <Navigation size={13} /> You are here
      </div>
      <div className="absolute right-[16%] top-[14%] flex flex-col items-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-lg ring-4 ring-white/70">
          <MapPin size={22} fill="currentColor" />
        </span>
        <span className="mt-1 rounded-md bg-white/95 px-2 py-1 text-[11px] font-bold text-slate-800 shadow">Destination</span>
      </div>
      <div className="absolute left-3 top-3 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-slate-700 shadow">
        Bagtas, Tanza, Cavite
      </div>
      <div className="absolute bottom-3 right-3 rounded-lg bg-white/95 px-3 py-2 text-xs text-slate-600 shadow">
        Demo map · Not live GPS
      </div>
    </div>
  );
}