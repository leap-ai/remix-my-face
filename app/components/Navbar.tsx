import {
  Button,
  HStack,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      bg={"blackAlpha.100"}
      p={4}
      backdropFilter={"blur(20px)"}
      w={"full"}
      position={"sticky"}
      top={0}
      zIndex={100}
      userSelect={"none"}
    >
      <Heading size={"md"} as={"a"} href={"/"}>
        Remix My Face
      </Heading>
      <Spacer />
      <Button
        as="a"
        href={"https://github.com/leap-api/remix-my-face"}
        target={"_blank"}
        size={"xs"}
        leftIcon={<FaGithub />}
      >
        Fork on GitHub
      </Button>
      <IconButton
        aria-label={"Toggle Dark Mode"}
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
        size={"sm"}
        rounded={"full"}
      />
    </HStack>
  );
}
