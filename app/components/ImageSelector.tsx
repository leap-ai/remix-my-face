// Import necessary components and icons from Chakra UI and React-icons
import {
  Button,
  FormControl,
  Icon,
  Image,
  Input,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useRef } from "react";
import { FaUndo } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

interface ImageSelectorProps {
  image: File | null;
  setImage: (image: File | null) => void;
}

// Create a new functional component called ImageSelector
const ImageSelector = ({ image, setImage }: ImageSelectorProps) => {
  // Create a reference to the hidden file input element
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle the button click event to trigger the actual file input click
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Handle the file input change event and update the image state
  const handleFileChange = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    setImage(files ? files[0] : null);
  };

  // If an image is already selected, show a button to start over and the selected image
  if (image) {
    return (
      <VStack w={"full"} bg={"blackAlpha.100"} rounded="md" p={2}>
        <Button
          onClick={() => setImage(null)}
          leftIcon={<Icon as={FaUndo} />}
          size={"sm"}
          w={"full"}
        >
          Start Over
        </Button>
        <Image
          src={URL.createObjectURL(image)}
          alt="Selected Image"
          objectFit={"contain"}
          maxH={500}
          maxW={500}
          w={"full"}
          rounded={"md"}
        />
      </VStack>
    );
  }

  // If no image is selected, show a button to upload or take a selfie
  return (
    <FormControl id="file-upload" mt={6}>
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
        w={"full"}
      >
        Upload or Take Selfie
      </Button>
    </FormControl>
  );
};

export default ImageSelector;
