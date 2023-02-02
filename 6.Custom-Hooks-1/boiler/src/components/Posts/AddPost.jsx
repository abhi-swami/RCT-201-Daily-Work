
import { Button, Center, Input, useToast } from "@chakra-ui/react";
import { addPost } from "./posts.api";
import useDelayedAPI from "../../hooks/useDelayedAPI";
import {useState, useEffect } from "react";

const AddPost = ({ onAddPost }) => {
  const toast = useToast();
  const [message, setMessage] = useState("");


  const {loading,success,error,data,execute}=useDelayedAPI(addPost)
  useEffect(()=>{
    if(success){
      onAddPost(data);
      toast({
        title: `Post added successfully`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
    if(error){
      toast({
        title: "Error Occurred while trying to add Post",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  },[error,data])
  return (
    <Center>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button onClick={()=>execute({content:message})} colorScheme="green" isLoading={loading}>
        Add
      </Button>
    </Center>
  );
};

export default AddPost;
