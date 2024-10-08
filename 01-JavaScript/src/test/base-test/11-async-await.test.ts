import { getImagen } from "../../bases/11-async-await";

describe("Tests in base (11-async-await)", () => {
  test("should return a URL of an image", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });

  test("should return an error", async () => {
    try {
      const response = await getImagen();
      expect(response).toBe("Not found image");
    } catch (error) {
      expect(error).toBe("Not found image");
    }
  });
});
