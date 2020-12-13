const path = require('path')
const cors = require('cors')
const express = require('express')
const { user } = require('./api/user')
const { story } = require('./api/story')
const { login } = require('./api/login')
const { registration } = require('./api/registration')
const { connect, connection, set } = require('mongoose')

uri = 'mongodb://localhost/storyboard'

connect(uri,{useNewUrlParser: true})

set('useFindAndModify', false)
// createConnection(uri, { useNewUrlParser: true })
// createConnection(uri, { useNewUrlParser: true })

const server = express()

server.use(cors())
server.use(express.json())
// server.use(express.static(path.join(__dirname, 'client/build')))
server.use(express.static(path.join(__dirname, '../public')))
// server.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'))
// })
// let arr = [1,2,3,1,3,54,6]
// server.get('*',(req,res) => {
//     res.json(arr)
// })
server.use('/api/user',user)
server.use('/api/registration',registration)
server.use('/api/login',login)
server.use('/api/story',story)

const PORT = process.env.PORT || 3001

connection.once('open',() => server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`)))