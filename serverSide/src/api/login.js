const Router = require ('express')
const { User } = require ('../schemas/user')
const sha256 = require("crypto-js/sha256")
const{ sendError } = require('../helpers')
const { generateToken } = require('../helpers')
const  { Story } = require('../schemas/story')
const { checkToken } = require('../helpers')

let login = Router()

login.post('/dashboard', checkToken , async ( req, res ) => {
   const { name , stories , avatar } = req.currentUser
   let options = {
       path : 'stories',
       select : 'cover _id title content category'
    }
    let story = await Story.find({'_id':stories}).populate(options)
    let user = {
       name ,
       avatar,
       story,
    }
   res.json(user)
})

login.post('/', async ( req, res ) => {
    user = req.body
    dbUser = await User.findOne({email: user.email})
    
    if (dbUser) {
        if (sha256(user.password).toString() === dbUser.password) {
            let { name , avatar , stories } = dbUser
            res.json({
                name, avatar, stories,
                token:generateToken(dbUser.email)
            })
        }
        else {
            res.json(sendError('incorrect password'))
        }         
    }
    else {
        res.json(sendError('user_not found'))
    }

})
module.exports = { login }


