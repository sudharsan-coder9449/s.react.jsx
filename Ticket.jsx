import one from '../assets/images/a.jpg'
import two from '../assets/images/b.jpg'
import three from '../assets/images/c.jpg'

const Ticket =  ()=>{

    const movieinformation = [{movie:'Kgf Chapter 2',img:one},{movie:"bahubali 2",img:two},{movie:"Kanthara",img:three}]
    return (
        <>
        
        <div className='parent'>

            {movieinformation.map((e,i)=>(
                <div className='mapparent'>

                    <div className='mapimg'>
                        <img src={e.img} alt="" />
                    </div>

                    <div className='mapchild'>
                        <h1>MovieName :{e.movie} </h1>

                        <p>this is bolckbaster</p>
                        
                    </div>

                </div>
            ))}

        </div>
        </>
    )
}

export default Ticket