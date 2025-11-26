import React from 'react'

const Day_8 = () => {
  const fetchdatas = fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  console.log(fetchdatas.products);
  
  return (
    <>
    <h1 className='text-2xl'>Click</h1>
    <button onClick={()=>{alert("Just For Check")}}>Click me </button>
    </>
  )
}

export default Day_8
