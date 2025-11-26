const Nullish_Coalescing =()=>{

    const money = 1000
    const heading = `This is a First Tamil Movie Collection Of ${money}CR`
    let value;
    return(
        <>
       {value??<section style={{backgroundColor:"black",color:"white",padding:"50px",width:"500px",alignItems:"center",justifyContent:"center",textAlign:"center",marginLeft:"200px",marginTop:"4px"}}>
        <h3>{heading}</h3>
        </section>}
        </>
    )
}

export default Nullish_Coalescing 