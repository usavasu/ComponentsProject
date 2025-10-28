import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'
import Footer from './Footer'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full '>
        <Navbar />
        <Page1Content users={props.users} />
        <Footer />
    </div>
  )
}

export default Section1