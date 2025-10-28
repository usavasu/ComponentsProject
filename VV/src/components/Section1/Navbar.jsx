import React from 'react'
import familyTreeImage from '../../assets/VamsaVruksham_logo.jpg'
import sriram from '../../assets/Sriram.jpg'
const Navbar = () => {
  return (
    <div className='flex flex-nowrap bg-blue-100'>
      <div className='flex items-center justify-left pt-0 pb-0 py-4 px-18'>
        <img className='border-1 h-20 w-30 object-cover px-1 py-1 rounded-full' src={familyTreeImage} alt="Family Tree" />
        <h4 className='text-black font-bold rounded-full px-1 pr-28'  >Vamsa Vruksham.in</h4>
        <h4 className='text-black font-bold uppercase px-5 py-2 rounded-full hover:bg-green-300'>Family Tree</h4>
        <h4 className='text-black font-bold uppercase px-5 py-2 rounded-full hover:bg-green-300'>Memories</h4>
        <h4 className='text-black font-bold uppercase px-5 py-2 rounded-full hover:bg-green-300'>Add a member</h4>
        <h4 className='bg-green-300 text-black font-bold uppercase px-5 py-2 pl-5 rounded-full '>
          <input type='text' className='outline-none' placeholder='     Search family member'
          onChange={function (elem) {
            console.log('User is typing....',elem.target.value )
          }}
          onDoubleClick={function (elem){
            alert('User double clicked...')
          }}
          />
        </h4>
      </div>
      <div className='flex items-right justify-right py-4 px-20'>
        <button className='bg-gray-200 font-bold px-2 py-2  rounded-full tracking-widest text-sm border-1'>Sign-in</button>
        <h4 className='pl-2'></h4>
        <button className='bg-gray-200 font-bold px-2 py-2 pl-3 rounded-full tracking-widest text-sm border-1'>Sign-up</button>
        <div className='bt-6 pl-3 pt-1 '>< i className="ri-notification-2-line" ></i></div>
        <div className='bt-6 pl-3 pt-1'><img className='border-1 h-10 w-10 object-cover px-1 py-1 rounded-full' src={sriram} /></div>
      </div>
    </div>
  )
}

export default Navbar