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
  Cyberpunk: "8k portrait of a person in cyberpunk art style",
  "Neon Noir": "8k portrait of a person in neon noir art style",
  "Starry Night":
    "8k portrait of a person in Vincent van Gogh's Starry Night-inspired style",
  "Paper Cut-Out": "8k portrait of a person in paper cut-out art style",
  "Glitch Art": "8k portrait of a person in glitch art style",
  "Low Poly": "8k portrait of a person in low poly art style",
  "Lego Style": "8k portrait of a person in Lego-inspired art style",
  "Juxtaposed Collage":
    "8k portrait of a person in juxtaposed collage art style",
  Silhouette: "8k portrait of a person in silhouette art style",
  Origami: "8k portrait of a person in origami-inspired art style",
  Watercolor: "8k portrait of a person in watercolor art style",
  "Floral Pattern": "8k portrait of a person in floral pattern art style",
  Anime: "8k portrait of a person in anime art style",
  "Fairy Tale": "8k portrait of a person in fairy tale-inspired art style",
  Kawaii: "8k portrait of a person in kawaii art style",
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
        colorScheme="teal"
        rightIcon={<ChevronDown />}
        variant={"outline"}
        w={"full"}
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
