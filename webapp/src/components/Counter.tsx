"use client";

import { useState } from "react";

/**
 * En klient-komponent. `"use client"` MÅ stå på linje 1, ikke etter en
 * kommentar eller en import.
 *
 * Uten det direktivet kjører fila på serveren, og da finnes verken `useState`
 * eller `onClick`. Det er hele forskjellen på denne fila og Home.tsx.
 */
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-6 flex items-center gap-3">
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
      >
        Trykk her
      </button>
      <span>Trykket {count} ganger</span>
    </div>
  );
}
