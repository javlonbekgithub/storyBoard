import { User } from "./store"

export const getToken = () => JSON.parse(localStorage.getItem('token'))

export const setToken = (token = null) => localStorage.setItem('token', JSON.stringify(token))

export const validate = values => {
    const {newPassword, confirmPassword} = values
    const errors = {}

    if (newPassword !== confirmPassword) {
        errors.passwordsDontMatches = 'passwordsDontMatches' 
    }

    return errors
} 