import { useMemo, useState } from "react";
import { Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import LocationCard from "../components/LocationCard";
import { locations } from "../data/locations";

const filters = ["All", "Housing", "Facilities", "Emergency"];

export default function Search() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");
  const [activeFilter, setActiveFilter] = useState(params.get("category") || "All");
  const [notice, setNotice] = useState("");

  const results = useMemo(() => locations.filter((location) => {
    const matchesFilter = activeFilter === "All" || location.category === activeFilter;
    const searchText = `${location.name} ${location.address} ${location.type} ${location.description}`.toLowerCase();
    return matchesFilter && searchText.includes(query.trim().toLowerCase());
  }), [query, activeFilter]);

  function submitSearch(event) {
    event.preventDefault();
    if (!query.trim()) {
      setNotice("Enter a location or choose a category to search.");
      return;
    }
    setNotice(`${results.length} matching location${results.length === 1 ? "" : "s"} found.`);
  }

  return (
    <div className="mx-auto max-w-4xl rounded-3xl bg-white p-5 shadow-sm sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Search Locations</h1>
          <p className="mt-1 text-sm text-slate-500">Find a place in Bagtas, Tanza, Cavite.</p>
        </div>
        <span className="rounded-xl bg-blue-50 p-3 text-blue-900"><SlidersHorizontal size={21} /></span>
      </div>

      <form onSubmit={submitSearch} className="mt-6 flex gap-2">
        <label className="flex min-h-12 flex-1 items-center gap-2 rounded-xl border border-slate-300 px-3 focus-within:border-blue-700">
          <SearchIcon size={19} className="text-slate-500" />
          <input value={query} onChange={(event) => { setQuery(event.target.value); setNotice(""); }} placeholder="Try Bagtas Barangay Hall..." className="w-full text-sm outline-none placeholder:text-slate-400" />
        </label>
        <button className="rounded-xl bg-blue-900 px-5 text-sm font-bold text-white hover:bg-blue-800">Search</button>
      </form>

      <div className="mt-4 flex flex-wrap gap-2" aria-label="Location filters">
        {filters.map((filter) => (
          <button key={filter} onClick={() => { setActiveFilter(filter); setNotice(""); }} className={`min-h-10 rounded-full border px-4 text-sm font-semibold transition ${activeFilter === filter ? "border-blue-900 bg-blue-900 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50"}`}>
            {filter}
          </button>
        ))}
      </div>

      {notice && <p role="status" className="mt-4 rounded-lg bg-blue-50 px-3 py-2 text-sm text-blue-900">{notice}</p>}

      <div className="mt-6 flex items-center justify-between">
        <h2 className="font-bold text-slate-800">Search Results</h2>
        <span className="text-xs text-slate-500">{results.length} places</span>
      </div>
      <div className="mt-3 space-y-2">
        {results.map((location) => (
          <LocationCard key={location.id} location={location} onClick={() => navigate(`/map?location=${location.id}`)} />
        ))}
        {results.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 px-4 py-10 text-center">
            <p className="font-bold text-slate-700">No matching locations</p>
            <p className="mt-1 text-sm text-slate-500">Try a different keyword or select All.</p>
            <button onClick={() => { setQuery(""); setActiveFilter("All"); setNotice(""); }} className="mt-3 rounded-lg bg-blue-900 px-4 py-2 text-sm font-bold text-white">Clear search</button>
          </div>
        )}
      </div>
    </div>
  );
}