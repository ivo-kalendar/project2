
const path = require('path')
const express = require('express')
const views = path.join(__dirname, '../views/')
const router = express.Router()

router.get('/', (req,res) => {res.render(`${views}index.ejs`)})
router.get('/about', (req,res) => {res.render(`${views}about.ejs`)})
router.get('/test', (req,res) => {res.sendFile(`${views}test.html`)})


module.exports = router