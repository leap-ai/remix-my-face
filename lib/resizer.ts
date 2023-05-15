import Resizer from "react-image-file-resizer";

export const resizeFile = (file: File) =>
  new Promise<string | File | Blob | ProgressEvent<FileReader>>((resolve) => {
    Resizer.imageFileResizer(
      file,
      1000,
      1000,
      "JPEG",
      100,
      0,
      (blob) => {
        console.log("RESIZE", { blob });
        resolve(blob);
      },
      "blob"
    );
  });
