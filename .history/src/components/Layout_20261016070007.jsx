import { ArrowLeft, Home } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Brand from "./Brand";

const screenNames = {
  "/": "Home",
  "/search": "Search",
  "/map": "Map / Route",
  "/details": "Location Details",
  "/emergency": "Emergency Directory",
  "/confirmation": "Confirmation"
};

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[#eef4f8] px-3 py-4 sm:px-6 sm:py-7">
      <div className="mx-auto max-w-7xl">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm sm:px-7">
          <Brand />
          <div className="hidden text-center md:block">
            <p className="text-sm font-semibold text-slate-800">Explore Bagtas. Find What You Need.</p>
            <p className="mt-1 text-xs text-slate-500">Maps, facilities, landmarks, and more — even without internet access.</p>
          </div>
          <div className="rounded-xl bg-blue-100 px-4 py-2">
            <p className="text-[10px] font-bold uppercase tracking-wide text-blue-900">Current Screen</p>
            <p className="text-sm font-semibold text-blue-950">{screenNames[location.pathname] || "Bagtas GuideMap"}</p>
          </div>
        </header>

        {!isHome && (
          <div className="mb-4 flex items-center justify-between">
            <button onClick={() => navigate(-1)} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
              <ArrowLeft size={17} /> Back
            </button>
            <button onClick={() => navigate("/")} className="inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-100">
              <Home size={17} /> Home
            </button>
          </div>
        )}

        <main>{children}</main>
        <footer className="py-7 text-center text-xs text-slate-500">
          Bagtas GuideMap · Student HCI Prototype · Sample data for demonstration
        </footer>
      </div>
    </div>
  );
}