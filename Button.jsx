import { useState } from "react"


const Button = () => {

    const [count,setcount] = useState(5)


    const data =  10
    const newdata = 12 
    const press =()=>{

        setcount(count+1)

        


        const newdata = data +2
        console.log(newdata);
        
         
        
    }
  return (
    <div style={{justifyContent:"center",alignItems:"center",textAlign:"center",background:"gray",padding:"200px"}}>

<div style={{background:"white",padding:"50px"}}>
        <h1>State ManageMent</h1>

        <h1>{data}</h1>

        <h3>{newdata}</h3>

        <button onClick={press} style={{backgroundColor:"blue",padding:"9px",color:"white",borderRadius:"10px"}}>Click me</button>

        <h2>Variable : {newdata}</h2>

        <h2>Usestate : {count}</h2>

     </div> 
    </div>
  )
}

export default Button
