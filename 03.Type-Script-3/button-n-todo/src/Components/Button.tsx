

import { Box,Button  } from "@chakra-ui/react";


type BtnProps={
    color:string;
    title:string;
}
export default function Btn (props:BtnProps){
    const {color,title}=props;
  

    const handleClick=()=>{

        console.log("hello")
        
    }
    return(
        <Box>
            <Button variant='solid' bgColor={color} onClick={handleClick}>
                {title}
            </Button>
            <Button colorScheme='blue'>Button</Button>
        </Box>
        
    )
}

