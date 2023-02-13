import {useState} from 'react'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { LoginData } from '../Utils/types';
import { useAppDispatch } from '../Redux/store';
import { login } from '../Redux/Auth/action';
import { useLocation, useNavigate } from 'react-router-dom';


const initial:LoginData={
  email:'',
  password:'',

}
export default function Login() {
  const dispatch=useAppDispatch();
  const navigate=useNavigate();
  const [input,setInput]=useState(initial);
  const {email,password}=input;
  
  const handleChange=(e: React.ChangeEvent<HTMLInputElement>):void=>{
    const {name,value}=e.target;
    setInput({...input,[name]:value})
  }
  const location=useLocation();
  
  const handleSubmit=()=>{
    const commingFrom =location?.state?.data||"/"
    dispatch(login(input)).then(()=>{
      navigate(commingFrom,{replace:true})
    })
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' value={email} onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password' value={password} onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              onClick={handleSubmit}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}