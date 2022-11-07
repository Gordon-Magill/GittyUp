const router = require('express').Router();
const {User, Submission} = require('../models/index')
const auth = require('../utils/auth')

// Homepage / browse
router.get('/', async (req,res) => {
    // Get all submissions from all users
    const allSubmissions = await Submission.findAll({
        include: [{model: User}]
    })
    const submissions = allSubmissions.map(row => row.get({plain: true}))
    console.log(submissions)
    console.log(req.session)
    res.render('homepage',{
        session: req.session,
        submissions
    })
})

// Dashboard for posting new content + seeing stats
router.get('/dashboard', auth, async (req,res) => {
    const userSubmissions = await Submission.findAll({
        where: {
            id: req.session.userID
        },
        include: [{model: User}]
    })
    const submissions = userSubmissions.map(row => row.get({plain:true}))
    console.log(submissions)
    console.log(req.session)
    res.render('dashboard',{
        session: req.session,
        submissions
    })
})

// Login/signup page
router.get('/login', async (req,res) => {
    console.log(req.session)
    res.render('login',{
        session: req.session,
    })
})

// Single submission page
router.get('/submission/:id', async (req,res) => {
    const singleSubmission = Submission.findOne({
        where: {
            id: req.params.id
        },
        include: [{model: User}]
    })
    const submission = singleSubmission.get({plain: true})
    console.log(submission)
    console.log(req.session)
    res.render('submission',{
        session: req.session,
        submission
    })
})

// 404
router.get('/404', async (req,res) => {
    res.render('404',{
        session: req.session,
    })
})

module.exports = router;