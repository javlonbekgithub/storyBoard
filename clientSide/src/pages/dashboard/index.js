import React, { useEffect } from 'react'
import styles from './index.module.sass'
import { SingleStory } from '../../components/single-story'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { observer } from 'mobx-react'
import { User, setUser } from '../../store'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { validate } from '../../helpers'

// const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1_faOSmA1eOI05HbHvxl-uG8LPJaWb7zP3Kd8dMGurQcNpd_&s'

export const Dashboard = observer (() => {  

    // useEffect(() => {
    //     // setUser()
    // }, [])

    const formik = useFormik({
        initialValues: {
            name: User.name,
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validate
    })

    return (User.loading ? 
        <p>
            Loading.... 
            <Link to = '/' className='link'>
                <Button
                    title = 'go-home'
                />
            </Link>
        </p>:(
            <div className = {styles.cont}>
                <div className = {styles.header}>
                    <img 
                        src = { User.avatar } 
                        alt = 'ava'
                        className = { styles.avatar }    
                    />
                    <p>{ User.name }</p>
                    <h1>
                        Total { User.Stories.length }
                    </h1>
                </div>
                <div className = {styles.list}>
                    {User.Stories.map((item,i) =>(
                        <SingleStory 
                            key = { i }
                            permisson
                            { ...item}
                        />
                    )) }
                </div>
                <div className = {styles.set}>
                    <img 
                        src = { User.avatar } 
                        alt = 'ava'
                        className = {styles.img}    
                    />
                    <Button
                        title = 'Upload avatar'
                        className = 'sbscrb'
                    />
                    <Input 
                        onChange = {formik.handleChange}
                        placeholder = 'Name'
                        type = 'text'
                        name = 'name'
                        className = 'authinput'
                        value = {formik.values.name}
                    />
                    <p>Change Password</p>
                    <Input 
                        onChange = {formik.handleChange}
                        placeholder = 'Old password'
                        type = 'password'
                        name = 'oldPassword'
                        className = 'authinput'
                        value = {formik.values.oldPassword}
                    />
                    <Input 
                        onChange = {formik.handleChange}
                        placeholder = 'New password'
                        type = 'password'
                        name = 'newPassword'
                        className = 'authinput'
                        value = {formik.values.newPassword}
                    />  
                    <Input 
                        onChange = {formik.handleChange}
                        placeholder = 'Confirm password'
                        type = 'password'
                        name = 'confirmPassword'
                        className = 'authinput'
                        value = {formik.values.confirmPassword}
                    />
                    <Button
                        // onClick = {this.handleEdit}
                        title = 'Edit'
                        className = 'sbscrb'
                    />
                </div>
            </div>
    ))
})