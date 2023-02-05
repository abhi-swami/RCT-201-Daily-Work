import axios from "axios";
import { useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import RestaurantCard from "./RestaurantCard";


export interface Obj {
  id?: number;
  name?: string;
  type?: string;
  rating?: number;
  number_of_votes?: number;
  price_starts_from?: number;
  image?: string
}

interface DataObj {
  data: Obj[];
  totalPages: number;
}

const url: string = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`
function Restaurants() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data,setData]=useState<Obj[]>([]);
  const [page,setPage]=useState<number>(1)
  const [totalPages,setTotalPages]=useState<number>(0)


  const getData = (arg:number): Promise<DataObj> => {
    return axios.get<DataObj>(
      `${url}?limit=10&page=${page}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    ).then(res => (res.data))
  }
  const fetchData = async (arg:number) => {
    setIsLoading(true)
    try {
      const res = await getData(arg)
      // console.log(res)
      setData(res.data);
      setTotalPages(res.totalPages)
      setIsLoading(false)
      
    } catch (err) {
      setIsLoading(false)
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData(page);
  }, [page])

  const handlePage=(val:number):void=>{
    setPage(val)
  }
  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>{/* Restaurant Card */}
      {data.map((el)=>

      <RestaurantCard  key={el.id} data={el}/>
      )}
      </div>
      <div>{/* Pagination Component */}
      <Pagination handlePage={handlePage}  current={page} total={totalPages} />
      </div>
    </div>
  );
}
// function Restaurants() {

//     return <LoadingIndicator />;
//   return (
//     <div>
//       <h1 data-testid="restaurants-header">Restaurants List</h1>
//       <div data-testid="restaurants-container">
//        {/* Restaurant Card */}
//       </div>
//       <div>
//         {/* Pagination Component */}
//       </div>
//     </div>
//   );
// }

export default Restaurants;
