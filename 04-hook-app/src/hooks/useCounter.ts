import { useState } from "react";

interface CounterState {
  counter: number;
  increment: (value?: number) => void;
  decrement: (value?: number) => void;
  reset: () => void;
}

export const useCounter = (initialValue: number = 0): CounterState => {
  const [counter, setCounter] = useState<number>(initialValue);

  const increment = (value: number = 1): void => {
    setCounter((prevCounter) => prevCounter + value);
  };

  const decrement = (value: number = 1): void => {
    if (counter < value) return;
    setCounter(counter - value);
  };

  const reset = (): void => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
