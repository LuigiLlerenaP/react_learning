import { fireEvent, render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { CounterApp } from "../../src/components/CounterApp";
import { CountOperation, CountOperations } from "../../src/App";

describe("Test in a component(CounterApp)", () => {
  const [count, setCount] = useState(10);

  const handlerCounter = (operation: CountOperation) => {
    if (operation === CountOperations.Increment) {
      setCount((prevCount) => prevCount + 1);
      return;
    }
    if (operation === CountOperations.Decrement) {
      setCount((prevCount) => prevCount - 1);
      return;
    }
    if (operation === CountOperations.Reset) {
      setCount(0);
      return;
    }
  };
  test("should to match with snapshot ", () => {
    const { container } = render(
      <CounterApp value={count} handlerCounter={handlerCounter} />
    );
    expect(container).toMatchSnapshot();
  });

  test("should show the value initial", () => {
    render(<CounterApp value={count} handlerCounter={handlerCounter} />);
    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });

  test("should to increment with the button one", () => {
    render(<CounterApp value={count} handlerCounter={handlerCounter} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("should to decrement with the button one", () => {
    render(<CounterApp value={count} handlerCounter={handlerCounter} />);
    fireEvent.click(screen.getByText("-1"));
    // screen.debug(); ver mi dom
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("should to work the button rest", () => {
    render(<CounterApp value={count} handlerCounter={handlerCounter} />);
    fireEvent.click(screen.getByText("Reset"));
    // screen.debug(); ver mi dom
    expect(screen.getByText(0)).toBeTruthy();

    screen.getByRole("button", { name: "btn-reset" });
  });
});
