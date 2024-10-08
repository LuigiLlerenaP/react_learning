describe("Test in <DemoComponent>", () => {
  test("message sin espacios debe ser igual a 'Hola mundo'", () => {
    // Inicialización
    const message = "Hola mundo";

    // Estímulo
    const messageTrimmed = message.trim();

    // Observación del comportamiento
    expect(messageTrimmed).toBe("Hola mundo");
  });
});
