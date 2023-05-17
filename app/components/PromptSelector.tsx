import { ChevronDown } from "@carbon/icons-react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useEffect } from "react";

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
  Disney: "8k portrait in modern disney style",
  "Marvel Comic": "8k portrait in marvel comic art style",
};

// PromptSelector component allows users to choose an art style
export default function PromptSelector({
  selectedPrompt,
  setSelectedPrompt,
}: {
  selectedPrompt: { key: string; value: string };
  setSelectedPrompt: (prompt: { key: string; value: string }) => void;
}) {
  // Function to get a random art style from prompts
  const getRandomPrompt = () => {
    const promptsEntries = Object.entries(prompts);
    return promptsEntries[Math.floor(Math.random() * promptsEntries.length)];
  };

  // Set an initial random art style when the component is first rendered
  useEffect(() => {
    const randomPrompt = getRandomPrompt();
    setSelectedPrompt({
      key: randomPrompt[0],
      value: randomPrompt[1],
    });
  }, [setSelectedPrompt]);

  return (
    // Chakra UI Menu component - creates a dropdown menu
    <Menu>
      {/* MenuButton displays the selected art style, clicking it opens the menu */}
      <MenuButton
        as={Button}
        colorScheme="teal"
        rightIcon={<ChevronDown />}
        variant={"outline"}
        w={"full"}
      >
        {selectedPrompt.key || "Select Style"}
      </MenuButton>

      {/* MenuList contains MenuItem(s) with available art styles */}
      <MenuList>
        {/* Map over prompts and generate MenuItem(s) for each art style */}
        {Object.entries(prompts).map(([key, value]) => (
          <MenuItem
            key={key}
            // Clicking a MenuItem sets the selectedPrompt to the chosen art style
            onClick={() => setSelectedPrompt({ key, value })}
          >
            {key}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
