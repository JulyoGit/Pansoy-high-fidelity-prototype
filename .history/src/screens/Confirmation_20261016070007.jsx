import { CheckCircle2, Home, MapPin, PhoneCall, RotateCcw } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { locations } from "../data/locations";

export default function Confirmation() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const type = params.get("type") || "navigation";
  const location = locations.find((item) => item.id === Number(params.get("location"))) || locations[0];
  const name = params.get("name");
  const number = params.get("number");

  const isContact = type === "contact";
  const title = isContact ? "Contact selected" : "Navigation started successfully!";
  const description = isContact
    ? `You selected ${name || "an emergency contact"}. Verify the number before placing a call.`
    : `Your demo route to ${location.name} is ready. Follow the displayed route in this prototype.`;

  return (
    <div className="mx-auto max-w-2xl rounded-3xl bg-white px-6 py-10 text-center shadow-sm sm:px-12 sm:py-14">
      <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${isContact ? "bg-blue-100 text-blue-900" : "bg-green-100 text-green-700"}`}>
        {isContact ? <PhoneCall size={38} /> : <CheckCircle2 size={42} />}
      </div>
      <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-800">Action complete</p>
      <h1 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">{title}</h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">{description}</p>
      {isContact && number && <p className="mt-3 inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold text-slate-800"><PhoneCall size={16} /> {number}</p>}
      {!isContact && (
        <div className="mx-auto mt-6 flex max-w-sm items-center gap-3 rounded-2xl border border-slate-200 p-4 text-left">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-900"><MapPin size={21} /></span>
          <div><p className="font-bold text-slate-900">{location.name}</p><p className="mt-1 text-xs text-slate-500">{location.distance} · About {location.minutes} walking</p></div>
        </div>
      )}
      <p className="mt-5 text-xs text-slate-500">This is a prototype confirmation only. It does not start live GPS navigation or place a call automatically.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button onClick={() => navigate("/")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-900 px-5 text-sm font-bold text-white hover:bg-blue-800"><Home size={17} /> Back to Home</button>
        <button onClick={() => navigate(isContact ? "/emergency" : `/map?location=${location.id}`)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 text-sm font-bold text-slate-700 hover:bg-slate-50"><RotateCcw size={17} /> {isContact ? "Return to Directory" : "View Route Again"}</button>
      </div>
    </div>
  );
}