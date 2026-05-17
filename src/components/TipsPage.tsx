import { useState } from 'react';
import { TIPS } from '../data/tips';
import { TipCard } from './TipCard';

export function TipsPage() {
  const [filter, setFilter] = useState("ALL");

  const filteredTips = TIPS.filter((tip) => {
    if (filter === "ALL") return true;
    if (filter === "VERIFIED") return tip.verified;
    if (filter === "DISCOVERY") return !tip.verified;

    return tip.category === filter;
  });

  const sortedTips =
    [...filteredTips].sort(
      (a,b)=>b.priority-a.priority
    );

  return (
    <div className="p-4 space-y-3">

      <h1 className="text-white text-xl font-bold mb-1">
        Droid Tips
      </h1>

      <p className="text-xs text-zinc-500 mb-4">
        Community discoveries, progression tips and hidden mechanics.
      </p>

      <div className="flex gap-2 overflow-x-auto pb-2">

        {[
          "ALL",
          "VERIFIED",
          "DISCOVERY",
          "EVENT",
          "MISSION"
        ].map(item => (

          <button
            key={item}
            onClick={()=>setFilter(item)}
            className={`
  	    px-3 py-1 rounded border text-[10px]
  	    whitespace-nowrap transition-all
  	    ${
    	    filter===item
      	    ? "border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.25)]"
	      : "border-zinc-700 text-zinc-500"
	  }
	`}
          >
            {item}
          </button>

        ))}

      </div>

      {sortedTips.map((tip)=>(
        <TipCard
          key={tip.title}
          tip={tip}
        />
      ))}

    </div>
  );
}
