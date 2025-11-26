import React, { useState } from 'react'

const Circle = () => {

  const [circle,setCircle] = useState(false)

  const colorchange =()=>{

    setCircle(!circle)
  }

  const styles ={

    backgroundColor : circle?"yellow":"black",
    color : circle?"black":"white"
  }



  return (
    <>
    <div className='flex flex-col gap-8 p-10 justify-center items-center'>
      {circle? <div className='bg-black text-white rounded-full justify-center text-center items-center w-[200px] h-[200px] p-10'>
             <p className='text-2xl'>OFF</p>
        </div>: <div className='bg-yellow-300 text-black rounded-full justify-center text-center items-center w-[200px] h-[200px] p-10'>
             <p className='text-2xl'>On</p>
        </div>}
      
       
        <div className='flex'>
            <button onClick={colorchange} style={styles} className='bg-amber-400 p-1 w-50 rounded mx-2'>{circle?"On":"Off"}</button>
          
        </div>
    </div>
    </>
  )
}

export default Circle
