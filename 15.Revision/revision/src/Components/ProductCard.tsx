


import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    Text,
    HStack,
    Grid,
    Button,
  } from "@chakra-ui/react";
  import { FaCartArrowDown} from 'react-icons/fa';
  import { FiEdit} from 'react-icons/fi';
  import {  useLocation, useNavigate } from "react-router-dom";
import { IProductType } from "../Utils/types";
  
//   import {   useAppSelector } from "../Redux/store";
  
//   import { Product } from "../utils/type";
  
  export default function ProductCard({
    id, 
  brand,  
  title,  
  image, 
  category, 
  price, 
  }: IProductType) {
    // const isAuth=useAppSelector((store)=>store.AuthReducer.isAuth)
    // const isAuth=useAppSelector()
    const navigate=useNavigate();
  
    const handleEdit=()=>{
  
    //   !isAuth?navigate(`/product-page/${id}/edit`):navigate('/login')
    }
    return (
      <Grid alignItems="center" justifyContent="space-evenly" gap={9} >
        <Box
          bg={useColorModeValue('gray.200', "gray.800")}
          minW="90%"
          gap={9}
          borderWidth="1px"
          shadow="lg"
          rounded={'lg'}
          position="relative"
          h={"440px"}
        >
          <Text
            position="absolute"
            top={5}
            left={0}
            p={"3px"}
            bg={"rgb(113,113,113)"}
            color={useColorModeValue("white", "black")}
            fontSize={"10px"}
          >
            
            {category}
          </Text>
  
          <HStack
            position="absolute"
            top={275}
            left={0}
            p={"1px"}
            pl={2}
            pr={1}
            bg={"rgb(189,189,189)"}
            color={"black"}
            fontSize={"10px"}
          >
            <Text fontSize={"12px"}>{}</Text>
            <Text fontSize={"10px"} color={"lightcoral"}>
              ⭐
            </Text>
          </HStack>
          <Image
            w={"100%"}
            mt={3}
            boxSize={"300px"}
            width={"100%"}
            src={image}
            alt={`Picture of ${title}`}
          />
  
          <Box p={5}>
            <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
              <Text
                fontFamily={"montserrat,sans-serif"}
                fontSize={"14px"}
                fontWeight={600}
                color={useColorModeValue("black", "whtie")}
                textOverflow={"ellipsis"}
                isTruncated
              >
                {brand}
               
              </Text>
            </Flex>
  
            <Flex mt="3" justifyContent="space-between" alignContent="center">
              <Box
                textOverflow={"ellipsis"}
                fontSize="xs"
                fontWeight="semibold"
                as="h5"
                color={useColorModeValue("black", "whtie")}
                lineHeight="tight"
                isTruncated
              >
                 
                 {title}
              </Box>
            </Flex>
  
            <HStack
              justifyContent="left"
              alignContent="flex-end"
              color={"rgb(237,137,54)"}
              fontSize="16px"
              fontWeight={"bold"}
            >
              <Text textDecor={"line-through"} pt={1} fontSize={"11px"}></Text>
            </HStack>
            <Box
              display="flex"
              alignItems="baseline"
              mt={1}
              justifyContent={"space-around"}
            >
              <Button
                variant="solid"
                color={"rgb(237,137,54)"}
                mr={3}
              >
                ₹ {price}
              </Button>
              <Button
                variant="solid"
                color={"rgb(237,137,54)"}
                _hover={{color:useColorModeValue("black", "whtie")}}
                mr={3}
                fontSize={'lg'}
               
              >
                <FaCartArrowDown />
              </Button>
  
              <Button
                variant="solid"
                color={"rgb(237,137,54)"}
                _hover={{ color: "white" }}
                mr={3}
                onClick={handleEdit}
              >
                <FiEdit/>
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  }
