import React from 'react'

const App = () => {
      localStorage.setItem("user","Sriram")
       localStorage.setItem("age","51")
      const user = localStorage.getItem("user") 
      const age = localStorage.getItem("age") 
      const userObject ={
        username: 'Sriram',
        age: '51',
        location:'Hyderabad'
      }
      localStorage.setItem('userObject',JSON.stringify(userObject))
      const anotherUserObject = JSON.parse(localStorage.getItem('userObject'))
      console.log(user,age)
      console.log(anotherUserObject)
      //localStorage.clear()
       return (
          <div> 
        </div>
  )
}

export default App