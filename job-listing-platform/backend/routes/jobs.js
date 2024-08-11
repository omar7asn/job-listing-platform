// Routes for job posting and retrieval
const express = require('express');
const { createJob, getJobs, deleteJob } = require('../controllers/jobController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticate, createJob);
router.get('/', getJobs);
router.delete('/:id', authenticate, deleteJob);

module.exports = router;
