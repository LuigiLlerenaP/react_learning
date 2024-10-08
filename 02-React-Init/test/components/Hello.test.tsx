import { render } from "@testing-library/react";
import React from "react";
import Hello from "../../src/components/Hello";

describe("Test in <Hello>", () => {
  test("should has to mach", () => {
    const firstName: string = "Luigi";
    const { container } = render(<Hello firstName={firstName} />);
    console.log(container);
    expect(container).toMatchInlineSnapshot();
  });

  test("should show the name h1", () => {
    const firstName: string = "Luigi";
    const { getByText, getByTestId } = render(<Hello firstName={firstName} />);
    expect(getByText(firstName)).toBeTruthy();
    // const h1 = container.querySelector("h1");
    // expect(h1?.innerHTML).toBe(firstName);
    expect(getByTestId("test-title").innerHTML).toContain(firstName);
  });

  test("should returns the subtitle of get props ", () => {
    const subTitle = "Soy un subtitulo";
    const { getAllByAltText } = render(<Hello firstName={subTitle} />);
    expect(getAllByAltText(subTitle).length).toBe(2);
  });
});
