import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const [dashboardDatas,setDashboardDatas] = useState(null)

  const navication = useNavigate()

  const dashboardvalidation = ()=>{

  const currentcheck = localStorage.getItem(" currentuser")

  if(!currentcheck){
    navication("/login")
  }else{
    setDashboardDatas(JSON.parse(currentcheck))
  }

  }

  useEffect(()=>{

      dashboardvalidation()

  },[])

  const logouthandle = ()=>{
    localStorage.removeItem("currentuser")
     navication("/login")

  }

  return (
    <>    
    <div>
       <h1>Dashboard</h1>  
       
       {dashboardDatas &&
       <>
       <p>Name:{dashboardDatas.fullname}</p>
       <p>Email:{dashboardDatas.email}</p>
       <button className='bg-blue-600 text-white p-1 w-40' onClick={logouthandle}>logout</button>
       </>

       }
    </div>
    </>

  )
}

export default Dashboard
