import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { RemixImage } from "@/types/remix.type";
import React from "react";
import ImageResult from "./ImageResult";

export default function ImageResultsList({ images }: { images: RemixImage[] }) {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        sm: 2,
      }}
      spacing={2}
      maxW="6xl"
      m="auto"
    >
      {images.map((image, index) => {
        return (
          <Box key={image.id} width="full" borderRadius="md" overflow="hidden">
            <ImageResult src={image.uri} />
          </Box>
        );
      })}
    </SimpleGrid>
  );
}
