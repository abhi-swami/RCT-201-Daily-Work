import {useEffect} from "react";
import { Checkbox, CheckboxGroup, Box, Stack, Heading, RadioGroup, Radio } from '@chakra-ui/react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function FilterNSort() {
    const [searchParams,setSearchParams]=useSearchParams()
    const initialFilterValues=searchParams.getAll('filter');

    const [filterValue,setFilterValue]=useState<string[]>(initialFilterValues||[]);
 

    const handleFilterValue=(val:string[])=>{
        setFilterValue(val)
    }

    useEffect(() => {
        let params:{filter?:string[]}={}
        if(filterValue.length){
            params.filter=filterValue;
            setSearchParams(params)
        }
    }, [filterValue,setSearchParams])
    
    return (
        <Box ml={10}>
            <Heading size={'lg'} textAlign={'left'} my={3}>Filter</Heading >
            <CheckboxGroup colorScheme='green' value={filterValue} onChange={handleFilterValue}>
                <Stack spacing={[1, 5]} direction={'column'}>
                    <Checkbox value='bags'>Bags</Checkbox>
                    <Checkbox value='jewelery'>Jewelery</Checkbox>
                    <Checkbox value='electronics'>Electronics</Checkbox>
                    <Checkbox value="men's clothing">Men's Clothing</Checkbox>
                    <Checkbox value="women's clothing">Women's Clothing</Checkbox>
                </Stack>
            </CheckboxGroup>
            <Heading size={'lg'} textAlign={'left'} my={3}>Sort</Heading>
            <RadioGroup defaultValue='2'>
                <Stack spacing={5} direction='column'>
                    <Radio colorScheme='green' value='asc'>
                        Low To High
                    </Radio>
                    <Radio colorScheme='green' value='desc'>
                        High To Low
                    </Radio>
                </Stack>
            </RadioGroup>

        </Box >
    )
}