const router = require('express').Router();
const {User, Submission} = require('../models/index')

// Homepage / browse
router.get('/', async (req,res) => {
    const allSubmissions = await Submission.findAll()
    const plainSubmissions = allSubmissions.map(row => row.get({plain: true}))
    console.log(plainSubmissions)
    res.render('homepage',{
        plainSubmissions
    })
})

// Dashboard for posting new content + seeing stats
router.get('/dashboard', async (req,res) => {
    res.render('dashboard',{})
})

// Login/signup page
router.get('/login', async (req,res) => {
    res.render('login',{})
})

// Single submission page
router.get('/submission/:id', async (req,res) => {
    res.render('submission',{})
})

// 404
router.get('/404', async (req,res) => {
    res.render('404',{})
})

module.exports = router;