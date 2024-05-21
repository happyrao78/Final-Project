import React from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  SimpleGrid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@chakra-ui/react";
import { FaAward } from "react-icons/fa";

// Custom components
import Card from "components/card/Card.js";

const awards = [
  { id: 1, name: "Award 1" },
  { id: 2, name: "Award 2" },
  { id: 3, name: "Award 3" },
  { id: 4, name: "Award 4" },
  { id: 5, name: "Award 5" },
  { id: 6, name: "Award 6" },
  { id: 7, name: "Award 7" },
  { id: 8, name: "Award 8" },
  // Add more awards as needed
];

export default function DailyTraffic(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex justify='space-between' align='start' px='10px' pt='5px'>
        <Flex flexDirection='column' align='start' me='20px'>
          <Flex w='100%'>
            <Text
              me='auto'
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'>
              Awards
            </Text>
          </Flex>
          <Flex align='end'>
            <Text
              color={textColor}
              fontSize='34px'
              fontWeight='700'
              lineHeight='100%'>
              {awards.length}
            </Text>
            <Text
              ms='6px'
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'>
              Awards
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <SimpleGrid columns={2} spacing={5} mt={5}>
        {awards.slice(0, 4).map((award) => (
          <Flex
            key={award.id}
            direction='column'
            align='center'
            justify='center'
            p='5'
            borderWidth='1px'
            borderRadius='md'
          >
            <Icon as={FaAward} boxSize={10} color='yellow.500' />
            <Text mt={2} color={textColor} fontSize='sm' fontWeight='600' textAlign='center'>
              {award.name}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>

      <Button mt={5} onClick={onOpen}>
        Show More
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Awards</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={5}>
              {awards.slice(4).map((award) => (
                <Flex
                  key={award.id}
                  direction='column'
                  align='center'
                  justify='center'
                  p='5'
                  borderWidth='1px'
                  borderRadius='md'
                >
                  <Icon as={FaAward} boxSize={10} color='yellow.500' />
                  <Text mt={2} color={textColor} fontSize='sm' fontWeight='600' textAlign='center'>
                    {award.name}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
}
