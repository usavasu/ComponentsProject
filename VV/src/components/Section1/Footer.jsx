import React from 'react'
import google from '../../assets/VamsaVruksham_logo.jpg'
const Footer = () => {
  return (
    <div className='flex flex-nowrap bg-blue-100 pt-5'>
      <div className='flex items-center justify-left pt-0 pb-0 py-4 px-18'>
        <h4 className='text-black   px-5 py-2 rounded-full hover:bg-green-300'>About Us</h4>
        <h4 className='text-black   px-5 py-2 rounded-full hover:bg-green-300'>Memories</h4>
        <h4 className='text-black   px-5 py-2 rounded-full hover:bg-green-300'>Famous Family Trees</h4>
        <h4 className='text-black   px-5 py-2 pl-5 rounded-full hover:bg-green-300'>Types of Families</h4>
        <h4 className='text-black   px-5 py-2 pl-5 rounded-full hover:bg-green-300'>Popular Baby Names</h4>
      </div>

      <div className='flex items-center justify-right pt-0 pb-0 py-4 px-8'>
        <h4 className='text-black   px-5 py-2 rounded-full hover:bg-green-300'><img className='h-10 w-10 object-cover px-1 py-1 rounded-full' src='https://static.vecteezy.com/system/resources/previews/020/964/386/original/facebook-circle-icon-for-web-design-free-png.png' /></h4>
        <h4 className='text-black   px-5 py-2 rounded-full hover:bg-green-300'><img className='h-10 w-10 object-cover px-1 py-1 rounded-full' src='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-1024.png' /></h4>
        <h4 className='text-black   px-5 py-2 rounded-full hover:bg-green-300'><img className='h-10 w-10 object-cover px-1 py-1 rounded-full' src='https://tse1.mm.bing.net/th/id/OIP.OulbTWhbK65iFS-rzrQYegHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3' /></h4>
      </div>
    </div>
  )
}

export default Footer