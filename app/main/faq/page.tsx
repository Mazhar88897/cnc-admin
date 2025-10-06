import Heading from '@/components/screens/customHeading'
import Faq from '@/components/screens/faq'
import Qouatation from '@/components/screens/Qouatation'
import React from 'react'

const page = () => {
  return (
    <div className='my-12'>
      <Heading  
          color="black"
          heading1="Frequently "
          heading2="Asked Questions"
          subheading="Some of the most common questions users 
may ask all in one place."
        />
        <div className='mt-10'>
      <Faq />
      </div>
    </div>
  )
}

export default page