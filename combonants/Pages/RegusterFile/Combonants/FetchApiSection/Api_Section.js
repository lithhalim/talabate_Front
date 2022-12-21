import uuid from 'react-uuid';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import base64 from 'react-native-base64'
import AsyncStorage  from '@react-native-async-storage/async-storage';




export default function PostData_Reguster(
    TypeData,data,setStatusEmail,
    Navigation,UploadImages,setLoadingButton,
    AuthnticationContext){
    
      //-----------------------------------Signup Section -----------------------------------//
      if(TypeData=="signup"){
          data.regusterid=uuid();
          data.image=UploadImages;
          axios.post(`http://192.168.8.101:5000/signup`,data).
          then((DataAccept)=>{
            if(DataAccept.status(200)){
                setLoadingButton(false)
                Navigation.navigate("signin")
            }else {
              setLoadingButton(false)
              setStatusEmail("Email Is Taken")
            }
        }).catch((error)=>{
                setLoadingButton(false)
                setStatusEmail("Problem In Regustration")  
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
            }).then((dataAccept)=>{
                if(dataAccept.status==200){
                        setLoadingButton(false)
                        const decoded = jwt_decode(dataAccept.data.accessToken);
                        let SaveUser= async () => {
                        await AsyncStorage.setItem("saveReguster",JSON.stringify(decoded));
                        };SaveUser();
                        AuthnticationContext.setAllUserData(decoded)

                        Navigation.navigate("Home")
                }else{
                        setLoadingButton(false)
                        setStatusEmail("Wrong Email Or Password")
                }
            }).catch((errors)=>{
                setLoadingButton(false)
                setStatusEmail("Wrong Email Or Password")
        });
        
      }
  }
