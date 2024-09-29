import React from 'react'
import Card from '../Component/Card'
function NewYork() {
  return (
  



<div>



<div>
<div
  className="p-5 h-[100vh] w-[100vw] bg-cover bg-center"
  style={{
    backgroundImage:
      'url("https://play-lh.googleusercontent.com/NUW0isB_Z_yBay8ORo3eN2jT49bGPq3EIAJ_rbFYK5c1gF8glhmpH9q2Y7vphl1Szbc=w526-h296-rw")',
      backgroundSize: 'cover',   
    backgroundPosition: 'center',   
    backgroundRepeat: 'no-repeat',   
  }}
>

  
<div className='flex  text-center justify-center items-center  flex-col h-[80vh] w-[100%]'>
<div className='flex justify-center items-center h-[25vh] flex-col w-[60vh] bg-gray-200 opacity-50'>
  <h1 className='font-bold text-5xl '>desert</h1>
<h1 className=''>The desert is a vast, arid region that receives very little rainfall, making it one of the harshest environments on Earth.</h1>
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

export default NewYork
