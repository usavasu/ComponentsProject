import React from 'react'

const FormSubmission = () => {

const formSubmitHandler = (e)=> {
    e.preventDefault()
    console.log('Form submission default behaviour prevented..')
}

  return (
     
    <div>
        <form name="default" onSubmit={(e) => {
            formSubmitHandler(e)
        }}>
           
            <input type='text' placeholder='Enter your name' className='bg-red-300'></input>
            <button className='pl-6 pt-5 bg-green-300'>Submit</button>
        </form>

    </div>
  )
}

export default FormSubmission