import React, { useEffect, useState } from 'react'
import '../pages/Home.scss'
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import axios from 'axios';

const Home = () => {
const [data,setData] = useState([])
const [loading,setLoading] = useState(true)
// const {name} = useParams();
useEffect(()=>{
 axios
 .get('http://localhost:3000/products')
 .then(res=>{
  setData(res.data)
  setLoading(false)
 })
},[])
  return (
    <> 
    <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    {
      loading?(<div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>):(<div className='cards'>
     {data.map((item)=>{
      return(
        <Link key={item.id}  to={`/products/${item.id}`}>
        <div className='card'>
        <div className='card_top'>
 
        <img src='https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD'/>
        </div>
        <div className='card_bottom'>
          <p><span>Title:</span> <span>{item.title}</span></p>
         <p> <span>Description:</span> <span>{item.description}</span></p>
          <p><span>Catagories:</span> <span>{item.catagories}</span></p>
        </div>
      </div>
        </Link>
      )
     })}
     
      
    </div>)
    }
      
    </>
    
  )
}

export default Home
