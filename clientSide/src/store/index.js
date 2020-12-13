import { Api } from '../api'
import { observable, action } from 'mobx'
import { getToken } from '../helpers'

export let U = observable([])

export const ff = action (async () => {
    let tem = await Api('/')
    U = tem
    console.log(U)
})
export const User = observable({
    _id: '',
    name: '',
    email: '',
    avatar: '',
    Stories: [],
    loading: true,
})

export const setUser = action(async () => {
    let user = await Api('user', { token: getToken() }, 'post')
    if (user) {
        User._id = user._id
        User.name = user.name
        User.email = user.email
        User.avatar = user.avatar
        User.Stories = user.Stories
        User.loading = false
    } else {
        localStorage.clear()
    }
})