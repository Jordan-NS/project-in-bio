import { TrendingUp } from "lucide-react";

export default function TotalVisits() {
  return (
    <div className="w-min whitespace-nowrap flex items-center gap-5 bg-background-secondary border-border-primary px-8 py-3 rounded-xl shadow-lg
    transition-transform hover:scale-105 ease-in-out duration-300
    ">
      <span className="text-white font-bold">Total de visitas</span>
      <div className="flex items-center gap-2 text-accent-green">
        <span className="text-3xl font-bold">31,200</span>
        <TrendingUp />
      </div>
      {/* <div className="flex items-center gap-2">
        <button>Portal</button>
        <button>Sair</button>
      </div> */}
    </div>
  );
}