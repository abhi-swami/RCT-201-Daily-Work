import {Obj} from "./Restaurants"

interface RestaurantCardProp{
  data:Obj;
}

function RestaurantCard({data}:RestaurantCardProp) {
  const { name, image,type,rating,price_starts_from,number_of_votes }=data;

  return (
  <div data-testid="restaurant-card" >
    <img src={image} alt={name}/>
    <h2>{name}</h2>
    <p>{type}</p>
    <p>{price_starts_from}</p>
    <p>{rating}</p>
    <p>{number_of_votes}</p>
  
    </div>
  );
}


export default RestaurantCard;
