import React from 'react'
import './index.css'
import { Button } from '../button'
import { Input } from '../input'

export const Subscribe = () => (
    <div className='subBg'>
        <Input
            placeholder = 'add email'
            type = 'text'
            className = 'subscrinput'
        />
        <Button 
            title='subscribe'
            className = 'sbscrb'
        />        
    </div>
)