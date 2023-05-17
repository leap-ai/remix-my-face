"use client";

import { Button, Container, Text, VStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Container maxW={"container.sm"}>
      <VStack bg={"blackAlpha.100"} p={8} w={"full"} rounded={"md"} mb={8}>
        <Text
          as="a"
          href={"https://tryleap.ai/?ref=remixmyface.com"}
          target={"_blank"}
        >
          {"Made with Leap API"}
        </Text>
        <Button
          as="a"
          href={"https://github.com/leap-api/remix-my-face"}
          target={"_blank"}
          size={"xs"}
          leftIcon={<FaGithub />}
        >
          Fork on GitHub
        </Button>
      </VStack>
    </Container>
  );
}
