import { ArrowRight, MapPinned, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuickAccess from "../components/QuickAccess";
import MapPreview from "../components/MapPreview";
import { locations } from "../data/locations";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
      <section className="space-y-5">
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-900">
            <MapPinned size={15} /> YOUR LOCAL GUIDE
          </span>
          <h1 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Find places in <span className="text-blue-800">Bagtas</span>, with confidence.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Discover local facilities, important landmarks, and emergency services in one simple guide.
          </p>
          <form onSubmit={(event) => { event.preventDefault(); const value = event.currentTarget.search.value.trim(); if (value) navigate(`/search?q=${encodeURIComponent(value)}`); else navigate("/search"); }} className="mt-6 flex gap-2">
            <label className="flex min-h-12 flex-1 items-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-3 focus-within:border-blue-700">
              <Search size={19} className="text-slate-500" />
              <input name="search" placeholder="Search a location..." className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" />
            </label>
            <button className="min-h-12 rounded-xl bg-blue-900 px-5 text-sm font-bold text-white transition hover:bg-blue-800">Search</button>
          </form>
          <p className="mt-2 text-xs text-slate-500">Tip: Try “health center”, “school”, or “barangay hall”.</p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">Quick Access</h2>
              <p className="mt-1 text-xs text-slate-500">Choose a category to get started</p>
            </div>
            <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-900">3 categories</span>
          </div>
          <QuickAccess />
        </div>
      </section>

      <section className="space-y-5">
        <div className="rounded-3xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">Local Map Preview</h2>
              <p className="mt-1 text-xs text-slate-500">A quick overview of the demo route</p>
            </div>
            <button onClick={() => navigate("/map")} className="inline-flex items-center gap-1 rounded-lg px-2 py-2 text-xs font-bold text-blue-900 hover:bg-blue-50">
              Open map <ArrowRight size={14} />
            </button>
          </div>
          <MapPreview />
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-slate-900">Popular Locations</h2>
            <button onClick={() => navigate("/search")} className="text-xs font-bold text-blue-900 hover:underline">View all</button>
          </div>
          <div className="space-y-2">
            {locations.slice(0, 3).map((item) => (
              <button key={item.id} onClick={() => navigate(`/map?location=${item.id}`)} className="flex w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left transition hover:bg-blue-50">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-900"><MapPinned size={18} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold text-slate-800">{item.name}</span>
                  <span className="block text-xs text-slate-500">{item.distance} away · {item.type}</span>
                </span>
                <ArrowRight size={16} className="text-slate-400" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}