
import { Clock3, MapPin, Navigation, Tag } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { locations } from "../data/locations";

export default function Details() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const location =
    locations.find((item) => item.id === Number(params.get("location"))) ||
    locations[0];

  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-sm">
      <div className="relative h-56 w-full bg-slate-100 sm:h-72 md:h-96">
        <img
          src={location.image}
          alt={`Photo of ${location.name}`}
          className="h-full w-full object-contain bg-slate-100"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="p-5 sm:p-8 md:p-10">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-800">
          Location Details
        </p>

        <h1 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
          {location.name}
        </h1>

        <span className="mt-3 inline-flex rounded-md bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-900">
          {location.category}
        </span>

        <div className="mt-6 space-y-5">
          <div className="flex gap-3">
            <MapPin size={20} className="mt-0.5 shrink-0 text-blue-900" />
            <div>
              <p className="text-sm font-bold text-slate-800">Location</p>
              <p className="mt-1 text-sm text-slate-600">
                {location.address}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Clock3 size={20} className="mt-0.5 shrink-0 text-blue-900" />
            <div>
              <p className="text-sm font-bold text-slate-800">
                Operating Hours
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {location.hours}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Tag size={20} className="mt-0.5 shrink-0 text-blue-900" />
            <div>
              <p className="text-sm font-bold text-slate-800">Description</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {location.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => navigate(`/map?location=${location.id}`)}
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-900 px-4 text-sm font-bold text-white hover:bg-blue-800"
          >
            <Navigation size={18} />
            Get Directions
          </button>

          <button
            onClick={() => navigate("/search")}
            className="min-h-12 rounded-xl border border-slate-200 px-4 text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            Back to Search
          </button>
        </div>

        <p className="mt-4 text-xs leading-5 text-slate-500">
          Prototype note: details and hours are sample content. Confirm with
          the barangay before relying on them.
        </p>
      </div>
    </div>
  );
}
