"use client";

import { Text, VStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <VStack bg={"blackAlpha.100"} p={8} w={"full"}>
      <Text
        as="a"
        href={"https://tryleap.ai/?ref=remixmyface.com"}
        target={"_blank"}
      >
        {"Made with Leap API"}
      </Text>
    </VStack>
  );
}
