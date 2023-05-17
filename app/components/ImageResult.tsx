// Import necessary Chakra UI components and hooks
import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
// Import social media icons
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";

interface ImageResultProps {
  src: string;
}

// ImageResult component expects a single prop: "src"
export default function ImageResult({ src }: ImageResultProps) {
  // State for modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Functions to open and close the modal
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  // Message and encodedMessage used to share on social media platforms
  const message =
    "Check out this cool website by @leap_api where you can upload a selfie and create custom avatars https://remixmyface.com";
  const encodedMessage = encodeURIComponent(message);
  const downloadFileName = "custom_avatar.png";

  // URLs for sharing to different social media platforms
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodedMessage}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=https://tryleap.ai&title=${encodedMessage}`;
  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=https://tryleap.ai&media=${src}&description=${encodedMessage}`;

  return (
    <>
      {/* Trigger for opening modal */}
      <Box
        onClick={onOpen}
        _hover={{
          opacity: 0.8,
          transition: "all 0.2s ease-in-out",
        }}
      >
        {/* Image thumbnail */}
        <Image
          src={src}
          alt={src}
          objectFit="cover"
          cursor={"pointer"}
          rounded={"md"}
        />
      </Box>

      {/* Modal for showing image, download, and share options */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Download & Share on Social Media</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack gap={4} py={4}>
              {/* Full-size image */}
              <Image src={src} alt={src} objectFit="contain" />
              {/* Share prompt */}
              <Text>Share this website with your friends!</Text>
              {/* Container for buttons */}
              <HStack>
                {/* Download button */}
                <Button as="a" href={src} download={downloadFileName}>
                  Download
                </Button>
                {/* Social media buttons */}
                <IconButton
                  as={Link}
                  href={twitterShareUrl}
                  target="_blank"
                  aria-label="Share on Twitter"
                  icon={<FaTwitter />}
                />
                <IconButton
                  as={Link}
                  href={facebookShareUrl}
                  target="_blank"
                  aria-label="Share on Facebook"
                  icon={<FaFacebook />}
                />
                <IconButton
                  as={Link}
                  href={linkedinShareUrl}
                  target="_blank"
                  aria-label="Share on LinkedIn"
                  icon={<FaLinkedin />}
                />
                <IconButton
                  as={Link}
                  href={pinterestShareUrl}
                  target="_blank"
                  aria-label="Share on Pinterest"
                  icon={<FaPinterest />}
                />
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
