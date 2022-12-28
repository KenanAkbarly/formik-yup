// import React from 'react'
import { Link,useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
// import {Toaster} from 'react-hot-toast'
import '../Details/Detail.scss'
import {Helmet} from "react-helmet";
const Detail = () => {
    const {id} = useParams()
    console.log(id);
    const [data,setData] = useState({})
    useEffect(()=>{
        axios
        .get(`http://localhost:3000/products/${id}`)
        .then(res=>{
            setData(res.data)
        })
        console.log(data);
    })
    function deleteBtn(){
        axios.delete(`http://localhost:3000/products/${id}`).then()
        toast.success('Successfully deleted!')
    }
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Deteil</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="details">
     <div className='card'>
        <div className='card_top'>
 
        <img src='https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD'/>
        </div>
        <div className='card_bottom'>
          <p><span>Title:</span> <span>{data.title}</span></p>
         <p> <span>Description:</span> <span>{data.description}</span></p>
          <p><span>Catagories:</span> <span>{data.catagories}</span></p>
        <Link to='/' onClick={()=>deleteBtn()}><button >Delete</button></Link>
        </div>
      </div>
 
      
    </div>
    </>
  )
}

export default Detail
