
import React from 'react'
import Props_Child from './Props_Child'

const Props_Parent = () => {

  const data = 10

  
  const user = {
    name: "Gowtham",
    age: 22,
    city: "Chennai"
  };
  return (
    <>
    <div>
      <h1>{data}</h1>
      This is props killa
      {/* <Props_Child sendto={data}/> */}

      <h2>mella</h2>
    </div>

    <div>

          <h2>Parent Component</h2>

      {/* Sending object as props */}
      <Props_Child userDetails ={user} />


    </div>
    
    </>
  )
}

export default Props_Parent
