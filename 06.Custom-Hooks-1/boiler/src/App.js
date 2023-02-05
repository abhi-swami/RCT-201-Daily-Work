import React from "react";
import { Box, Button, Center, Divider, Flex, Heading } from "@chakra-ui/react";
import Stopwatch1 from "./components/Stopwatch1";
import Stopwatch2 from "./components/Stopwatch2";
import Stopwatch3 from "./components/Stopwatch3";
import Posts from "./components/Posts/Posts";
import useToggle from "./hooks/useToogle";


function App() {

  const [value,toggle]= useToggle(false)
  const [value1,toggle1]= useToggle(true)
  //here we are sharing the same function (useToggle()) but for both of them value of state is different and both the functions can work independently without disturbing the state of each other and if functionality is based on the principle of clousers
  
  return (
    <Box>
      <Box ml={9} textAlign={"center"} border={"1px solid gray"} w="50%" m={3}>
        <Heading size={"lg"}>First Example of Custome Hooks</Heading>
        <Heading size={"sm"}>Toggle status is{value?" true":" false"}</Heading>
        <Button onClick={()=>toggle()}>
          Toggle
        </Button>
      </Box>
      <Box ml={9} textAlign={"center"} border={"1px solid gray"} w="50%" m={3}>
        <Heading size={"lg"}>Second Example of Custome Hooks</Heading>
        <Heading size={"sm"}>Toggle status is{value1?" true":" false"}</Heading>
        <Button onClick={()=>toggle1()}>
          Toggle
        </Button>
      </Box>
      <Center>
        <Heading>StopWatchs</Heading>
      </Center>
      <Center>
        <Flex rowGap={6}>
          <Stopwatch1 />
          <Stopwatch2 />
          <Stopwatch3 />
        </Flex>
      </Center>
      <Divider my={4} />
      <Center>
        <Posts />
      </Center>
    </Box>
  );
}

export default App;
