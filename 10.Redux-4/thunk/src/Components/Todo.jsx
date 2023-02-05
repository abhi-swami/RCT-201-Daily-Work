import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { fetchTodos } from "../Redux/Todos/todoAction";
import { deleteTodo } from "../Redux/DeleteTodos/deleteAction";
import { toggleTodo } from "../Redux/Toggle/toggleAction";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todo.todo);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id)).then((res) => dispatch(fetchTodos));
  };
  // const toggleTodo = (id) => {
  //   axios
  //     .get(`http://localhost:8080/todos/${id}`)
  //     .then((res) => res.data.status)
  //     .then((res) => {
  //       console.log(res);
  //       axios
  //         .patch(`http://localhost:8080/todos/${id}`, {
  //           status: !res,
  //         })
  //         .then((res) => dispatch(fetchTodos));
  //     });
  // };
  const handleToggle = (el) => {
    dispatch(toggleTodo(el.id)).then((res)=>dispatch(fetchTodos))
  };
  useEffect(() => {
    dispatch(fetchTodos);
  }, []);

  return (
    <Box>
      <TodoInput />
      {todos?.map((el) => (
        <Box
          key={el?.id}
          border={"1px solid black"}
          w={"30%"}
          m={"auto"}
          my={3}
          py={3}
        >
          <Heading size="sm">{el?.title}</Heading>
          <Text>{el?.status === true ? "Done" : "Pending"}</Text>
          <Button bgColor={"yellow.300"} onClick={() => handleToggle(el)}>
            Toggle Status
          </Button>
          <Button
            bgColor={"red.300"}
            ml={3}
            onClick={() => handleDelete(el.id)}
          >
            Delete Todo
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Todo;
