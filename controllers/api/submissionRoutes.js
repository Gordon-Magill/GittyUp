const router = require('express').Router();
// Pull in model info from parent index file in models to descure depencencies' definitions
const { Submission } = require('../../models/index');


// Create new submission
router.post('/create', async (req, res) => {

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