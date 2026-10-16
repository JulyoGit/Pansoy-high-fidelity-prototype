import { useState } from "react";
import { Clock3, Navigation, Route, MapPin, LocateFixed } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MapPreview from "../components/MapPreview";
import { locations } from "../data/locations";

export default function MapScreen() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const initialLocation = locations.find((item) => item.id === Number(params.get("location"))) || locations[0];
  const [selected, setSelected] = useState(initialLocation);
  const [showRoute, setShowRoute] = useState(true);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
      <section className="rounded-3xl bg-white p-4 shadow-sm sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Map / Route</h1>
            <p className="mt-1 text-sm text-slate-500">Review your route before starting.</p>
          </div>
          <button onClick={() => setShowRoute((current) => !current)} className={`min-h-10 rounded-xl px-3 text-sm font-bold ${showRoute ? "bg-blue-100 text-blue-900" : "bg-slate-100 text-slate-600"}`}>
            {showRoute ? "Hide route" : "Show route"}
          </button>
        </div>
        <div className="relative">
          <MapPreview full />
          {!showRoute && <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/65"><span className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">Route hidden</span></div>}
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-500">This is a simulated map for usability testing. Location, distance, and route lines are illustrative and do not use live GPS.</p>
      </section>

      <aside className="space-y-4">
        <div className="rounded-3xl bg-white p-5 shadow-sm sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-800">Destination</p>
          <h2 className="mt-2 text-xl font-extrabold text-slate-900">{selected.name}</h2>
          <p className="mt-2 flex items-center gap-2 text-sm text-slate-500"><MapPin size={16} /> {selected.address}</p>
          <div className="my-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-blue-50 p-4">
              <Route size={19} className="text-blue-900" />
              <p className="mt-2 text-xl font-extrabold text-blue-950">{selected.distance}</p>
              <p className="text-xs text-slate-500">Estimated distance</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <Clock3 size={19} className="text-slate-700" />
              <p className="mt-2 text-xl font-extrabold text-slate-900">~{selected.minutes}</p>
              <p className="text-xs text-slate-500">Estimated walk</p>
            </div>
          </div>
          <label className="mb-2 block text-sm font-bold text-slate-800">Change destination</label>
          <select value={selected.id} onChange={(event) => setSelected(locations.find((item) => item.id === Number(event.target.value)))} className="mb-4 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm">
            {locations.map((location) => <option key={location.id} value={location.id}>{location.name}</option>)}
          </select>
          <button onClick={() => navigate(`/details?location=${selected.id}`)} className="mb-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-4 text-sm font-bold text-blue-900 hover:bg-blue-50">
            <LocateFixed size={18} /> View Location Details
          </button>
          <button onClick={() => navigate(`/confirmation?type=navigation&location=${selected.id}`)} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-900 px-4 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800">
            <Navigation size={18} /> Start Navigation
          </button>
        </div>
      </aside>
    </div>
  );
}