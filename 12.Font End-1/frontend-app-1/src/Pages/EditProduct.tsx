import { useEffect, useState } from 'react'
import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  FormControl,
  FormLabel,
  Input,

} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../Redux/store';
import { Product, SingleProduct } from '../utils/type';

export default function EditProduct() {
  const { productId } = useParams();
  const data = useAppSelector((state) => state.AppReducer.data)
  const [product, setProduct] = useState<Product>()
  const [update, setUpdate] = useState<any>({});

  console.log(update)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }:{name:string|[string],value:string} = e.target;
    setUpdate({...update,[name]:value})
  }



  const handleUpdate = () => {

  }
  useEffect(() => {
    if (productId) {
      const current = data.find(item => item.id === Number(productId))
      if (current) {
        setProduct(current)
        setUpdate(current)
      }
    }
  }, [productId, data])


  return (
    <>
      <Flex justifyContent={'space-evenly'} >
        {product &&
          <SimpleGrid
            columns={{ base: 1, lg: 1 }}
            spacing={{ base: 8, md: 10 }}
            p={{ base: 18, md: 20 }}
          >
            <Flex ml={'2rem'}>
              <Image
                rounded={'md'}
                alt={'product image'}
                src={product.image}
                fit={'cover'}
                align={'center'}
                w={'70%'}
                h={{ base: '100%', sm: '400px', lg: '400px' }}
                m={'auto'}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 6 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                  {product.category}
                </Heading>
                <Text
                  // color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={'2xl'}>
                  $3{product.price} USD
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={
                  <StackDivider
                  // borderColor={useColorModeValue('gray.200', 'gray.600')}
                  />
                }>
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    // color={useColorModeValue('gray.500', 'gray.400')}
                    fontSize={'2xl'}
                    fontWeight={'300'}>
                    {product?.title}
                  </Text>
                  <Text fontSize={'lg'}>
                    {product.description}
                  </Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    // color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Features
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <ListItem>Chronograph</ListItem>
                      <ListItem>Master Chronometer Certified</ListItem>{' '}
                      <ListItem>Tachymeter</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>Anti‑magnetic</ListItem>
                      <ListItem>Chronometer</ListItem>
                      <ListItem>Small seconds</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    // color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Product Details
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Between lugs:
                      </Text>{' '}
                      20 mm
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Bracelet:
                      </Text>{' '}
                      leather strap
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Case:
                      </Text>{' '}
                      Steel
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Case diameter:
                      </Text>{' '}
                      42 mm
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Dial color:
                      </Text>{' '}
                      Black
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Crystal:
                      </Text>{' '}
                      Domed, scratch‑resistant sapphire crystal with anti‑reflective
                      treatment inside
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Water resistance:
                      </Text>{' '}
                      5 bar (50 metres / 167 feet){' '}
                    </ListItem>
                  </List>
                </Box>
              </Stack>


              <Stack direction="row" alignItems="center" justifyContent={'center'}>
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        }
        {product &&
          <Box minW={'640px'} >
            <Flex
              minH={'100vh'}
              align={'normal'}
              justify={'center'}
            // bg={useColorModeValue('gray.50', 'gray.800')}
            >
              <Stack spacing={8} mx={'auto'} minW={'lg'} py={12} px={6}>
                <Heading fontSize={'4xl'}>Edit your product</Heading>
                <Box
                  rounded={'lg'}
                  // bg={useColorModeValue('white', 'gray.700')}
                  boxShadow={'lg'}
                  p={8}>
                  <Stack spacing={4}>
                    <FormControl id="title">
                      <FormLabel>Title</FormLabel>
                      <Input type="text" name='title' value={update?.title} onChange={handleChange} />
                    </FormControl>
                    <FormControl id="price">
                      <FormLabel>Price</FormLabel>
                      <Input type="number" name='price' value={update?.price} onChange={handleChange} />
                    </FormControl>
                    <FormControl id="description">
                      <FormLabel>Description</FormLabel>
                      <Input type="text" name='description' value={update?.description} onChange={handleChange} />
                    </FormControl>
                    <FormControl id="category">
                      <FormLabel>Category</FormLabel>
                      <Input type="text" name='category' value={update?.category} onChange={handleChange} />
                    </FormControl>
                    <FormControl id="image">
                      <FormLabel>Image</FormLabel>
                      <Input type="text" name='image' value={update?.image} onChange={handleChange} />
                    </FormControl>

                    <Stack spacing={10}>

                      <Button
                        onClick={handleUpdate}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                          bg: 'blue.500',
                        }}>
                        Update
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </Box>
        }
      </Flex>

    </>
  );
}