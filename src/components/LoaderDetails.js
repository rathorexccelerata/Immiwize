import React from 'react'
import '../css/loader.css'
import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from 'react'
import HeaderDetails from './HeaderDetails';
import HomepageDetails from './HomepageDetails';
import FooterDetails from './FooterDetails';
const LoaderDetails = () => {
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
  
      }, 1500);
    },[])
  return (
    <>
     <div className='Test'>
    {
        loading?
        <ClipLoader color={'#50E3C2'} loading={loading}  size={100} />
        :
        <>
       <FooterDetails/>
       </>
      }
      </div>
    </>
  )
}

export default LoaderDetails