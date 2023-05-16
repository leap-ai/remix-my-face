import { HStack, Heading, Spacer, Tag } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <HStack
      bg={"blackAlpha.100"}
      p={4}
      backdropFilter={"blur(20px)"}
      w={"full"}
      position={"sticky"}
      top={0}
      zIndex={100}
    >
      <Heading size={"md"}>Remix My Face</Heading>
      <Spacer />
      <Tag>v0.03</Tag>
    </HStack>
  );
}
