import {
  Box,
  Button,
  Text,
  Grid,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  Link,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";

export default function ImageResult({ src }: { src: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const message =
    "Check out this cool website by @leap_api where you can upload a selfie and create custom avatars https://remixmyface.com";
  const encodedMessage = encodeURIComponent(message);
  const downloadFileName = "custom_avatar.png";

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodedMessage}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=https://tryleap.ai&title=${encodedMessage}`;
  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=https://tryleap.ai&media=${src}&description=${encodedMessage}`;

  return (
    <>
      <Box
        onClick={onOpen}
        _hover={{
          opacity: 0.8,
          transition: "all 0.2s ease-in-out",
        }}
      >
        <Image
          src={src}
          alt={src}
          objectFit="cover"
          cursor={"pointer"}
          rounded={"md"}
        />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Download & Share on Social Media</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack gap={4} py={4}>
              <Image src={src} alt={src} objectFit="contain" />
              <Text>Share this website with your friends!</Text>
              <HStack>
                <Button as="a" href={src} download={downloadFileName}>
                  Download
                </Button>
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
