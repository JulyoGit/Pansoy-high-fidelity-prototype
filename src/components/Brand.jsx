import { Map } from "lucide-react";

export default function Brand({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white">
        <Map size={25} strokeWidth={2.2} />
      </div>
      <div>
        <p className="text-lg font-extrabold tracking-tight text-blue-950">Bagtas GuideMap</p>
        {!compact && <p className="text-xs text-slate-500">Offline Barangay Mapping & Locator App</p>}
      </div>
    </div>
  );
}