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
          <Heading size={"lg"}>Remix My Face</Heading>
          <Text textAlign={"center"}>Take a selfie, get a custom avatar.</Text>
          <input type="file" accept="image/*" />
        </VStack>
      </Container>
    </>
  );
}
