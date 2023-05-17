import axios from "axios";
import { RemixImage, RemixResponse } from "@/types/remix.type";

// Properties required for polling remix status
interface PollRemixStatusProps {
  modelId: string;
  remixId: string;
  updateStatus: (images: RemixImage[]) => void;
  setIsPolling: (isPolling: boolean) => void;
}

// Define the polling interval in milliseconds
const POLL_INTERVAL_MS = 3000;

// The checkStatus function polls the remix status, updates images and recursively calls itself
// until the status is either "finished" or "failed"
async function checkStatus(
  { modelId, remixId, updateStatus, setIsPolling }: PollRemixStatusProps,
  pollInterval: number
): Promise<void> {
  try {
    // Send an API request to the server
    const response = await axios.get<RemixResponse>(
      `/api/check-remix-status?modelId=${modelId}&remixId=${remixId}`
    );

    // Extract the remix status
    const status = response.data.status;

    // If the status is "finished" or "failed", update images and stop polling
    if (status === "finished" || status === "failed") {
      updateStatus(response.data.images);
      setIsPolling(false);
    }
    // Keep polling if the status is "queued" or "processing"
    else if (status === "queued" || status === "processing") {
      setTimeout(
        () =>
          checkStatus(
            { modelId, remixId, updateStatus, setIsPolling },
            pollInterval
          ),
        pollInterval
      );
    }
    // Throw an error if the received status is unexpected
    else {
      throw new Error("Unexpected status value");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error while polling for remix status:", error.message);
    }
  }
}

// The pollRemixStatus function starts the polling process by setting the isPolling state to true
// and calling the checkStatus function for the first time
export const pollRemixStatus = (
  modelId: string,
  remixId: string,
  updateStatus: (images: RemixImage[]) => void,
  setIsPolling: (isPolling: boolean) => void
): Promise<void> => {
  setIsPolling(true);

  return checkStatus(
    { modelId, remixId, updateStatus, setIsPolling },
    POLL_INTERVAL_MS
  );
};
