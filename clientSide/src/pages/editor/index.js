// import React, {useState, useRef} from 'react';
// import JoditEditor from "jodit-react";

// export const RichTextEditor = ({}) => {
// 	const editor = useRef(null)
// 	const [content, setContent] = useState('')
	
// 	const config = {
// 		readonly: false // all options from https://xdsoft.net/jodit/doc/
// 	}
	
// 	return (
//             <JoditEditor
//             	ref={editor}
//                 value={content}
//                 config={config}
// 		tabIndex={1} // tabIndex of textarea
// 		onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
//                 onChange={newContent => {}}
//             />
//         );
// }



import React from 'react';
import styles from './index.module.sass'
import { categories } from '../../store/store'
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import { User, setUser } from '../../store';
import { Input } from '../../components/input';
import { getToken } from '../../helpers';
import { Api } from '../../api';
import covera from '../../files/cover.jpg'

let initialState = {
    content: '',
    title: '',
    category: '',
    cover: undefined,
    open: false
}

export class RichTextEditor  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            title: '',
            category: '',
            cover: undefined,
            open: false
        }
    }

    handleChange = ({ target }) => {this.setState({[target.name]:target.value})}
   
    handleSelect = ({target}) => { this.setState({category: target.value}) }
        
    handleOpenSetCover = () => { this.setState({open:!this.state.open}) }

    handleImageUpload = ({ nativeEvent }) => {
        let photo = nativeEvent.target.files[0]
        let formData = new FormData()
        formData.append('photo', photo) // Send form data to BE
        this.setState({ cover: formData })
        const reader = new FileReader()
        reader.readAsDataURL(photo)
        reader.addEventListener(
            'load',
            e => this.setState({ cover: e.target.result }),
        )
    }


    handleOnSave = async () => {
        console.log(this.state)

        const { title, cover, category, content } = this.state
        let tmp = {
            cover,
            category,
            title,
            content,
            token: getToken()
        }
        try {
            
            await Api('story', tmp, 'post')
            alert('Story has been added')
            this.setState(initialState)

        } catch(err) {
            console.log(err)
        }
    }

    componentDidMount = async () => {
        await setUser()
        }

    updateContent = (value) => {
        this.setState({content:value})
        
    }
    /**
     * @property Jodit jodit instance of native Jodit
     */
	jodit;
	setRef = jodit => this.jodit = jodit;
	
	config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
    }
    
    render() {
        return (
            <div className = {styles.cont}>
                <div className = {styles.panel}>
                    <Input
                         placeholder = 'title'
                         type = 'text'
                         name = 'title'
                         value={this.state.title}
                         onChange={this.handleChange}
                    />
                    <div>
                        select the category
                        <select 
                           onChange = {this.handleSelect}                    
                        >
                        {categories.map(item =>(
                            <option value = { item }>{ item }</option>
                        ))}
                        </select>
                    </div>
                    <button onClick = {this.handleOpenSetCover }>
                        save and set cover
                    </button>
                </div>
                {this.state.open && 
                <div 
                    className = {styles.setCover}
                >
                    <div className = {styles.setCoverCont}>
                        <img src = {this.state.cover||covera} alt = 'photo' className = {styles.cover}/>
                        <div>
                            <input type='file' id='fileUploader'onChange = {this.handleImageUpload}/>
                            <button onClick = {this.handleOnSave}>save</button>
                            <button><label htmlFor = 'fileUploader'>Add Cover Photo</label></button>
                        </div>
                    </div>
                </div>}
                <JoditEditor
                	editorRef={this.setRef}
                    value={this.state.content}
                    config={this.config}
                    onChange={this.updateContent}
                />
                
            </div>
        );
    }
}
