import { render, screen } from "@testing-library/react";
import React from "react";
import Hello from "../../src/components/Hello";

describe("Test in <Hello>", () => {
  const firstName: string = "Luigi";
  test("should match with snapshot", () => {
    const { container } = render(<Hello firstName={firstName}></Hello>);
    expect(container).toMatchSnapshot();
  });
  test('should to show the message "Hola, Soy Goku"', () => {
    render(<Hello firstName={firstName} />);
    expect(screen.getByText(firstName)).not.toBeTruthy();
  });
  test("should find the title in h1", () => {
    render(<Hello firstName={firstName}></Hello>);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      firstName
    );
  });
  test("should to show the subtitle to was send by props", () => {
    render(<Hello firstName={firstName}></Hello>);
    expect(screen.getAllByAltText(firstName).length).toBe(2);
  });
});
