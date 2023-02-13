import React from 'react'
import { createContext,useState } from 'react'

type TSearchval={
  search:string,
  setSearch:React.Dispatch<React.SetStateAction<string>>;
  handleSearch?:()=>void;
}


export const SearchContext=createContext<null|TSearchval>(null);

const SearchContextProvider = ({children}:{children:JSX.Element}) => {
  const [search,setSearch]=useState<string>('');

  return (
    <SearchContext.Provider value={{search,setSearch}}>{children}</SearchContext.Provider>
  )
}

export default SearchContextProvider;