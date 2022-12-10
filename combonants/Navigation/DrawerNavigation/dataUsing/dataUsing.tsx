
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import {silver} from "../../../MainColor/MainColor";



import HomePage from '../../../Pages/HomePage/HomePage';
import SignupSection from '../../../Pages/RegusterFile/Signup_File/Signup';
import MainContainerResturantPage from '../../../Pages/ResturantPage/MainContainerResturantPage';
import BasketPage from '../../../Pages/BasketPage/BasketPage';

export const DaraUsing=[
    {name:"Home",path:"Home",icon:<Entypo name="home" size={24} color={silver}/>,componant:HomePage},
    {name:"SignUp",path:"signup",icon:<Ionicons name="person" size={24} color={silver}/>,componant:SignupSection},
    {name:"Basket",path:"Basket",icon:<FontAwesome name="shopping-basket" size={24} color={silver} />,componant:BasketPage},
    {name:"Search",path:"search",icon:<FontAwesome name="search" size={24} color={silver} />,componant:MainContainerResturantPage},
    {name:"About",path:"About",icon:<Ionicons name="md-warning" size={24}  color={silver} />,componant:SignupSection},
    {name:"settings",path:"settings",icon:<Ionicons name="settings" size={24} color={silver} />,componant:SignupSection},

]