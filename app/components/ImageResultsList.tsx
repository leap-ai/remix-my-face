// Import necessary components and types
import { RemixImage } from "@/types/remix.type";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ImageResult from "./ImageResult";

// Define the ImageResultsList component, which takes a list of images to display
export default function ImageResultsList({ images }: { images: RemixImage[] }) {
  // Render the component using a Chakra UI SimpleGrid for a responsive layout
  return (
    <SimpleGrid
      columns={{
        base: 1, // The grid will show 1 column on small screens
        sm: 2, // The grid will show 2 columns on larger screens
      }}
      spacing={2} // Space between grid items is 2 units
      maxW="6xl" // Maximum width of the grid is 6xl
      m="auto" // Center the grid using auto margins
    >
      {/* For each image in the images array, render an ImageResult component */}
      {images.map((image, index) => {
        return (
          // Use a Chakra UI Box component for containing the image
          <Box key={image.id} width="full" borderRadius="md" overflow="hidden">
            {/* Render the ImageResult component with the current image's URI */}
            <ImageResult src={image.uri} />
          </Box>
        );
      })}
    </SimpleGrid>
  );
}
