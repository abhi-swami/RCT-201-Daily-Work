import{useState} from "react";
import {Box,Heading,Button} from "@chakra-ui/react"

export default function MyCounter(){
    const [state,setState]=useState<number>(0)
    return(
        <Box>
            <Heading size={"md"}> Counter</Heading>
            <Heading size={"sm"}> {state} </Heading>

            <Button onClick={()=>setState(state-1)}>
                DEC
            </Button>
            <Button onClick={()=>setState(state+1)}>
                INCR
            </Button>
        </Box>
    )
}