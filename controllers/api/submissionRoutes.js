const router = require('express').Router();
// Pull in model info from parent index file in models to descure depencencies' definitions
const { Submission } = require('../../models/index');


// Create new submission
router.post('/create', async (req, res) => {
    try {
        // Get the info needed 
        const submissionBody = {
            name: req.body.name,
            description: req.body.description,
            content: req.body.content,
            date_created: Date.now(),
            user_id: req.session.userID
        };
    
        console.log('submissionBody: ',submissionBody)
        const newSubmission = Submission.create(submissionBody);

        res.status(200).json(newSubmission)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// Get all submissions
router.get('/', async (req, res) => {

})

// Get one submission
router.get('/:id', async (req, res) => {

})

// Update one submission
router.put('/:id', async (req, res) => {

})

// Delete one submission
router.delete('/:id', async (req, res) => {

})

module.exports = router;