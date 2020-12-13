import React from 'react'
import './index.css'
import {categories} from '../../store/store.js'
import { Link } from 'react-router-dom'
import { Stories } from '../../pages/stories'

export class Categories extends React.PureComponent{
    selectCategory = category => (
        <Stories
            category = {category}
        />
    )
render = () => (
    <div className='categoriesBg'>
        <div className='chipsBg'>
            <div className='categs'>
            {categories.map((categ) => (
                <Link to = {{
                    pathname: "/stories",
                    state: { category: categ }
                  }} className='link'>
                    <p 
                    className='catpr'
                    onClick = {() => this.selectCategory(categ)}
                    >
                        {categ}
                    </p>
                </Link>
            ))}
            </div>
            </div>

    </div>
)}