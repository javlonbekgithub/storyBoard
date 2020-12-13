import React from 'react'
import { Button } from '../../button'
import { Input } from '../../input'
import '../registr/index.css'
import { Api } from '../../../api'
import { pageNames } from '../constants'
import { setToken } from '../../../helpers'


export class Login extends React.PureComponent{ 

    state = {
        email:'',
        password:''
    }

    handleChange = ({ target }) => {this.setState({[target.name]:target.value})}

    handleChangeToDash = comp => {this.props.handleChange(comp)}

    handleSubmit = async () => {
        const { email, password } = this.state
        
        if (email.length !== 0 && password.length !== 0 ) {
            if (email.search('@') < 0) {
                    alert('email_doesnt_exists')
                } else {
                    try {
                        let res = await Api('login', { email, password }, 'post')
                        console.log(res)
                        if (!res.error) {
                            setToken(res.token)
                            this.props.handleChange(pageNames.dashboard)
                        } else {
                            alert(res.error)
                        }
                    } catch(err) {
                        console.log(err)
                    }
                
            }
        } else {
            alert('please_enter_the_data')
        }
        
}


render () {
    const { email, password } = this.state
return (

    <form className = 'regbg'>
            <h1>Login</h1>
            <Input
                placeholder = 'email'
                type = 'email'
                name = 'email'
                value = { email }
                className = 'authinput'
                onChange={this.handleChange}
            />
            <Input 
                placeholder = 'password'
                type = 'password'
                name = 'password'
                value = { password }
                className = 'authinput'
                onChange={this.handleChange}
            />
            <Button
                title = 'Login'
                className = 'button'
                onClick = {this.handleSubmit}
            />
            <span
                onClick={() => this.props.handleChange(pageNames.reg)}
            >Haven't an account yet?
            </span>
         </form>
)
}
}   