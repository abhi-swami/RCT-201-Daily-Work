import {useState} from 'react'

interface CountryData {
    onAddCountry: (arg:string) => void,
}



const AddCountry = ({ onAddCountry }: CountryData) => {
    const[data,setData]=useState<string>("")
    const  handleChange=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        const {value}=e.target;
        setData(value)
    }
    
    const handleSubmit=(e:React.FormEvent<HTMLFormElement> ):void=>{
        e.preventDefault();
        onAddCountry(data)
        setData("")
    }
    return (
        <>
        <h3>ADD COUNTRY</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add A New Country" value={data} name="country" onChange={handleChange}/>
            <input type={"submit"} value="ADD COUNTRY"/>
        </form>
        </>

    )
}

export default AddCountry