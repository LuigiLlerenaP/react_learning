import { useState, FormEvent, ChangeEvent } from "react";
interface SumState {
  sumA: string;
  sumB: string;
  result: number | null;
}
export default function Sum() {
  const [state, setState] = useState<SumState>({
    sumA: "",
    sumB: "",
    result: null,
  });

  const handleCalculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const numA = parseInt(state.sumA);
    const numB = parseInt(state.sumB);

    if (isNaN(numA) || isNaN(numB)) return;
    setState((prevState) => ({ ...prevState, result: numA + numB }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <form
        onSubmit={handleCalculate}
        className="flex flex-col items-center bg-slate-400 m-7 p-8 w-96 h-auto font-mono rounded-lg shadow-lg"
      >
        <h3 className="mb-2 text-center text-2xl bg-slate-300 p-3 rounded-md font-semibold w-full">
          Calculate the numbers
        </h3>
        <div className="flex flex-col mb-4 w-full">
          <label
            htmlFor="sumA"
            className="block text-sm font-semibold leading-6 text-gray-900 mb-2"
          >
            Number One
          </label>
          <input
            type="number"
            name="sumA"
            id="sumA"
            placeholder="Insert the number"
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            value={state.sumA}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-4 w-full">
          <label
            htmlFor="sumB"
            className="block text-sm font-semibold leading-6 text-gray-900 mb-2"
          >
            Number Two
          </label>
          <input
            type="number"
            name="sumB"
            id="sumB"
            placeholder="Insert the number"
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            value={state.sumB}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-cyan-950 hover:bg-cyan-800 text-white px-4 py-2 mt-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
          type="submit"
        >
          Calculate
        </button>
      </form>
      {state.result !== null && (
        <div className="text-gray-100 mt-4 text-center text-xl">
          Result: {state.result}
        </div>
      )}
    </>
  );
}
