import { useEffect } from "react";
import { Checkbox, CheckboxGroup, Box, Stack, Heading, RadioGroup, Radio } from '@chakra-ui/react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

interface filterSortProps {
    currentPage?: number
}

export default function FilterNSort({ currentPage }: filterSortProps) {
    const [searchParams, setSearchParams] = useSearchParams()
    const initialFilterValues = searchParams?.getAll('filter')
    const initialSortValue: any = searchParams.get('sort')


    const [filterValue, setFilterValue] = useState<string[]>(initialFilterValues || []);
    const [sort, setSort] = useState<string>(initialSortValue || '');


    const handleFilterValue = (val: string[]) => {
        setFilterValue(val)
    }
    const handleSort = (val: string) => {
        setSort(val)
    }


    useEffect(() => {
        const param: { page?:string,limit?:string, filter?: string[] , sort?: string  } = {};
        if(currentPage) {
            param.page = String(currentPage)
            param.limit = "5"
            setSearchParams(param)
        }
        if (filterValue.length !== 0) {
            param.filter = filterValue
            setSearchParams(param)
        }
        else if (filterValue.length === 0) {
            setSearchParams(param)
        }
        if (sort.length) {
            param.sort = sort
            setSearchParams(param)
        } else if (sort.length === 0) {
            setSearchParams(param)
        }


    }, [currentPage, filterValue, sort, setSearchParams])



    return (
        <Box ml={10}>
            <Heading size={'lg'} textAlign={'left'} my={3}>Filter</Heading >
            <CheckboxGroup colorScheme='green' value={filterValue} onChange={handleFilterValue}>
                <Stack spacing={[1, 5]} direction={'column'}>

                    <Checkbox value='kids'>Kid's Clothing</Checkbox>
                    <Checkbox value="men">Men's Clothing</Checkbox>
                    <Checkbox value='homedecor'>Home-Decore</Checkbox>
                    <Checkbox value="women">Women's Clothing</Checkbox>
                </Stack>
            </CheckboxGroup>
            <Heading size={'lg'} textAlign={'left'} my={3}>Sort</Heading>
            <RadioGroup defaultValue={initialSortValue} onChange={handleSort}>
                <Stack spacing={5} direction='column'>
                    <Radio colorScheme='green' value='asc' >
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