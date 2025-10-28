import React, { useState } from 'react'
import FormSubmission from './Components/FormSubmission'

const App = () => {
  const [user, setUser] = useState({ userName: 'Sriram', age: 51 })

  const [locArray, setLocArray] = useState([10,20,30])

  const changeName = () => {
    console.log(user.userName)
    const newUser = {...user};
    newUser.userName = 'Savitri'
    newUser.age = 48
    console.log(user.userName)
    setUser(newUser)
    console.log(user.userName)
    console.log(user.age)
    
    setUser(prev =>({...prev, age:50}))
    console.log(user.age)
    
    const newLocArray = [...locArray]
    newLocArray.push(99,98,97,96)
    setLocArray(newLocArray)
    console.log(newLocArray)
    console.log(locArray)


  }
  return (
    <div>
      sdfds
      <button className='bg-red-200 pl-10 pr-10 pt-5 pb-5 rounded-full' onClick={changeName}>Change Name</button>
      <br />User Name = {user.userName}
      <br />User Name = {user.age}

      <FormSubmission/>
    </div>
  )
}
export default App