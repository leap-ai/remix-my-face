"use client";

import {
  Button,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const apiUrl = "/api/remix";

  return (
    <>
      <Container maxW="container.lg" mb={16}>
        <VStack align="center" py={8} gap={4}>
          <Heading size={"lg"}>Draw It</Heading>
          <Text textAlign={"center"}>
            Draw something and our AI will generate an image based on your
            sketch.
          </Text>
          <input type="file" accept="image/*" />
        </VStack>
      </Container>
    </>
  );
}
