import React from 'react'
import Card from '../Component/Card'
export default function Dubai() {
  return (
    <div>


<div>
<div
  className="p-5 h-[100vh] w-[100vw] bg-cover bg-center"
  style={{
    backgroundImage:
      'url("https://images.pexels.com/photos/1661375/pexels-photo-1661375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      backgroundSize: 'cover',   
    backgroundPosition: 'center',   
    backgroundRepeat: 'no-repeat',   
  }}
>

  
<div className='flex  text-center justify-center items-center  flex-col h-[80vh] w-[100%]'>
<div className='flex justify-center items-center h-[25vh] flex-col w-[60vh] bg-gray-200 opacity-50'>
  <h1 className='font-bold text-5xl '>sea</h1>
<h1 className=''>The sea been a source of inspiration for cultures worldwide, influencing art, literature, and mythology. Despite its vastness, the sea is increasingly under threat from pollution, overfishing, and climate change, making its conservation more important than ever.</h1>
</div>
</div>
        <div className='flex w-[100%] justify-around  justify-end items-end h-[15vh] ' >
        <Card
   name="Oceans"
   path="/Paris"
   />

   <Card
   name="Mountains"
   path="/Rome"
   /> 

<Card
   name="sea"
   path="/Dubai"
   /> 

<Card
   name="forest"
   path="/Tokyo"
   /> 

<Card
     name="desert"
   path="/NewYork"
   /> 



</div>  
    </div>


</div>

      
    </div>
  )
}
