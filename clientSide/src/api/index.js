import { setToken } from "../helpers"

export const Api = (url, data = null, type = 'get') => {

    let opts = {
        method: type,
        headers: {'Content-type': 'application/json'},
    }

    if (data) {
        opts.body = JSON.stringify(data)
    }

    return fetch(`http://localhost:3001/api/${url}`, opts)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                alert(res.error)
                console.log(res)
                console.log('asd')
                if(res.error === 'invalid_token' || res.error === 'token_expired') {
                    setToken()   
                }
            }else {
                return res
            }
        })

}