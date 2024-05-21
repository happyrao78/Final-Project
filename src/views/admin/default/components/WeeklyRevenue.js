// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import BarChart from "components/charts/BarChart";
import React from "react";
import {
  barChartDataConsumption,
  barChartOptionsConsumption,
} from "variables/charts";
import { MdBarChart } from "react-icons/md";

export default function WeeklyRevenue(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("white", "white");
  const bgButton = useColorModeValue("green.500", "green.500");
  const bgHover = useColorModeValue("green.400", "green.400");
  const bgFocus = useColorModeValue("green.600", "green.600");

  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'>
          No. of Problems Solved
        </Text>
        <Text
          me='auto'
          mr='10px'
          color={textColor}
          fontSize='md'
          fontWeight='500'
          lineHeight='100%'
        >
          Current Streak: 3
        </Text>
        <Button
          align='center'
          justifyContent='center'
          bg={bgButton}
          _hover={{ bg: bgHover }}
          _focus={{ bg: bgFocus }}
          _active={{ bg: bgFocus }}
          w='37px'
          h='37px'
          lineHeight='100%'
          borderRadius='10px'
          {...rest}>
          <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
        </Button>
      </Flex>

      <Box h='240px' mt='auto'>
        <BarChart
          chartData={barChartDataConsumption}
          chartOptions={barChartOptionsConsumption}
        />
      </Box>
    </Card>
  );
}
