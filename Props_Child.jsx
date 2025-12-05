
import React from 'react'

const Props_Child = ({userDetails}) => {
   
    
  return (
    <>
    <h1>hi</h1>

    <div>

       {/*  {<h1>{props.sendto}</h1>} */}
        This is a child prop
        
    </div>

    <div>
              <h2>Child Component</h2>

      <p><b>Nam</b> {userDetails.name}</p>
      <p><b>Age:</b> {userDetails.age}</p>
      <p><b>City:</b> {userDetails.city}</p>

    </div>
    </>
  )
}

export default Props_Child
