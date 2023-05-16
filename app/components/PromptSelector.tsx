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
  "Anime Style": "a person's selfie in an anime art style",
  Minimalist: "a person's selfie in a minimalist art style",
  "Pixel Art": "a person's selfie in a pixel art style",
  Impressionist: "a person's selfie in an impressionist art style",
  "Art Deco": "a person's selfie in an art deco style",
  "Pop Art": "a person's selfie in a pop art style",
  Gothic: "a person's selfie in a gothic art style",
  Pointillism: "a person's selfie in a pointillism art style",
  Victorian: "a person's selfie in a Victorian art style",
  Abstract: "a person's selfie in an abstract art style",
  "Steam Punk": "a person's selfie in a steam punk art style",
  "African Tribal": "a person's selfie in an African tribal art style",
  // Add more prompts here
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
