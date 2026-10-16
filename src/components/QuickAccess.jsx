import { Building2, HeartPulse, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

const options = [
  { label: "Housing", icon: Building2, filter: "Housing", color: "text-blue-800", bg: "bg-blue-50" },
  { label: "Facilities", icon: Building2, filter: "Facilities", color: "text-indigo-800", bg: "bg-indigo-50" },
  { label: "Emergency", icon: ShieldAlert, filter: "Emergency", color: "text-red-600", bg: "bg-red-50" }
];

export default function QuickAccess() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-3">
      {options.map(({ label, icon: Icon, filter, color, bg }) => (
        <button
          key={label}
          onClick={() => filter === "Emergency" ? navigate("/emergency") : navigate(`/search?category=${filter}`)}
          className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
        >
          <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg} ${color}`}>
            <Icon size={22} />
          </span>
          <span className="text-sm font-bold text-slate-800">{label}</span>
        </button>
      ))}
    </div>
  );
}