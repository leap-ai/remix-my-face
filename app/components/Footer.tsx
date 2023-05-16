"use client";

import { Container, Text, VStack } from "@chakra-ui/react";

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
      </VStack>
    </Container>
  );
}
