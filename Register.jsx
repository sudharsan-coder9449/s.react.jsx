import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
       
     const [formdatas,setFormdatas] = useState ({fullname:"",email:"",Mobile:"",Password:""})
      
     const navication = useNavigate()




    const handlechange = (e)=>{

    

    setFormdatas ({...formdatas,[e.target.name]:e.target.value})

   

    }

     const handleSubmit = (e)=>{
      e.preventDefault()

      const oldData =JSON.parse (localStorage.getItem("users")) || []

      
      oldData.push(formdatas)

      localStorage.setItem("users",JSON.stringify(oldData))

      alert ("successfully saved")

      navication("/login")

      setFormdatas({fullname:"",email:"",Mobile:"",Password:""})


     }

     




  return (
   <>
   <div className='bg-blue-500 p-10 h-100 '>
    <h1 className='text-center text-2xl text-bold '>Register</h1>
       
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-center items-center p-10 rounded">
            <div>
                <label>Enter The Name</label>
        <input type="text" name="fullname" value={formdatas.fullname} onChange={handlechange}  placeholder='Enter The full name'  className='bg-gray-800 mx-6 w-100 text-white p-1 rounded'   />
            </div>
          <div>
        <label>Enter The Email</label>
        <input type="email" name="email" value={formdatas.email} onChange={handlechange} placeholder='Enter the valid email'  className='bg-gray-800 mx-6 w-100 text-white p-1 rounded'   />
            </div>
              <div>
                <label>Enter The Mobile</label>
        <input type="Mobile" name="Mobile" value={formdatas.Mobile} onChange={handlechange} placeholder='Enter the valid Mobile Number' className='bg-gray-800 w-100 mx-6 text-white p-1 rounded'   />
        
        
            </div>
            <div>
                <label>Enter The Password</label>
        <input type="Password" name="Password" value={formdatas.Password} onChange={handlechange} placeholder='Enter the correct Password' className='bg-gray-800 w-100 mx-6 text-white p-1 rounded'   />
            </div>
           
           <div>
            <button type='submit' className="bg-white w-70 p-1 rounded text-black" >Register</button>
           </div>

       </form>
    </div>
    

        
   
   </>
  )
}

export default Register