import { Box, Button, } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../Redux/store'


interface PaginationProps{
    currentPage:number,
    handlePageChange:(paran:number)=>void
}

const Pagination = ({currentPage,handlePageChange}:PaginationProps) => {
    const total:any=useAppSelector((store)=>store.AppReducer.totalPage)
    const totalPage=+total;
    const tp=new Array(Math.ceil(totalPage/3)).fill(0)
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


        <Button onClick={()=>handlePrevNext(+1)} isDisabled={currentPage===Math.ceil(totalPage/3)}>Next</Button>
    </Box>
  )
}

export default Pagination