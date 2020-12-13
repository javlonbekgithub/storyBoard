const Router = require ('express')
const fs = require('fs')
const path = require('path')
const { checkToken } = require ('../helpers')
const { User }  = require('../schemas/user')
const  { Story } = require('../schemas/story')
const { URL } = require('../env')

const story = Router()

story.get('/',async (req, res) => {
    let options = {
        path : 'author',
        select : 'name avatar'
    }
    res.json( await Story.find().populate(options))
})

story.delete('/', checkToken, async (req, res) => {
    let { id } = req.body
    await User.findByIdAndUpdate(
        req.currentUser._id,
        { $pull: { stories: id } },
    )
    await Story.findByIdAndDelete(id)
    res.json({ id,status:'successful' })
})

story.post('/', checkToken, async (req ,res) => {
    let story = req.body
    story.author = req.currentUser._id
    if (!story.cover) {
        console.log(story)
        delete story.cover
        let addedStory = await Story.insertMany([story])
        
        await User.findByIdAndUpdate(
            req.currentUser._id,
            { $push: { stories: addedStory[0]._id } }
        )

        res.json({ id: addedStory[0]._id })
    } else {
        let cov = req.body.cover
        let data = cov.slice(cov.indexOf(',') + 1)
        let ext = cov.slice(11, cov.indexOf(';'))
        ext = ext === 'jpeg' ? 'jpg' : ext
        let coverId = Math.random().toString().slice(2, 22)
        let coverName = `${coverId}.${ext}`
        let coverUrl = `${URL}/covers/${coverName}`
        let coverPath = path.join(__dirname, '../..', 'public/covers', coverName)
        
        story.cover = coverUrl

        fs.writeFile(coverPath, data, 'base64', async err => {
                if (err) res.json(sendError('image_write_error'))
                let addedStory = await Story.insertMany([story])
        
                await User.findByIdAndUpdate(
                    req.currentUser._id,
                    { $push: { stories: addedStory[0]._id } }
                )

                res.json({ id: addedStory[0]._id })
            }
        )
    }

})
module.exports = { story }