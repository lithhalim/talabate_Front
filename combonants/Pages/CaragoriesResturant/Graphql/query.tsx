import { gql } from "@apollo/client"


export const QueryUse=gql`
query ($limit:ID!,$TypeSelect:ID!,$WHEREDATA:ID,$offset:ID!,$filterdata:ID!){
  GetResturant(WHEREDATA:$WHEREDATA,
    TypeSelect:$TypeSelect,
    limit:$limit,
    offset:$offset,filterdata:$filterdata)  {
    restaurantid,
    restaurantname,
    images,
    categories,
    rate
  }      
}
`