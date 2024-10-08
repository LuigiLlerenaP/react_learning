import { getGreet } from "../../bases/02-template-string";

describe("Test in base (template Sting)", () => {
  test("should return the greet 'Hello, Luigi Llerena'", () => {
    const fullName: string = "Luigi Llerena";
    const message: string = getGreet(fullName);
    expect(message).toBe(`Hello, ${fullName}`);
  });
});
