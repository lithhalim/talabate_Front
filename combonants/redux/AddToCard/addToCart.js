import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage  from '@react-native-async-storage/async-storage';


const initialState = {
  value: 0,
  allProduct:[]

}



export const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {


    //--------------------------------- Add To Cart --------------------------------------------//
    increasequantity:(state,action)=>{
      state.value=state.value+=1;

      //Get The Index Of The Product Add
      const objIndex = state.allProduct.findIndex((obj => obj.itemid == action.payload.itemid));

      //If The Product Not On Cart
      if(objIndex==-1){
        state.allProduct=[...state.allProduct,action.payload];
      }else{

      // If The Product On The Cart
        let newnumber=Number(state.allProduct[objIndex].selectitemquentuty)
        newnumber+=1
        state.allProduct[objIndex].selectitemquentuty =newnumber;  
      }

      //Save The Data In The Local Storage
      let SaveUser= async () => {
        await AsyncStorage.setItem("AddToCart",JSON.stringify(state))};
      SaveUser();
      },


    //------------------------------Remove From Cart -------------------------------------------//

    decreasequantity:(state,action)=>{
        state.value=state.value-=1;

        //Check All The Product 
        const objIndex = state.allProduct.findIndex((obj => obj.itemid == action.payload.itemid));


        //If The Product Quantity 1 Remove From Cart
        if(state.allProduct[objIndex].selectitemquentuty==1){
          state.allProduct=state.allProduct.filter((data,i)=>(data.itemid!=action.payload.itemid))
        }else{
          let newnumber=Number(state.allProduct[objIndex].selectitemquentuty)
          newnumber-=1
          state.allProduct[objIndex].selectitemquentuty =newnumber;  
        }
        

        let SaveUser= async () => {
          await AsyncStorage.setItem("AddToCart",JSON.stringify(state))};
        SaveUser();
  
      }
  },
})

// Action creators are generated for each case reducer function
export const {  increasequantity,decreasequantity } = addToCartSlice.actions

export default addToCartSlice.reducer

