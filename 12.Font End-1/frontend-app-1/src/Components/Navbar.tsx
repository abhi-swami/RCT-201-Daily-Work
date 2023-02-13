
import {
  Box,
  Flex,
  Stack,
  Button,
  IconButton,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { BsSearch } from "react-icons/bs"
import { NavLink, } from "react-router-dom"
import SerachBar from './SearchBar';
const Links = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/add-products',
    text: 'Add Prodcuts'
  },
  {
    to: '/edit-products',
    text: 'Edit'
  },
  {
    to: '/product-page',
    text: 'Product Page'
  },
  {
    to: '/login',
    text: 'Login'
  },
  {
    to: '/cart',
    text: 'Cart'
  },

]



export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Box bg={useColorModeValue('gray.100', "rgb(237,137,54)")} px={4} position={'sticky'} top={0} zIndex={2} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-evenly'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen} />
          {Links.map((el) => (
            <NavLink key={el.text} to={el.to}>{el.text}</NavLink>
          ))}
           <SerachBar/>
          <Button onClick={toggleColorMode} size={"sm"} bgColor={useColorModeValue('gray.700', 'rgb(237,137,4)')} color="white" _hover={{ bgColor: useColorModeValue('gray.700', 'rgb(237,137,4)'), color: "white" }}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((el) => (
                <NavLink key={el.text} to={el.to}>{el.text}</NavLink>
              ))}
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<BsSearch color='gray.300' />}
                />
                <Input type='text' placeholder='Search Here' />
              </InputGroup>
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}


