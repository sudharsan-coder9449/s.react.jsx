import banner from '../assets/images/b.jpg'
const Crew =()=>{

    const movieyear = 2000
const para = `this movie year is ${movieyear}  means conditional based redenring when your condition is true its show something on your scren when your condition is false its show something on your sfalse`

    
    const datas = {name:"yash",role:"rocky",director:"prasanthneel"}
    const on = true 
    const off = ""
    return (
        <>

        <div>{datas.role}</div>
        <img style={{width:"700px"}} src={banner} alt="" />

        {on?<section style={{backgroundColor:"black",color:"white",padding:"50px",width:"500px",alignItems:"center",justifyContent:"center",textAlign:"center",marginLeft:"200px"}}>

            <h3>{para}</h3>
        </section>:"this is a wrong statement"}

        
        {off && <section style={{backgroundColor:"black",color:"white",padding:"50px",width:"500px",alignItems:"center",justifyContent:"center",textAlign:"center",marginLeft:"200px", marginTop:"3px"}}>

            <h3>{para}</h3>
        </section>}
        </>



    )
}

export default Crew 