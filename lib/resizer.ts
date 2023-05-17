import Resizer from "react-image-file-resizer";

// Function to resize an image file that accepts a file as input
export const resizeFile = (file: File) => {
  // Create a new Promise to handle the resized image
  return new Promise<string | File | Blob | ProgressEvent<FileReader>>(
    (resolve) => {
      // Calls the imageFileResizer function from the 'react-image-file-resizer' library
      Resizer.imageFileResizer(
        file, // File - the input image file to be resized
        1000, // maxWidth - the maximum width of the resized image
        1000, // maxHeight - the maximum height of the resized image
        "JPEG", // Output format - use 'JPEG' for JPEG images
        100, // Quality - image quality (0 - 100) where 100 is the highest
        0, // Rotation - sets the rotation of the resized image (0 - no rotation)
        (blob) => {
          resolve(blob); // Callback function called once the image is resized, resolves the Promise with the resized image
        },
        "blob" // Output type - indicates the format of the resized image to be returned ('file', 'base64', or 'blob')
      );
    }
  );
};
