import React, { useState } from "react";
import { Button, Box, GridItem, Grid, Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { evaluate, cancel } from "../redux/Calculator/calculatorAction";

const arr = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "C", 0, "=", "/"];
const Calculator = ({ val }) => {
  let ary = [];
  const [state, setState] = useState(ary);
  const dispatch = useDispatch();

  const handleClick = (param) => {
    if (param === "=") {
      if (state.length !== 0) {
        let x = state.concat().join("");
        dispatch(evaluate(x));
      }
      setState(ary);
    } else if (param === "C") {
      dispatch(cancel(0));
      setState([]);
    } else {
      setState([...state, param]);
    }
  };
  return (
    <Box>
      <Heading size={"md"}>Calculator</Heading>
      <Button w={"15%"} m={3}>
        {val === 0 ? state : val}
      </Button>

      <Grid w={"15%"} m={"auto"} gap={3} templateColumns={"repeat(4,1fr)"}>
        {arr.map((el) => (
          <GridItem key={el}>
            <Button colorScheme="gray" onClick={() => handleClick(el)}>
              {el}
            </Button>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Calculator;
