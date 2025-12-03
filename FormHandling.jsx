
import React, { useState } from 'react'

const FormHandling = () => {
const [text,setText] = useState("")
const [divite,setDivite] = useState(0)
 const takedata = (t)=>{

    //console.log('Enent Object',t.target.value);
     

 const newdatas = t.target.value   
 const changedats = Number(newdatas)

 

setText(changedats+2)
setDivite(changedats+2)

if(changedats%2===0) setText("Even");

 else return setText( "odd");
    

 }


  return (
    <>
    <div className='bg-green-500 text-white p-10 h-100 flex justify-center items-center'>
        <div className='bg-white text-black p-20 rounded'>
        <form>
        <label>Enter The Name</label>
        <input type="text" onChange={takedata} placeholder='Enter The full name'  className='bg-gray-800 mx-6 text-white p-1 rounded'   />
       </form>

       <div>
        <h1>
          Input Text  {text} <br />
          Divite values {divite}
        </h1>
       </div>
        </div>
    </div>
       
    </>
  )
}

export default FormHandling
