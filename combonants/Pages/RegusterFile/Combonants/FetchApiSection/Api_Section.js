import uuid from 'react-uuid';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import base64 from 'react-native-base64'
import AsyncStorage  from '@react-native-async-storage/async-storage';




export default function PostData_Reguster(
    TypeData,data,setStatusEmail,
    Navigation,UploadImages,setLoadingButton){
    
  
      //-----------------------------------Signup Section -----------------------------------//
      if(TypeData=="signup"){
          data.regusterid=uuid();
          data.image=UploadImages;
          axios.post(`http://192.168.8.101:5000/signup`,data).
          then((x)=>{
            if(x.data.status=="Email Is ok"){
                setLoadingButton(false)
                Navigation.navigate("signin")
            }else if(x.data.status=="Email Is Taken"){
              setLoadingButton(false)
              setStatusEmail("Email Is Taken")
            }
        })  
      }
      //-------------------------------Sign in Section -------------------------------------//
      else if("signin"){
            //Get email And Pass And Decoded `BASIC 5464d5s45d454s55dsdsadsa` And Send In Header
            const {email,password} =data;
            const decoded=base64.encode(`${email}:${password}`);         
        
            //Send In Header Becuse More Secure And In Get And Post Have Header put Get Dont Have Body
            axios.post(`http://192.168.8.101:5000/signin`,{
                    headers:{ 
                    'Content-Type': 'application/json' ,
                    'Accept': 'application/json',
                    "authorization":`BASIC ${decoded}` }
            }).then((x)=>{
            //send the accsess Token To User To Useit
            if(x.data.accessToken==="Error Email Or Password"){
                    setLoadingButton(false)
                    setStatusEmail("Wrong Email Or Password")
            }else{
                    setLoadingButton(false)
                    const decoded = jwt_decode(x.data.accessToken);     
                    let SaveUser= async () => {
                        await AsyncStorage.setItem("saveReguster",JSON.stringify(decoded));
                     };
                     SaveUser();
                                                                          
                    setStatusEmail(false);
                    Navigation.navigate("Home")
            }
            }).catch((errors)=>{
                    //if The Email Or The Password ARE WRONG
                    setStatusEmail("Wrong Email Or Password")
            });
        
      }
  }
