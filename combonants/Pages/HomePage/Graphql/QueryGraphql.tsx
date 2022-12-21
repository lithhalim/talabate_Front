import { gql } from "@apollo/client";


export const  QueryGraphql=gql`
{
  GetResturant(TypeSelect:"DependResturantId"){
    restaurantid,
    restaurantname,
    images,
    categories,
    rate
  }      
}  
`