import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Box,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ChevronDown } from "@carbon/icons-react";

export const prompts = {
  Cyberpunk: "a person's selfie in a cyberpunk art style",
  "Neon Noir": "a person's selfie in a neon noir art style",
  "Starry Night":
    "a person's selfie in a Vincent van Gogh's Starry Night-inspired style",
  "Paper Cut-Out": "a person's selfie in a paper cut-out art style",
  "Glitch Art": "a person's selfie in a glitch art style",
  "Low Poly": "a person's selfie in a low poly art style",
  "Lego Style": "a person's selfie in a Lego-inspired art style",
  "Juxtaposed Collage": "a person's selfie in a juxtaposed collage art style",
  Silhouette: "a person's selfie in a silhouette art style",
  Origami: "a person's selfie in an origami-inspired art style",
};

export default function PromptSelector({
  selectedPrompt,
  setSelectedPrompt,
}: {
  selectedPrompt: { key: string; value: string };
  setSelectedPrompt: (prompt: { key: string; value: string }) => void;
}) {
  const getRandomPrompt = () => {
    const promptsEntries = Object.entries(prompts);
    return promptsEntries[Math.floor(Math.random() * promptsEntries.length)];
  };

  useEffect(() => {
    const randomPrompt = getRandomPrompt();
    setSelectedPrompt({
      key: randomPrompt[0],
      value: randomPrompt[1],
    });
  }, [setSelectedPrompt]);

  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="blue"
        rightIcon={<ChevronDown />}
        variant={"outline"}
      >
        {selectedPrompt.key || "Select Style"}
      </MenuButton>
      <MenuList>
        {Object.entries(prompts).map(([key, value]) => (
          <MenuItem key={key} onClick={() => setSelectedPrompt({ key, value })}>
            {key}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
