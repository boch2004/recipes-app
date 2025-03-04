import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import Food from './Food'
import Homede from './Homede'

function Home({recipesRef,MainMeals}) {
  return (
    <div>
      <BackgroundVideo />
      <Food recipesRef={recipesRef} />
      <Homede MainMeals={MainMeals} />
    </div>
    
  )
}

export default Home