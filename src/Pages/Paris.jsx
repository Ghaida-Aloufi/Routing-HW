import React from 'react'
import Card from '../Component/Card'

function Paris() {
  return (
    
<div>



<div>
<div
  className="p-5 h-[100vh] w-[100vw] bg-cover bg-center"
  style={{
    backgroundImage:
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQOA7lJo8ww-mySWOxrDHklduhOpE2g3qhQ&s")',
      backgroundSize: 'cover',   
    backgroundPosition: 'center',   
    backgroundRepeat: 'no-repeat',   
  }}
>

  
<div className='flex  text-center justify-center items-center  flex-col h-[80vh] w-[100%]'>
<div className='flex justify-center items-center h-[30vh] flex-col w-[60vh] bg-gray-200 opacity-50'>
  <h1 className='font-bold text-5xl '>Oceans</h1>
<h1 className=''>Oceans are vast bodies of saltwater that cover about 71% of the Earth's surface. They play a vital role in the planet's ecosystem and are essential for climate regulation, food supply, and water resources.</h1>
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

export default Paris
