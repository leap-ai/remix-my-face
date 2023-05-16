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
  Cyberpunk: "8k portrait in cyberpunk art style",
  "Neon Noir": "8k portrait in neon noir art style",
  "Starry Night":
    "8k portrait in Vincent van Gogh's Starry Night-inspired style",
  "Paper Cut-Out": "8k portrait in paper cut-out art style",
  "Glitch Art": "8k portrait in glitch art style",
  "Low Poly": "8k portrait in low poly art style",
  "Lego Style": "8k portrait in Lego-inspired art style",
  "Juxtaposed Collage": "8k portrait in juxtaposed collage art style",
  Silhouette: "8k portrait in silhouette art style",
  Origami: "8k portrait in origami-inspired art style",
  Watercolor: "8k portrait in watercolor art style",
  "Floral Pattern": "8k portrait in floral pattern art style",
  Anime: "8k portrait in anime art style",
  "Fairy Tale": "8k portrait in fairy tale-inspired art style",
  Kawaii: "8k portrait in kawaii art style",
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
