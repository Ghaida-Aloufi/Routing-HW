import React from 'react'
import Card from '../Component/Card'
import { Form } from 'react-router-dom'



function Paris() {
  return (
    
<div>



<div>
<div
  className="p-5 h-screen w-screen bg-cover bg-center max-sm:h-[180vh] max-md:h-[180vh] sm:w-full md:h-[180vh] md:w-full lg:h-[100vh] lg:w-full  min-[760px]:h-[180vh] max-[1080px]:h-[180vh] "
  style={{
    backgroundImage:
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQOA7lJo8ww-mySWOxrDHklduhOpE2g3qhQ&s")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>


  
<div className='flex  text-center justify-center items-center  flex-col h-[80vh] w-[100%]'>
<div className='flex justify-center items-center h-[30vh] flex-col w-[60vh] bg-gray-200 opacity-50 max-sm:w-[50vh]'>
  <h1 className='font-bold text-5xl '>Oceans</h1>
<h1 className=''>Oceans are vast bodies of saltwater that cover about 71% of the Earth's surface. They play a vital role in the planet's ecosystem and are essential for climate regulation, food supply, and water resources.</h1>
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



export default Paris
