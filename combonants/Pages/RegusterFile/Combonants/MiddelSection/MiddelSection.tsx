import React, {  useContext, useState } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import InputFiled from './combonant/InputFiled/InputFiled';
import {Style} from "./Style/style";
import UploadImageButton from './combonant/UploadImage/UploadImageButton';
import { useNavigation } from '@react-navigation/native';
import ButtonNotification from './combonant/ButtonNotification/ButtonNotification';
import { UploadImage_Context } from './combonant/UploadImage/contextApi/UploadImageContext';
import { Authntication_Create_Context } from '../../../../contextApi/Authntication_Context';

import { SignupFetchApi } from '../FetchApiSection/SignupFetchApi';
import { SigninFetchApi } from '../FetchApiSection/SigninFetchApi';


function InputContainer({TypeData,AllDataUse}:any) {
    const Navigation=useNavigation();
    const [StateEmail,setStatusEmail]=useState(false);
    const UploadImages=useContext(UploadImage_Context)?.ImageUploded;
    const AuthnticationContext=useContext(Authntication_Create_Context)

    const [LodingButton,setLoadingButton]=useState(false)


    const getAllData=(data:any)=>{
        setLoadingButton(true);
        if(TypeData=="signin"){
            SigninFetchApi(data,setStatusEmail,Navigation,
                setLoadingButton,AuthnticationContext)

        }else{
            SignupFetchApi(data,setStatusEmail,
                Navigation,UploadImages,
                setLoadingButton)
        }

    }


return (
        <Formik
            initialValues={AllDataUse.initialValues}
            validationSchema={AllDataUse.SignupSchema}
            onSubmit={getAllData}>
            {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                <View style={Style.containerInput}>
                    {AllDataUse.DataUsing.map((DataUse:any,i:number)=>(

                        <InputFiled dataUse={DataUse} key={i} handleBlur={handleBlur}
                                handleChange={handleChange} values={values} 
                                errors={errors} touched={touched} />))}

                        <UploadImageButton TypeData={TypeData}/>

                        <ButtonNotification StateEmail={StateEmail} 
                                handleSubmit={handleSubmit} TypeData={TypeData} 
                                LodingButton={LodingButton}/>
                        
                </View>
            )}
        </Formik>   
  )
}

export default InputContainer

