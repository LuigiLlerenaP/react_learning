import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEfect/SimpleForm";
import { SimpleFormWithCustomHook } from "./02-useEfect/SimpleFormWithCustomHook";

export const HooksApp = () => {
  return (
    <main className="bg-gradient-to-br from-slate-700 to-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-2xl">
        <h1 className="text-4xl font-extrabold text-slate-700 mb-6">Hooks</h1>
        <p className="text-slate-500 mb-6">Explorando los hooks de React</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-300 p-6 rounded-lg shadow-inner hover:bg-slate-200 transition duration-300">
            <CounterApp />
          </div>
          <div className="bg-slate-300 p-6 rounded-lg shadow-inner hover:bg-slate-200 transition duration-300">
            <CounterWithCustomHook />
          </div>
          <div className="bg-slate-300 p-5 rounded-lg shadow-inner hover:bg-slate-200 transition duration-300">
            <SimpleForm />
          </div>
          <div className="bg-slate-300 p-5 rounded-lg shadow-inner hover:bg-slate-200 transition duration-300">
            <SimpleFormWithCustomHook />
          </div>
        </div>
      </div>
    </main>
  );
};
