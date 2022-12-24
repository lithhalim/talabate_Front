import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage  from '@react-native-async-storage/async-storage';


const initialState = {
  value: 0,
  allFavorate:[]
}


export const AddFavorate = createSlice({
  name: 'addFavorate',
  initialState,
  reducers: {
    addFavorate:(state,actions)=>{
      state.value=state.value+=1;
      state.allFavorate=[...state.allFavorate,actions.payload];
     const Save= async ()=>{
        //Save The Data In The Local Storage
        await AsyncStorage.setItem("AddFavorate",JSON.stringify(state));
      };Save();
  
    },
    removeFavorate:(state,actions)=>{
      state.value=state.value-=1;
      state.allFavorate=state.allFavorate.filter((data)=>(data!==actions.payload));
     const save= async()=>{
        //Save The Data In The Local Storage
        await AsyncStorage.setItem("AddFavorate",JSON.stringify(state));
      };save();
  
    },
    SaveFavorate:(state,actions)=>{
      state.value=actions.payload.value;
      state.allFavorate=actions.payload.allFavorate;
    }

      
  },
})

// Action creators are generated for each case reducer function
export const { addFavorate,removeFavorate,SaveFavorate } = AddFavorate.actions

export default AddFavorate.reducer

