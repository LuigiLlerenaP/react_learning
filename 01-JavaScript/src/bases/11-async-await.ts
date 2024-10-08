//! Async-Await
//* 'async' nos permite definir funciones asíncronas.
//* 'await' nos permite trabajar con código síncrono dentro de funciones asíncronas.
//* Ambos están estrechamente ligados en su uso.
//Await espera que termine antes de ejecutar lo siguiente

const getImagen = async () => {
  try {
    const apiKey: string = "6Svl7MSJPEoXjfzXRBEtML6wPaMj1Avr";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    // const img = document.createElement("img");
    // img.src = url;
    // document.body.append(img);
    return url;
  } catch (error) {
    console.error(error);
    return "Not found imag";
  }
};
// getImagen();

export { getImagen };
