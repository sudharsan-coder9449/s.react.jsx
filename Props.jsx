
import React from 'react'
import Child from './child'

const Props = () => {

    const datas = 20
  return (
    <>
    
    <h1>This is datas Parent: {datas}</h1>
    <Child  sendto = {datas}   />
    </>

  )
}

export default Props
