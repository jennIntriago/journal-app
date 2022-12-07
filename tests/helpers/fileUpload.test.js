import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

// Configuracion para usar SDK de cloudinary

cloudinary.config({
  cloud_name: "dry0ncppk",
  api_key: "479872988938914",
  api_secret: "nBTzjH1KHVlrHk7ClRcpTc5GAQk",
  secure: true,
});

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

    // limpieza en cloudinary
    const segments = url.split("/");
    const imgId = segments[segments.length - 1].replace(".jpg", "");
    const cloudResp = await cloudinary.api.delete_resources(
      ["journal/" + imgId],
      { resource_type: "image" }
    );
    console.log({ cloudResp });
  });

  test("debe retornar null", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);
    // evaluar la url-img
    expect(url).toBe(null);
  });
});
