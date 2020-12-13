const  { Story } = require('../schemas/story')
const Router = require ('express')
const { checkToken } = require('../helpers')

let user = Router()

user.post('/', checkToken , async ( req, res ) => {
    const { name , stories , avatar , _id , email} = req.currentUser
    let options = {
        path : 'stories',
        select : '*'
     }
     let Stories = await Story.find({'_id':stories}).populate(options)
     let user = {
        _id,
        email,
        name ,
        avatar,
        Stories,
     }
    res.json(user)
})


module.exports = { user }