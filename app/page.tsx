"use client";

import { pollRemixStatus } from "@/lib/pollRemixStatus";
import { submitImage } from "@/lib/submitImage";
import { RemixImage } from "@/types/remix.type";
import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import ImageResults from "./components/ImageResults";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  // Loader
  const [loading, setLoading] = useState(false);
  const [polling, setPolling] = useState(false);
  const [images, setImages] = useState<RemixImage[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (image) {
      // Submit
      const remixId = await submitImage(image, "graffiti art style");
      if (!remixId) return;

      // Poll
      await pollRemixStatus(
        "1e7737d7-545e-469f-857f-e4b46eaa151d",
        remixId,
        setImages,
        setPolling
      );
    }
    setLoading(false);
  };

  return (
    <>
      <Container maxWidth="container.lg" marginBottom={16}>
        <VStack align="center" py={8} gap={4}>
          <Heading size={"lg"}>Remix My Face</Heading>
          <Text textAlign={"center"}>Take a selfie, get a custom avatar.</Text>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <Button onClick={handleSubmit} isLoading={loading || polling}>
            Submit
          </Button>
          <ImageResults images={images} />
        </VStack>
      </Container>
    </>
  );
}
