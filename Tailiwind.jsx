import { useState } from "react"

const Taliwind =()=>{
    const [state,setstate]= useState(0)
    const clk = ()=>{

        setstate(state+1)

        if(state==10){
            setstate(0)
        }

        
    }
    return(
        <>
        <div className="bg-blue-600  h-100 flex justify-center items-center   ">
            <div className="bg-white text-black p-10 rounded text-center">
            <h1>This is count</h1>
            <h2>{state}</h2>
            <button onClick={clk} className="bg-black p-1 rounded mt-2 text-white ">Click Me</button>
            </div>
        </div>
        </>
    )
}
export default Taliwind