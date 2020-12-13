import React from 'react'
import './index.css'

export const Input = props => (
    <div className = 'inputCont'>
        <input
            {...props}
            type={props.type || 'text'}
            //    className={props.auth?'authinput':'subscrinput'} 
        />
        <div>{props.error}</div>
    </div>         
)