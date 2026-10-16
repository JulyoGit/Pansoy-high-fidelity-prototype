import { AlertTriangle, ArrowUpRight, Building2, HeartPulse, Phone, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { emergencyContacts } from "../data/locations";

const icons = { alert: AlertTriangle, building: Building2, health: HeartPulse, shield: ShieldCheck };

export default function Emergency() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-4xl rounded-3xl bg-white p-5 shadow-sm sm:p-8">
      <div className="rounded-2xl bg-red-50 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-700"><AlertTriangle size={25} /></span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Emergency Directory</h1>
            <p className="mt-1 text-sm leading-6 text-slate-600">Keep important contact options easy to find. In a real emergency, contact verified local services.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {emergencyContacts.map((contact, index) => {
          const Icon = icons[contact.icon] || Phone;
          const isPlaceholder = contact.number.includes("000-");
          return (
            <div key={contact.name} className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 sm:flex-row sm:items-center">
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${index === 0 ? "bg-red-100 text-red-700" : "bg-blue-50 text-blue-900"}`}><Icon size={22} /></span>
              <div className="flex-1">
                <h2 className="font-extrabold text-slate-900">{contact.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{contact.role}</p>
                <p className="mt-1 text-sm font-bold text-slate-800">{contact.number}</p>
              </div>
              {isPlaceholder ? (
                <button onClick={() => navigate(`/confirmation?type=contact&name=${encodeURIComponent(contact.name)}&number=${encodeURIComponent(contact.number)}`)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-bold text-slate-700 hover:bg-slate-50">View Contact <ArrowUpRight size={16} /></button>
              ) : (
                <a href={`tel:${contact.number}`} onClick={() => {}} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-red-600 px-4 text-sm font-bold text-white hover:bg-red-700"><Phone size={16} /> Call {contact.number}</a>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        <strong>Important:</strong> Local contact numbers above are demo placeholders Only. Only 911 is presented as a general emergency number.
      </div>
    </div>
  );
}