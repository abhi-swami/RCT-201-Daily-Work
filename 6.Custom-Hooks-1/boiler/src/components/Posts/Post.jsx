import React, { useEffect } from "react";
import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import { deletePost } from "./posts.api";
import useDelayedAPI from "../../hooks/useDelayedAPI";

const Post = ({ id, content, onDelete }) => {
  const toast = useToast();

  const { loading, success, error, data, execute } = useDelayedAPI(deletePost);

  useEffect(() => {
    if (success) {
      onDelete(id);
      toast({
        title: `Post with id: ${id}, deleted successfully`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }

    if (error) {
      toast({
        title: "Error Occurred while trying to add Post",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  }, [error, data]);
  return (
    <Flex gap={2}>
      <Box>{content}</Box>
      <Button
        size="sm"
        isLoading={loading}
        loadingText="Deleting..."
        onClick={()=>execute(id)}
      >
        Delete
      </Button>
    </Flex>
  );
};

export default Post;
