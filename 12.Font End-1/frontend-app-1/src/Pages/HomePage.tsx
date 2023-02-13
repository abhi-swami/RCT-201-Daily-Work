import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { useEffect,useState,useContext } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import FilterNSort from '../Components/FilterNSort';
import Pagination from '../Components/Pagination';
import ProductCard from '../Components/ProductCard';
import { SearchContext } from '../Context/SearchContextProvider';
import { getPrdoucts } from '../Redux/App/app.action';
import { useAppDispatch, useAppSelector } from '../Redux/store'

const HomePage = () => {
  const location=useLocation();
  const [searchParams]=useSearchParams();
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.AppReducer.data);
  const [currentPage,setCurrentPage]=useState<number>(1)
  const value=useContext(SearchContext);


  const handlePageChange=(val:number):void=>{
    setCurrentPage(val)
  }

  useEffect(() => {
    if (products.length === 0||location) {
      const getProductsParam={
        params:{
          category:searchParams.getAll('filter'),
          '_page':currentPage,
          '_limit':5,
          q:value?.search

        }
      }
      dispatch(getPrdoucts(getProductsParam));
    }
  }, [location.search,currentPage,value?.search])

  return (
    <Box mt={10}>
      <Flex>
        <Box minW={'300px'} position={'fixed'}>
          <FilterNSort />
        </Box>
        <Box position={'sticky'} ml={"250px"}>

          <Grid templateColumns={'repeat(3,1fr)'} justifyContent={'space-evenly'} alignItems={'center'} w={'80%'} m={'auto'} position={'-webkit-sticky'} gap={20}>
            {products?.map((el) =>
              <GridItem key={el.id}>
                <ProductCard key={el.id} {...el} />
              </GridItem>
            )}
          </Grid>
        </Box>
      </Flex>
      <Pagination currentPage={currentPage}  handlePageChange={handlePageChange}/>
    </Box>
  )
}

export default HomePage