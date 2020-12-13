import React from 'react'
import './index.css'
import { navItems } from '../../store/store'

export const scroll = index => {
  window.scrollTo({
    left:0,
    behavior:'smooth',
    top:index * window.innerHeight
  })
}

export const  Navigation = (props) => {

  return (
     <div className='navbg'>
         <div className='bgItems'>            
          {navItems.map((item,index)=>(
                <a 
                className='navItems'
                onClick={()=>props.scrollTo(index)}                
                >
                  {item.name}
                </a>
                ))}
            </div>
     </div>
  )
}

