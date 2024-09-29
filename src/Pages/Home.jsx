import React from 'react'
import Card from '../Component/Card';


function Home() {
  return (
    <div className='flex w-[100%] justify-around items-center h-[100vh] bg-[#ffbcbcaf]' >

   <Card
      name="Paris"
      path="/Paris"
      />

      <Card
      name="Rome"
      path="/Rome"
      /> 

<Card
      name="Dubai"
      path="/Dubai"
      /> 

<Card
      name="Tokyo"
      path="/Tokyo"
      /> 

<Card
      name="New York"
      path="/NewYork"
      /> 


</div>
  )
}

export default Home
