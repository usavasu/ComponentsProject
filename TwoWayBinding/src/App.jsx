import React, { useState } from 'react'
const App = () => {
  const [title, setTitle] = useState('')
  const formSubmitHandler = (e)=> {
    e.preventDefault()
    console.log('Form submission default behaviour prevented..')
}

  return (
   <div>
        <form name="default" onSubmit={(e) => {
            formSubmitHandler(e)
            setTitle ('')
        }}>
           
            <input type='text' placeholder='Enter your name' value={title} className='bg-red-300' 
            onChange={(e) => {
              console.log('writing... ....')
              console.log(e.target.value)
              setTitle(e.target.value)
            }}></input>cd 
            <button className='pl-6 pt-5 bg-green-300'>Submit</button>
        </form>

    </div>
  )
}

export default App