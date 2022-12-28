import React from 'react'
import '../Formm/Form.scss'
import axios from 'axios';
import {Helmet} from "react-helmet";
import toast from 'react-hot-toast'

import { Field, Form, Formik, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

 const Example = () => (
  <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Form</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<div className='form_body'>
     <h1>My Form</h1>
     <Formik
       initialValues={{ 
        title: '', 
        description: '',
        accept:false,
        catagories:'',
        
    }}
    validationSchema={Yup.object({
    title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    catagories:Yup.string().required("Choose Catagories")
      })}
      onSubmit ={values =>{

        axios
        .post('http://localhost:3000/products',values)
        .then((res)=>{
            console.log(res.data);
            console.log(values);
            toast.success('Successfully added!')
        })
        localStorage.setItem('dataKey',(JSON.stringify(values, null, 2)));
    }}
     >
       {({values}) => (
         <Form>
            <Field placeholder='Title' className='inp' name='title'></Field><br />
            {/* <ErrorMessage  className='error' name="title" /> */}
            <ErrorMessage name="title">{(msg) => <div style={{ color: "red", textAlign: "left" }}>{msg}</div>}</ErrorMessage>

            <Field placeholder='Description' className='inp' name='description'/><br />
            {/* <ErrorMessage name="description" /> */}
            <ErrorMessage name="description">{(msg) => <div style={{ color: "red", textAlign: "left" }}>{msg}</div>}</ErrorMessage>

            <Field className="catagories" component = 'select' name ='catagories'>
                <option value="" disabled>Choose Catagory</option>
                <option value="Model S">Model S</option>
                <option value="Model 3">Model 3</option>
                <option value="Model X">Model X</option>
                <option value="Model Y">Model Y</option>
            </Field><br />
            <ErrorMessage name="catagories">{(msg) => <div style={{ color: "red", textAlign: "left" }}>{msg}</div>}</ErrorMessage>
            <label className='accept'>
                <Field name= 'accept' type = 'checkbox'/>
                accept!
            <button disabled={!values.accept}  type='submit' >Submit</button>
            </label>
            
            
         </Form>
       )} 
     </Formik>
   </div>
  
  </>
   
 );

export default Example