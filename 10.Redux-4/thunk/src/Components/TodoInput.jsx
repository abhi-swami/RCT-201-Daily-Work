import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch,  } from "react-redux";
import {
  addNewTodo,
} from "../Redux/InputTodos/InputAction";
import { fetchTodos } from "../Redux/Todos/todoAction";


export default function TodoInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = () => {
    dispatch(addNewTodo(input)).then((res) => {
      setInput("");
      dispatch(fetchTodos);
    });
  };
  return (
    <Box>
      <Box w={"40%"} margin={"auto"}>
        <FormControl>
          <FormLabel textAlign={"center"}>Add Todo</FormLabel>
          <Input
            type="text"
            name="todo"
            value={input}
            variant="filled"
            placeholder="Add a new Task"
            _placeholder={{ color: "gray", opacity: 0.9 }}
            focusBorderColor="black"
            onChange={handleChange}
          />
        </FormControl>
        <Button
          bgColor={"darkgreen"}
          variant={"outline"}
          my={3}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}
