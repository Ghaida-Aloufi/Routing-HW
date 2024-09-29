import React from 'react'
import { Link } from 'react-router-dom';
function Card(props) {
  return (

    <div className='flex '>
    <div className='w-[39vh] h-[20vh] bg-white flex justify-center items-center opacity-50 hover:opacity-100'>
  <h1 className="text-black text-3xl font-[Fraunces] "><Link to={props.path}>{props.name}</Link></h1>
</div>
</div>
  )
}

export default Card
