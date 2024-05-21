import { Box, Grid, Center, Flex, Text, Icon } from "@chakra-ui/react";
import { FaUniversity,  FaEnvelope } from "react-icons/fa";
// Custom components
import Banner from "views/admin/profile/components/Banner";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar10.jpeg";
import React from "react";

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Center>
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "1fr", // Changed to 1fr to center the card within the grid
          }}
          templateRows={{
            base: "1fr",
          }}
          gap={{ base: "20px", xl: "20px" }}
          w="100%"
          maxW="500px" // Set a max-width to control the width of the card
        >
          <Banner
            gridArea="1 / 1 / 2 / 2"
            banner={banner}
            avatar={avatar}
            name={
              <Flex align="center" justify="center">
                {/* <Icon as={FaFlag} color="red.500" mr="2" /> */}
                <Text>Siddhart Singh</Text>
              </Flex>
            }
            job={
              <Flex align="center" justify="center">
                <Icon as={FaUniversity} color="blue.500" mr="2" />
                <Text>Delhi Technological University</Text>
              </Flex>
            }
            posts="17"
            email={
              <Flex align="center" justify="center">
                <Icon as={FaEnvelope} color="gray.500" mr="2" />
                <Text>sample@gmail.com</Text>
              </Flex>
            }
            followers="9.7k"
            following="274"
          />
        </Grid>
      </Center>
    </Box>
  );
}
