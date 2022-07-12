import React from 'react'
import ContactDetails from '../components/ContactDetails'
import FooterDetails from '../components/FooterDetails'
import HeaderDetails from '../components/HeaderDetails'
import HomepageDetails from '../components/HomepageDetails'
import Scroll from '../components/Scroll';

const Homepage = () => {
  return (
    <>
    <Scroll showBelow={250}/>
    <HeaderDetails/> 
    <HomepageDetails/>
    <ContactDetails/>
    <FooterDetails/>

    </>
    
  )
}

export default Homepage