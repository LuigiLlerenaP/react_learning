import React, { useState } from "react";
interface CounterState {
  c1: number;
  c2: number;
  c3: number;
}

export const CounterApp: React.FC = () => {
  const [state, setCounter] = useState<CounterState>({
    c1: 10,
    c2: 20,
    c3: 30,
  });
  const { c1, c2, c3 } = state;

  return (
    <section className="flex flex-col items-center justify-center mt-4 p-6 bg-slate-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Counter</h2>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <h3 className="text-1xl font-semibold text-slate-700">
          Counter 1: <span className="text-blue-500">{c1}</span>
        </h3>
        <h3 className="text-1xl font-semibold text-slate-700">
          Counter 2: <span className="text-blue-500">{c2}</span>
        </h3>
        <h3 className="text-1xl font-semibold text-slate-700">
          Counter 3: <span className="text-blue-500">{c3}</span>
        </h3>
      </div>
      <hr className="border-t-2 border-gray-400 w-full mb-4 mt-1" />
      <button
        onClick={() =>
          setCounter({
            ...state,
            c1: c1 + 1,
          })
        }
        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Increment Counter 1
      </button>
    </section>
  );
};
