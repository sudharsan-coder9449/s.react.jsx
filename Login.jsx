import React, { useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

const Login = () => {

    const [loginDatas,setloginDatas] = useState ({email:"",Password:""})
     
    const navication = useNavigate()

    const loginhandlechange = ()=>{

      setloginDatas ({...loginDatas,[e.target.name]:e.target.value})

    }

    const loginhandleSubmit = (e)=>{

      e.preventDefault()

      const userdatas = JSON.parse(localStorage.getItem("users"))

      const finding = userdatas.find((x)=>x.email === loginDatas.email && x.Password === loginDatas.Password)
     
     // console.log(finding);

     if (finding){
      
      localStorage.getItem("currentusers",JSON.stringify(finding))

      navication("/dashboard")

       setloginDatas({email:"",Password:""})

     }else{
      alert("your not valid user use correct username")
     }
      

    }


  return (
   <>
   <div className='bg-blue-500 p-10 h-100 '>
    <h1 className='text-center text-2xl text-bold '>Login</h1>
       
        <form onSubmit={loginhandleSubmit} className="flex flex-col gap-3 justify-center items-center p-10 rounded">
          
          <div>
        <label>Enter The Email</label>
        <input type="email" name="email" value={loginDatas.email} onChange={loginhandlechange} placeholder='Enter the valid email'  className='bg-gray-800 mx-6 w-100 text-white p-1 rounded'   />
            </div>
             
            <div>
                <label>Enter The Password</label>
        <input type="Password" name="Password" value={loginDatas.Password} onChange={loginhandlechange} placeholder='Enter the correct Password' className='bg-gray-800 w-100 mx-6 text-white p-1 rounded'   />
            </div>
           
           <div>
            <button type='submit' className="bg-white w-70 p-1 rounded text-black" >Login</button>
           </div>

       </form>
    </div>
   </>
  )
}

export default Login