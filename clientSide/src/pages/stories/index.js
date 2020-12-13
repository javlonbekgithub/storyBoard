import React from 'react'
import styles from './index.module.sass'
import { SingleStory } from '../../components/single-story'
import { categories } from '../../store/store'
import { useParams } from 'react-router-dom'

export class Stories extends React.PureComponent{
    
    state = {
        category:this.props.history.location.state.category
    }
    selectCategory = category => this.setState({category})

    render = () => (
    <div className = {styles.cont}>
        <h1 className = {styles.h1}>{this.state.category}</h1>
        <div className = {styles.list}>
            {new Array(10).fill(0).map((_,i) => (
                <SingleStory/>
            ) )}
        </div>
        <div className = {styles.categories}>
            {categories.map((item,i) => (
                <p 
                onClick = { ()=> this.selectCategory(item)}               
                >{item}</p>
            ))}{console.log(this.props.category)}    
        </div>
    </div>
)}