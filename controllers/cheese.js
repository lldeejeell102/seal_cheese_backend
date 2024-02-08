const express = require('express')
const Cheese = require('../models/cheese')

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        res.json(await Cheese.find({}))
    }catch(error){
        console.log('Read this error message', error)
    }
})


router.post('/', async (req, res) => {
    try{
        res.json(await Cheese.create(req.body))
    }catch(error){
        console.log('Read this error message', error)
    }
})


router.delete('/:id', async (req, res) => {
    try{
        res.json(await Cheese.findByIdAndDelete(req.params.id))
    }catch(error){
        console.log('Read this error message', error)
    }
})


router.get('/:id', async (req, res) => {
    try{
        res.json(await Cheese.findById(req.params.id))
    }catch(error){
        console.log('Read this error message', error)
    }
})


router.put('/:id', async (req, res) => {
    try{
        res.json(await Cheese.findByIdAndUpdate(req.params.id, req.body))
    }catch(error){
        console.log('Read this error message', error)
    }
})


module.exports = router;