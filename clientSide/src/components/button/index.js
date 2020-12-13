import React from 'react'
import './index.css'

export const Button = (props) =>{
    return (
        <div 
            {...props}
        >
            { props.title }
        </div>
    )
}