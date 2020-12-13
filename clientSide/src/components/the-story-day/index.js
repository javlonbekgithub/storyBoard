import React from 'react'
import './index.css'
import { Button } from '../button/'
import { Link } from 'react-router-dom'
import { Api } from '../../api'



export class Random extends React.PureComponent {
    componentDidMount() {
        // console.log(Api('story'))
    }
    render = () => (
        <div className='randbg'>
            <div className='randcontent'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhv2rcwuHJqisHjavJMU2w4gAbgepqmxAYOT8edygWrkZrcCbeSg'
                    alt='asdf'
                    className='img'
                >
                </img>
                <h1 className='title' >
                    metro
                </h1>
                <p className='text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nobis consequuntur perspiciatis? Alias maiores odio fugiat vitae atque expedita ducimus, voluptate soluta excepturi nemo blanditiis asperiores vero perferendis quia? Sequi, quo alias! Repudiandae, soluta ad possimus molestias deserunt recusandae! Aliquid eaque eos quibusdam consequuntur nemo ducimus nihil ad blanditiis corrupti!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nobis consequuntur perspiciatis? Alias maiores odio fugiat vitae atque expedita ducimus, voluptate soluta excepturi nemo blanditiis asperiores vero perferendis quia? Sequi, quo alias! Repudiandae, soluta ad possimus molestias deserunt recusandae! Aliquid eaque eos quibusdam consequuntur nemo ducimus nihil ad blanditiis corrupti!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nobis consequuntur perspiciatis? Alias maiores odio fugiat vitae atque expedita ducimus, voluptate soluta excepturi nemo blanditiis asperiores vero perferendis quia? Sequi, quo alias! Repudiandae, soluta ad possimus molestias deserunt recusandae! Aliquid eaque eos quibusdam consequuntur nemo ducimus nihil ad blanditiis corrupti!
                
                             
                </p>
                    <Link to = '/storyreader' className='link'>
                        <div className='rndbtn'>
                            <Button
                                className = 'sbscrb'
                                title = 'Read more'
                                handleChangeToDash = {()=>0}
                            />
                        </div>
                    </Link>
            </div>
        </div>
    )
}