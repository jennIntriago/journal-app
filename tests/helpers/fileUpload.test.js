import { fileUpload } from "../../src/helpers/fileUpload";

describe("Pruebas en fileUploads", () => {
  test("debe de subir el archivo correctamente a cloudidany", async () => {
    // fileUpload
    const imageUrl =
      "https://images.pexels.com/photos/185941/pexels-photo-185941.jpeg";

    const resp = await fetch(imageUrl);

    // bytes
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);

    // evaluar la url-img
    expect(typeof url).toBe("string");
  });
});
