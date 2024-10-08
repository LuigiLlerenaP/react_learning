import { CountOperation, CountOperations } from "../App";

type CounterProps = {
  value: number;
  handlerCounter: (action: CountOperation) => void;
};
export const CounterApp: React.FC<CounterProps> = ({
  value,
  handlerCounter,
}) => {
  return (
    <section className="container mx-auto max-w-md bg-gray-800 p-8 mt-12 rounded-xl shadow-lg flex flex-col items-center">
      <div className="text-center mb-6">
        <h5 className="text-4xl font-semibold text-white mb-2">Counter</h5>
        <p className="text-gray-300 text-sm">
          Click to increment or decrement the counter
        </p>
      </div>
      <div className="flex items-center justify-around w-full">
        <span className="text-6xl font-bold text-yellow-400">{value}</span>
        <div className="flex flex-col space-y-2">
          <button
            className="py-2 px-6 bg-green-700 text-white rounded-full shadow-md transform transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-600 text-lg"
            onClick={() => handlerCounter(CountOperations.Increment)}
          >
            + 1
          </button>
          <button
            className="py-2 px-6 bg-red-700 text-white rounded-full shadow-md transform transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-600 text-lg"
            onClick={() => handlerCounter(CountOperations.Decrement)}
          >
            - 1
          </button>
          <button
            aria-label="btn-reset"
            className="py-2 px-6 bg-blue-800 text-white rounded-full shadow-md transform transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-600 text-lg"
            onClick={() => handlerCounter(CountOperations.Reset)}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};
