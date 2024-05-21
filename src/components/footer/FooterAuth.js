import React from "react";
import {
  Flex,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  let textColor = useColorModeValue("black.400", "white");

  return (
    <Flex
      position="relative" // Fixed position
      bottom="0" // Align to bottom
      left="0" // Align to left
      right="0" // Align to right
      zIndex="3"
      flexDirection="column"
      alignItems="center" // Center horizontally
      justifyContent="center" // Center vertically
      px={{ base: "30px", md: "0px" }}
      pb="30px"
      w="100%" // Full width
    >
      <Text
        color={textColor}
        textAlign="center" // Center text
        mb={{ base: "20px", lg: "0px" }}
      >
        © {1900 + new Date().getYear()} Happy Yadav. All Rights Reserved. Made with love by
        <Link
          mx="3px"
          color={textColor}
          href="https://www.example.com" // Replace with your URL
          isExternal // Opens in a new tab
          fontWeight="700"
        >
          Happy
        </Link>
      </Text>
    </Flex>
  );
}
