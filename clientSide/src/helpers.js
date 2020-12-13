export const getToken = () => JSON.parse(localStorage.getItem('token'))

export const setToken = (token = null) => localStorage.setItem('token', JSON.stringify(token))

export const validate = values => {
    const {newPassword, confirmPassword, oldPassword} = values
    const errors = {}

    if (newPassword || confirmPassword || oldPassword) {
        if (oldPassword === '') {
            errors.oldPasswordIsEmpty = 'oldPasswordIsEmpty'
        }
    
        if (newPassword !== confirmPassword) {
            errors.passwordsDontMatches = 'passwordsDontMatches' 
        }
    
        if (oldPassword && !newPassword || !confirmPassword) {
            errors.fillFields = 'fillFields'
        }
    }

    return errors
} 