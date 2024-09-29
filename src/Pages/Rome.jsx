import React from 'react'
import Card from '../Component/Card'

function Rome() {
  return (


<div>



<div>
<div
  className="p-5 h-[100vh] w-[100vw] bg-cover bg-center"
  style={{
    backgroundImage:
      'url("https://images-prod.misbar.com/articlebody/investigation_llwajhs69.jpg")',
      backgroundSize: 'cover',   
    backgroundPosition: 'center',   
    backgroundRepeat: 'no-repeat',   
  }}
>

  
<div className='flex  text-center justify-center items-center  flex-col h-[80vh] w-[100%]'>
<div className='flex justify-center items-center h-[30vh] flex-col w-[60vh] bg-gray-200 opacity-50'>
  <h1 className='font-bold text-5xl '>Mountains</h1>
<h1 className=''>Mountains are large landforms that rise prominently above their surroundings, often reaching great heights with steep slopes. </h1>
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

export default Rome
