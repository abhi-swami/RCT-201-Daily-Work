import { InputGroup, InputLeftElement, Input} from '@chakra-ui/react'
import {useState,useEffect,useRef,useContext} from 'react'
import { BsSearch } from 'react-icons/bs'


const SerachBar = () => {
  const [input,setInput]=useState<string>('')
  // const value=useContext(SearchContext);
  let  ref=useRef<any>()

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {value}=e.target;
    setInput(value);
  }
  useEffect(()=>{
    if(input){
    ref.current=setTimeout(()=>{
      // value?.setSearch(input)
    },1000)
    const cleanUp=()=>{
      clearTimeout(ref.current)
    }
    return cleanUp;
  }
  },[input])
  return (
    <div>
        <InputGroup w={'100%'} bgColor={'white'} rounded="lg">
                <InputLeftElement
                  pointerEvents='none'
                  children={<BsSearch color='gray.300' />}
                />
                <Input type='tex' placeholder='Search Here' onChange={handleChange}/>
              </InputGroup>
    </div>
  )
}

export default SerachBar