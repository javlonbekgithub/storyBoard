import React from 'react'
import './index.css'
import { Login } from './login'
import { Registration } from './registr'
import { Minidash } from './minidash'
import { pageNames } from './constants'
import { getToken } from '../../helpers'
import { User } from '../../store'



export class Auth extends React.PureComponent{
  timerID = null
  
    state = {
        component: getToken()? pageNames.dashboard : pageNames.login,
        animate: false
    }
    handleChange = (comp) => {
        clearInterval(this.timerID)
        this.setState({component:comp,animate: true })
        this.timerID = setTimeout(() => this.setState({animate: false}), 500)
     }
    changePage = () => {
      const { component } = this.state
      const { dashboard, login, reg } = pageNames

        if (component === login) return (
        <Login 
          handleChange={this.handleChange}
          animate = {this.state.animate}
        />
        )      
        else if(component === reg) return (
        <Registration 
          handleChange={this.handleChange}
          animate = {this.state.animate}       
        />
      )
          else if (component === dashboard) return (
        <Minidash
          handleChange={this.handleChange}
          animate = {this.state.animate}
        />
          )
    }
      
    
    
render () {
    return(
      <form className = {`${'formbg'} ${this.state.animate ? 'animated' : ''}`}>
        {this.changePage()}
      </form>
        )
}

}