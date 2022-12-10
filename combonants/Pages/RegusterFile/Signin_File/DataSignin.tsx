import * as Yup from 'yup';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


let DataUsing=[
    {name:"email",icon:<Ionicons name="mail" size={24} color="silver" style={{marginLeft:5}} />,placeholder:"Email",secure:false},
    {name:"password",icon:<FontAwesome name="lock" size={26} color="silver" style={{marginLeft:5}} />    ,placeholder:"Password",secure:true},
]


const initialValues={
    email: '',
    password:'',
  }

//you schema style validation 
const SignupSchema = Yup.object().shape({
    email:Yup
      .string()      
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

