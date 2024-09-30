import React from 'react'
import Card from '../Component/Card'

function Rome() {
  return (


<div>



<div>
<div
  className="p-5 h-screen w-screen bg-cover bg-center max-sm:h-[180vh] max-md:h-[180vh] sm:w-full md:h-[180vh] md:w-full lg:h-[180vh] lg:w-full  min-[760px]:h-[180vh] max-[1080px]:h-[180vh] "
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
<div className='flex w-[100%] justify-around  justify-end items-end h-[15vh] max-sm:flex-col max-md:flex-col max-sm:justify-around max-md:justify-around  max-md:items-center max-md:h-[90vh] max-sm:items-center max-sm:h-[90vh]  min-[760px]:justify-around h-[10vh] min-[760px]:text-center max-[1080px]:flex-col justify-center items-center  '  >

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
