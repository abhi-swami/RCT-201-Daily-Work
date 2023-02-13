
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import FilterNSort from '../Components/FilterNSort';
import Pagination from '../Components/Pagination';
import ProductCard from '../Components/ProductCard';
import { getProducts } from '../Redux/App/action';
import { useAppDispatch, useAppSelector } from '../Redux/store'
import { useLocation, useSearchParams } from "react-router-dom"


const HomePage = () => {
  const location = useLocation()
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams()
  const products = useAppSelector((store) => store.appReducer.data);
  const [currentPage, setCurrentPage] = useState(1)
  let flag:boolean=false

  const handlePageChange = (param: number) => {
    setCurrentPage(param)
  }
  if(searchParams.get('sort')){
    flag=true
  }


  useEffect(() => {
    if (products.length===0||location) {
      const getProductsParam = {
        params: {
          '_page': currentPage,
          '_limit': 5,
          category:searchParams.getAll('filter') ,
          '_sort':flag?"price":null,
          // '_sort':"price",
          '_order':searchParams?.get('sort'),
        }
      }
      dispatch(getProducts(getProductsParam))
    }
  }, [currentPage,currentPage,location.search])

  return (
    <Box mt={10}>
      <Flex>
        <Box minW={'300px'} position={'fixed'}>
          <FilterNSort currentPage={currentPage}/>
        </Box>
        <Box position={'sticky'} ml={"250px"}>

          <Grid templateColumns={'repeat(3,1fr)'} justifyContent={'space-evenly'} alignItems={'center'} w={'80%'} m={'auto'} position={'-webkit-sticky'} gap={20}>
            {products?.map((el: any) =>
              <GridItem key={el.id}>
                <ProductCard key={el.id} {...el} />
              </GridItem>
            )}
          </Grid>
        </Box>
      </Flex>
      <Pagination currentPage={currentPage} handlePageChange={handlePageChange} />
    </Box>
  )
}

export default HomePage

