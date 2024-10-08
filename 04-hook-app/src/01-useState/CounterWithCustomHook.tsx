import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <section className="flex flex-col items-center justify-center mt-4 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Custom Hook Counter
      </h2>
      <h3 className="text-xl font-semibold text-slate-700 mb-4">
        Add one by one <span className="text-blue-500">{counter}</span>
      </h3>
      <div className="flex space-x-4">
        <button
          onClick={() => increment()}
          className="bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-105 transition duration-300"
        >
          +1
        </button>
        <button
          onClick={() => decrement()}
          className="bg-red-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-red-600 transform hover:scale-105 transition duration-300"
        >
          -1
        </button>
        <button
          onClick={reset}
          className="bg-gray-700 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-800 transform hover:scale-105 transition duration-300"
        >
          Reset
        </button>
      </div>
    </section>
  );
};
