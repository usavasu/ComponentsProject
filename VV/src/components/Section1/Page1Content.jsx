import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='bg-blue-200 pb-16 pt-6  flex items-center gap-0 h-[80vh]  px-18'>
        <LeftContent />
        <RightContent users={props.users}  />
    </div>
  )
}

export default Page1Content