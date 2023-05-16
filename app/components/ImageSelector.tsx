"use client";

import { FiUpload } from "react-icons/fi";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useRef } from "react";

export default function ImageSelector({
  image,
  setImage,
}: {
  image: File | null;
  setImage: (image: File | null) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  if (image) {
    return (
      <VStack w={"full"} bg={"blackAlpha.100"} rounded="md" p={2}>
        <Button
          onClick={() => setImage(null)}
          leftIcon={<Icon as={FiUpload} />}
          size={"sm"}
          w={"full"}
        >
          Change Image
        </Button>
        <Image
          src={URL.createObjectURL(image)}
          alt="Selected Image"
          //   width="100%"
          //   height="auto"
          objectFit={"contain"}
          maxH={500}
          maxW={500}
          rounded={"md"}
        />
      </VStack>
    );
  }

  return (
    <FormControl id="file-upload" mt={6}>
      <Stack>
        <Input
          type="file"
          onChange={handleFileChange}
          display="none"
          ref={fileInputRef}
        />
        <Button
          leftIcon={<Icon as={FiUpload} />}
          colorScheme="teal"
          variant="solid"
          onClick={handleButtonClick}
        >
          Upload or Take Selfie
        </Button>
      </Stack>
    </FormControl>
  );
}
