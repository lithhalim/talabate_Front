import { gql } from "@apollo/client"

export const QueryData=(restaurantid:any)=>{
    let ResturantType=gql`
    {
      GetResturant(TypeSelect:"DependResturantId",restaurantid:${restaurantid}){
        categories,
        restaurantid,
        images,
        restaurantname,
        rate,
        freedelivery,
        allitems{
          price,
          itemid,
          description,
          productname,
          quantity,
          images,
          selectitemquentuty,
          resturantselect
        }
        
      }
    }      `
  
    return ResturantType
}