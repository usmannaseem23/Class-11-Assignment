import React from 'react'
import ChildComponents from './ChildComponents'

const ParentComponent = () => {
    let name = "Muhamma Usman Naseem "

   
    let fvtDish = "Biryani"
    let fvtColor ="Blue"
  return (
    <div className=' text-center'>
        <ChildComponents 
        name ={name}
        
        fvtDish ={fvtDish}
        fvtColor ={fvtColor}
        />

    </div>
  )
}

export default ParentComponent