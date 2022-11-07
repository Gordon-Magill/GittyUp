const router = require('express').Router();
const {User, Submission} = require('../models/index')

// Homepage / browse
router.get('/', async (req,res) => {
    const allSubmissions = await Submission.findAll()
    const submissions = allSubmissions.map(row => row.get({plain: true}))
    console.log(submissions)
    res.render('homepage',{
        session: req.session,
        submissions
    })
})

// Dashboard for posting new content + seeing stats
router.get('/dashboard', async (req,res) => {
    const userSubmissions = await Submission.findAll({
        where: {
            id: req.session.userID
        }
    })
    const submissions = userSubmissions.map(row => row.get({plain:true}))
    res.render('dashboard',{
        session: req.session,
        submissions
    })
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