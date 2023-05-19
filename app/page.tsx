"use client";

import { pollRemixStatus } from "@/lib/pollRemixStatus";
import { resizeFile } from "@/lib/resizer";
import { submitImage } from "@/lib/submitImage";
import { RemixImage } from "@/types/remix.type";
import { FaMagic } from "react-icons/fa";

import {
  Button,
  Container,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ImageResultsList from "./components/ImageResultsList";
import ImageSelector from "./components/ImageSelector";
import Navbar from "./components/Navbar";
import PromptSelector from "./components/PromptSelector";

// Home component
export default function Home() {
  // Define states
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [polling, setPolling] = useState(false);
  const [results, setResults] = useState<RemixImage[]>([]);
  const [prompt, setPrompt] = useState({
    key: "Disney",
    value: "8k portrait in modern disney style",
  });

  // Reset results if image is removed
  useEffect(() => {
    if (!image) {
      setResults([]);
    }
  }, [image]);

  // Handle form submission
  const handleSubmit = async () => {
    setLoading(true);
    setResults([]);

    // Submit if image is selected
    if (image) {
      const resizedImage = await resizeFile(image);

      // Check if resizedImage is a Blob
      if (!(resizedImage instanceof Blob)) {
        return;
      }

      const remixId = await submitImage(resizedImage, prompt.value);
      if (!remixId) return;

      // Poll and get the result
      await pollRemixStatus(
        "1e7737d7-545e-469f-857f-e4b46eaa151d",
        remixId,
        setResults,
        setPolling
      );
    }
    setLoading(false);
  };

  // Render UI for the component
  return (
    <VStack>
      <Navbar />
      <Container maxWidth="container.sm" h={"full"}>
        <VStack
          align="center"
          pt={12}
          gap={4}
          justifyContent={"center"}
          alignItems={"center"}
          h={"full"}
          w={"full"}
        >
          {/* Rendering header and example image */}
          {!image && (
            <>
              <VStack>
                <Stack gap={0}>
                  <Heading textAlign={"center"} lineHeight={1}>
                    Take a selfie,
                  </Heading>
                  <Heading textAlign={"center"} lineHeight={1}>
                    get a custom avatar using AI.
                  </Heading>
                </Stack>
                <Image
                  src={"/example-hq-1.png"}
                  alt="Example"
                  width={"full"}
                  height="auto"
                  objectFit={"contain"}
                  maxH={250}
                  maxW={500}
                />
              </VStack>
            </>
          )}
          {/* Rendering image selector */}
          <ImageSelector image={image} setImage={setImage} />

          {/* Rendering prompt selector and submit button */}
          {image && (
            <HStack w={"full"}>
              <PromptSelector
                selectedPrompt={prompt}
                setSelectedPrompt={setPrompt}
              />
              <Button
                onClick={handleSubmit}
                isLoading={loading || polling}
                rightIcon={<Icon as={FaMagic} />}
                w={"full"}
                colorScheme="teal"
              >
                Remix
              </Button>
            </HStack>
          )}
          {/* Rendering loading text if any */}
          {(loading || polling) && (
            <Text fontSize={"0.7rem"}>
              Generating can take about 30 seconds. Hang tight!
            </Text>
          )}
          {/* Rendering list of generated images */}
          <ImageResultsList images={results} />
        </VStack>
      </Container>
      <Footer />
    </VStack>
  );
}
