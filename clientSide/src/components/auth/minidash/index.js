import React from 'react'
import './index.css'
import { FaPenAlt } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import { Btn } from '../../btn/'
import { Button } from '../../button'
import { observer } from 'mobx-react'
import { User, setUser} from '../../../store'
import { setToken } from '../../../helpers'
import { Link } from 'react-router-dom'
import { pageNames } from '../constants'


let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1_faOSmA1eOI05HbHvxl-uG8LPJaWb7zP3Kd8dMGurQcNpd_&s'

export const Minidash = observer ( class Minidash extends React.Component{
    
    componentDidMount = async () => {
        
        await setUser()
    }

    deleteToken = () => {
        localStorage.clear()
    }

    handleChangeToReg = comp => {
        this.props.handleChange(comp)
        setToken()
        localStorage.clear()
    }
    
    doNothing = () => 0
    
render () { 
return User.loading? 
    <p>
        Loading.....
        <Link to = '/' className='link'>
            <Button
                title = 'go-home'
                onClick = {() =>this.deleteToken}
            />
        </Link>
    </p>: (
    <div className = 'mdashbg'>
        <div className = 'dashitems'>
            <img 
                className = 'dashava'
                alt = 'ava'
                src = { User.avatar }/>
            <h4>{ User.name }</h4>
        </div>
        <div className = 'btnscont' >
                <Btn
                    icon = {<FaPenAlt/>}
                    paragh = {'Editor'}
                    to = {'/editor'}
                    handleChangeToReg = {this.doNothing}
                />
                <Btn
                    icon = {<MdSettings/>}
                    paragh = {'Dashboard'}
                    to = {'/dashboard'}
                    handleChangeToReg = {this.doNothing}
                />
                <Btn
                    icon = {<FaSignOutAlt/>}
                    paragh = {'Logout'}
                    handleChangeToReg = {this.handleChangeToReg}
                    to = {'/'}
                />
         </div>       
    </div>
)}
})
