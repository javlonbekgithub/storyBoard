import React from 'react'
import styles from './index.module.sass'
import { User } from '../../store'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import { Api } from '../../api'
import { getToken } from '../../helpers'

export class SingleStory extends React.PureComponent {

    state = {
        ...this.props,
        id: '',
    }

    handleDelete = (id) => {
        Api('story',{id, token: getToken()},'delete')
        // let res = Api('story',{id, token: getToken()},'delete')
        // console.log(res)
        this.setState({id})
    }

render = () => {
    const { cover, title, content, permisson, _id, id} = this.state
    return _id!==id && (
        <div className={styles.eachLI}> 
            <img 
                src = { cover }
                alt = 'img'
                className = { styles.Limg }
             >
             </img>
             <div className = {styles.storytext}>
                <h1>{ User.name } - { title }</h1> 
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
             </div>
             <div className = {styles.managment}>
                 <Link to = {{
                     pathname: "/storyreader",
                     state: {...this.state }
                 }}
                    className = 'link'
                 >
                    <Button
                        className = 'sbscrb opac'
                        title = 'read-more'
                    />
                 </Link>
                 {
                    permisson &&
                    <Button
                        className = 'sbscrb opac'
                        title = 'delete'
                        onClick = {() => this.handleDelete(_id)}
                    />    
                 }
             </div>
         </div>
     )
}}