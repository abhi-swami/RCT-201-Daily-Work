import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { Obj } from "./AddCity";

interface CityCountryTabelProp{
    data:Obj[]
}

const CityCountryTabel = ({data}:CityCountryTabelProp) => {
  return (
    <Box margin={"auto"}>
      <TableContainer margin={"auto"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th>CITY</Th>
              <Th >COUNTRY</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((el:Obj,index:number)=>
            <Tr key={el.id+Date.now()}>
              <Td>{index+1}</Td>
              <Td>{el.city}</Td>
              <Td>{el.country}</Td>
            </Tr>
            )}
          </Tbody>
         
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CityCountryTabel;
