import React from 'react'
import './index.scss'
import { SingleStory } from '../single-story'
import { Api } from '../../api'

export class Search extends React.PureComponent {
    state ={
        stories: [],
        classforsearch:'searchinput',
        list:false
    }

    componentDidMount = async () => {
        this.setState({stories: await Api('story')})
    }

    searchsmall = (e) => {
     e.which === 13 && this.setState({
         classforsearch:'searchinputsmall',
         list:true
        })
        
    }        
    
    render(){
    return (
        <div className='searchbg'>
            <input 
            className={this.state.classforsearch}
            placeholder='Search'
            onKeyPress={this.searchsmall}
            >
            </input>
           {this.state.list && <div className='searchItem'>
            {this.state.stories.map((item, i) => (
                <SingleStory
                    key = {i}
                    {...item}
                />
            ))
            }
            </div>}
        </div>
    )
}
}
