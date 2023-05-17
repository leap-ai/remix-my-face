"use client";

import { pollRemixStatus } from "@/lib/pollRemixStatus";
import { resizeFile } from "@/lib/resizer";
import { submitImage } from "@/lib/submitImage";
import { RemixImage } from "@/types/remix.type";
import { FaMagic } from "react-icons/fa";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Spacer,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import ImageResultsList from "./components/ImageResultsList";
import PromptSelector from "./components/PromptSelector";
import ImageSelector from "./components/ImageSelector";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  // Loader
  const [loading, setLoading] = useState(false);
  const [polling, setPolling] = useState(false);
  const [results, setResults] = useState<RemixImage[]>([
    // {
    //   id: "1",
    //   uri: "http://localhost:3000/example-hq-1.png",
    //   createdAt: new Date().toDateString(),
    // },
  ]);
  const [prompt, setPrompt] = useState({
    key: "",
    value: "",
  });

  useEffect(() => {
    if (!image) {
      setResults([]);
    }
  }, [image]);

  const handleSubmit = async () => {
    setLoading(true);
    setResults([]);
    console.log("SUBMIT", { image });
    if (image) {
      // Submit
      const resizedImage = await resizeFile(image);
      // Check if resizedImage is a Blob
      if (!(resizedImage instanceof Blob)) {
        console.log(typeof resizedImage);
        console.error("Error resizing image");
        return;
      } else {
        console.log("Image resized", resizedImage);
      }

      const remixId = await submitImage(resizedImage, prompt.value);
      if (!remixId) return;

      // Poll
      await pollRemixStatus(
        "1e7737d7-545e-469f-857f-e4b46eaa151d",
        remixId,
        setResults,
        setPolling
      );
    }
    setLoading(false);
  };

  return (
    <VStack>
      <Navbar />
      <Container maxWidth="container.sm" h={"full"}>
        <VStack
          align="center"
          py={12}
          gap={4}
          justifyContent={"center"}
          alignItems={"center"}
          h={"full"}
          w={"full"}
        >
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
          <ImageSelector image={image} setImage={setImage} />
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
          <ImageResultsList images={results} />
        </VStack>
      </Container>
      <Footer />
    </VStack>
  );
}
