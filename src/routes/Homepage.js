import React from 'react'
import ContactDetails from '../components/ContactDetails'
import FooterDetails from '../components/FooterDetails'
import HeaderDetails from '../components/HeaderDetails'
import HomepageDetails from '../components/HomepageDetails'


const Homepage = () => {
  return (
    <>
    <HeaderDetails/>
    <HomepageDetails/>
    <ContactDetails/>
    <FooterDetails/>
    </>
  )
}

export default Homepage