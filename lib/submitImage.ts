// Import the necessary library for sending HTTP requests
import axios from "axios";

// Create an interface to define the expected response structure for the submitImage API call
interface SubmitImageResponse {
  remixId: string;
}

// This function submits an image file (Blob) and an associated prompt to the /api/submit-remix endpoint
// If successful, it returns the unique remixId for the submitted image
// In case of an error, it returns null
export async function submitImage(
  blob: Blob,
  prompt: string
): Promise<string | null> {
  try {
    // Create a FormData instance to hold the image file and prompt
    const formData = new FormData();
    formData.append("image", blob); // Add the image Blob to the form data
    formData.append("prompt", prompt); // Add the prompt to the form data

    // Configure and send a POST request to the /api/submit-remix endpoint with the FormData object
    // The 'Content-Type' header is set to 'multipart/form-data' for submitting the form data
    const response = await axios.post<SubmitImageResponse>(
      "/api/submit-remix",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    // Return the unique remixId for the submitted image if the request is successful
    return response.data.remixId;
  } catch (error: unknown) {
    // Handle errors that occur during the submission process without logging
    // This improves user experience, as console logs are removed in the cleaned-up code
    if (error instanceof Error) {
      return null;
    }
    return null;
  }
}
