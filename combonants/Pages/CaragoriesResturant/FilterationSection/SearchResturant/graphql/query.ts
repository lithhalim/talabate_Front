import { gql } from "@apollo/client";

export const datause=gql`
query($restaurantname:ID!){
    SearchResturant(restaurantname:$restaurantname){
        restaurantid
        restaurantname
   }
 }
`
