import uuid from 'react-uuid';
import axios from 'axios';



 const SignupFetchApi=async(data:any,
        setStatusEmail:any,
        Navigation:any,
        UploadImages:any,
        setLoadingButton:any)=>{

          try{
            data.regusterid=uuid();
            data.image=UploadImages;
            let datause=await axios.post(`http://192.168.8.101:5000/signup`,data);
            if(datause.data.status=="Email Has Been Reguster"){
              setLoadingButton(false)
              Navigation.navigate("signin")
            }else{
              setLoadingButton(false)
              setStatusEmail("Email Is Taken")
            }  
          }
          catch(error:any){
            setLoadingButton(false)
            setStatusEmail(error)  
          }  
  }



  export{
    SignupFetchApi
  }


