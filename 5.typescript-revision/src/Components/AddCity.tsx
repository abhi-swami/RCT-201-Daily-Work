import { useState } from 'react'

interface AddCityProps {
    onAdd: (arg:Obj) => void;
    countriesData: string[]

}

export interface Obj {
    id: number;
    city: string;
    country: string;
}
const initialData:Obj={
    id:Date.now(),
    city:"",
    country:""
}
const AddCity = ({ onAdd, countriesData }: AddCityProps) => {
    const [cityCountry,setCityCountry]=useState<Obj>(initialData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLSelectElement>): void => {
        const { name,value } = e.target;
        setCityCountry({...cityCountry,[name]:value})
    }
    // console.log(cityCountry)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        onAdd(cityCountry);
        setCityCountry(initialData)
    }
    const {city}=cityCountry;

    return (
        <div>
            <h3>ADD City</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add A New Country" value={city} name="city" onChange={handleChange} />
                <br />
                <label>
                    Select City
                    <select name="country" onChange={handleChange}>
                        <option value="">Select A City</option>
                        {countriesData.map((el: string) =>
                            <option key={Date.now()+el} value={el}>{el}</option>
                        )}
                    </select>
                </label>
                <br />
                <input type={"submit"} value="ADD COUNTRY" />
            </form>
        </div>
    )
}

export default AddCity