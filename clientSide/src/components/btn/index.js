import React from 'react'
import { pageNames } from '../auth/constants.js'
import { Link } from 'react-router-dom'
import styles from './index.module.sass'

export const Btn = (props) => (
    <Link to = {props.to} className = 'link'>
        <div 
            className={styles.minidashbuttons}
            onClick = {() => props.handleChangeToReg(pageNames.login)}
        >
            <div className = {styles.dashbutton}>{props.icon}</div>
            <p>{props.paragh}</p>
        </div>
    </Link>
)