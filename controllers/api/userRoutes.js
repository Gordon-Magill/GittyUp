const router = require('express').Router();
// Pull in model info from parent index file in models to descure depencencies' definitions
const { User } = require('../../models/index');

// Create new user
router.post('/create', async (req, res) => {

})

// Get all users
router.get('/', async (req, res) => {

})

// Get one user
router.get('/:id', async (req, res) => {

})

// Update one user
router.put('/:id', async (req, res) => {

})

// Delete one user
router.delete('/:id', async (req, res) => {

})

module.exports = router;