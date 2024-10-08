import { returnArray } from "../../bases/07-desestructuración";

describe("Test in base (07-Desestructuración)", () => {
  test("should return a string or number", () => {
    const [letters, numbers] = returnArray();
    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");
    expect(letters).toEqual(expect.any(String));
  });
});
