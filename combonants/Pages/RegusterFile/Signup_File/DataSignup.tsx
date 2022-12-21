

import * as Yup from 'yup';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 



let DataUsing=[
    {name:"fullName",icon:<Ionicons name="person" size={24} color="silver"style={{marginLeft:5}}  />,placeholder:"Full Name",secure:false},
    {name:"email",icon:<Ionicons name="mail" size={24} color="silver" style={{marginLeft:5}} />,placeholder:"Email",secure:false},
    {name:"password",icon:<FontAwesome name="lock" size={24} color="silver" style={{marginLeft:5}} />,placeholder:"Password",secure:true},
    {name:"country",icon:<Ionicons name="earth" size={22} color="silver"  style={{marginLeft:5}}/>,placeholder:"Country",secure:false},
]


const initialValues={
    fullName: '',
    email: '',
    password:'',
    country:""
  }

//you schema style validation 
const SignupSchema = Yup.object().shape({
    fullName:Yup
      .string()      
      .required("Full Name is required").min(3),
    email:Yup
      .string() 
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"example@yahoo.com")
      .required("Mail is required"),
    password: Yup.string()
       .label('Password')
       .required().min(3),
     });
  
  
     export const  AllDataUse={
      SignupSchema ,
      initialValues ,
      DataUsing 
     }
  


