import axios from 'axios';
import jwt_decode from "jwt-decode";
import base64 from 'react-native-base64'
import AsyncStorage  from '@react-native-async-storage/async-storage';




 const SigninFetchApi=async(
    data:any,
    setStatusEmail:any,
    Navigation:any,
    setLoadingButton:any,
    AuthnticationContext:any)=>{
              
    //Get email And Pass And Decoded `BASIC 5464d5s45d454s55dsdsadsa` And Send In Header
            const {email,password} =data;
            const decoded=base64.encode(`${email}:${password}`);   
            
            try{
              let Datarecive=await axios.post(`http://192.168.8.101:5000/signin`,{
                headers:{ 
                'Content-Type': 'application/json' ,
                'Accept': 'application/json',
                "authorization":`BASIC ${decoded}` }})

              if(Datarecive.data?.status=="User Has Reguster"){
                        setLoadingButton(false)
                        const decoded = jwt_decode(Datarecive.data.accessToken);
                        AuthnticationContext.setAllUserData(decoded);

                        await AsyncStorage.setItem("saveReguster",JSON.stringify(decoded));

                        Navigation.navigate("Home")
                }else{
                        setLoadingButton(false)
                        setStatusEmail("Wrong Email Or Password")
                }
            }catch(error){
              setLoadingButton(false)
              setStatusEmail("Email Or Password Wrong")
            }        
    
  
 }


  export{
    SigninFetchApi
  }
