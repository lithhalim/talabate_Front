import AsyncStorage  from '@react-native-async-storage/async-storage';


export const IncreseQuantity=(state:any,action:any)=>{
    //Find index of specific object using findIndex method.    
    state.value=state.value+=1;

    const objIndex = state.allProduct.findIndex(((obj:any) => obj.itemid == action.payload.itemid));
    let newnumber=Number(state.allProduct[objIndex].selectitemquentuty)
    newnumber+=1
    state.allProduct[objIndex].selectitemquentuty =newnumber;


    let SaveUser= async () => {
      await AsyncStorage.setItem("AddToCart",JSON.stringify(state))};
    SaveUser();
}