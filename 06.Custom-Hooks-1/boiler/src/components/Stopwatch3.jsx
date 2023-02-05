
import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";
import useStopWatch from "../hooks/useStopWatch";

const Stopwatch3 = () => {
  const {time,start,pause}=useStopWatch()
 
  return (
    <Box border={"1px solid black"} borderRadius={4} m={2} p={2}>
      <Center>
        <Heading>{time}</Heading>
      </Center>
      <Flex gap={2}>
        <Button onClick={start} colorScheme="cyan">
          Start
        </Button>
        <Button onClick={pause} colorScheme="red">
          Pause
        </Button>
      </Flex>
    </Box>
  );
};

export default Stopwatch3;
