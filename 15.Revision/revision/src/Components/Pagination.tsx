import { Box, Button, } from '@chakra-ui/react'
import { useAppSelector } from '../Redux/store';
import {useSearchParams} from "react-router-dom"
import { useEffect } from 'react';



interface PaginationProps{
    currentPage:number,
    handlePageChange:(paran:number)=>void
}

const Pagination = ({currentPage,handlePageChange}:PaginationProps) => {
    const [searchParams,setSearchParams]=useSearchParams()

    const totalPage = useAppSelector((store) => store.appReducer.totalpages);
    const tp=new Array(totalPage).fill(0)
    const handleClick=(param:number)=>{
        handlePageChange(param)
    }

    const handlePrevNext=(param:number)=>{
        handlePageChange(currentPage+param)
    }
   
    
  return (
    <Box w={"50%"} alignItems={'center'} m={'auto'}>
        <Button isDisabled={currentPage===1} onClick={()=>handlePrevNext(-1)} >Previous</Button>

        {tp.map((el,ind)=><Button key={ind} onClick={()=>handleClick(ind+1)} m={3} colorScheme={currentPage===ind+1?'cyan':'gray'} isDisabled={currentPage===ind+1}>{ind+1}</Button>)}


        <Button onClick={()=>handlePrevNext(+1)} isDisabled={currentPage===totalPage}>Next</Button>
    </Box>
  )
}

export default Pagination