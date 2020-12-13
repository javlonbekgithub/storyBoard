import React from 'react'
import './index.css'

export const Input = props => (
    <input
       {...props}
       type={props.type || 'text'}
    //    className={props.auth?'authinput':'subscrinput'} 
    />         
)